# GymTracker

Aplicación frontend moderna para el registro y seguimiento de entrenamientos de gimnasio.  
Permite registrar ejercicios, series, repeticiones y pesos, con el objetivo de visualizar la progresión de fuerza y volumen de entrenamiento a lo largo del tiempo.

Este proyecto está enfocado en demostrar arquitectura frontend escalable, diseño de componentes reutilizables y manejo avanzado de estado con React + TypeScript.

---

# 🚀 Demo

> Próximamente

---

# 🛠️ Stack Tecnológico

- React
- TypeScript
- Vite
- Material UI
- React Router
- Zustand
- React Query
- Recharts

---

# 💪 Funcionalidades

## Registro de entrenamientos
- Creación de sesiones de entrenamiento
- Añadir ejercicios por sesión
- Registro de series, repeticiones y peso
- Edición y eliminación de entradas

## Biblioteca de ejercicios
- Catálogo de ejercicios
- Agrupación por grupos musculares
- Selección rápida al crear entrenamientos

## Seguimiento de progreso
- Evolución de peso por ejercicio
- Volumen total por sesión
- Histórico de entrenamientos

## Dashboard
- Resumen semanal
- Ejercicios más trabajados
- Evolución de carga
- Gráficas de progreso

---

# 🧱 Arquitectura del Proyecto

Arquitectura modular basada en features para garantizar escalabilidad y separación de responsabilidades.

```txt
src/
│
├── app/
│   ├── routes/
│   ├── providers/
│   └── layouts/
│
├── components/
│   ├── ui/
│   ├── charts/
│   ├── forms/
│   └── feedback/
│
├── features/
│   ├── workouts/
│   ├── exercises/
│   ├── progress/
│   └── dashboard/
│
├── hooks/
├── services/
├── store/
├── types/
├── theme/
├── utils/
└── pages/
```

---

# 🧩 Modelo de dominio

## Workout (entrenamiento)
- fecha
- lista de ejercicios

## Exercise (ejercicio dentro de un workout)
- nombre
- grupo muscular
- series

## Set (serie)
- peso (kg)
- repeticiones
- RPE (opcional)

---

# ⚙️ Principios de arquitectura

## Feature-based structure
Cada módulo encapsula su lógica:
- UI
- hooks
- servicios
- tipos

Ejemplo:
- `features/workouts`
- `features/exercises`
- `features/progress`

---

## Componentes reutilizables
Diseño basado en composición.

Ejemplos:
- ExerciseCard
- SetRow
- WorkoutForm
- VolumeChart
- StatCard
- Modal

---

## Separación clara de responsabilidades
- UI desacoplada de lógica de negocio
- servicios mock para simulación de API
- hooks personalizados para encapsular lógica

---

# 📊 Estado de la aplicación

## Estado global (Zustand)
- usuario
- preferencias (tema, configuración)
- filtros globales

## Estado remoto (React Query)
- entrenamientos
- ejercicios
- estadísticas calculadas

---

# 📈 Visualización de datos

Uso de gráficos para representar:

- progresión de peso por ejercicio
- volumen total por sesión
- frecuencia de entrenamiento
- PRs (personal records)

Implementado con Recharts.

---

# 🎨 Sistema de diseño

Basado en Material UI con theme personalizado:

- dark / light mode
- spacing system consistente
- componentes tipados
- diseño responsive mobile-first

---

# 📱 Responsive design

Optimizado para:
- móvil (registro rápido de series)
- tablet (visualización de rutina)
- desktop (dashboard completo)

---

# ⚡ Optimización frontend

- lazy loading por rutas
- memoización de componentes pesados
- división por features
- hooks optimizados
- renderizado eficiente en listas de sets

---

# ♿ Accesibilidad

- navegación por teclado
- componentes semánticos
- foco visible en inputs críticos
- contraste optimizado para lectura en gym (uso móvil)

---

# 🧪 Futuras mejoras

- autenticación de usuarios
- sincronización con backend real
- exportación de entrenamientos (CSV / PDF)
- integración con wearables
- sistema de PR tracking automático
- Storybook para documentación de componentes

---

# 🧠 Aprendizajes del proyecto

Este proyecto refuerza conocimientos en:
- arquitectura frontend escalable con React
- modelado de dominio en frontend (workouts, sets, ejercicios)
- gestión de estado moderno
- visualización de datos de rendimiento
- diseño de sistemas UI reutilizables
- TypeScript aplicado a modelos complejos

---

# 📄 Licencia

MIT