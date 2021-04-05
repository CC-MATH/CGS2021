# `Branching` y `Merging`
## Branch
En general, una rama de desarrollo es una bifurcación del estado del código que crea un nuevo camino para la evolución de este. Puede ir en paralelo a otras ramas que se pueden generar.

## Merge
El hacer merge es prácticamente un complemento del `branching` ya que este nos permite volver a unir las ramas con una principal, no obstante, debemos tener cuidado ya que de haber conflictos entre las ramas deberemos solucionarlos de forma manual.

## `Branching`/`Merging` en integración continua
Un enfoque para la integración continua podría ser que cuando un desarrollador intente subir su código a la única línea principal, el servidor de integración continua intente compilar su código con el que ya hay en la línea principal y ejecutar los tests. Si todo es un éxito, el código se subirá correctamente al control de versiones, y si no, el desarrollador tendrá que solucionar los errores. Aquí es cuando entran en juego los beneficios de `branching` y `merging`, ya que con esto no entorpece el trabajo de los demás miembros.

## Técnicas dentro de la integración continua
### Release isolation
La estrategia Release Isolation incluye uno o más branches de `release` desde MAIN, permitiendo así la gestión concurrente de releases.

**Escenarios de uso:**
* Cuando necesitemos asilamiento y release concurrentes, manteniendo el branch principal estable.
* Cuando necesitamos varias releases en paralelo para soportar y entregar a nuestros clientes el branch de release adecuado.
* Cuando necesitamos un modelo de servicios para que nuestros clientes se actualicen a la próxima release por ejemplo: v1 -> v2.
* Cuando necesitemos snapshots de nuestro código fuente en tiempo de releases.

**Consideraciones:**
* Cada branch de release debe ser un hijo completo del branch principal.
* Los lanzamientos de producto se hacen desde branches de release.
* Bloquea (sólo lectura) el branch de release con permisos de acceso para evitar modificaciones en una release.
* Los cambios del branch de release se deben mergear (RI) a la principal. No deberíamos mergear (FI) desde el branch principal a los branches de release.
* Crea nuevas branches de release para las siguientes releases si queremos mantener ese nivel y aislamiento.
* Cualquier corrección entregada desde un branch de release puede incluir parches desde ese branch. Los patches pueden ser acumulativos o no-acumulativos independientemente del plan de branching.

### Feature isolation
Con la estrategia de Feature Isolation, podemos aislar cada funcionalidad en su propio branch dándonos una gran flexibilidad en términos de cuando movemos una release a producción. Esta estrategia también ayuda a evitar escenarios en los que un branch necesita ser publicado con las funcionalidades que estén terminadas en un branch mientras que las funcionalidades que no estén terminadas se quedan en sus branches. Mergea funcionalidades al branch principal a medida que se vuelven estables para una release, borra y crea nuevas branch de funcionalidad a medida que son necesarias.

**Escenarios de uso:**
* Cuando necesitemos asilamiento y desarrollo concurrente de funcionalidades bien definidas, protegiendo el branch principal.
* Cuando tengamos equipos separados desarrollando varias funcionalidades para un mismo proyecto.
* Cuando estemos creando un producto grande con muchas características que necesitan aislarse.
* Cuando desarrollamos funcionalidades en paralelo que no deben estar en el mismo ciclo de release.
* Cuando necesitemos la habilidad de quitar funcionalidades de una release. Eliminar una funcionalidad puede ser costoso y cuando sea necesario hay que hacerlo con cuidado.

**Consideraciones:**
* Cada branch de funcionalidad debe ser un hijo completo del branch principal.
* Mantén corta la vida del desarrollo de una funcionalidad, y mergea (RI) con la principal frecuentemente.
* Los branches de funcionalidad deben compilar y ejecutar los Build Verification tests (BVTs) del mismo modo que se hace en el branch principal.
* Mergea (FI) frecuentemente desde el branch principal a los branch de funcionalidad cuando haya cambios directamente en el branch principal.
* Mergea (RI) desde el branch de funcionalidad al branch principal en base a criterios de equipo objetivos, por ejemplo: Definition of Done (Dod).