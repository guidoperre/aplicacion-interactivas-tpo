# Institular Web

Este proyecto fue creado con [Create React App](https://github.com/facebook/create-react-app).

## Institular
Nuestra web es un Marketplace de profesores particulares con dos roles (profesores y alumnos), cada uno posee diferentes opciones para gestionar sus cursos.
La aplicación web se llama "Institular".
El usuario se podrá dar de alta en la misma creando un usuario tanto como profesor como alumno. Se le pedirá un mail de registro y una clave con la que poder acreditarse. La clave y nombre de usuario son únicas y no deben compartirse. En caso de que el dispositivo sea usado por más de un usuario se recomienda cerrar la sesión cada vez que se termine de usar la web.

La fase del producto esta en un estado Alpha ya que por el momento no se encuentra conectado a ningún servicio para obtener los datos.

## Requerimientos:
1.	npm instalado 
2.	node instalado


## Tecnologías:
1.	Versión npm -> 6.14.8
2.	Versión node -> 14.15.1
3.	React -> 18.2.0
4.	Material -> 5.10.6
5.	Bootsrtap -> 5.2.1
6.	

## Instalación:
$ git clone https://github.com/guidoperre/aplicacion-interactivas-tpo.git
$ cd ../path/to/the/file
$ npm install
$ npm start

## Rutas:
1.	Página de Inicio y presentación. (main)
En esta pagina se encuentra una breve descripción de lo que es la web y para que esta diseñada.
Información de quienes somos y un footer con nuestras redes sociales.
Desde esta misma pantalla, es posible ingresar si es que ya tenemos un usuario creado o bien crear una nueva cuenta.}

2.	Login. (/login)
Al entrar en esta ruta aparecerá un formulario de Login de usuario que se deberá rellenar con los datos que se le han facilitado para acceder a la web y pulsar el botón <Iniciar Sesión>. Si el mail y la clave introducidos son válidos, pasará a la pantalla principal. Dependiendo de el tipo de usuario que ingrese se mostraran unas opciones u otras.
Desde esta misma pantalla se le dará la opción al usuario de crear una cuenta y registrarse.


3.	Creación de cuenta. (/register)
Podrá crear usuario con rol de profesor o de alumno según se seleccione, se requieren unos datos mínimos para crear el usuario

4.	Profesor. (home/teacher)
Es la pagina principal que tiene el usuario con rol “profesor”, a la izquierda un menú para navegar entre las opciones que posee el profesor.
Con la opción de cerrar sesión en la parte superior, esta misma lo retornara la pantalla de inicio de sesión.

4.1.	Clases. (/home/teacher/classes)
Se listarán en una especie de fichas las materias que tiene el profesor disponible y cada una de ellas con la opción de iniciar, editar los datos de la clase, eliminar la clase y hacer comentarios de esta.

4.2.	Contratación de clases. (/home/teacher/hiring)
Se listarán en fichas las clases que un alumno contrato con ese profesor, se podrá ver la información del alumno que la solicito y podrá aceptar o declinar la clase solicitada.

4.3.	Comentarios de clases. (/home/teacher/comments)
En esta pantalla el profesor podrá ver los comentarios que hacen sus alumnos de cada clase, como acción adicional podrá aprobar el comentario o eliminarlo en caso de que lo considere.

5.	Estudiante. (home/student)
Es la página principal que tiene el usuario con rol “estudiante”, a la izquierda un menú para navegar entre las opciones que posee es estudiante.
Con la opción de cerrar sesión en la parte superior, esta misma lo retornara la pantalla de inicio de sesión.

5.1.	Búsqueda de clases. /home/student/search)
Esta pantalla posee búsqueda de clases que permitirá al usuario (alumno) filtrar las clases por nombre de materia, tipo, frecuencia y calificación.
Al seleccionar los filtros deberá presionar el botón de <Buscar> y mostrará en pantalla las clases que correspondan a dicho filtro, como dato inicial se mostrará el nombre de la clase y el valor, el usuario podrá ver a detalle los datos de los cursos (descripción, comentarios duración, etc.) si da click sobre la ficha respectiva. 

5.2.	Clases. /home/student/classes)
Es esta pantalla se listarán las clases en las que el estudiante esta registrado con la opción de hacer un comentario o calificar la misma.

## Arquitectura

Decidimos hacer una arquitectura orientada a la feature, siguiendo el modelo basico de clean architecture.

![image](https://user-images.githubusercontent.com/50251532/193357120-0045ce13-4ea1-4101-852d-81bf8078da94.png)

En la carpeta "routes" almacenamos las rutas hacia las diferentes pantallas.
En la carpeta de "screens" tenemos la division por feature en relacion a las diferentes pantallas.

![image](https://user-images.githubusercontent.com/50251532/193357234-214083d9-cb05-4661-9e86-9a7c65e4cd51.png)

Y en la carpeta "components" guardamos los distintos componentes visuales comunes a toda la aplicacion:

![image](https://user-images.githubusercontent.com/50251532/193357281-54917ae9-0ea3-44dc-b703-70a282befdb5.png)

Si nos metemos mas adentro de la carpeta "screens" podemos encontrar el desglose de pantalla, donde en cada una podemos ver el contenido de la misma, o las diferentes subpantallas que la componen:

![image](https://user-images.githubusercontent.com/50251532/193357408-89d79625-1654-4a24-90ad-19b5a77f4397.png)
  
Como se puede ver arriba, en la composicion de las pantallas dividimos las vistas en base a la parte de la pantalla que ocupan o la relacion que tienen con los otros componentes:
  
![image](https://user-images.githubusercontent.com/50251532/193357595-45624225-de53-4c9c-bda3-8fafc65088b9.png)
![image](https://user-images.githubusercontent.com/50251532/193357642-2e18a988-cd6f-4ff4-9fac-2c748f4867ae.png)

En la mayoria de las pantallas decidimos tener un .js o .jsx que coordine las diferentes parte de la misma. Esto nos resulto especialmente util cuando tenemos componentes en comun entre varias subpantallas.

## Colaboradores:
  1. Perre Guido Simon
  2. Perez Cimato Gonzalo
  3. Muñoz Mancera David
