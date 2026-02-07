---
name: vue3-expert
description: Vue 3 Composition API, Nuxt 3, Pinia patterns
version: 1.0
---

# Vue 3 Expert

Expertise en Vue 3 con Composition API, script setup, y Pinia.

## Reactivity

```vue
<script setup lang="ts">
import { ref, computed } from 'vue'

const count = ref(0)
const doubled = computed(() => count.value * 2)
</script>

<template>
  <div>{{ doubled }}</div>
</template>
```

Ver antigravity-kit para más patrones.
