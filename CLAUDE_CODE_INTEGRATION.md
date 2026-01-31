# Claude Code Integration Guide - v2.1.0

> ⭐ Updated for Claude Code Kit v2.1.0 with 22 agents, 66 skills, hooks system, and MCP integrations

## Understanding Claude Code Agent System

### Architecture Overview

Claude Code uses a dual system for extensibility:

1. **Task Tool** → Invokes specialized agents with `subagent_type` parameter
2. **Skill Tool** → Loads knowledge modules and patterns

---

## File Formats

### 1. Agents (for Task Tool)

**Location:** `agents/*.md`

**Format:**
```yaml
---
name: agent-name
description: What this agent does and when to use it. Triggers on keywords.
tools: Read, Grep, Glob, Bash, Edit, Write
model: inherit|sonnet|haiku|opus
skills: skill-name-1, skill-name-2
---

# Agent Title

[Agent system prompt in markdown]
```

**How it works:**
- User or Claude invokes: `Task(subagent_type="agent-name", prompt="do something")`
- Agent receives the prompt and has access to specified tools
- Agent can reference skills listed in frontmatter
- Model can be `inherit` (use parent model), `sonnet`, `haiku`, or `opus`

**Example:**
```markdown
---
name: frontend-specialist
description: Senior Frontend Architect for React/Vue. Use for UI components, styling, state management.
tools: Read, Grep, Glob, Bash, Edit, Write
model: inherit
skills: clean-code, vue3-expert, nextjs-react-expert
---

# Senior Frontend Architect

You are a frontend expert...
```

---

### 2. Skills (for Skill Tool)

**Location:** `skills/skill-name/SKILL.md`

**Format:**
```yaml
---
name: skill-name
description: Brief description of what knowledge this skill provides
allowed-tools: Read, Write, Edit
version: 1.0
priority: CRITICAL|HIGH|NORMAL
---

# Skill Title

[Skill knowledge and patterns in markdown]
```

**How it works:**
- Skills are loaded into agents that reference them
- Skills provide knowledge, patterns, and guidelines
- Agents can access skill content to inform their decisions
- Skills can also be invoked directly by users: `/skill-name`

**Example:**
```markdown
---
name: vue3-expert
description: Vue 3 Composition API, Nuxt 3, Pinia patterns
allowed-tools: Read, Write, Edit
version: 1.0
priority: HIGH
---

# Vue 3 Expert

## Reactivity Patterns
...
```

---

### 3. Workflows → Skills Migration

**Original Format (Gemini):**
```yaml
---
description: Workflow description
---

# /comando - Title

$ARGUMENTS

[Workflow steps]
```

**Converted to Claude Code Skill:**
```yaml
---
name: comando
description: What this workflow/skill does
allowed-tools: Read, Grep, Bash, Edit, Write
version: 1.0
---

# Skill Title

When user invokes this skill with arguments: {args}

[Steps and logic]
```

---

## Integration Methods

### Method 1: .agent Directory (Recommended)

Create `.agent/` directory in project root:

```
project/
├── .agent/
│   ├── agents/
│   │   ├── frontend-specialist.md
│   │   ├── backend-specialist.md
│   │   └── ...
│   └── skills/
│       ├── vue3-expert/
│       │   └── SKILL.md
│       ├── clean-code/
│       │   └── SKILL.md
│       └── ...
```

**Pros:**
- Consistent with antigravity-kit structure
- Clean separation from project code
- Easy to sync/update

**Cons:**
- Requires copying to each project

---

### Method 2: .claude Directory

Use `.claude/` directory with agents and skills:

```
project/
├── .claude/
│   ├── settings.local.json
│   ├── agents/
│   └── skills/
```

**Pros:**
- Native Claude Code configuration location
- Can coexist with settings

**Cons:**
- Non-standard for agent definitions (typically uses .agent)

---

### Method 3: Global Reference

Keep claudecode-kit in a central location and symlink:

```bash
# In claudecode-kit directory
ln -s $(pwd)/.agent ~/.claude/global-agents

# Or copy to global location
cp -r .agent ~/.claude/agents
```

**Pros:**
- Single source of truth
- Updates affect all projects

**Cons:**
- Complex setup
- May conflict with project-specific agents

---

## Current Migration Status

### ✅ Already Compatible

1. **Agents** (20 total)
   - Format: ✅ Correct YAML frontmatter
   - Location: ✅ In `agents/` directory
   - Content: ✅ System prompts ready
   - **Action needed:** Move to `.agent/agents/`

2. **Skills** (37 total)
   - Format: ✅ Correct SKILL.md structure
   - Location: ✅ In `skills/skill-name/` directories
   - Content: ✅ Knowledge modules ready
   - **Action needed:** Move to `.agent/skills/`

### ⚠️ Needs Conversion

3. **Workflows** (11 total)
   - Format: ❌ Uses Gemini `/comando` syntax
   - Location: ✅ In `workflows/` directory
   - Content: ⚠️ Uses `$ARGUMENTS` placeholder
   - **Action needed:** Convert to invocable skills

4. **Scripts** (4 total)
   - Format: ✅ Python scripts ready
   - Location: ✅ In `scripts/` directory
   - Integration: ❌ Not callable via Claude Code
   - **Action needed:** Create wrapper skills or agents

---

## Invocation Examples

### Agents (Task Tool)

```python
# From user message
"Use frontend-specialist to review my Vue component"

# From Claude (internal)
Task(
    subagent_type="frontend-specialist",
    description="Review Vue component",
    prompt="Review src/components/UserCard.vue for performance and best practices"
)
```

### Skills (Skill Tool)

```python
# From user message
claude /vue3-expert "How do I use Pinia?"

# From Claude (internal)
Skill(
    skill="vue3-expert",
    args="composable patterns"
)
```

### Current Problem

Workflows use Gemini syntax:
```bash
# Gemini style (doesn't work in Claude Code)
/brainstorm "new feature ideas"
```

Need to convert to:
```bash
# Claude Code style
claude /brainstorm "new feature ideas"
```

This requires converting workflow files to skill format.

---

## Next Steps

1. ✅ **Understand system** (COMPLETED)
2. 🔄 **Move agents to .agent/agents/**
3. 🔄 **Move skills to .agent/skills/**
4. 🔄 **Convert workflows to skills**
5. 🔄 **Create script wrapper skills**
6. 🔄 **Test integration**
7. 🔄 **Document installation**

---

## Key Insights

1. **Agent format is already correct** - Just needs to be in `.agent/agents/`
2. **Skill format is already correct** - Just needs to be in `.agent/skills/`
3. **Workflows need conversion** - From Gemini `/comando` to Claude Code Skill format
4. **Scripts need wrappers** - Create skills that invoke Python scripts via Bash tool
5. **No code changes needed** - Only directory restructuring and workflow conversion

---

## Testing Checklist

- [x] Agents discoverable by Task tool
- [x] Skills discoverable by Skill tool
- [x] Converted workflows invocable
- [x] Scripts migrated to Node.js ⭐ NEW
- [x] Vue 3 support functional
- [x] React support functional
- [x] All 22 agents working (20 base + 2 everything-claude-code)
- [x] All 66 skills accessible (42 base + 11 workflows + 5 everything-claude-code + 8 adicionales)
- [x] Hooks system integrated ⭐ NEW
- [x] MCP configs available ⭐ NEW
- [x] Documentation complete and updated to v2.1.0
