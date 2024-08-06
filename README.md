Aplicación de formación para el GISS desarrollada por Daniel Gómez Galán y Miguel Manzanilla Ocaña

# TODO
  - [X] [Navegacion de la web](https://github.com/miguelmanzanillaocana/formacion/issues/2)
  - [X] Probar mat-table para situaciones[^1]
  - [ ] [Encontrar host](https://github.com/miguelmanzanillaocana/formacion/issues/5)
  - [ ] [Empezar seguridad web (inicio sesion, tipos de cuenta...)](https://github.com/miguelmanzanillaocana/formacion/issues/4)
  - [X] [Cambiar id responsable, id tecnologia... por su equivalente en texto](https://github.com/miguelmanzanillaocana/formacion/issues/3)
  - [X] [Mejorar formulario aplicaciones](https://github.com/miguelmanzanillaocana/formacion/issues/6)
  - [ ] [Modificar formulario aplicaciones con situaciones](https://github.com/miguelmanzanillaocana/formacion/issues/8)
  - [ ] [Crear administración aplicaciones](https://github.com/miguelmanzanillaocana/formacion/issues/9)

> [!WARNING]
> Encontrar host y arreglar navegación prioridad

# Endpoints Spring Aplicaciones
  - /aplicacion/ (GET) => recibe un array en JSON con todas las apliaciones
  - /aplicacion/{id} (GET) => recibe un JSON con la aplicacion que tenga el id
  - /aplicacion/delete/{cod} (DELETE) => borra la aplicacion con ese codigo
  - /aplicacion/insert (POST) => inserta nueva aplicacion, la aplicacion se pasa en el body del request
  - /aplicacion/update (PUT) => actualiza una aplicacion, los datos modificado se pasan en el body del request
## Area
  - /area/ (GET) => recibe un array en JSON con todas las areas
  - /area/insert (POST) => inserta una nueva area, la area se pasa en el body del request
  - /area/update (PUT) => actualiza una area, la area a actualizar se pasa en el body del request
## Subarea
  - /subarea/ (GET) => recibe un array en JSON con todas las subareas
  - /subarea/insert (POST) => inserta una nueva subarea, la subarea se pasa en el body del request
  - /subarea/update (PUT) => actualiza una subarea, la subarea a actualizar se pasa en el body del request
## Criticidad
  - /criticidad/ (GET) => recibe un array en JSON con todas las criticidades
  - /criticidad/insert (POST) => inserta una nueva criticidad, la criticidad se pasa en el body del request
  - /criticidad/update (PUT) => atualiza una criticidad, la criticidad a actualizar se pasa en el body del request
## Responsable
  - /responsable/ (GET) => recibe un array en JSON con todos los responsables
  - /responsable/insert (POST) => inserta un nuevo responsable, el responsable se pasa en el body del request
  - /responsable/update (PUT) = actualiza un responsable, el responsable a actualizar se pasa en el body del request
## Tecnologia
  - /tecnologia/ (GET) => recibe un array en JSON con todas las tecnologias
  - /tecnologia/insert (POST) => inserta una nueva tecnologia, la tecnologia se pasa en el body del request
  - /tecnologia/update (PUT) => actualiza una teconologia, la tecnologia a actualizar se pasa en el body del request
## Tecnologia Interfaz
  - /tecnologia-interfaz/ (GET) => recibe un array en JSON con todas las tecnologiasInterfaz
  - /tecnologia-interfaz/insert (POST) => inserta una nueva tecnologia de interfaz, la tecnologia de interfaz se pasa en el body del request
  - /tecnologia-interfaz/update (PUT) => actuliza una tecnologia de interfaz, la tecnologia de interfaz a atualizar se pasa en el body del request
## Tipo
  - /tipo/ (GET) => recibe un array en JSON con todos los tipos
  - /tipo/insert (POST) => inserta un nuevo tipo, el tipo se pasa en el body del request
  - /tipo/update (PUT) => actualiza un tipo, el tipo a actualizar se pasa en el body del request
## Volumen Evolutivo
  - /volumen-evolutivo/ (GET) => recibe un array en JSON con todos los volumenes evolutivos
  - /volumen-evolutivo/insert (POST) => inserta un nuevo volumen-evolutivo, el volumen evolutivo se pasa en el body del request
  - /volumen-evolutivo/update (PUT) => actuliza un volumen-evolutivo, el volumen evolutivo a actualizar se pasa en el body del request
## Volumen Usuarios
  - /volumen-usuarios/ (GET )=> recibe un array en JSON con todos los volumenes de usuario
  - /volumen-usuarios/insert (POST) => inserta un nuevo volumen-usuarios, el volumen-usuarios se pasa en el body del request
  - /volumen-usuarios/update (PUT) => actualiza un volumen de usuarios, el volumen de usuarios se pasa en el body del request

# Endpoints Spring Situaciones
  - /situacion/ (GET) => recibe un array en JSON con todas las situaciones
  - /situacion/id/{id} (GET) => recibe un JSON con la situacion que tenga id id
  - /situacion/delete/{id} (DELETE) => borra la situacion que tenga ese id
  - /comentarioSituacion/ (GET) => recibe un array en JSON con todos los comentarios
  - /comentarioSituacion/id/{id} (GET) => recibe un array en JSON con todos los comentarios de la situacion que tenga ese id
  - /comentarioSituacion/id/{idSit}/{idCom} (GET) => recibe un JSON con el comentario especificado (idSit = idSituacion, idCom = idComentario)
  - /comentarioSituacion/delete/id/{id} (DELETE) => borra todos los comentarios de la situacion que tenga ese id
  - /comentarioSituacion/delete/{idSit}/{idCom} (DELETE) => borra el comentario que pertenezca a una situacion y tenga un id determinado (idSit = idSituacion, idCom = idComentario)
  - /comentarioSituacion/insert (POST) => inserta un nuevo comentario, el comentario se pasa en el body del request


[^1]: Esto no tiene importancia
