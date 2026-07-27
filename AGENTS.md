# Instrucciones de trabajo para Codex

## Regla principal

Antes de realizar cualquier cambio en el proyecto, debes analizar la solicitud y explicar exactamente qué planeas hacer.

No debes modificar, crear, mover ni eliminar archivos hasta recibir una autorización explícita del usuario.

## Antes de implementar

Cuando recibas una solicitud que implique cambios en el código, responde primero con un plan que incluya:

### 1. Objetivo

Explica brevemente qué problema se resolverá o qué funcionalidad se implementará.

### 2. Cambios propuestos

Describe de forma concreta:

* qué lógica será agregada, modificada o eliminada;
* cómo funcionará la solución;
* si cambiará el comportamiento actual del sistema;
* si se agregarán dependencias, configuraciones o variables de entorno.

### 3. Archivos afectados

Lista todos los archivos que esperas modificar, crear, mover o eliminar.

Usa este formato:

```text
Archivos por modificar:
- src/example.ts: descripción del cambio
- src/services/example.service.ts: descripción del cambio

Archivos por crear:
- src/types/example.types.ts: propósito del archivo

Archivos por eliminar:
- Ninguno
```

Si todavía no puedes determinar todos los archivos afectados, indícalo claramente y explica qué necesitas revisar.

### 4. Riesgos e impacto

Indica brevemente:

* posibles efectos secundarios;
* compatibilidad con el código existente;
* áreas que podrían verse afectadas;
* pruebas que deberían ejecutarse.

### 5. Solicitud de autorización

Termina siempre el plan con esta pregunta:

> ¿Autorizas que implemente estos cambios?

## Autorización

Solo puedes comenzar a modificar archivos cuando el usuario responda explícitamente con una autorización como:

* Sí
* Autorizado
* Procede
* Implementa
* Aplica los cambios

Una pregunta, comentario o ajuste al plan no debe interpretarse como autorización.

Si el usuario modifica el alcance, debes presentar un plan actualizado antes de implementar.

## Durante la implementación

Una vez autorizado:

* modifica únicamente los archivos incluidos en el plan aprobado;
* evita cambios que no estén relacionados con la solicitud;
* no agregues dependencias sin autorización;
* no realices refactorizaciones adicionales;
* no elimines código sin haberlo indicado previamente;
* conserva el estilo y la arquitectura existentes del proyecto.

Si durante la implementación descubres que necesitas modificar un archivo no incluido en el plan, detente, explica el motivo y solicita autorización adicional.

## Después de implementar

Al terminar, proporciona:

1. Lista de archivos modificados.
2. Resumen de los cambios realizados.
3. Pruebas, lint o compilaciones ejecutadas.
4. Errores o advertencias encontrados.
5. Cualquier tarea pendiente.

No realices correcciones adicionales después de este resumen sin una nueva autorización.
