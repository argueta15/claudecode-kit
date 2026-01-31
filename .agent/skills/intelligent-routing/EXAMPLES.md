# Intelligent Routing - Ejemplos Prácticos

Ejemplos de cómo el sistema de routing automático funciona en la práctica.

---

## 🎯 Ejemplos Simples (Single Agent)

### Frontend Vue 3

```bash
# Antes (manual)
claude "Use frontend-specialist to create a LoginForm component in Vue 3"

# Ahora (automático)
claude "Create a LoginForm component in Vue 3"
# 🤖 Applying knowledge of @frontend-specialist...
# → Auto-loads vue3-expert skill
```

### Frontend React/Next.js

```bash
# Antes (manual)
claude "Use frontend-specialist to create a Server Component for products"

# Ahora (automático)
claude "Create a Server Component for products in Next.js"
# 🤖 Applying knowledge of @frontend-specialist...
# → Auto-loads nextjs-react-expert skill
```

### Mobile Flutter

```bash
# Antes (manual)
claude "Use mobile-developer to create a product list screen with Provider"

# Ahora (automático)
claude "Create a product list screen in Flutter with Provider"
# 🤖 Applying knowledge of @mobile-developer...
# → Auto-loads flutter-expert skill
```

### Backend API

```bash
# Antes (manual)
claude "Use backend-specialist to create a user registration endpoint"

# Ahora (automático)
claude "Create a user registration API endpoint with validation"
# 🤖 Applying knowledge of @backend-specialist...
# → Auto-loads nodejs-best-practices and api-patterns skills
```

### Database Schema

```bash
# Antes (manual)
claude "Use database-architect to design a schema for e-commerce"

# Ahora (automático)
claude "Design database schema for an e-commerce platform"
# 🤖 Applying knowledge of @database-architect...
# → Auto-loads database-design skill
```

### Debugging

```bash
# Antes (manual)
claude "Use debugger to fix login 401 error"

# Ahora (automático)
claude "Login is failing with 401 error, help me debug"
# 🤖 Applying knowledge of @debugger...
# → Auto-loads systematic-debugging skill
```

### Testing

```bash
# Antes (manual)
claude "Use test-engineer to create tests for AuthService"

# Ahora (automático)
claude "Create unit tests for my AuthService class"
# 🤖 Applying knowledge of @test-engineer...
# → Auto-loads testing-patterns skill
```

---

## 🔄 Ejemplos Multi-Agente (Orchestrator)

### Authentication System (Security + Backend + Frontend)

```bash
# Antes (manual)
claude "Use orchestrator to coordinate security-auditor, backend-specialist, and frontend-specialist for building a login system"

# Ahora (automático)
claude "Build a secure login system with JWT authentication and dark mode UI"
# 🤖 Applying knowledge of @orchestrator...
# → Coordinates: security-auditor, backend-specialist, frontend-specialist, test-engineer
```

### E-commerce Feature (Database + Backend + Frontend + Mobile)

```bash
# Ahora (automático)
claude "Implement a shopping cart feature for web and mobile"
# 🤖 Applying knowledge of @orchestrator...
# → Coordinates: database-architect, backend-specialist, frontend-specialist, mobile-developer, test-engineer
```

---

## 🎨 Ejemplos por Stack

### Stack: Vue 3 + Node.js + PostgreSQL

```bash
# Frontend
claude "Create a user profile edit form in Vue 3 with Pinia"
# → @frontend-specialist (vue3-expert)

# Backend API
claude "Create API endpoint to update user profile"
# → @backend-specialist (nodejs-best-practices, api-patterns)

# Database
claude "Add columns to users table for profile fields"
# → @database-architect (database-design)

# Integration
claude "Connect Vue form to the update profile API"
# → @frontend-specialist + @backend-specialist
```

### Stack: Next.js + tRPC + Prisma

```bash
# Frontend
claude "Create product listing page using Server Components"
# → @frontend-specialist (nextjs-react-expert)

# Backend
claude "Create tRPC procedure for fetching products"
# → @backend-specialist (api-patterns)

# Database
claude "Design Prisma schema for products and categories"
# → @database-architect (database-design)
```

### Stack: Flutter + Supabase

```bash
# Mobile UI
claude "Create product list screen with pull-to-refresh in Flutter"
# → @mobile-developer (flutter-expert)

# Backend Integration
claude "Setup Supabase realtime subscriptions for products"
# → @mobile-developer + @backend-specialist (flutter-expert)

# Auth
claude "Implement Supabase OAuth with Google in Flutter"
# → @mobile-developer + @security-auditor (flutter-expert)
```

---

## 🔧 Ejemplos de Override Manual

Aún puedes especificar el agente manualmente cuando lo necesites:

```bash
# Forzar un agente específico
claude "Use code-archaeologist to analyze this legacy code"

# Forzar múltiples agentes
claude "Use security-auditor and penetration-tester to test this API"

# Usar skill directamente
claude /vue3-expert "Pinia store patterns"
```

---

## 🚨 Ejemplos de Edge Cases

### Pregunta General (No necesita agente)

```bash
claude "How does React useEffect work?"
# → Respuesta directa, sin agente (es una pregunta conceptual)
```

### Request Vago (Pide clarificación)

```bash
claude "Make it better"
# → "Could you clarify what you'd like to improve? Are you referring to performance, UI/UX, code quality, or something else?"
```

### Request Ambiguo (Pide especificación)

```bash
claude "Add mobile support"
# → "Do you want to:
#    1. Make the web app responsive for mobile browsers?
#    2. Create a native mobile app with React Native/Flutter?
#    Please clarify."
```

### Multi-Stack Detection

```bash
claude "Create a todo app with Vue frontend and FastAPI backend"
# 🤖 Applying knowledge of @orchestrator...
# → Detected: Frontend (Vue) + Backend (Python)
# → Coordinates: frontend-specialist, backend-specialist, database-architect, test-engineer
```

---

## 📊 Verificación del Routing

Para verificar que el routing está funcionando correctamente:

1. **Fíjate en el mensaje inicial**: Debe decir `🤖 Applying knowledge of @agent-name...`
2. **Revisa la respuesta**: Debe ser especializada para ese dominio
3. **Verifica skills cargados**: Los agentes cargan automáticamente sus skills

### Ejemplo de Verificación

```bash
claude "Create a ProductCard component in Vue 3"

# ✅ Correcto:
# 🤖 Applying knowledge of @frontend-specialist...
#
# I'll create a ProductCard component using Vue 3 Composition API...
# [Response includes Composition API patterns, script setup, etc.]

# ❌ Incorrecto:
# Here's a product card component...
# [Generic response without specialized knowledge]
```

---

## 💡 Tips para Mejores Resultados

### 1. Menciona el Stack Explícitamente

```bash
# Mejor
claude "Create login form in Vue 3 with Pinia"

# Menos específico
claude "Create login form"
```

### 2. Incluye Keywords Relevantes

```bash
# Mejor (menciona "test", "unit")
claude "Create unit tests for my AuthService"

# Menos específico
claude "Add tests"
```

### 3. Sé Específico con la Tecnología

```bash
# Mejor
claude "Create Flutter widget with Provider state management"

# Menos específico
claude "Create mobile screen"
```

### 4. Combina Dominios Claramente

```bash
# Mejor (claro que necesita múltiples dominios)
claude "Build secure payment API with Stripe integration and admin dashboard"

# Menos específico
claude "Add payments"
```

---

**Recuerda**: El routing automático está **SIEMPRE ACTIVO**. Solo escribe tu request naturalmente y el sistema seleccionará el agente apropiado automáticamente.
