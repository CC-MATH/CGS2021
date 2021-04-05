# Hola antipatrones! 

## Antipatrones de integración

Cuando un equipo de desarrollo trabaja de forma colaborativa en un mismo proyecto es necesario 
que planifiquen la forma y la frecuencia en que van a actualizar su progreso con el del resto
de integrantes.  
El fallar en crear un flujo para integrar el progreso, puede provocar que uno o varios miembros
del equipo trabajen sobre versiones desactualizadas del proyecto, lo cual puede llevar a que a
la pérdida de mucho trabajo.
Otra situación, producto de no tener un flujo bien definido de integración, son los problemas
al integrar las modificaciones de varios autores.  
Cuando las diferencias en las versiones de dos personas son pocas y sencillas, herramientas
como git o mercurial puede realizar integraciones automáticas, mezclando los cambios de ambos
autores. Pero cuando dos personas modifican el mismo archivo en las mismas líneas, estas
herramientas son incapaces de decidir cuáles cambios aceptar.
