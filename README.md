<div align="center">

# ✨ Windsurf Rules Tutor

![Status](https://img.shields.io/badge/status-active-success)
![Made with](https://img.shields.io/badge/made%20with-Windsurf-6C63FF)
![React](https://img.shields.io/badge/React-18-61dafb?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38BDF8?logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green)

<br/>
<sub>Un tutor interactivo que genera componentes educativos y los monta automáticamente en tu app.</sub>

</div>

---

Un tutor interactivo que crea componentes educativos en React a partir de tus solicitudes. Está impulsado por reglas en `.windsurfrules` que automatizan la creación de contenido didáctico con TypeScript, Tailwind CSS y `react-icons`.

## Índice rápido
- [¿Qué hace este proyecto?](#qué-hace-este-proyecto)
- [Cómo usarlo en Windsurf](#cómo-usarlo-en-windsurf)
- [Stack técnico](#stack-técnico)
- [Estructura esperada](#estructura-esperada)
- [Ejecutar localmente (opcional)](#ejecutar-localmente-opcional)
- [Notas sobre las reglas](#notas-sobre-las-reglas-windsurfrules)


## ¿Qué hace este proyecto?
- **Genera componentes educativos** en `src/components/` según el tema que pidas aprender.
- **Reemplaza** el componente `WelcomeScreen` en `src/App.tsx` por el nuevo componente interactivo.
- **Prioriza el aprendizaje**: explica conceptos en partes simples, con ejemplos, analogías, contexto real y elementos interactivos.

## Cómo usarlo en Windsurf
1. **Abre el proyecto** en Windsurf.
2. **Elige un modelo** en la parte superior de la UI.
3. **Pídele al asistente**: “Explícame [tu tema] con ejemplos interactivos”.
4. El asistente creará un componente en `src/components/` y actualizará `src/App.tsx` para mostrarlo.

Tip: Puedes pedir variaciones, ejercicios y evaluaciones por pasos. El asistente seguirá un flujo de tutoría iterativo (lecciones y ejercicios breves), acorde a las guías de enseñanza por pasos.

## Stack técnico
- React + TypeScript (Vite)
- Tailwind CSS
- `react-icons`

## Estructura esperada
- `src/components/` → componentes educativos generados por tema.
- `src/App.tsx` → monta el componente activo (el asistente lo reemplaza por ti).

## Ejecutar localmente (opcional)
Si quieres ver el proyecto en tu navegador:

```bash
npm install
npm run dev
```

Luego visita la URL que te muestre Vite (por defecto suele ser `http://localhost:5173`).

## Notas sobre las reglas (`.windsurfrules`)
El asistente:
- Usa TypeScript, Tailwind CSS y `react-icons` en los componentes.
- Divide temas complejos en partes simples, con ejemplos y analogías.
- Incluye elementos interactivos para reforzar el aprendizaje.
- Gestiona la implementación técnica automáticamente en segundo plano.

¡Listo! En Windsurf solo selecciona un modelo y pídele que te explique cualquier tema.

<details>
<summary>FAQ rápida</summary>

- ¿Necesito configurar algo especial? → No, solo abre el proyecto en Windsurf, elige un modelo y pide un tema.
- ¿Puedo guardar varias lecciones? → Sí, cada tema se genera como componente en `src/components/`.
- ¿Puedo personalizar estilos? → Usa utilidades Tailwind; el asistente puede ayudarte a aplicar un esquema de color.

</details>

