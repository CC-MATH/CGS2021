# Gestión de la configuración del software
“La gestión de la configuración se refiere al proceso mediante el cual todos los artefactos relevantes para el proyecto y las relaciones entre ellos, se almacenan, recuperan, identifican de forma única y modifican.
## ¿Cuál es el origen de estos cambios?
* Condiciones empresariales cambian los requerimientos
* Reorganización o crecimiento/reducción de la empresa produce cambios en las prioridades proyectadas
* Necesidades de accionistas demandan modificación a los datos producidos por los sistemas.
* Restricciones presupuestales o de calendario causan una redefinición del sistema
## ¿Cómo opera la gestión de la configuración?
Cliente -> Administrador del proyecto -> Equipo de desarrollo y administrador de configuración
# Control de versiones
Mecanismo para mantener múltiples versiones de los archivos, de modo que cuando se modifica un archivo aún puede acceder a las revisiones anteriores.
Retiene y proporciona acceso a cada versión de cada archivo que se haya almacenado en el sistema.
* También proporcionan una forma para que los metadatos se adjunten a archivos individuales o colecciones de archivos.
Permite que los equipos que pueden distribuirse en el espacio y el tiempo colaboren.
* ¿Qué se hizo?
* ¿Cuándo?
* ¿Quién?
* ¿Porqué?
Control de versiones no se refiere únicamente al código.
* Pruebas
* Scripts de bases de datos
* Documentación
* Bibliotecas (libraries)
* Información de configuración
Los analistas deben guardar documentación de requerimientos.
Los testers deben mantener sus scripts de prueba y procedimientos.
Los administradores de proyectos deben almacenar sus planes de entrega, estadísticas de progreso y bitácoras de riesgos
Los cambios en el control de versiones, se harán públicos, estarán 
disponibles instantáneamente para todos los demás miembros del equipo.
Un desarrollador que se encuentra a mitad de trabajo no querrá dar commit a su código hasta haberlo terminado.
* Esto puede ser contraproducente.
* Algunos utilizan ramificaciones (branch)
Todos los sistema de control de versiones cuentan con la opción de agregar una descripción detallada al commit. 
Una descripción detallada ahorra horas de inspección de código.
* ¿Se agregó la modificación a master branch?
* ¿Qué pruebas se realizaron?
* ¿Incluye algún cambio a la bd de servicios?