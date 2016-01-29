---
layout: post
title:  "Utilizar el Tookit Font Awesome"
date:   2016-01-22 09:41:41 -0500
categories: font-awesome toolkit
tumblr_id: 01-article
photo_url : "/assets/images/portadas/font-awesome.jpg"
description: "Utilizar el Toolkit Font Awesome es extremadamente fácil, pero la verdad yo al igual que ustedes aprendo de la web y la primera ves que lo vi me fue confuso, espero que su experiencia sea mejor..."
---
![Font Awesome]({{"/assets/images/portadas/font_awesome.jpg" | prepend: baseurl }} )

Utilizar el **Toolkit Font Awesome** es extremadamente fácil, pero la verdad yo al igual que ustedes aprendo de la web y la primera ves que lo vi me fue confuso, espero que su experiencia sea mejor.

**Toolkit Font Awesome** son fuentes en forma de iconos como  el logo de **Facebook**, **Twitter**, **Google Plus**, **HTML5**, **CSS3**, **GitHub**, **WordPress**, etc.

### Agregar Font Awesome desde su CDN

Vamos a utilizarlo desde su CDN es más practico y ayuda en la carga de tu web te lo aseguro.

Copiamos el link dentro de la etiqueta head en nuestro archivo ya sea HTML, PHP, etc.

{% highlight bash %}
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
{% endhighlight %}

### Mostrando los iconos

Te recomiendo visitar este link **<a class="btn btn-link" href="https://fortawesome.github.io/Font-Awesome/icons/" target="_blank">Iconos Font Awesome</a>** para ver los nombre de los iconos.

Elige el icono que vas a emplear y dale click, en la siguiente página te mostrara el código que debes de usar, como por ejemplo: <code>&#60;i class="fa fa-black-tie"&#62;&#60;/i&#62;</code>.

Así de simple mi amigo(a) espero que te sea de utilidad para tus proyectos.

### Uso en tu proyecto web

Aquí un pequeño código para comprenderlo mejor.

{% highlight html %}
<!DOCTYPE html>
<html lang="es-PE">
<head>
<meta charset="UTF-8">
<title>Uso de Font Awesome</title>
<!-- link de font awesome-->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
<style>
  ul{ list-style-type: none;}
  ul li{ margin-bottom: 10px;}
  .fa{ color:tomato;}
</style>
</head>
<body>
<h1>Ejemplo de uso de los iconos Font Awesome</h1>
<h2>Descargar navegadores web</h2>
<ul>
  <li><i class="fa fa-firefox fa-2x"></i> <a href="#">Firefox</a></li>
  <li><i class="fa fa-internet-explorer fa-2x"></i> <a href="#">Internet Explorer</a></li>
  <li><i class="fa fa-chrome fa-2x"></i> <a href="#">Google Crhome</a></li>
  <li><i class="fa fa-safari fa-2x"></i> <a href="#">Safari</a></li>
  <li><i class="fa fa-opera fa-2x"></i> <a href="#">Opera</a></li>
</ul>
</body>
</html>
{% endhighlight %}

### Ejemplos del toolkit Font Awesome

Te recomiendo visitar esta página: <a class="btn btn-link" href="http://fortawesome.github.io/Font-Awesome/examples/" target="_blank">**Ejemplo Font Awesome**</a>, ahí encontraras ejemplos que espero que te sirvan.