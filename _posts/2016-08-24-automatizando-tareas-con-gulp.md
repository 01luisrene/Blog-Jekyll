---
layout: post
title:  "Instalación de Gulp.js para Automatizar Tareas Frontend"
date:   2016-08-24 00:00:00 -0500
categories: windows  
photo_url : "/assets/images/portadas/gulpjs.jpg"
description: "Gulp.js es una herramienta escrita en JavaScript, que nos permite automatizar tareas como comprimir archivos (CSS, JS, Imágenes), Compilar Archivos (SASS, LESS, STYLUS) y muchas otras tareas"
---
**Gulp.js**  es una herramienta escrita en JavaScript, que nos permite automatizar tareas como comprimir archivos (CSS, JS, Imágenes), Compilar Archivos (SASS, LESS, STYLUS) y muchas otras tareas; para que sea más fácil y placentero nuestro trabajo al momento de diseñar un sitio web.

Las tareas más comunes al cual nos enfrentamos todos lo días, al momento de maquetar un sitio web son por ejemplo:

* Trabajar con pre-procesadores CSS (SASS, LESS, STYLUS).
* Comprimir los archivos CSS y JS.
* Unificar múltiples archivos CSS, JS en un solo archivo.
* Agregar prefijos (**-webkit-**, **-moz-**, **-o-**, **-ms-**) a las propiedades CSS.
* Comprimir las imágenes que publicaremos.
* entre otras tareas.

Bueno si sabes de lo que estoy escribiendo anteriormente pues te quiero hacer de conocimiento que para realizar estas tareas existe **Gulp**.

> En este artículo te voy a explicar como instalar Gulp y crear un archivo `gulpfile.js` con algunas tareas comunes.

## Empezando con Gulp

<a class="link" href="http://gulpjs.com/" target="_blank">Página oficial de Gulp</a>

Para poder trabajar con **Gulp** tenemos que tener instalado [Node.js](http://01luisrene.com/blog/2016/05/15/instalar-nodejs-en-windows/), ya que **Gulp** trabaja en este entorno.

**Primero**: abre una consola y ejecuta el siguiente comando para instalar la interfaz de línea de comandos **Gulp** de forma global.

```
$ npm install --global gulp-cli
```

Para comprobar si se instalo de forma correcta en nuestro sistema, ejecuta en la consola el siguiente comando `gulp -v`

![Versión de Gulp](/assets/images/posts/gulpjs/gulpjs_version.png)

***

**Segundo**: Para este tutorial crearemos una carpeta con el nombre **gulp** que vendrá a ser nuestro proyecto, accedemos al interior de esta carpeta **desde la consola** y ejecutamos el siguiente comando para inicializar el proyecto.

```
$ npm init
```

<small>Te pedirá una serie de datos llena los campos que desees, para saltarte los datos que no desees llenar pulsa la tecla <kbd>Enter</kbd>, al culminar se abra creado el archivo con el nombre `package.json` con contenido similar al código siguiente.</small>

```
{
  "name": "gulp",
  "version": "1.0.0",
  "description": "Tutorial gulp",
  "main": "gulpfile.js", //No olvides main debe apuntar al archivo gulpfile.js que crearemos mas adelante
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Luis Rene Mas Mas",
  "license": "ISC"
}
```

***

**Tercero**: instalamos **Gulp** en nuestro proyecto **devDependencies**.

```
$ npm install --save-dev gulp
```

<small>Al ejecutar el comando anterior se modificara el `package.json`, creando una sección **devDependencies** gracias al comando `--save-dev` y se creara la carpeta <i class="fa fa-folder-open" aria-hidden="true"></i> node_modules en el proyecto.</small>

```
{
  "name": "gulp",
  "version": "1.0.0",
  "description": "Tutorial gulp",
  "main": "gulpfile.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Luis Rene Mas Mas",
  "license": "ISC",
  "devDependencies": {
    "gulp": "^3.9.1"	//Gulp agregado en nuestro proyecto
  }
}

```

***

**Cuarto**: creamos un archivo con el nombre `gulpfile.js` en la raiz de nuestro proyecto, este archivo nos va a servir para crear las tareas a realizar con **Gulp**.

Recordemos que debemos tener configurado nuestro `package.json` apuntando al archivo `gulpfile.js` para que funcione correctamente.

Para verificar que `package.json` apunta al archivo `gulpfile.js` abre el archivo, verifica que debe de estar de la siguiente forma `"main": "gulpfile.js"` y si no esta así modificalo.

***

## Plugins Gulp

Explora esta página para encontrar el plugin **Gulp** que se adapte a tu necesidad.

[Plugins Gulp](http://gulpjs.com/plugins/)

## Creando Nuestras Tareas con Gulp

Vamos a crear algunas tareas comunes con las que trabajamos al momento de desarrollar un proyecto en el lado del Frontend.

Recuerda que con lo que aprendas en este artículo seras capaz de realizar tus propias tareas personalizadas con **Gulp**.

> Nota: Para ejecutar la(s) tarea(s) ejecuta el comando <code><strong>gulp</strong></code> en tu consola.

### Compilar Archivos de SASS a CSS

Siempre que trabajemos un proyecto es recomendable hacerlo con un pre-procesador css, ya que es mas cómodo y fácil de dar mantenimiento en cualquier momento, te lo aseguro.

Dentro de nuestra carpeta <i class="fa fa-folder-open" aria-hidden="true"></i> <em>gulp</em> creamos una sub carpeta con el nombre <i class="fa fa-folder-open" aria-hidden="true"></i> <em>sass</em> donde se alojaran nuestros archivos `.scss`.

Instalamos el plugin `gulp-sass`

```
$ npm install gulp-sass --save-dev
```

Instalamos el plugin `gulp-notify`, servirá para mostrarnos un mensaje una vez terminada la tarea **Gulp**

```
$ npm install --save-dev gulp-notify
```

Código para archivo `gulpfile.js`

```
var gulp = require('gulp');
var sass = require('gulp-sass');
var notify = require('gulp-notify');

//Tarea para compilar archivos sass a css
gulp.task('sass', function () {
 return gulp.src('./sass/**/*.scss') //Ruta de la carpeta sass apuntando a los archivos `.scss`
  .pipe(sass().on('error', sass.logError)) //Compila los archivos `.scss` y muestra posibles errores
  .pipe(gulp.dest('./css'))//Carpeta donde se guardaran los archivos `.css` compilado
  .pipe(notify("Tarea sass terminada!")); //Mensaje gracias al plugin `gulp-notify`
});

//Vuelve a ejecutar la tarea cuando se modifica algún archivo 
gulp.task('watch', function(){
 gulp.watch('./sass/**/*', ['sass']);
});

//Tarea por defecto
gulp.task('default',['watch', 'sass']);
```

Para compilar los archivos **SASS** a **CSS** ejecuta el comando `gulp`, el cual te mostrara un mensaje similar a la imagen.

![Tarea SASS](/assets/images/posts/gulpjs/tarea_sass.png)

<small>También lo puedes realizar con el comando `gulp sass`, pero esta tarea se ejecutara una sola vez.</small>

> Esta tarea la puedes aplicar para archivos **LESS** instalando el plugin `npm install gulp-less --save-dev ` y para archivos **STYLUS** instalando el plugin `npm install gulp-stylus --save-dev `

### Comprimir archivos CSS

Crea una carpeta con el nombre <i class="fa fa-folder-open" aria-hidden="true"></i> <em>css</em> en el proyecto **gulp**.

Para comprimir archivos **CSS** instalaremos el plugin `gulp-clean-css` con el siguiente comando.

```
$ npm install gulp-clean-css --save-dev
```

Código para archivo `gulpfile.js`

```
var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var notify = require('gulp-notify');

//Tarea para comprimir archivos css
gulp.task('comprimir-css', function() {
 return gulp.src('css/*.css') //Ruta de la carpeta css apuntando a los archivos `.css`
  .pipe(cleanCSS({compatibility: 'ie8'})) //Comprime los archivos `.css`
  .pipe(gulp.dest('dist')) //Carpeta donde se guardara el archivo `.css` comprimido
  .pipe(notify("Tarea comprimir-css terminada!")); //Mensaje gracias al plugin `gulp-notify`
});

//Vuelve a ejecutar la tarea cuando se modifica algún archivo 
gulp.task('watch', function(){
 gulp.watch('./css/**/*', ['comprimir-css']);
});

//Tarea por defecto
gulp.task('default',['watch', 'comprimir-css']);
```



### Comprimir archivos JS

Crea una carpeta con el nombre <i class="fa fa-folder-open" aria-hidden="true"></i> <em>js</em> en el proyecto **gulp**.

Para comprimir archivos **JS** instalaremos el plugin `gulp-uglify` con el siguiente comando.

```
$ npm install  gulp-uglify --save-dev
```

Librería `pump` es requerida por el plugin `gulp-uglify`

```
$ npm install pump --save-dev
```

Código para archivo `gulpfile.js`

```
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pump = require('pump');

//Tarea para comprimir archivos js
gulp.task('compress-js', function (cb) {
 pump([
  gulp.src('js/*.js'), //Ruta de la carpeta apuntando a los archivos `.js`
  uglify(), //Comprime los archivos `.js`
  gulp.dest('dist')//Carpeta donde se guardara el archivo `.js` comprimido
   ],
    cb
  );
});

//Vuelve a ejecutar la tarea cuando se modifica algún archivo 
gulp.task('watch', function(){
 gulp.watch('./js/**/*', ['compress-js']);
});

//Tarea por defecto
gulp.task('default',['watch', 'compress-js']);
```

### Comprimir Imágenes

Para poder ayudar en la carga de nuestra página web al momento de ser renderizado en el navegador es aconsejable comprimir las imágenes para producción.

Pero realizar esta tarea puede ser engorrosa o hasta aburrida, pero gracias a **Gulp** esta tarea es mas fácil.

Crea una carpeta con el nombre <i class="fa fa-folder-open" aria-hidden="true"></i> <em>images</em> en el proyecto **gulp**.

Para poder comprimir nuestras imágenes instalaremos los siguientes plugins.

```
$ npm install gulp-imagemin --save-dev 
```

```
$ npm install imagemin-pngcrush --save-dev
```

Código para archivo `gulpfile.js`

```
var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var pngcrush = require('imagemin-pngcrush');
var notify = require('gulp-notify');

//Tarea para comprimir imágenes
gulp.task('images', function() {
 gulp.src('./images/**/*.{png,jpg,jpeg,gif,svg}')//Ruta a la carpeta images a puntando a las imágenes 
  .pipe(imagemin({
    progressive: true,
    svgoPlugins: [{removeViewBox: false}],
    use: [pngcrush()]
  }))
  .pipe(gulp.dest('./dist/images')) //Carpeta donde se guardaran las imágenes comprimidas
  .pipe(notify("La tarea images a culminado!"));//Mensaje gracias a `gulp-notify`
});

//Vuelve a ejecutar la tarea cuando se modifica algún archivo 
gulp.task('watch', function(){
	gulp.watch('./images/**/*', ['images']);
});

//Tarea por defecto
gulp.task('default',['watch', 'images']);
```

### Unir ó Concatenar archivos CSS y JS

Muchas veces trabajamos con múltiples archivos pero no los unimos en un solo archivo, porque es mas cómodo trabajarlo por separado.

Tal es el caso de los pre-procesadores que nos permiten importar un sin numero de archivos de su misma clase, para poder así tener una mejor legibilidad del código.

También es el caso manejar múltiples librerías **CSS**, **JS** de terceros.

Lo recomendable es apuntar a un solo archivo **CSS**, **JS** en producción ya que esto mejorara tu performance (carga de tu página web).

Para solventar este inconveniente vamos a aprender a unir múltiples archivos de una misma clase ya sea archivos **CSS** ó archivos **JS**.

Para unificar los archivos instalamos el plugin `gulp-concat`

```
$ npm install gulp-concat --save-dev
```

Código para archivo `gulpfile.js`

```
var gulp = require('gulp');
var concat = require('gulp-concat');
var notify = require('gulp-notify');

//Tarea para unir ó concatenar archivos
gulp.task('unir-files', function() {
 return gulp.src('./css/*.css') //Origen
  .pipe(concat('all.css'))	//Concatenado los archivos 
  .pipe(gulp.dest('./dist/')) //Destino
  .pipe(notify("La tarea unir-files a terminado!")); //Mensaje
});

//Vuelve a ejecutar la tarea cuando se modifica algún archivo 
gulp.task('watch', function(){
	gulp.watch('./css/**/*', ['unir-files']);
});

//Tarea por defecto
gulp.task('default',['watch', 'unir-files']);
```

> También se pueden unir archivos **JS** solo adapta la tarea <em>unir-files</em>, apunta a tus archivos `.js` y listo.

***

### Nuestras Tareas Gulp 

Al unir las tareas **Gulp** que realizamos en este tutorial quedaría de la siguiente forma:

> Archivo `package.json` 

<small>Si desean probar el proyecto en funcionamiento, creen su archivo `package.json` agreguen el siguiente código y ejecuten el comando `npm install` para instalar las librerías en el proyecto.</small>

```
{
  "name": "gulp",//Modifica el nombre del proyecto
  "version": "1.0.0",
  "description": "Tutorial gulp",//Modifica la descripción
  "main": "gulpfile.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Luis Rene Mas Mas",//Modifica el nombre
  "license": "ISC",
  "devDependencies": { //Nombre de los plugins Gulp instalados
    "gulp": "^3.9.1",
    "gulp-clean-css": "^2.0.12",
    "gulp-concat": "^2.6.0",
    "gulp-imagemin": "^3.0.3",
    "gulp-notify": "^2.2.0",
    "gulp-sass": "^2.3.2",
    "gulp-uglify": "^2.0.0",
    "imagemin-pngcrush": "^5.0.0",
    "pump": "^1.0.1"
  }
}
```

> Archivo `gulpfile.js`

```
var gulp = require('gulp');
var sass = require('gulp-sass');
var notify = require('gulp-notify');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var pump = require('pump');
var imagemin = require('gulp-imagemin');
var pngcrush = require('imagemin-pngcrush');
var concat = require('gulp-concat');

//Tarea para compilar archivos sass a css
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(notify("Tarea sass terminada!"));
});

//Tarea para comprimir archivos css
gulp.task('minify-css', function() {
  return gulp.src('css/*.css')
   .pipe(cleanCSS({compatibility: 'ie8'}))
   .pipe(gulp.dest('dist'))
   .pipe(notify("Tarea minify-css terminada!"));
});

//Tarea para comprimir archivos js
gulp.task('compress-js', function (cb) {
  pump([
        gulp.src('js/*.js'),
        uglify(),
        gulp.dest('dist')
    ],
    cb
  );
});

//Tarea para comprimir imagenes
gulp.task('images', function() {
  gulp.src('./images/**/*.{png,jpg,jpeg,gif,svg}')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngcrush()]
    }))
    .pipe(gulp.dest('./dist/images'))
    .pipe(notify("La compresión de imágenes a culminado!"));;
});

//Tarea para unir ó concatenar archivos
gulp.task('unir-files', function() {
 return gulp.src('./css/*.css') //Origen
  .pipe(concat('all.css'))  //Concatenado los archivos 
  .pipe(gulp.dest('./dist/')) //Destino
  .pipe(notify("La tarea unir-files a terminado!")); //Mensaje
});

//Vuelve a ejecutar la tarea cuando se modifica algún archivo 
gulp.task('watch', function(){
 gulp.watch('./sass/**/*', ['sass']);
 gulp.watch('./css/', ['minify-css']);
 gulp.watch('./js/', ['compress-js']);
 gulp.watch('./images/', ['images']);
 gulp.watch('./css/**/*', ['unir-files']);
});

//Tareas por defecto
gulp.task('default',['watch', 'sass', 'minify-css', 'compress-js', 'images', 'unir-files']);
```

Espero que les sirva este tutorial hasta otro post :D
