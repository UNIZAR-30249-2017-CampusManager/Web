# Campus Manager Webapp

## Pasos previos para trabajar en la aplicación usando IntelliJ
1. Copiar la carpeta runConfigurations dentro de la carpeta .idea.

## Aportar al proyecto
1. Hacer un fork del proyecto
2. Hacer un clone del fork
3. Configurar el upstream al de la organización `git remote add upstream https://github.com/UNIZAR-30249-2017-CampusManager/CampusManagerWebapp.git`
4. Tras realizar algún cambio y tras haber hecho push al repositorio del fork, solicitar un `pull request` al repositorio de la organización.

### F.A.Q.
1. Nada más crear el proyecto y/o cuando se creen nuevas dependencias tanto en el fichero package.json o bower.json, ejecutar el setup "Instalar dependencias".
1. Cuando se esté en desarrollo en local en Intellij ejecutar siempre el setup "Ejecutar Spring".
1. Si por algún motivo se tuviese que borrar la configuración de node/bower en el proyecto, borrar los siguientes directorios:
  1. node_modules
  1. node
  1. src/main/resources/static/bower_components
1. Para limpiar el proyecto en la carpeta de salida, ejecutar la operación de maven "clean".
