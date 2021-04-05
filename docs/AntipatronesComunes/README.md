# 3 Antipatrones de despliegue
---
## 1. Despliegue manual
Se crea un documento que contiene los pasos necesarios para desplegar la aplicación.
El desarrollador escribe los pasos para compilar y desplegar la aplicación. Un operador lee este manual
y procede a realizar cada uno de los pasos.
Este proceso es altamente propenso a errores, pues quien escribe el documento podría omitir algún paso,
o el lector podría realizarlos mal.
---
## 2. Despliegue de Big Bang
Este antipatrón consiste en que una gran cantidad de cambios se desplieguen a la vez (de allí la analogía con el big bang).
Tal y como puede inferirse, este antripatrón tiene probabilidades muy altas de introducir errores y de "romper" la aplicación,
pues pueden generarse muchos conflictos a la hora de intentar mezclar los cambios.
---
## 3. Configuración manual
La configuración del producto de software debería encontrarse en archivos de configuración para evitar que esta deba realizarse de forma manual
por miembros del equipo de desarrollo.
Realizar la configuración manual del ambiente de despliegue lleva a errores de configruación y a una incapacidad
de reproducir el mismo ambiente en cada ocasión.