# Proyecto Final de Herramientas Build Y TecnologÌas Emergentes de Alejandro Lembke Barrientos

_Este es un Proyecto Final de Herramientas Build Y TecnologÌas Emergentes de Next University que consta de realizar una Tienda Virtual. En la cual se desarrollÛ una base de datos en RethinkDB, una AplicaciÛn API para la consulta de datos a la base de datos, y Dos Aplicaciones FrontEnd; una desarrollada en Angular y otra desarrollada en React_

## Instrucciones

_Estas instrucciones te permitir·n obtener una copia del proyecto en funcionamiento en tu m·quina local para propÛsitos de desarrollo y pruebas._

Mira **Deployment** para conocer como desplegar el proyecto.


### Pre-requisitos

_Para el proyecto nececitar·s tener instalado NPM, Node.js y si no cuentas con una computadora Windows tendtr·s que instalar RethinkDB_

### InstalaciÛn

_Para iniciar a utilizar la base de datos de RethinkDB corre el archivo localizado en:_

_corre el archivo localizado en:_

```
./base-de-datos/rethinkdb.exe
```

_Si no posees un entorno Windows debes instalar RethinkDB en tu computador_
_Luego debes Crear una Base de datos llamada  App_DB de esta forma:_ 

```
r.dbCreate('App_DB').run(conn, callback);
```

_Crea dos Tablas una llamada Productos y otra llamada Usuarios:_ 

```
r.db('App_DB').tableCreate('Productos').run(conn, callback);
```
```
r.db('App_DB').tableCreate('Usuarios').run(conn, callback);
```

_Ingresa los datos de Productos ubicados en: ./base-de-datos/productos.json , en la tabla Productos creada:_ 

```
r.db('App_DB').table('Productos').insert([{Objeto1},{Objeto2},{...}]).run(conn, callback)
```

_Ingresa los datos de Usuario ubicados en: ./base-de-datos/users.json , en la tabla Usuarios creada:_ 

```
r.db('App_DB').table('Usuarios').insert([{"carrito": [],"correo": "admin@admin.com","id": 1,"password":"$2a$10$wsYASoONm7ntjTIstLiCYeiLDZx1uG6dBYWn9R/AHHnPL9sAaEWs6"}]).run(conn, callback)
```

_Instala las dependencias de api-app abriendo la consola, ingresando al directorio: ./api-app y corriendo el comando:_ 

```
npm install
```

_Instala las dependencias de angular-app abriendo la consola, ingresando al directorio: ./angular-app y corriendo el comando:_ 

```
npm install
```

_Instala las dependencias de react-app abriendo la consola, ingresando al directorio: ./react-app y corriendo el comando:_ 

```
npm install
```

## Deployment

_Para Inicializar las aplicaciones hay que abrir la base de datos y 3 consolas distintas_

_Para inicializar la base de datos corre el archivo localizado en:_

```
./base-de-datos/rethinkdb.exe
``` 
_Para inicializar la aplicaciÛn api-app corre estos comandos:_
```
cd ./api-app
```
```
npm run start:dev
```

_Para inicializar la aplicaciÛn angular-app corre estos comandos:_
```
cd ./angular-app
```
```
ng serve
```

_Para inicializar la aplicaciÛn react-app corre estos comandos:_
```
cd ./react-app
```
```
npm start
```
_Ahora ya puedes usar las aplicaciones, para ingresar a la base de datos ingresa a: localhost:8080; para ingresar a api-app ingresa a: localhost:80; para ingresar a angular-app ingresa a: localhost:4200; para ingresar a react-app ingresa a: localhost:3000;_

_Datos para ingresar a usar las aplicaciÛn_

```
Email: admin@admin.com; ContraseÒa: admin
```

## Construido con:è

_Herramientas Utilizadas_

* [RethinkDB](https://www.rethinkdb.com/) - Base de Datos RethinkDB
* [React](https://reactjs.org/) - FrameworkFrontEnd React
* [Angular](https://angular.io/) - FrameworkFrontEnd Angular
* [Bootstrap](https://getbootstrap.com/) - FrameworkFrontEnd Responsive Bootstrap
* [Node.js](https://nodejs.org/es/) - Servidor

## Autoresè

_Menciona a todos aquellos que ayudaron a levantar el proyecto desde sus inicios_

* **Alejandro Lembke** - *Desarrollo del Proyecto* - [aleleba](https://github.com/aleleba)

## Gracias

* Comenta a otros sobre este proyecto
* Invitame una cerveza 
* Muchas Gracias por ver el proyecto.