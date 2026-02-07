---
name: preview
description: Preview server start, stop, and status check. Local development server management.
allowed-tools: Read, Grep, Glob, Bash, Edit, Write, Task
version: 1.0
priority: NORMAL
---

# Preview Skill

## Usage

This skill can be invoked with arguments:
```bash
claude /preview [arguments]
```

The arguments will be passed to the skill and used in the workflow below.

---


---

## Task

Manage preview server: start, stop, status check.

### Commands

```
/preview start     - Start server
/preview stop      - Stop server
/preview restart   - Restart
/preview check     - Health check
```

---

## Usage Examples

### Start Server
```

Response:
🚀 Starting preview...
   Port: 3000
   Type: Next.js

✅ Preview ready!
   URL: http://localhost:3000
```

### Status Check
```

Response:
=== Preview Status ===

🌐 URL: http://localhost:3000
📁 Project: C:/projects/my-app
🏷️ Type: nextjs
💚 Health: OK
```

### Port Conflict
```

Response:
⚠️ Port 3000 is in use.

Options:
1. Start on port 3001
2. Close app on 3000
3. Specify different port

Which one? (default: 1)
```

---

## Technical

Auto preview uses `auto_preview.py` script:

```bash
python .agent/scripts/auto_preview.py start [port]
python .agent/scripts/auto_preview.py stop
python .agent/scripts/auto_preview.py status
```
