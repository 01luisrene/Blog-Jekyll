---
layout: post
title:  "Codear en LESS"
date:   2016-01-23 09:41:41 -0500
categories: Preprocesadores
tumblr_id: articulo-02
photo_url : "/assets/images/portadas/less.jpg"
description: "**LESS** es un preprocesador que extiende las posibilidades del CSS, es gracias a esta herramienta podemos tener un mejor control de nuestro código CSS y podemos crear (variables, mezclas, operaciones, reglas anidadas, ...)"
---
**LESS** es un preprocesador que extiende las posibilidades del __CSS__, es gracias a esta herramienta podemos tener un mejor control de nuestro código __CSS__ y podemos crear (**variables**, **mezclas**, **operaciones**, **reglas anidadas**, ...).

La mayoría de desarrolladores web a maquetado sus proyectos, sin utilizar un preprocesador __CSS__, y eso esta bien pero el problema se da cuando hay la necesidad de crear variables para poder usarlos en múltiples **clases** e **id** de nuestro proyecto por ejemplo.

Bueno para solventar estos inconvenientes es que se utiliza  un preprocesador como **LESS**.

En este tutorial te mostrare algunos ejemplos de uso, te recomiendo visitar la [documentación oficial de LESS](http://lesscss.org/features/).

### Página Oficial de LESS

Para aquellos que despertó su curiosidad como la mía en algún momento, aquí les dejo el link de la web oficial, para que puedan experimentar y profundizar sus conocimientos.

<a class="btn btn-link" href="http://lesscss.org/" title="LESS" rel="nofollow" target="_blank">LESS</a>

***

### Variables LESS

Para declarar variables el **LESS** se utiliza el prefijo `@` seguido de un cadena (texto) y se puede asignar cualquier valor que sea válido para __CSS__.

```
//Variables
//Estructura @nombre-variable

@bg: #BDBDBD;
@fuente-familia: "Roboto", serif, arial;
@color-primario: #00974B;
@padding: 15px;

body, html{
 background: @bg;
 font-family: @fuente-familia;
}
.header{
 color: @color-primario;
 padding: @padding;
}
```

Salida CSS:

```
body,
html {
 background: #BDBDBD;
 font-family: "Roboto", serif, arial;
}
.header {
 color: #00974B;
 padding: 15px;
}
```

### Mezclas ó Mixins LESS

Mixins son una manera de incluir ("mixing in") un montón de propiedades de un conjunto de reglas en otro conjunto de reglas.

```
@color-primario: #00974B;
@padding: 15px;

.bordered() {
 border-top: dotted 1px black;
 border-bottom: solid 2px black;
}

.header{
 color: @color-primario;
 padding: @padding;
 nav a{
  .bordered()
 }
}
```

Salida CSS:

```
.header {
  color: #00974B;
  padding: 15px;
}
.header nav a {
  border-top: dotted 1px black;
  border-bottom: solid 2px black;
}
```

### Operaciones LESS

Se pueden aplicar todas las operaciones matemáticas en LESS.

```
@padding: 15px;

body, html{
 margin: @padding - @padding;
}

.main{
 margin-left: auto;
 margin-right: auto;
 margin-top: @padding * 2;
 margin-bottom: @padding * 2;
 padding: (@padding - 5);
}
```

Salida CSS:

```
body,
html {
 margin: 0px;
}

.main {
 margin-left: auto;
 margin-right: auto;
 margin-top: 30px;
 margin-bottom: 30px;
 padding: 10px;
}
```

### Reglas Anidadas LESS

Escribir reglas anidadas con **LESS** es extremadamente sencillo.

```
@width-content: 940px;
@color-primario: #00974B;
@padding: 15px;
@fz: 16px;

.main{
 margin-left: auto;
 margin-right: auto;
 margin-top: @padding * 2;
 margin-bottom: @padding * 2;
 padding: (@padding - 5);
 max-width: @width-content;
 @media (max-width: @width-content){
  max-width: 100%;
 }
 p{
  font-size: @fz;
  line-height: @fz * 2;
 }
 a{
  border: thin solid @color-primario;
  display: inline-block;
  padding: (@padding - 10) @padding;
 }
}
```

Salida CSS:

```
.main {
 margin-left: auto;
 margin-right: auto;
 margin-top: 30px;
 margin-bottom: 30px;
 padding: 10px;
 max-width: 940px;
}
@media (max-width: 940px) {
 .main {
  max-width: 100%;
 }
}
.main p {
 font-size: 16px;
 line-height: 32px;
}
.main a {
 border: thin solid #00974B;
 display: inline-block;
 padding: 5px 15px;
}
```

## Compilar los Archivos LESS a CSS

Para poder usarlo en producción debemos compilar nuestros archivos **LESS** a **CSS** en la página de oficial de **LESS** puedes encontrar una lista de programas de [interfaz gráfico de usuario para LESS](http://lesscss.org/usage/#guis-for-less)

#### Ó

Lo puedes hacer con el automatizador de tareas **GULP.js** [aquí tienes una guía de como utilizar esta poderosa herramienta](http://01luisrene.com/blog/2016/08/24/automatizando-tareas-con-gulp/).

La decisión es tuya.

## Video Tutorial LESS

<iframe class="video-youtube" src="https://www.youtube.com/embed/TXLl-y44zmU?rel=0&showinfo=1&controls=1" frameborder="0" allowfullscreen></iframe>

## Descargar los Archivos

Acá pueden <a class="link" href="https://goo.gl/NhWKsE" target="_blank">descargar</a> los archivos que se a utilizado en el Vídeo Tutorial sobre LESS.