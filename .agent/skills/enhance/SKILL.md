---
name: enhance
description: Add or update features in existing application. Used for iterative development.
allowed-tools: Read, Grep, Glob, Bash, Edit, Write, Task
version: 1.0
priority: NORMAL
---

# Enhance Skill

## Usage

This skill can be invoked with arguments:
```bash
claude /enhance [arguments]
```

The arguments will be passed to the skill and used in the workflow below.

---


---

## Task

This command adds features or makes updates to existing application.

### Steps:

1. **Understand Current State**
   - Load project state with `python .agent/scripts/session_manager.py info`
   - Understand existing features, tech stack

2. **Plan Changes**
   - Determine what will be added/changed
   - Detect affected files
   - Check dependencies

3. **Present Plan to User** (for major changes)
   ```
   "To add admin panel:
   - I'll create 15 new files
   - Update 8 files
   - Takes ~10 minutes
   
   Should I start?"
   ```

4. **Apply**
   - Call relevant agents
   - Make changes
   - Test

5. **Update Preview**
   - Hot reload or restart

---

## Usage Examples

```
/enhance build admin panel
/enhance integrate payment system
/enhance add search feature
/enhance edit profile page
/enhance make responsive
```

---

## Caution

- Get approval for major changes
- Warn on conflicting requests (e.g., "use Firebase" when project uses PostgreSQL)
- Commit each change with git
