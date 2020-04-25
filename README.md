# Gestión de tareas con React
## Por: José Alberto Jurado

GD #6 de Laboratorio de desarrollo de aplicaciones Web.
Aplicación en React que permite la gestión de tareas
simples. Las tareas se obtienen a partir de peticiones
a un servidor Express que maneja la conexión con una base
de datos en MySQL.

## Requerimientos

El sistema depende de que tengas [Knex.js](http://knexjs.org/) instalado de forma global.

```bash
npm i knex -g
```

## Instalación

1. Guarda el archivo .env.example como .env y modifica las variables para que coincidan con tu ambiente.

```bash
cp .env.example .env
```

2. Instala los paquetes indicados en el `package.json`.

```bash
npm install
```

3. Ejecuta las migraciones.

```bash
knex migrate:latest
```

## Ejecución

Ejecuta el siguiente comando para correr tanto el servidor
de Express como la aplicación en React al mismo tiempo.

```
run-p start server
```

Accede a la aplicación a partir de [localhost:3000](http://localhost:3000/).