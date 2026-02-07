# Claude Code Kit v2.1.0 - Quick Start

¡Empieza a usar 22 agentes, 66 skills, hooks automáticos y más en minutos!

---

## 🚀 Instalación Rápida

### Opción 1: Copiar al proyecto
```bash
# Copiar todo el kit a tu proyecto
cp -r claudecode-kit/.claudecode tu-proyecto/

# O copiar solo lo que necesites
cp -r claudecode-kit/agents tu-proyecto/.claudecode/
cp -r claudecode-kit/skills tu-proyecto/.claudecode/
```

### Opción 2: Usar como referencia
```bash
# Mantén el kit separado y úsalo como referencia
# Claude Code puede leer los agentes y skills desde cualquier ubicación
```

---

## 💡 Uso Básico

### 1. Code Review
```bash
# Review completo de tu código
claude "Review my code for bugs and security issues"

# Review específico
claude "Review src/components/UserCard.vue for performance"
```

### 2. Generar Tests
```bash
# Tests para un componente Vue
claude "Generate tests for src/components/LoginForm.vue"

# Tests para un servicio
claude "Generate tests for src/services/api.ts"
```

### 3. Generar Documentación
```bash
# Documentar una función
claude "Add JSDoc to src/utils/helpers.ts"

# Generar README
claude "Create a README for this project"
```

---

## 🎯 Agentes Principales

### Para Frontend (React/Vue 3)
```bash
# Usar frontend-specialist
claude "Help me optimize this Vue component for performance"
claude "Convert this React component to use TypeScript"
claude "Add form validation to my login component"
```

### Para Backend
```bash
# Usar backend-specialist
claude "Review my API endpoints for security"
claude "Help me design a REST API for users"
claude "Optimize this database query"
```

### Para Testing
```bash
# Usar test-engineer o test-writer
claude "Generate unit tests for UserService"
claude "Create E2E tests for the checkout flow"
```

### Para Seguridad
```bash
# Usar security-auditor
claude "Scan my code for security vulnerabilities"
claude "Check for OWASP Top 10 issues"
```

---

## 🧩 Skills Disponibles

### Vue 3 (NUEVO)
```bash
# Usar vue3-expert skill
claude "Show me Vue 3 Composition API patterns"
claude "How do I use Pinia for state management?"
claude "Convert this React component to Vue 3"
```

### Clean Code
```bash
# Aplicar clean-code skill
claude "Refactor this function to be more readable"
claude "Review code quality and suggest improvements"
```

### Testing Patterns
```bash
# Usar testing-patterns skill
claude "Show me testing best practices for Vue"
claude "How do I mock this API call in tests?"
```

---

## 🔄 Workflows

### /test - Testing
```bash
# Generar y correr tests
claude /test src/components/

# Ver cobertura
claude /test coverage
```

### /debug - Debugging
```bash
# Debug sistemático
claude /debug "login not working"
```

### /deploy - Deployment
```bash
# Preparar para deploy
claude /deploy
```

---

## 🎨 Framework Support

### Vue 3
```bash
# Componente Vue
claude "Create a UserCard component in Vue 3"

# Composable
claude "Create a useAuth composable"

# Test
claude "Generate tests for this Vue component"
```

### React
```bash
# Componente React
claude "Create a UserCard component in React"

# Hook
claude "Create a useAuth hook"

# Test
claude "Generate tests for this React component"
```

---

## 🛠️ Scripts de Validación

### Validación Rápida
```bash
# Correr checklist durante desarrollo
node .claude/scripts/checklist.js .

# Incluir checks de performance
node .claude/scripts/checklist.js . --url http://localhost:3000
```

### Verificación Completa
```bash
# Antes de deployment
node .claude/scripts/verify-all.js . --url http://localhost:3000

# Sin E2E tests
node .claude/scripts/verify-all.js . --url http://localhost:3000 --no-e2e
```

---

## 📚 Documentación Adicional

- [ARCHITECTURE.md](ARCHITECTURE.md) - Arquitectura completa del sistema
- [FRAMEWORKS.md](FRAMEWORKS.md) - Soporte React vs Vue 3
- [skills/vue3-expert/COMPARISON.md](skills/vue3-expert/COMPARISON.md) - Comparación React/Vue
- [skills/vue3-expert/SKILL.md](skills/vue3-expert/SKILL.md) - Guía Vue 3 completa

---

## 🎯 Ejemplos por Caso de Uso

### Caso 1: Nuevo Feature
```bash
1. claude "Create a user registration form in Vue 3"
2. claude "Generate tests for the registration form"
3. claude "Add validation to the form"
4. node .claude/scripts/checklist.js .
```

### Caso 2: Code Review
```bash
1. claude "Review changes in src/services/"
2. claude "Check for security issues"
3. claude "Generate missing tests"
4. node .claude/scripts/verify-all.js . --url http://localhost:3000
```

### Caso 3: Refactoring
```bash
1. claude "Refactor UserService to be more modular"
2. claude "Update tests after refactoring"
3. claude "Document the new structure"
4. node .claude/scripts/checklist.js .
```

### Caso 4: Bug Fix
```bash
1. claude /debug "payment not processing"
2. claude "Fix the issue in PaymentService"
3. claude "Add regression test"
4. claude "Document the fix"
```

---

## ⚡ Tips Pro

### 1. Usa Agentes Específicos
```bash
# En lugar de:
claude "help me with this"

# Mejor:
claude "Use security-auditor to scan for vulnerabilities"
```

### 2. Sé Específico con Frameworks
```bash
# Especifica el framework
claude "Create this in Vue 3 with script setup"
claude "Convert to React using hooks"
```

### 3. Aprovecha los Scripts
```bash
# Automatiza validaciones
alias check="node .claude/scripts/checklist.js ."
alias verify="node .claude/scripts/verify-all.js . --url http://localhost:3000"
```

### 4. Combina Agentes
```bash
# Workflow completo
claude "Review code, generate tests, and create documentation"
```

---

## ⭐ Nuevas Características v2.1.0

### Sistema de Hooks (Automático)
```bash
# Los hooks funcionan automáticamente en segundo plano
# Simplemente trabaja normalmente, el sistema aprende de ti
claude "implement user authentication"

# Al completar, el hook:
# ✓ Guarda contexto
# ✓ Aprende patrones
# ✓ Optimiza tokens
# ✓ Extrae conocimiento
```

### Build Error Resolver
```bash
# Resolver errores de TypeScript/build automáticamente
claude "Use build-error-resolver to fix all build errors"

# Perfecto para:
# - Errores post-merge
# - Actualizaciones de dependencias
# - Conflictos de tipos
```

### Refactor Cleaner
```bash
# Limpiar código muerto y duplicados
claude "Use refactor-cleaner to analyze unused code"

# Remueve:
# - Dependencies no usados
# - Exports sin referencias
# - Código duplicado
# - Archivos obsoletos
```

### Verification Loop
```bash
# Validación sistemática antes de producción
claude /verification-loop "validate payment module"

# Verifica:
# ✓ Type safety
# ✓ Test coverage
# ✓ Security
# ✓ Documentation
```

### MCP Integrations
```bash
# GitHub, Supabase, Vercel, Railway pre-configurados
cp .claude/mcp-configs/mcp-servers.json ~/.claude/mcp-servers/

# Luego:
claude "list my GitHub PRs"
claude "deploy to Vercel"
```

---

## 🐛 Troubleshooting

### "Skill not found"
```bash
# Asegúrate de tener la estructura correcta
.claudecode/
├── skills/
└── agents/
```

### "Script not found"
```bash
# Los scripts usan Node.js (no Python)
node --version  # Requiere Node.js 16+

# Ejecutar scripts:
node .claude/scripts/checklist.js .
node .claude/scripts/verify-all.js . --url http://localhost:3000

# O usar npm scripts:
npm run checklist
npm run verify
```

### "Tests not generating"
```bash
# Especifica el archivo completo
claude "Generate tests for src/components/UserCard.vue"

# No solo:
claude "test UserCard"
```

---

## 📞 Soporte

- Issues: [GitHub Issues](https://github.com/yourusername/claudecode-kit/issues)
- Documentación: Ver archivos .md en este repositorio
- Ejemplos: Revisa los archivos de skills para patrones

---

**¡Listo para empezar! 🚀**

Prueba con:
```bash
claude "Show me what agents are available in claudecode-kit"
```
