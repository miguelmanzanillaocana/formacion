Aplicación de formación para el GISS desarrollada por Daniel Gómez Galán y Miguel Manzanilla Ocaña

Endpoints Spring:
  - /aplicaciones/ (GET) => recibe un array en JSON con todas las apliaciones
  - /aplicaciones/id/{id} (GET) => recibe un JSON con la aplicacion que tenga el id
  - /aplicaciones/delete/{cod} (DELETE) => borra la aplicacion con ese codigo
  - /aplicaciones/insert (POST) => inserta nueva aplicacion, la aplicacion se pasa en el body del request
  - /aplicacion/update (PUT) => actualiza una aplicacion, los datos modificado se pasan en el body del request
  - /situacion/ (GET) => recibe un array en JSON con todas las situaciones
  - /situacion/id/{id} (GET) => recibe un JSON con la situacion que tenga id id
  - /situacion/delete/{id} (DELETE) => borra la situacion que tenga ese id
  - /comentarioSituacion/ (GET) => recibe un array en JSON con todos los comentarios
  - /comentarioSituacion/id/{id} (GET) => recibe un array en JSON con todos los comentarios de la situacion que tenga ese id
  - /comentarioSituacion/id/{idSit}/{idCom} (GET) => recibe un JSON con el comentario especificado (idSit = idSituacion, idCom = idComentario)
  - /comentarioSituacion/delete/id/{id} (DELETE) => borra todos los comentarios de la situacion que tenga ese id
  - /comentarioSituacion/delete/{idSit}/{idCom} (DELETE) => borra el comentario que pertenezca a una situacion y tenga un id determinado (idSit = idSituacion, idCom = idComentario)
  - /comentarioSituacion/insert (POST) => inserta un nuevo comentario, el comentario se psas en el body del request
  - /criticidad/ (GET) => recibe un array em JSON con todas las criticidades
  - /responsable/ (GET) => recibe un array en JSON con todos los responsables
  - /tecnologia/ (GET) => recibe un array en JSON con todas las tecnologias
  - /tecnologia-interfaz/ (GET) => recibe un array en JSON con todas las tecnologiasInterfaz
  - /tipo/ (GET) => recibe un array en JSON con todos los tipos
  - /volumen-evolutivo/ => recibe un array en JSON con todos los volumenes evolutivos
  - /volumen-usuarios/ => recibe un array en JSON con todos los volumenes de usuario

Errores conocidos:
  
