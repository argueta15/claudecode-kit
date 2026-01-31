# Guía de Uso - Claude Code Kit v2.2.0

Guía completa para sacar el máximo provecho del kit con 22 agentes, 68 skills (incluyendo Flutter/Dart), sistema de hooks, continuous learning y flujos de trabajo optimizados.

---

## 🎯 Filosofía de Uso

### Principios Fundamentales

1. **Agente Específico > Agente General** - Usa el agente más específico para cada tarea
2. **Skill Cargado > Contexto Manual** - Los skills proporcionan contexto automático
3. **Validación Temprana > Corrección Tardía** - Usa checklist/verify-all frecuentemente
4. **Workflows > Comandos Manuales** - Aprovecha los workflows convertidos a skills
5. **Automatización > Intervención Manual** - Los hooks aprenden y optimizan automáticamente ⭐ NEW

---

## 🚀 Patrones de Uso Recomendados

### 1. Desarrollo Frontend (Vue 3)

#### Setup Inicial
```bash
# Configurar estructura del proyecto
claude /create "Vue 3 app with Pinia and Nuxt 3"

# Revisar arquitectura
claude "Use frontend-specialist to review project structure"
```

#### Desarrollo de Componentes
```bash
# Crear componente siguiendo patrones Vue 3
claude "Use frontend-specialist to create UserProfile component in Vue 3 with TypeScript"

# Consultar patrones específicos
claude /vue3-expert "best practices for composables"
claude /vue3-expert "Pinia store patterns for auth"

# Generar tests
claude /test "src/components/UserProfile.vue"
```

#### Validación y Deploy
```bash
# Validación rápida durante desarrollo
node .agent/scripts/checklist.js .

# Antes de commit
claude /checklist

# Antes de deploy
claude /verify-all --url http://localhost:3000
claude /deploy
```

#### Tips Vue 3
- **Usa vue3-expert** para patrones Composition API
- **frontend-specialist** entiende Vue 3 y React
- **testing-patterns** incluye Vue Test Utils
- **Consulta COMPARISON.md** para migrar de React

### 2. Desarrollo Frontend (React/Next.js)

#### Setup Inicial
```bash
# Crear proyecto
claude /create "Next.js 14 app with App Router and TypeScript"

# Arquitectura
claude "Use frontend-specialist to plan component structure"
```

#### Desarrollo
```bash
# Componente Server/Client
claude "Use frontend-specialist to create ProductCard with Server Components"

# Patrones Next.js
claude /nextjs-react-expert "Server Actions patterns"
claude /nextjs-react-expert "metadata and SEO for App Router"

# Generar tests
claude /test "src/app/products/page.tsx"
```

#### Tips React
- **nextjs-react-expert** para App Router y Server Components
- **frontend-design** para patrones UI/UX
- **tailwind-patterns** para estilos Tailwind v4

### 3. Desarrollo Backend

#### API Design
```bash
# Diseñar API
claude "Use backend-specialist to design REST API for user management"

# Patrones específicos
claude /api-patterns "tRPC vs REST for TypeScript monorepo"
claude /nodejs-best-practices "async error handling patterns"

# Schema de base de datos
claude "Use database-architect to design schema for e-commerce"
claude /database-design "indexing strategy for high-traffic tables"
```

#### Desarrollo
```bash
# Crear endpoints
claude "Use backend-specialist to implement user registration with JWT auth"

# Validación de seguridad
claude "Use security-auditor to scan API for vulnerabilities"
claude /vulnerability-scanner
```

#### Tips Backend
- **Especifica runtime** (Node.js, Python, Bun) en tu request
- **Menciona framework** (Hono, Fastify, FastAPI) para mejor contexto
- **Usa database-architect** antes de escribir código
- **security-auditor** para cualquier feature de auth/payment

### 4. Desarrollo Mobile (Flutter)

#### Setup Inicial
```bash
# Crear proyecto Flutter
flutter create my_app
cd my_app

# Configurar arquitectura
claude "Use mobile-developer to plan Flutter app architecture"

# Consultar skill de Flutter
claude /flutter-expert "project structure for medium app"
```

#### Desarrollo de Features
```bash
# Crear pantalla con estado
claude "Use mobile-developer to create ProductListScreen in Flutter with Provider"

# Patrones de UI
claude /flutter-expert "responsive design patterns for phone and tablet"
claude /flutter-expert "navigation with go_router"

# Integración con Supabase
claude /flutter-expert "Supabase authentication setup"
claude /flutter-expert "realtime subscriptions with Supabase"

# Animaciones
claude /flutter-expert "Hero animation between list and detail"
```

#### State Management
```bash
# Provider (recomendado para apps pequeñas/medianas)
claude /flutter-expert "Provider patterns for shopping cart"

# Riverpod (recomendado para apps grandes)
claude /flutter-expert "Riverpod async state with FutureProvider"

# Bloc (apps complejas con lógica de negocio)
claude /flutter-expert "Bloc pattern for authentication flow"
```

#### Testing
```bash
# Tests unitarios
claude "Use mobile-developer to create unit tests for UserRepository"

# Widget tests
claude /flutter-expert "widget test for LoginForm"

# Integration tests
claude "Use qa-automation-engineer to create E2E test for checkout flow"
```

#### Build y Deploy
```bash
# Validar antes de build
claude /checklist

# Build Android
flutter build apk --release

# Build iOS
cd ios && pod install
flutter build ios --release

# CI/CD
claude /flutter-expert "GitHub Actions workflow for Flutter"
```

#### Tips Flutter
- **mobile-developer** para arquitectura y decisiones de plataforma
- **flutter-expert** para patrones específicos de Flutter/Dart
- **QUICKSTART.md** en flutter-expert para ejemplos rápidos
- **Siempre especifica** Provider/Riverpod/Bloc en tu request
- **Lee mobile-design skill** para UX patterns (touch targets, gestures)
- **qa-automation-engineer** tiene Vercel Agent Browser para E2E AI-native

### 5. Testing Completo

#### Estrategia de Testing
```bash
# Planear tests
claude "Use test-engineer to create testing strategy for auth module"

# Generar tests unitarios
claude /test "src/services/AuthService.ts"

# Tests E2E
claude "Use qa-automation-engineer to create E2E tests for checkout flow"
```

#### Workflow de Testing
```bash
# 1. Desarrollar feature
claude "create LoginForm component"

# 2. Generar tests
claude /test "src/components/LoginForm.vue"

# 3. Ejecutar y validar
npm test
node .agent/scripts/checklist.js .

# 4. E2E si es crítico
claude "Use qa-automation-engineer to add E2E test for login"
```

#### Tips Testing
- **test-engineer** para estrategia
- **qa-automation-engineer** para E2E/Playwright
- **/test skill** para generación rápida
- **testing-patterns** para consultar mocking/assertions

### 5. Seguridad y Auditoría

#### Auditoría de Seguridad
```bash
# Scan completo
claude "Use security-auditor to scan entire codebase"

# Específico
claude "Use security-auditor to review authentication implementation"
claude /vulnerability-scanner

# Penetration testing
claude "Use penetration-tester to test API security"
claude /red-team-tactics "SQL injection vectors"
```

#### Mejores Prácticas
- **Antes de cada deploy** → security-auditor
- **Nuevas features de auth/payment** → security-auditor + penetration-tester
- **Dependencias actualizadas** → /vulnerability-scanner
- **APIs públicas** → penetration-tester

### 6. DevOps y Deployment

#### CI/CD Setup
```bash
# Configurar pipeline
claude "Use devops-engineer to create GitHub Actions workflow"
claude /deployment-procedures "Docker multi-stage build"

# Deploy
claude /deploy
```

#### Workflow Pre-Deploy
```bash
# 1. Desarrollo completo
# 2. Tests passing
npm test

# 3. Validación rápida
claude /checklist

# 4. Validación completa (con servidor corriendo)
claude /verify-all --url http://localhost:3000

# 5. Deploy si todo pasa
claude /deploy production
```

### 7. Refactoring y Mantenimiento

#### Legacy Code
```bash
# Analizar código legacy
claude "Use code-archaeologist to analyze this legacy module"

# Plan de refactoring
claude /plan "refactor UserService to be more modular"

# Implementar
claude "Use code-archaeologist to refactor maintaining backwards compatibility"

# Validar
claude /test "tests/UserService.test.ts"
node .agent/scripts/checklist.js .
```

### 8. Arquitectura y Planificación

#### Nuevos Features
```bash
# Brainstorming
claude /brainstorm "real-time notifications feature"

# Planificación
claude /plan "implement real-time notifications with WebSockets"

# Arquitectura
claude "Use project-planner to break down notification system into tasks"
claude /architecture "event-driven patterns for notifications"
```

#### Project Setup
```bash
# Planning
claude "Use product-manager to create user stories for dashboard"
claude "Use product-owner to prioritize features for MVP"

# Arquitectura
claude /architecture "microservices vs monolith for this use case"
```

---

## ⭐ Nuevas Características v2.1.0

### 1. Sistema de Hooks y Continuous Learning

El sistema de hooks funciona **automáticamente en segundo plano** para mejorar tu experiencia:

#### Memory Persistence
```bash
# El sistema guarda y restaura contexto automáticamente
# No necesitas hacer nada - simplemente trabaja normalmente
claude "create user authentication flow"

# Al completar la tarea, el hook:
# - Guarda el contexto de la sesión
# - Extrae patrones útiles
# - Aprende de tus preferencias
# - Optimiza el uso de tokens
```

#### Strategic Compaction
```bash
# Cuando el contexto crece mucho, el sistema automáticamente:
# - Compacta información redundante
# - Mantiene lo más importante
# - Optimiza el uso de tokens
# - Preserva el contexto crítico

# Sin intervención manual necesaria
```

#### Continuous Learning
```bash
# El sistema aprende de tu uso:
claude "implement JWT authentication with refresh tokens"

# Después de completar:
# - Extrae el patrón "JWT auth"
# - Identifica dependencias comunes
# - Guarda estructura de código
# - Crea instintos para futuras tareas similares

# La próxima vez que pidas "JWT auth", será más rápido y preciso
```

#### Verificar Estado de Hooks
```bash
# Los hooks se configuran en .agent/hooks/hooks.json
# Ver configuración:
cat .agent/hooks/hooks.json

# Eventos disponibles:
# - on_task_complete: Al completar tareas
# - on_session_start: Al iniciar sesión
# - on_context_limit: Al acercarse al límite de tokens
```

### 2. Build Error Resolver ⭐ NEW

Agente especializado en resolver errores de TypeScript, build y compilación rápidamente:

```bash
# Resolver errores de TypeScript automáticamente
claude "Use build-error-resolver to fix all TypeScript errors"

# Casos de uso:
# - TypeScript type errors
# - Missing type definitions
# - Import/export errors
# - Next.js build failures
# - ESLint errors blocking build
# - Module resolution issues

# Ejemplo específico:
claude "Use build-error-resolver to fix:
  - Parameter 'user' implicitly has 'any' type
  - Property 'name' does not exist on type 'User'
  - Cannot find module '@/lib/utils'"
```

#### Características del Build Error Resolver:
- ✅ Minimal diffs (cambios mínimos)
- ✅ No refactoring (solo arregla errores)
- ✅ Patrones comunes identificados
- ✅ Soluciones específicas por framework
- ✅ Documentación de cambios

```bash
# Workflow típico:
# 1. Build falla
npm run build
# Error: Type 'string' is not assignable to type 'number'

# 2. Usar el agente
claude "Use build-error-resolver to fix build errors"

# 3. El agente:
# - Ejecuta tsc --noEmit
# - Identifica todos los errores
# - Aplica fixes mínimos
# - Re-compila para verificar
# - Reporta cambios realizados

# 4. Build pasa
npm run build
# ✓ Build successful
```

### 3. Refactor Cleaner ⭐ NEW

Agente especializado en limpieza de código muerto y refactoring seguro:

```bash
# Limpiar código no usado
claude "Use refactor-cleaner to remove dead code from src/"

# El agente ejecuta:
# - knip (unused exports, files, dependencies)
# - depcheck (unused npm packages)
# - ts-prune (unused TypeScript exports)
# - eslint --report-unused-disable-directives

# Ejemplo específico:
claude "Use refactor-cleaner to:
  1. Find and remove unused components
  2. Remove unused npm dependencies
  3. Consolidate duplicate utilities
  4. Clean up unused imports"
```

#### Proceso de Refactor Cleaner:
1. **Análisis** - Ejecuta herramientas de detección
2. **Categorización** - SAFE, CAREFUL, RISKY
3. **Remoción Segura** - Solo remueve código verificado
4. **Testing** - Tests después de cada batch
5. **Documentación** - Actualiza DELETION_LOG.md

```bash
# Workflow típico:
# 1. Análisis
claude "Use refactor-cleaner to analyze unused code in src/"

# 2. Output del agente:
# Found:
# - 5 unused npm dependencies (lodash, moment, etc)
# - 12 unused exports in src/utils/
# - 3 duplicate components
# - 8 unused files

# 3. Remoción segura
# El agente:
# - Verifica cada item con grep
# - Remueve por categorías
# - Ejecuta tests después de cada batch
# - Documenta en DELETION_LOG.md

# 4. Resultado:
# ✓ Removed 5 dependencies (-120 KB)
# ✓ Removed 12 unused exports
# ✓ Consolidated 3 duplicates
# ✓ Removed 8 files (-2,300 lines)
# ✓ All tests passing
```

### 4. Verification Loop ⭐ NEW

Sistema de validación continua para asegurar calidad de código:

```bash
# Validar módulo completo
claude /verification-loop "validate auth module"

# Tipos de validación:
# - Checkpoint evaluation (al finalizar)
# - Continuous evaluation (durante desarrollo)
# - Graded scoring (con métricas)

# Ejemplo con grading:
claude /verification-loop "validate API endpoints with scoring"

# Output:
# ✓ Type Safety: 95/100
# ✓ Error Handling: 88/100
# ✓ Test Coverage: 92/100
# ✓ Security: 100/100
# ✓ Documentation: 75/100
#
# Overall: 90/100 (PASS)
```

#### Modos de Verificación:

**Checkpoint Mode:**
```bash
# Validar al terminar feature
claude /verification-loop "checkpoint validate user-registration feature"

# Valida:
# - Todos los tests pasan
# - No hay errores de tipo
# - Coverage > 80%
# - No vulnerabilidades
# - Documentación presente
```

**Continuous Mode:**
```bash
# Monitoreo durante desarrollo (usa con /watch)
claude /verification-loop "continuous validate during development"

# Ejecuta verificación después de cada cambio significativo
```

### 5. Strategic Compact ⭐ NEW

Optimización automática de tokens y contexto:

```bash
# Skill de optimización de contexto
claude /strategic-compact "optimize current context"

# Estrategias:
# - Eliminar redundancia
# - Comprimir repeticiones
# - Resumir información antigua
# - Preservar contexto crítico
# - Smart summarization

# El hook lo hace automáticamente, pero puedes forzarlo:
claude /strategic-compact "compact conversation history"
```

#### Casos de Uso:
```bash
# 1. Conversación larga
# Has estado trabajando por horas, mucho contexto acumulado
claude /strategic-compact "summarize and compact session"

# 2. Antes de tarea crítica
# Quieres asegurar que todo el contexto disponible esté optimizado
claude /strategic-compact "prepare context for critical task"

# 3. Performance optimization
# Notas que las respuestas son lentas por mucho contexto
claude /strategic-compact "optimize for performance"
```

### 6. Iterative Retrieval ⭐ NEW

Patrones para manejo eficiente de codebases grandes:

```bash
# Búsqueda iterativa en proyectos grandes
claude /iterative-retrieval "find all authentication logic"

# El skill usa:
# - Búsqueda por capas (top-down)
# - Refinamiento progresivo
# - Contexto management
# - Subagent orchestration

# Ejemplo de búsqueda compleja:
claude /iterative-retrieval "map all database queries and their callers"

# Proceso:
# 1. Primera capa: Find DB query patterns
# 2. Segunda capa: Find files using those patterns
# 3. Tercera capa: Map call chains
# 4. Cuarta capa: Document architecture
```

### 7. MCP Server Configs ⭐ NEW

Configuraciones pre-optimizadas para Model Context Protocol:

```bash
# Instalar configs MCP
cp .agent/mcp-configs/mcp-servers.json ~/.claude/mcp-servers/

# Servicios incluidos:
# - GitHub (repos, PRs, issues)
# - Supabase (database, auth)
# - Vercel (deployments)
# - Railway (infrastructure)
```

#### Configurar GitHub Integration:
```bash
# 1. Copiar config
cp .agent/mcp-configs/mcp-servers.json ~/.claude/mcp-servers/

# 2. Agregar GitHub token
# Editar ~/.claude/mcp-servers/mcp-servers.json
# Agregar GITHUB_TOKEN en env

# 3. Usar desde Claude Code
claude "list my GitHub repositories"
claude "create PR for current branch"
claude "check CI status"
```

#### Configurar Supabase Integration:
```bash
# 1. Asegurar config MCP instalado

# 2. Agregar Supabase credentials
# SUPABASE_URL y SUPABASE_KEY en env

# 3. Usar desde Claude Code
claude "query users table from Supabase"
claude "create new table in Supabase"
claude "check Supabase auth status"
```

### 8. Uso Combinado de Nuevas Características

#### Workflow Completo con v2.1.0:
```bash
# 1. Desarrollo (hooks aprenden automáticamente)
claude "implement payment processing with Stripe"
# → Hook guarda patrones de Stripe integration

# 2. Si hay errores de build
claude "Use build-error-resolver to fix TypeScript errors"
# → Fixes rápidos, minimal diffs

# 3. Limpiar código
claude "Use refactor-cleaner to remove unused code"
# → Remueve dependencies no usados, duplicados

# 4. Validar calidad
claude /verification-loop "validate payment module"
# → Verifica seguridad, tests, coverage

# 5. Optimizar contexto si es necesario
claude /strategic-compact "prepare for deployment"
# → Compacta contexto para foco en deploy

# 6. Deploy usando MCP
claude "deploy to Vercel via MCP"
# → Usa config pre-configurada de Vercel
```

#### Pattern: Refactoring Seguro
```bash
# 1. Backup
git checkout -b refactor/cleanup

# 2. Análisis
claude "Use refactor-cleaner to analyze dead code"

# 3. Limpieza incremental
claude "Use refactor-cleaner to remove unused dependencies only"
# Tests → Commit

claude "Use refactor-cleaner to consolidate duplicate utils"
# Tests → Commit

claude "Use refactor-cleaner to remove unused files"
# Tests → Commit

# 4. Validación final
claude /verification-loop "validate after refactoring"
node .agent/scripts/verify-all.js . --url http://localhost:3000

# 5. Merge
git checkout main && git merge refactor/cleanup
```

#### Pattern: Build Recovery
```bash
# Build está roto después de merge
npm run build
# ✗ Error: 45 TypeScript errors

# Recovery automático
claude "Use build-error-resolver to fix all build errors"

# El agente:
# - Encuentra los 45 errores
# - Los categoriza por tipo
# - Aplica fixes mínimos
# - Re-compila progresivamente
# - Reporta cada fix

# ✓ Build passing
# ✓ 45 errors fixed
# ✓ 47 lines changed (minimal diffs)
```

---

## 💡 Combinaciones Poderosas

### Combo 1: Desarrollo Full-Stack Completo

```bash
# 1. Planning
claude /brainstorm "e-commerce platform"
claude /plan "MVP with products, cart, checkout"

# 2. Arquitectura
claude "Use project-planner to create task breakdown"
claude /architecture "decide on tech stack"

# 3. Backend
claude "Use database-architect to design schema"
claude "Use backend-specialist to create API"

# 4. Frontend
claude "Use frontend-specialist to create Vue 3 UI"

# 5. Testing
claude /test "all components and services"

# 6. Security
claude "Use security-auditor to scan everything"

# 7. Deploy
claude /verify-all --url http://localhost:3000
claude /deploy
```

### Combo 2: Bug Fix Workflow

```bash
# 1. Debug
claude /debug "payment processing fails for users in EU"

# 2. Analizar
claude "Use debugger to systematically find the root cause"

# 3. Fix
claude "Use backend-specialist to fix timezone issue in payment"

# 4. Test
claude /test "add regression test for EU payment bug"

# 5. Validar
node .agent/scripts/checklist.js .

# 6. Documentar
claude "Use documentation-writer to document the fix"
```

### Combo 3: Performance Optimization

```bash
# 1. Profile
claude "Use performance-optimizer to analyze Web Vitals"
claude /performance-profiling

# 2. Identificar cuellos de botella
claude "Use frontend-specialist to optimize render performance"

# 3. Implementar mejoras
claude "lazy load routes and code split heavy components"

# 4. Validar mejoras
claude /verify-all --url http://localhost:3000
# Revisar Lighthouse scores

# 5. Monitorear
claude "Use devops-engineer to set up performance monitoring"
```

### Combo 4: SEO Completo

```bash
# 1. Auditoría
claude "Use seo-specialist to audit current SEO"
claude /seo-fundamentals

# 2. Optimizar
claude "Use frontend-specialist to add metadata and structured data"

# 3. Content
claude /geo-fundamentals "optimize for AI search visibility"

# 4. Validar
claude /verify-all --url http://localhost:3000
# Revisar SEO score en Lighthouse

# 5. Monitorear
claude "create SEO monitoring dashboard"
```

---

## 🎓 Tips Avanzados

### 1. Multi-Agent Orchestration

Hay dos formas de coordinar múltiples agentes:

#### Opción A: Con Orquestador (Automático)

Para tareas complejas donde necesitas coordinación automática:

```bash
# Coordinar múltiples agentes automáticamente
claude /orchestrate "Build a complete authentication system with Vue 3 frontend, FastAPI backend, PostgreSQL, JWT, tests, and deployment"
```

El orchestrator:
- Coordina frontend-specialist, backend-specialist, database-architect
- Asegura consistencia entre componentes
- Ejecuta en el orden correcto
- Valida integraciones

#### Opción B: Paralelo Manual (Control Total)

Para máxima velocidad y control, lanza agentes en paralelo manualmente:

```bash
# Lanzar múltiples agentes al mismo tiempo
claude "Execute these tasks in parallel:

1. Use frontend-specialist to create Vue 3 components for user dashboard
2. Use backend-specialist to create FastAPI endpoints for user management
3. Use test-engineer to generate test strategy for the entire system
4. Use security-auditor to scan existing code for vulnerabilities
5. Use documentation-writer to create API documentation structure"
```

**Ventajas del paralelo manual:**
- ⚡ **Máxima velocidad** - Todos trabajan simultáneamente
- 🎯 **Control total** - Defines exactamente qué hace cada uno
- 🔄 **Sin dependencias** - Tareas independientes
- 📊 **Resultados simultáneos** - Ves todo al terminar

**Cuándo usar paralelo manual:**
- Tareas independientes entre sí
- Necesitas velocidad máxima
- Revisión de código existente
- Generación masiva de documentación/tests
- Auditorías completas

**Ejemplo detallado: Feature Completo en Paralelo**

```bash
claude "I need to build a user profile feature. Execute in parallel:

FRONTEND (frontend-specialist):
- Create UserProfile.vue component with Composition API
- Create UserSettings.vue for profile editing
- Add Pinia store for user state
- Style with Tailwind CSS

BACKEND (backend-specialist):
- Create /api/users/:id endpoint (GET)
- Create /api/users/:id endpoint (PUT)
- Add validation with Pydantic
- Implement JWT auth middleware

TESTING (test-engineer):
- Generate unit tests for Vue components
- Generate API integration tests
- Create E2E test for profile flow

SECURITY (security-auditor):
- Review authentication implementation
- Check for XSS vulnerabilities in form inputs
- Validate authorization logic

DOCUMENTATION (documentation-writer):
- API documentation for user endpoints
- Component usage documentation
- Setup guide for developers"
```

**Resultado:** Todos los agentes trabajan simultáneamente y entregas todo el feature completo en una fracción del tiempo.

**Otro ejemplo: Code Review Completo**

```bash
claude "Review the entire codebase in parallel:

1. Use code-archaeologist to analyze code quality and technical debt in src/
2. Use security-auditor to scan for vulnerabilities in all files
3. Use performance-optimizer to identify performance bottlenecks
4. Use test-engineer to analyze test coverage and suggest missing tests
5. Use frontend-specialist to review UI/UX patterns and accessibility"
```

**Otro ejemplo: Pre-Deploy Validation Paralela**

```bash
claude "Before deploying to production, validate everything in parallel:

1. Use security-auditor to perform final security audit
2. Use test-engineer to run complete test suite and verify coverage
3. Use performance-optimizer to verify Web Vitals and Lighthouse scores
4. Use documentation-writer to ensure all API docs are up to date
5. Use devops-engineer to verify deployment configuration"
```

**Comparación: Orquestador vs Paralelo Manual**

| Aspecto | Orquestador | Paralelo Manual |
|---------|-------------|-----------------|
| **Velocidad** | Secuencial | Simultáneo ⚡ |
| **Control** | Automático | Manual 🎯 |
| **Coordinación** | Integrada | Tú coordinas |
| **Dependencias** | Maneja automáticamente | Tú defines |
| **Mejor para** | Features nuevos complejos | Reviews, audits, validación |
| **Complejidad** | Simple (1 comando) | Media (defines todo) |

**Cuándo usar cada uno:**

**Usa ORQUESTADOR cuando:**
- Construyes algo nuevo desde cero
- Hay dependencias entre tareas (frontend necesita API schema)
- Quieres coordinación automática
- No tienes prisa

**Usa PARALELO MANUAL cuando:**
- Revisas código existente
- Tareas son independientes
- Necesitas máxima velocidad
- Quieres control total de cada tarea

### 2. Ejecución Paralela: Ejemplos Prácticos

Ejemplos reales de cómo ejecutar múltiples agentes en paralelo para diferentes escenarios:

#### Ejemplo 1: Desarrollo Full-Stack en Paralelo

```bash
claude "Build user authentication feature in parallel:

BACKEND (backend-specialist):
- Create /api/auth/register endpoint with email/password
- Create /api/auth/login endpoint returning JWT
- Create /api/auth/logout endpoint
- Add password hashing with bcrypt
- Use PostgreSQL for user storage

FRONTEND (frontend-specialist):
- Create LoginForm.vue with email/password fields
- Create RegisterForm.vue with validation
- Add Pinia store for auth state (user, token)
- Implement route guards for protected pages
- Add error handling and loading states

DATABASE (database-architect):
- Design users table schema
- Create migration files
- Add indexes for email lookup
- Plan for session/refresh tokens

TESTING (test-engineer):
- Unit tests for auth endpoints
- Unit tests for Vue components
- Integration test for complete login flow

SECURITY (security-auditor):
- Review password hashing implementation
- Check for SQL injection vulnerabilities
- Validate JWT token security
- Check for XSS in form inputs"
```

#### Ejemplo 2: Auditoría y Refactoring en Paralelo

```bash
claude "Comprehensive codebase audit in parallel:

QUALITY (code-archaeologist):
- Analyze technical debt in src/
- Identify code duplication
- Find overly complex functions (cyclomatic complexity)
- Suggest refactoring priorities

SECURITY (security-auditor):
- Scan for OWASP Top 10 vulnerabilities
- Check dependencies for known vulnerabilities
- Review authentication/authorization code
- Identify potential security improvements

PERFORMANCE (performance-optimizer):
- Identify performance bottlenecks
- Analyze bundle sizes and suggest optimizations
- Review database queries for N+1 problems
- Check for unnecessary re-renders in components

TESTING (test-engineer):
- Analyze current test coverage
- Identify critical paths without tests
- Review test quality and patterns
- Suggest integration tests needed

DOCUMENTATION (documentation-writer):
- Review API documentation completeness
- Check component documentation
- Identify missing setup/deployment docs
- Create documentation improvement plan"
```

#### Ejemplo 3: Pre-Launch Validation en Paralelo

```bash
claude "Complete pre-launch validation in parallel:

FRONTEND CHECK (frontend-specialist):
- Verify all pages are responsive
- Check accessibility compliance (WCAG)
- Validate error states and loading indicators
- Review UI consistency across app

BACKEND CHECK (backend-specialist):
- Verify all API endpoints have proper error handling
- Check rate limiting is implemented
- Validate input sanitization
- Review API response formats

SECURITY AUDIT (security-auditor):
- Final penetration testing
- Verify all secrets are in environment variables
- Check CORS configuration
- Validate authentication on all protected routes

PERFORMANCE (performance-optimizer):
- Run Lighthouse audit on all major pages
- Verify Core Web Vitals meet targets
- Check bundle sizes are optimized
- Test under load conditions

TESTING (qa-automation-engineer):
- Run complete E2E test suite
- Verify all critical user flows
- Cross-browser testing results
- Mobile testing results

DEVOPS (devops-engineer):
- Verify deployment configuration
- Check environment variables are set
- Validate CI/CD pipeline
- Review monitoring/logging setup"
```

#### Ejemplo 4: Migración de Tecnología en Paralelo

```bash
claude "Migrate from React to Vue 3 in parallel:

PLANNING (project-planner):
- Create migration roadmap
- Identify component dependencies
- Plan migration phases
- Create rollback strategy

FRONTEND MIGRATION (frontend-specialist):
- Convert React components to Vue 3
- Migrate React hooks to composables
- Convert Redux to Pinia stores
- Update routing from React Router to Vue Router

TESTING MIGRATION (test-engineer):
- Convert React Testing Library tests to Vue Test Utils
- Update test patterns for Composition API
- Ensure test coverage remains same
- Add regression tests

DOCUMENTATION (documentation-writer):
- Update component documentation
- Create Vue 3 style guide
- Document migration decisions
- Create onboarding guide for team

CODE REVIEW (code-archaeologist):
- Review migrated components for quality
- Identify patterns to standardize
- Check for anti-patterns
- Suggest improvements"
```

#### Ejemplo 5: Feature Development Sprint en Paralelo

```bash
claude "Sprint: Real-time chat feature in parallel:

ARCHITECTURE (project-planner):
- Design WebSocket architecture
- Plan message storage strategy
- Define API contracts
- Create technical specifications

BACKEND (backend-specialist):
- Implement WebSocket server
- Create message persistence layer
- Add user presence tracking
- Implement room/channel logic

FRONTEND (frontend-specialist):
- Create ChatWindow.vue component
- Implement WebSocket client
- Add real-time message updates
- Create typing indicators

DATABASE (database-architect):
- Design messages table schema
- Design rooms/channels schema
- Plan for message history pagination
- Add indexes for query optimization

MOBILE (mobile-developer):
- Create mobile-optimized chat UI
- Handle WebSocket in background
- Implement push notifications
- Add offline message queue

TESTING (test-engineer):
- WebSocket integration tests
- Message persistence tests
- Real-time update tests
- Load testing for concurrent users

SECURITY (security-auditor):
- Review WebSocket authentication
- Check message encryption
- Validate XSS prevention
- Review rate limiting for messages"
```

#### Ejemplo 6: Bug Fix Sprint en Paralelo

```bash
claude "Critical bug investigation in parallel:

DEBUG (debugger):
- Systematically debug payment processing failure
- Reproduce the bug
- Identify root cause
- Propose fix

BACKEND FIX (backend-specialist):
- Implement the fix in payment service
- Add additional error handling
- Improve logging
- Deploy fix to staging

TESTING (test-engineer):
- Create regression test for the bug
- Run full payment flow tests
- Verify fix doesn't break other features
- Add edge case tests

SECURITY (security-auditor):
- Verify fix doesn't introduce security issues
- Review payment flow security
- Check for related vulnerabilities

DOCUMENTATION (documentation-writer):
- Document the bug and fix
- Update troubleshooting guide
- Add to known issues if needed
- Create post-mortem document"
```

#### Tips para Ejecución Paralela Exitosa

**✅ DO:**
- Define tareas claramente independientes
- Especifica el agente para cada tarea
- Da contexto completo a cada agente
- Usa cuando necesitas velocidad máxima

**❌ DON'T:**
- Crear dependencias entre tareas paralelas
- Hacer tareas que modifican los mismos archivos
- Usarlo para features que necesitan coordinación estrecha
- Lanzar demasiados agentes (máximo 5-7 en paralelo)

**Optimización de Rendimiento:**

```bash
# Malo: Demasiado en un solo comando
claude "Execute 15 different tasks in parallel..." # Sobrecarga

# Bueno: 3-5 tareas relacionadas
claude "Execute these 4 tasks in parallel:
1. Use frontend-specialist for UI
2. Use backend-specialist for API
3. Use test-engineer for tests
4. Use security-auditor for security"

# Muy bueno: Específico y enfocado
claude "Code review in parallel:
1. Use code-archaeologist to review src/services/
2. Use security-auditor to scan src/api/
3. Use performance-optimizer to analyze src/components/"
```

### 2. Aprovechar Continuous Learning ⭐ NEW

El sistema aprende automáticamente, pero puedes optimizar el aprendizaje:

```bash
# ✅ BUENO: Tareas completas con contexto
claude "implement OAuth2 authentication with Google and GitHub providers,
including refresh token rotation, PKCE flow, and session management"

# Al completar, el hook aprende:
# - Patrón completo de OAuth2
# - Dependencias necesarias (passport, etc)
# - Estructura de código
# - Mejores prácticas aplicadas

# ❌ MALO: Tareas incompletas
claude "add google login"
# Poco contexto para aprender

# La próxima vez que pidas OAuth2, será más rápido y completo
```

**Tips para Maximizar el Aprendizaje:**

```bash
# 1. Completa tareas de principio a fin
claude "implement feature X from scratch including tests and docs"
# vs
claude "start feature X" # Incompleto, menos aprendizaje

# 2. Usa terminología consistente
claude "implement JWT authentication" # Consistente
# vs
claude "add login tokens" # Ambiguo

# 3. Incluye validación al final
claude "implement payment processing and validate with /verification-loop"
# Hook aprende qué validar para payments

# 4. Documenta decisiones importantes
claude "implement caching with Redis, choosing Redis over Memcached because..."
# Hook aprende tus preferencias de arquitectura
```

### 3. Build Error Recovery Rápido ⭐ NEW

Patrones para resolver errores de build eficientemente:

```bash
# Pattern 1: Quick Fix
npm run build
# ✗ 3 errors

claude "Use build-error-resolver to fix build errors"
# ✓ Fixed in < 1 min

# Pattern 2: Preventive Fix
# Antes de commit, verificar tipos
npx tsc --noEmit
# Si hay errores:
claude "Use build-error-resolver to fix all TypeScript errors"

# Pattern 3: Post-Merge Recovery
git merge develop
npm run build
# ✗ 45 errors (merge conflicts de tipos)

claude "Use build-error-resolver to fix all type errors from merge"
# Resuelve conflictos de tipos automáticamente

# Pattern 4: Upgrade Recovery
npm install react@19
npm run build
# ✗ Breaking changes

claude "Use build-error-resolver to fix React 19 breaking changes"
# Adapta código a nueva versión
```

### 4. Refactoring Incremental y Seguro ⭐ NEW

Usa refactor-cleaner en incrementos pequeños y seguros:

```bash
# ❌ MALO: Todo de una vez
claude "Use refactor-cleaner to remove all unused code"
# Riesgoso, difícil de revertir

# ✅ BUENO: Incremental con tests
# Paso 1: Solo dependencies
claude "Use refactor-cleaner to remove unused npm dependencies only"
npm test
git commit -m "Remove unused dependencies"

# Paso 2: Solo exports
claude "Use refactor-cleaner to remove unused exports only"
npm test
git commit -m "Remove unused exports"

# Paso 3: Solo duplicados
claude "Use refactor-cleaner to consolidate duplicate utilities"
npm test
git commit -m "Consolidate duplicate utils"

# Cada paso es pequeño, testeable, reversible
```

**Refactoring con Verificación:**

```bash
# Workflow completo:
git checkout -b refactor/cleanup

# 1. Análisis
claude "Use refactor-cleaner to analyze and report dead code (don't remove yet)"

# 2. Review análisis manual
# Lee el reporte, decide qué es seguro

# 3. Remoción por categoría
claude "Use refactor-cleaner to remove only SAFE items from analysis"
npm test && git commit -m "Remove safe dead code"

# 4. Verificación completa
claude /verification-loop "validate after refactoring"
node .agent/scripts/verify-all.js . --url http://localhost:3000

# 5. Merge
git checkout main && git merge refactor/cleanup
```

### 5. Optimización de Contexto con Strategic Compact ⭐ NEW

Usa strategic-compact cuando el contexto crece demasiado:

```bash
# Señales de que necesitas compactar:
# - Respuestas lentas
# - Contexto > 100K tokens
# - Muchos archivos leídos
# - Conversación larga (> 2 horas)

# Compactar manualmente:
claude /strategic-compact "optimize context for focused work on authentication module"

# El sistema:
# - Mantiene contexto del auth module (crítico)
# - Compacta discusiones antiguas
# - Resume decisiones tomadas
# - Elimina redundancia
```

**Patterns de Optimización:**

```bash
# Pattern 1: Antes de tarea crítica
# Has explorado mucho, ahora necesitas implementar
claude /strategic-compact "prepare context for implementing payment system"

# Pattern 2: Cambio de fase
# Terminaste frontend, ahora vas a backend
claude /strategic-compact "compact frontend work, prepare for backend"

# Pattern 3: Session refresh
# Nueva sesión, quieres contexto limpio
claude /strategic-compact "summarize previous session and prepare fresh context"
```

### 6. MCP Integration Patterns ⭐ NEW

Aprovecha las integraciones MCP pre-configuradas:

```bash
# Una vez configurado MCP (.agent/mcp-configs/mcp-servers.json → ~/.claude/mcp-servers/)

# GitHub Integration:
claude "list open PRs in my repo"
claude "create PR for current branch with description from commits"
claude "check CI status for PR #123"
claude "review code in PR #456"

# Supabase Integration:
claude "query users table where created_at > yesterday"
claude "create new table for blog_posts with schema"
claude "update row in settings table where id = 1"
claude "check auth configuration in Supabase"

# Vercel Integration:
claude "list my Vercel deployments"
claude "get logs for latest deployment"
claude "deploy current branch to preview"
claude "promote preview to production"

# Railway Integration:
claude "check status of my Railway services"
claude "view logs for api service"
claude "update environment variables"
```

**Workflow con MCP:**

```bash
# Feature completo usando MCP:

# 1. Desarrollo
claude "implement new blog feature with Next.js"

# 2. Database (Supabase MCP)
claude "create blog_posts table in Supabase with proper schema"

# 3. Build check
claude "Use build-error-resolver to fix any TypeScript errors"

# 4. Deploy preview (Vercel MCP)
claude "deploy to Vercel preview environment"

# 5. Review (GitHub MCP)
claude "create PR with detailed description of blog feature"

# 6. Monitor (Railway/Vercel MCP)
claude "check deployment logs and monitor for errors"
```

### 7. Contexto Incremental

Construye contexto gradualmente:

```bash
# Paso 1: Entender el dominio
claude /brainstorm "social media app features"

# Paso 2: Arquitectura
claude /architecture "event sourcing for social feed"

# Paso 3: Implementación
claude "Use backend-specialist with context from previous conversations"

# Paso 4: Refinamiento
claude /enhance "add caching to feed endpoint"
```

### 3. Skills como Referencia

Los skills son documentación viviente:

```bash
# Consultar antes de implementar
claude /clean-code "function design principles"
claude /vue3-expert "reactive vs ref when to use each"
claude /api-patterns "GraphQL subscription patterns"

# Luego implementar con ese conocimiento
claude "create user subscription with GraphQL following best practices"
```

### 4. Validación Continua

Integra validación en tu flujo:

```bash
# Durante desarrollo
alias check="node .agent/scripts/checklist.js ."
alias verify="node .agent/scripts/verify-all.js . --url http://localhost:3000"

# Usar frecuentemente
check  # Cada 30 min
verify # Antes de cada commit importante
```

### 5. Custom Workflows

Crea tus propios workflows combinando skills:

```bash
# Workflow personalizado para tu proyecto
alias feature="claude /brainstorm && claude /plan && claude /test"
alias review="claude 'Use code-archaeologist to review' && check"
alias ship="verify && claude /deploy"
```

---

## 🔧 Customización del Kit

### Agregar Agentes Personalizados

Crea `.agent/agents/my-custom-agent.md`:

```markdown
---
name: my-custom-agent
description: Custom agent for my specific needs
tools: Read, Grep, Glob, Bash, Edit, Write
model: inherit
skills: clean-code, custom-skill
---

# My Custom Agent

Your custom agent instructions...
```

### Agregar Skills Personalizados

Crea `.agent/skills/my-skill/SKILL.md`:

```markdown
---
name: my-skill
description: Custom skill for my domain
allowed-tools: Read, Write
version: 1.0
---

# My Custom Skill

Your domain-specific knowledge...
```

### Modificar Scripts de Validación

Edita `.agent/scripts/checklist.py` para agregar checks personalizados:

```python
def custom_check(directory):
    """Your custom validation"""
    # Add your logic
    return True

# Add to checklist
checks = [
    security_scan,
    lint_check,
    custom_check,  # Your check
]
```

---

## 📊 Métricas y Monitoreo

### Seguimiento de Calidad

```bash
# Diario
node .agent/scripts/checklist.js .

# Pre-commit
claude /checklist

# Pre-deploy
claude /verify-all --url http://localhost:3000

# Post-deploy
claude "Use performance-optimizer to monitor production metrics"
```

### CI/CD Integration

En `.github/workflows/quality.yml`:

```yaml
name: Quality Checks

on: [push, pull_request]

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Quick Check
        run: node .agent/scripts/checklist.js .

      - name: Full Verification
        run: |
          npm run dev &
          sleep 5
          node .agent/scripts/verify-all.js . --url http://localhost:3000 --no-e2e
```

---

## 🎯 Casos de Uso Específicos

### Startup MVP en 1 Día

```bash
# Mañana
claude /brainstorm "SaaS idea validation"
claude /create "landing page + waitlist"
claude "Use frontend-specialist for ui-ux-pro-max design"

# Tarde
claude /test "all components"
claude /verify-all --url http://localhost:3000

# Noche
claude /deploy "to Vercel"
```

### Migrar de React a Vue 3

```bash
# 1. Entender diferencias
claude /vue3-expert "read COMPARISON.md"

# 2. Plan de migración
claude /plan "migrate React app to Vue 3"

# 3. Componente por componente
claude "Use frontend-specialist to convert UserCard from React to Vue 3"

# 4. Actualizar tests
claude /test "converted components"

# 5. Validar
node .agent/scripts/checklist.js .
```

### Preparar para Auditoría de Seguridad

```bash
# 1. Scan inicial
claude "Use security-auditor to scan entire codebase"

# 2. Pen testing
claude "Use penetration-tester to test all attack vectors"

# 3. Revisar dependencias
claude /vulnerability-scanner

# 4. Documentar
claude "Use documentation-writer to create security documentation"

# 5. Validación final
claude /verify-all --url https://staging.example.com
```

---

## ⚡ Atajos y Aliases Recomendados

Agrega a tu `.bashrc` o `.zshrc`:

```bash
# Claude Code Kit shortcuts
alias cagents="claude 'list available agents'"
alias cskills="claude 'list available skills'"

# Quick actions
alias ccheck="node .agent/scripts/checklist.js ."
alias cverify="node .agent/scripts/verify-all.js . --url http://localhost:3000"

# Common workflows
alias ctest="claude /test"
alias cdeploy="claude /deploy"
alias cbrainstorm="claude /brainstorm"
alias cplan="claude /plan"
alias cdebug="claude /debug"

# Vue 3 specific
alias cvue="claude /vue3-expert"

# React specific
alias creact="claude /nextjs-react-expert"

# v2.1.0 - New features
alias cbuild="claude 'Use build-error-resolver to fix all TypeScript errors'"
alias crefactor="claude 'Use refactor-cleaner to analyze dead code'"
alias cverifyloop="claude /verification-loop"
alias ccompact="claude /strategic-compact"

# Combined workflows
alias cship="ccheck && cverify && cdeploy"
alias cfeature="cbrainstorm && cplan && ctest"
alias ccleanship="crefactor && ctest && cbuild && cverify && cdeploy"
```

**Aliases Avanzados v2.1.0:**

```bash
# Build recovery workflow
alias cbuildfix="cbuild && npm test && git add . && git commit -m 'fix: resolve build errors'"

# Refactor workflow
alias cclean="crefactor && npm test"
alias cdeepclean="crefactor && cbuild && cverifyloop 'validate cleanup'"

# MCP shortcuts (después de configurar)
alias cgh="claude" # GitHub via MCP - example: cgh "list my PRs"
alias cdb="claude" # Supabase via MCP - example: cdb "query users table"

# Full quality check v2.1.0
alias cquality="cbuild && crefactor && cverifyloop 'full project' && ccheck"
```

---

## 🚨 Errores Comunes y Soluciones

### Error: "Agent not responding correctly"

**Problema**: El agente no da la respuesta esperada

**Solución**:
```bash
# Sé más específico
❌ claude "fix this"
✅ claude "Use frontend-specialist to fix TypeScript errors in UserCard.vue"

# Proporciona contexto
✅ claude "Use backend-specialist to create REST API for user management with JWT auth and PostgreSQL"
```

### Error: "Skill not found"

**Problema**: Skill no se encuentra

**Solución**:
```bash
# Verificar nombre exacto
ls .agent/skills/

# Usar nombre correcto
❌ claude /vue-3-expert
✅ claude /vue3-expert

❌ claude /testing
✅ claude /testing-patterns
```

### Error: "Tests fail after generation"

**Problema**: Tests generados fallan

**Solución**:
```bash
# Generar con más contexto
claude "Use test-engineer to generate tests for UserService following existing test patterns in tests/"

# Revisar y ajustar
claude /test "fix failing tests in UserService.test.ts"
```

### Error: "Hooks not working" ⭐ NEW

**Problema**: El sistema de hooks no parece estar funcionando

**Solución**:
```bash
# Verificar que existe hooks.json
ls -la .agent/hooks/hooks.json

# Si no existe, copiar desde el template
cp .agent/hooks/hooks.json.example .agent/hooks/hooks.json

# Los hooks funcionan automáticamente en background
# No necesitas invocarlos manualmente

# Para verificar que funcionan:
# 1. Completa una tarea
claude "implement simple utility function"

# 2. Verifica que se guardó contexto (si aplica el evento)
# Los hooks se ejecutan en background sin output visible
```

### Error: "Build error resolver changed too much" ⭐ NEW

**Problema**: build-error-resolver hizo más cambios de los esperados

**Solución**:
```bash
# Revisar cambios antes de commit
git diff

# Si hay cambios no deseados:
git checkout -- archivo-no-deseado.ts

# Usar con instrucciones más específicas
❌ claude "Use build-error-resolver to fix everything"
✅ claude "Use build-error-resolver to fix only TypeScript type errors, minimal changes"

# O fix incremental
✅ claude "Use build-error-resolver to fix only import errors in src/components/"
```

### Error: "Refactor-cleaner removed important code" ⭐ NEW

**Problema**: refactor-cleaner removió código que sí se usaba

**Solución**:
```bash
# PREVENCIÓN: Siempre usa git branch
git checkout -b refactor/test
claude "Use refactor-cleaner to analyze dead code"

# ROLLBACK si algo salió mal:
git checkout main
git branch -D refactor/test

# MEJOR: Análisis primero, remoción después
✅ claude "Use refactor-cleaner to analyze and report unused code only (don't remove)"
# Revisa el reporte manualmente
✅ claude "Use refactor-cleaner to remove only unused dependencies from the report"

# Incremental y con tests:
✅ claude "Use refactor-cleaner to remove unused dependencies only" && npm test
```

### Error: "MCP integration not working" ⭐ NEW

**Problema**: No puedo usar GitHub/Supabase via MCP

**Solución**:
```bash
# 1. Verificar que copiaste la config
ls ~/.claude/mcp-servers/mcp-servers.json

# 2. Si no existe, copiar
cp .agent/mcp-configs/mcp-servers.json ~/.claude/mcp-servers/

# 3. Agregar credenciales necesarias
# Editar ~/.claude/mcp-servers/mcp-servers.json
# Agregar GITHUB_TOKEN, SUPABASE_URL, etc.

# 4. Reiniciar Claude Code
# Las configs MCP se cargan al inicio

# 5. Verificar con comando simple
claude "test GitHub MCP connection"
```

### Error: "Verification loop too strict" ⭐ NEW

**Problema**: verification-loop marca demasiados errores

**Solución**:
```bash
# Ajustar nivel de verificación
❌ claude /verification-loop "validate everything strictly"
✅ claude /verification-loop "validate critical paths only"

# Especificar qué validar
✅ claude /verification-loop "validate only: type safety, security, tests passing"

# Ignorar métricas no críticas temporalmente
✅ claude /verification-loop "validate for MVP: security and functionality only, skip documentation and coverage"
```

---

## 🎓 Mejores Prácticas por Equipo

### Para Desarrolladores Solo

- Usa `/brainstorm` antes de empezar features
- `node .agent/scripts/checklist.js .` antes de cada commit
- `build-error-resolver` para resolver errores rápidamente ⭐
- `refactor-cleaner` semanalmente para mantener código limpio ⭐
- `/verification-loop` antes de PRs importantes ⭐
- `node .agent/scripts/verify-all.js .` antes de cada deploy
- Consulta skills frecuentemente para aprender patrones
- Los hooks aprenden automáticamente - solo trabaja normalmente ⭐

### Para Equipos Pequeños (2-5 personas)

- Definan workflows estándar con `/plan`
- Usen `orchestrator` para features complejas
- Implementen `checklist.js` en CI/CD
- Usen `verification-loop` en pre-merge hooks ⭐
- `build-error-resolver` en CI para auto-fix ⭐
- Refactoring mensual con `refactor-cleaner` ⭐
- Documenten decisiones con `documentation-writer`
- MCP configs compartidos para servicios comunes ⭐

### Para Equipos Enterprise

- Customicen agentes para su stack
- Agreguen skills con patrones internos
- Integren `checklist.js` y `verify-all.js` en pipeline de CI/CD
- `build-error-resolver` en pipeline para auto-recovery ⭐
- `verification-loop` como quality gate pre-producción ⭐
- Continuous learning compartido entre equipo ⭐
- MCP configs para todos los servicios internos ⭐
- `refactor-cleaner` automatizado mensualmente ⭐
- Usen `compliance-checker` para estándares
- Hooks customizados para flujos enterprise ⭐

---

## 📚 Recursos de Aprendizaje

### Orden Recomendado para Aprender el Kit

1. **Semana 1**: Agentes básicos
   - frontend-specialist
   - backend-specialist
   - test-engineer

2. **Semana 2**: Skills fundamentales
   - clean-code
   - vue3-expert o nextjs-react-expert
   - testing-patterns

3. **Semana 3**: Workflows
   - /test
   - /brainstorm
   - /plan

4. **Semana 4**: Avanzado
   - orchestrator
   - security-auditor
   - Scripts de validación

### Práctica Diaria

```bash
# Cada día
claude /brainstorm "daily standup insights"
node .agent/scripts/checklist.js .

# Cada semana
claude "Use code-archaeologist to review code quality"
claude /verify-all --url http://localhost:3000

# Cada mes
claude "Use project-planner to review architecture decisions"
```

---

## 🎉 Conclusión

El Claude Code Kit v2.1.0 es más poderoso cuando:

1. **Usas agentes específicos** en lugar de requests genéricos
2. **Combinas múltiples agentes** para tareas complejas
3. **Consultas skills** antes de implementar
4. **Validas frecuentemente** con scripts Node.js
5. **Documenta y aprende** de cada interacción
6. **Dejas que los hooks aprendan** automáticamente de tu trabajo ⭐ NEW
7. **Usas build-error-resolver** para recovery rápido ⭐ NEW
8. **Mantienes código limpio** con refactor-cleaner ⭐ NEW
9. **Validas con verification-loop** antes de producción ⭐ NEW
10. **Aprovechas MCP integrations** para flujos completos ⭐ NEW

### Novedades v2.1.0 Resumen ⭐

**Sistema de Hooks:**
- Aprende automáticamente de tu trabajo
- Guarda y restaura contexto
- Optimiza tokens estratégicamente
- Sin intervención manual necesaria

**Nuevos Agentes:**
- `build-error-resolver` - Recovery automático de errores
- `refactor-cleaner` - Limpieza segura de código

**Nuevos Skills:**
- `continuous-learning-v2` - Aprendizaje de patrones
- `verification-loop` - Validación sistemática
- `strategic-compact` - Optimización de contexto
- `iterative-retrieval` - Búsqueda eficiente

**MCP Configs:**
- GitHub, Supabase, Vercel, Railway pre-configurados
- Integración lista para usar

**Scripts Node.js:**
- Migrados de Python para mejor integración
- Auto-detección de package manager
- Output profesional con colores

**Recuerda**: Los agentes y skills no son solo herramientas, son **conocimiento acumulado** de mejores prácticas. Úsalos como mentores virtuales. Con v2.1.0, el sistema también aprende de ti y se mejora automáticamente.

---

**¡Feliz coding con Claude Code Kit v2.1.0!** 🚀

**22 Agentes | 66 Skills | Hooks | MCP | Node.js | React + Vue 3**
