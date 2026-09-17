# Lotería JS

## Objetivo de la Prueba

Este ejercicio tiene como objetivo evaluar tus conocimientos en JavaScript moderno (ES6+), incluyendo manipulación del DOM, estructuras de control, funciones, manipulación de arrays, objetos, generación de números aleatorios y testing.

Los ejercicios están diseñados para medir la comprensión y aplicación de estos conceptos sin depender de la memorización.

| Área | Estado actual |
| --- | --- |
| Home page | Implementada |
| Función para validar números | Implementada |
| Función para generar números aleatorios | Implementada |
| Función para comparar números | Implementada |
| Función para mostrar mensajes | Implementada |
| Función para mostrar historial números | Pendiente de implementar |
| Tests | Implementados con Vitest |


## Arquitectura y estructura

La estructura del proyecto sigue una separación sencilla entre las distintas funciones de JS:

```text
prova-nivell-js/
├── index.html
├── main.js
│
└── src/
│   └── scripts/
│       ├── lottery-iu.js // Manipulación del DOM
│       └── lottery.js    // Lógica de la loteria
│
├── tests/
│   └── lottery.test.js
│ 
├── .gitignore
└── README.md     
```