# Claude Code Configuration

This directory contains Claude Code specific configuration files.

## Files

### `rules.md` (Required)
Contains agent and skill discovery documentation. This file helps Claude Code understand what agents and skills are available in the project.

**Do not modify** unless you're adding custom agents or skills.

### `settings.local.json` (Optional)
User-specific permissions for Claude Code operations.

**This file is not tracked by git** - each user should create their own based on their needs.

#### Setup

Copy the example file:
```bash
cp .claude/settings.local.json.example .claude/settings.local.json
```

#### Example Configuration

```json
{
  "permissions": {
    "allow": [
      "Bash(node:*)",
      "Bash(npm:*)",
      "Bash(npx:*)",
      "Bash(git:*)"
    ]
  }
}
```

#### Common Permissions

**For Development:**
```json
{
  "permissions": {
    "allow": [
      "Bash(node:*)",
      "Bash(npm:*)",
      "Bash(npx:*)",
      "Bash(pnpm:*)",
      "Bash(yarn:*)",
      "Bash(bun:*)"
    ]
  }
}
```

**For Git Operations:**
```json
{
  "permissions": {
    "allow": [
      "Bash(git:*)",
      "Bash(gh:*)"
    ]
  }
}
```

**For Full Access:**
```json
{
  "permissions": {
    "allow": [
      "Bash(*)"
    ]
  }
}
```

## Notes

- `settings.local.json` is in `.gitignore` to prevent committing user-specific configurations
- Use `settings.local.json.example` as a template
- Adjust permissions based on your security requirements and workflow needs
