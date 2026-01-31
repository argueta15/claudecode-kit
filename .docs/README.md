# .docs/ - Documentación Interna

Esta carpeta contiene documentación interna y archivos históricos del proyecto que no son necesarios para usuarios que descargan el kit.

---

## 📂 Estructura

### migration-history/
Documentación histórica del proceso de migración y integración:

- **ANALISIS_DESCARTADOS.md** - Análisis de archivos descartados durante la integración de everything-claude-code
- **INTEGRACION_COMPLETADA.md** - Log del proceso de integración
- **MIGRATION_COMPLETE.md** - Resumen de la migración desde antigravity-kit
- **CLAUDE_CODE_INTEGRATION.md** - Guía técnica de integración (info duplicada en ARCHITECTURE.md)
- **FEATURES.md** - Lista exhaustiva de features (info duplicada en README.md y GUIA_USO.md)

---

## 📌 Para Usuarios del Kit

Si descargaste el kit para usarlo en tu proyecto, **NO necesitas nada de esta carpeta**. Toda la documentación esencial está en el root:

- **README.md** - Overview del proyecto
- **GUIA_USO.md** - Guía completa de uso
- **ARCHITECTURE.md** - Arquitectura del sistema
- **QUICKSTART.md** - Inicio rápido
- **INSTALLATION.md** - Instalación

---

## 🗑️ Consideraciones

Esta carpeta puede ser excluida al distribuir el kit o al hacer fork del proyecto.

Si quieres excluirla de git, agrega a `.gitignore`:
```
.docs/
```

**Nota**: Actualmente la mantenemos en git para preservar el historial del proyecto.
