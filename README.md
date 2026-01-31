# Claude Code Kit 🚀

> Sistema Completo de Agentes y Skills para Claude Code CLI

**Versión 2.1.0** - Integración completa con hooks, continuous learning y MCP configs

**Migrado y adaptado desde [antigravity-kit](https://github.com/vudovn/antigravity-kit)** + **[everything-claude-code](https://github.com/affaan-m/everything-claude-code)**

---

## ⚡ Quick Start

```bash
# Code review
claude "Review my code for bugs and performance issues"

# Generar tests (React o Vue 3)
claude "Generate tests for src/components/UserCard.vue"

# Generar documentación
claude "Add JSDoc to my functions"
```

**[Ver Guía Completa →](QUICKSTART.md)**

---

## 📦 ¿Qué Incluye?

| Categoría | Cantidad | Descripción |
|-----------|----------|-------------|
| 🤖 **Agentes** | 22 | Especialistas en frontend, backend, testing, seguridad, refactoring, build errors |
| 🧩 **Skills** | 66 | Módulos de conocimiento (React, Vue 3, testing, architecture, learning, verification) |
| 🔄 **Workflows** | 11 | Procedimientos automatizados (review, test, deploy) - Convertidos a skills |
| 🪝 **Hooks** | Sistema completo | Memory persistence, strategic compaction, continuous learning |
| 🔌 **MCP Configs** | 4 | GitHub, Supabase, Vercel, Railway |
| 🛠️ **Scripts Node.js** | 2 | Validación automática (checklist, verify-all) |
| 📁 **Archivos** | 229+ | Total de archivos de configuración y documentación |

---

## 🎯 Características Principales

### ✅ Soporte Dual Framework
- **React**: Hooks, Next.js, Server Components, TypeScript
- **Vue 3**: Composition API, Nuxt 3, Pinia, Script Setup

### ✅ 22 Agentes Especializados
- `frontend-specialist` - React + Vue 3
- `backend-specialist` - APIs, Node.js
- `test-writer` - Generación de tests
- `security-auditor` - Escaneo de vulnerabilidades
- `performance-optimizer` - Optimización
- `build-error-resolver` - Resuelve errores de build automáticamente ⭐ NEW
- `refactor-cleaner` - Limpieza de código y refactoring ⭐ NEW
- Y 15 más...

### ✅ Skills Completas (66)
- Vue 3 Expert (Composition API, Pinia)
- React/Next.js Expert
- Testing Patterns (Jest, Vitest)
- Clean Code Standards
- Architecture Patterns
- Security Best Practices
- **Continuous Learning v2** - Aprendizaje automático de patrones ⭐ NEW
- **Verification Loop** - Validación sistemática ⭐ NEW
- **Strategic Compact** - Optimización de tokens ⭐ NEW
- **Iterative Retrieval** - Manejo eficiente de contexto ⭐ NEW
- Y 56 más...

### ✅ Sistema de Hooks Completo ⭐ NEW
- **Memory Persistence** - Contexto persistente entre sesiones
- **Strategic Compaction** - Optimización automática de tokens
- **Continuous Learning** - Extracción de patrones de uso
- **Auto-save** - Guardado automático de sesiones
- Eventos: on_task_complete, on_session_start, on_context_limit

### ✅ MCP Server Configs ⭐ NEW
- GitHub integration
- Supabase integration
- Vercel deployment
- Railway deployment

---

## 🚀 Instalación

### Método 1: Auto-Instalador (Recomendado)
```bash
# Clonar el repositorio
git clone https://github.com/yourusername/claudecode-kit.git

# Navegar a tu proyecto
cd tu-proyecto/

# Ejecutar instalador
bash ../claudecode-kit/install.sh

# ¡Listo! Ya tienes 20 agentes + 50 skills
```

### Método 2: Manual
```bash
# Copiar directorio .agent
cp -r claudecode-kit/.agent tu-proyecto/

# Copiar configuración Claude Code
cp -r claudecode-kit/.claude tu-proyecto/

# Verificar instalación
ls -la .agent/
```

### Método 3: Global
```bash
# Instalar globalmente
ln -s ~/claudecode-kit/.agent ~/.claude/agents
```

**[Ver guía completa de instalación →](INSTALLATION.md)**

---

## ✅ Estado de Integración

| Componente | Estado | Compatible |
|------------|--------|------------|
| **Agentes (22)** | ✅ Completo | Claude Code nativo |
| **Skills (66)** | ✅ Completo | 61 base + 5 everything-claude-code |
| **Workflows** | ✅ Convertidos | Ahora skills invocables |
| **Scripts Node.js** | ✅ Completo | checklist.js, verify-all.js |
| **Hooks System** | ✅ Completo | Memory, compaction, learning ⭐ |
| **MCP Configs** | ✅ Completo | GitHub, Supabase, Vercel, Railway ⭐ |
| **Configuración** | ✅ Completo | .claude/rules.md |
| **Vue 3** | ✅ Completo | vue3-expert skill |
| **React** | ✅ Completo | nextjs-react-expert skill |

**🎉 100% Compatible con Claude Code** + **Everything-Claude-Code Integration**

---

## 💡 Ejemplos de Uso

### Code Review
```bash
claude "Review src/services/ for security issues"
claude "Check this component for performance problems"
```

### Generar Tests
```bash
# Vue 3
claude "Generate tests for src/components/LoginForm.vue"

# React
claude "Generate tests for src/components/LoginForm.tsx"
```

### Documentación
```bash
claude "Add JSDoc to src/utils/helpers.ts"
claude "Create API documentation"
```

### Debugging
```bash
claude /debug "login not working"
claude "Help me fix this error in PaymentService"
```

### Build Error Resolution ⭐ NEW
```bash
# Resolver errores de TypeScript/build automáticamente
claude "Use build-error-resolver to fix TypeScript errors"

# Limpiar código y refactoring
claude "Use refactor-cleaner to clean unused code in src/"
```

### Continuous Learning ⭐ NEW
```bash
# El sistema aprende automáticamente de tu uso
# Los hooks extraen patrones al completar tareas
claude "create user authentication"
# Al terminar, el hook extrae patrones y mejora skills automáticamente
```

### Verification Loop ⭐ NEW
```bash
# Validación sistemática de código
claude /verification-loop "validate auth module"
```

### MCP Integration ⭐ NEW
```bash
# Integrar con servicios externos
cp .agent/mcp-configs/github.json ~/.claude/mcp-servers/
cp .agent/mcp-configs/supabase.json ~/.claude/mcp-servers/
```

---

## 📊 Agentes por Categoría

### Frontend
- `frontend-specialist` - React + Vue 3
- `mobile-developer` - React Native, Flutter

### Backend
- `backend-specialist` - APIs, Node.js, Python
- `database-architect` - Schema, queries, optimization

### Quality Assurance
- `test-engineer` - Estrategias de testing
- `test-writer` - Generación de tests
- `qa-automation-engineer` - E2E, CI/CD

### Security
- `security-auditor` - Auditoría de seguridad
- `penetration-tester` - Security testing

### DevOps
- `devops-engineer` - CI/CD, Docker, deployment

### Product & Planning
- `product-manager` - Requirements, user stories
- `project-planner` - Task planning, breakdown
- `orchestrator` - Multi-agent coordination

**[Ver lista completa →](ARCHITECTURE.md)**

---

## 🎨 Framework Support

### Vue 3
```bash
# Composables
claude "Create a useAuth composable with Pinia"

# Components
claude "Create a UserCard in Vue 3 with TypeScript"

# Tests
claude "Generate Vitest tests for this component"
```

**[Ver Guía Vue 3 →](skills/vue3-expert/SKILL.md)**

### React
```bash
# Hooks
claude "Create a useAuth hook with Zustand"

# Components
claude "Create a UserCard with TypeScript"

# Tests
claude "Generate React Testing Library tests"
```

**[Ver Comparación React vs Vue →](skills/vue3-expert/COMPARISON.md)**

---

## 🛠️ Scripts de Validación (Node.js)

### Checklist Rápido (Desarrollo)
```bash
# Con Node.js directamente
node .agent/scripts/checklist.js .

# O con npm script
npm run checklist

# Sin build check
node .agent/scripts/checklist.js . --no-build
```

**Incluye:**
- ✅ Security scan (npm audit)
- ✅ Lint check (ESLint)
- ✅ TypeScript check (tsc --noEmit)
- ✅ Test runner (npm test)
- ✅ Build check (npm run build)

**Características:**
- ⚡ Auto-detección de package manager (npm/pnpm/yarn/bun)
- 🎨 Colored output profesional
- 🚀 Un solo runtime (Node.js)

### Verificación Completa (Pre-deploy)
```bash
# Requiere URL de servidor corriendo
node .agent/scripts/verify-all.js . --url=http://localhost:3000

# Sin E2E tests (más rápido)
node .agent/scripts/verify-all.js . --url=http://localhost:3000 --no-e2e

# O con npm script
npm run verify
```

**Incluye TODO de checklist PLUS:**
- ✅ Lighthouse audit (nativo)
- ✅ Playwright E2E (nativo)
- ✅ Bundle analysis
- ✅ Accessibility check

**Nota:** Scripts migrados de Python a Node.js para mejor integración y mantenimiento.

---

## 📚 Documentación

| Documento | Descripción |
|-----------|-------------|
| [QUICKSTART.md](QUICKSTART.md) | Guía rápida de inicio |
| [GUIA_USO.md](GUIA_USO.md) | **Guía completa de mejores prácticas** ⭐ |
| [INSTALLATION.md](INSTALLATION.md) | Instalación y configuración |
| [ARCHITECTURE.md](ARCHITECTURE.md) | Arquitectura del sistema |
| [FRAMEWORKS.md](FRAMEWORKS.md) | Soporte React vs Vue 3 |
| [CLAUDE_CODE_INTEGRATION.md](CLAUDE_CODE_INTEGRATION.md) | Detalles técnicos de integración |
| [INTEGRACION_COMPLETADA.md](INTEGRACION_COMPLETADA.md) | **Integración everything-claude-code** ⭐ NEW |
| [.agent/skills/vue3-expert/](skills/vue3-expert/) | Guía completa Vue 3 |
| [.agent/skills/vue3-expert/COMPARISON.md](skills/vue3-expert/COMPARISON.md) | React vs Vue lado a lado |

---

## 🤝 Contribuir

1. Fork el repositorio
2. Crea una rama para tu feature
3. Agrega nuevos agentes, skills o workflows
4. Envía un pull request

---

## 📄 Licencia

MIT License - Úsalo libremente en tus proyectos.

---

## 🙏 Créditos

- **Basado en**:
  - [antigravity-kit](https://github.com/vudovn/antigravity-kit) por [@vudovn](https://github.com/vudovn)
  - [everything-claude-code](https://github.com/affaan-m/everything-claude-code) por [@affaan-m](https://github.com/affaan-m)
- **Adaptado para**: Claude Code CLI
- **Mejoras**:
  - Soporte Vue 3 completo
  - Scripts Node.js (migrados de Python)
  - Sistema de hooks y continuous learning
  - MCP server configs
  - Documentación extendida

---

## 🔗 Links Útiles

- [Claude Code](https://claude.ai/code)
- [Antigravity Kit Original](https://github.com/vudovn/antigravity-kit)
- [Everything Claude Code](https://github.com/affaan-m/everything-claude-code)
- [Vue 3 Docs](https://vuejs.org)
- [React Docs](https://react.dev)

---

**Built with ❤️ for Claude Code CLI**
