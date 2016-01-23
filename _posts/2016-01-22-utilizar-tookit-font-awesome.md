---
layout: post
title:  "Utilizar el Tookit Font Awesome"
date:   2016-01-22 09:41:41 -0500
categories: font-awesome toolkit
tumblr_id: 01-article
---
Utilizar el <strong>Toolkit Font Awesome</strong> es extremadamente fácil, pero la verdad yo al igual que ustedes aprendo de la web y la primera ves que lo vi me fue confuso, espero que su experiencia sea mejor.

<h3>Agregar Font Awesome desde su CDN</h3>

Vamos a utilizarlo desde su CDN es más practico y ayuda en la carga de tu web te lo aseguro.

Copiamos el link dentro de la etiqueta head en nuestro archivo ya sea HTML, PHP, etc.
<pre><code>&#60;link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"&#62;
</code></pre>

<h3>Mostrando los iconos</h3>

Te recomiendo visitar este link <strong><a class="btn btn-link" href="https://fortawesome.github.io/Font-Awesome/icons/" target="_blank">Iconos Font Awesome</a></strong> para ver los nombre de los iconos.

Elige el icono que vas a emplear y dale click, en la siguiente página te mostrara el código que debes de usar, como por ejemplo: <code>&#60;i class="fa fa-black-tie"&#62;&#60;/i&#62;</code>.

Así de simple mi amigo(a) espero que te sea de utilidad para tus proyectos.

<h3>Uso en tu proyecto web</h3>

Aquí un pequeño código para comprenderlo mejor.
<pre><code>&#60;!DOCTYPE html&#62;
&#60;html lang="es-PE"&#62;
&#60;head&#62;
	&#60;meta charset="UTF-8"&#62;
	&#60;title&#62;Uso de Font Awesome&#60;/title&#62;
	&#60;!-- link de font awesome--&#62;
	&#60;link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"&#62;
	&#60;style&#62;
		ul
		{
			list-style-type: none;
		}
		ul li
		{
			margin-bottom: 10px;
		}
		.fa
		{
			color:tomato;
		}
	&#60;/style&#62;
&#60;/head&#62;
&#60;body&#62;
	&#60;h1&#62;Ejemplo de uso de los iconos Font Awesome&#60;/h1&#62;
	
	&#60;h2&#62;Descargar navegadores web&#60;/h2&#62;
		&#60;ul&#62;
		&#60;li&#62;
			&#60;i class="fa fa-firefox fa-2x"&#62;&#60;/i&#62; &#60;a href="#"&#62;Firefox&#60;/a&#62;
		&#60;/li&#62;
		&#60;li&#62;
			&#60;i class="fa fa-internet-explorer fa-2x"&#62;&#60;/i&#62; &#60;a href="#"&#62;Internet Explorer&#60;/a&#62;
		&#60;/li&#62;
		&#60;li&#62;
			&#60;i class="fa fa-chrome fa-2x"&#62;&#60;/i&#62; &#60;a href="#"&#62;Google Crhome&#60;/a&#62;
		&#60;/li&#62;
		&#60;li&#62;
			&#60;i class="fa fa-safari fa-2x"&#62;&#60;/i&#62; &#60;a href="#"&#62;Safari&#60;/a&#62;
		&#60;/li&#62;
		&#60;li&#62;
			&#60;i class="fa fa-opera fa-2x"&#62;&#60;/i&#62; &#60;a href="#"&#62;Opera&#60;/a&#62;
		&#60;/li&#62;
	&#60;/ul&#62;
&#60;/body&#62;
&#60;/html&#62;</code></pre>

<h3>Ejemplos del toolkit Font Awesome</h3>

Te recomiendo visitar esta página: <strong><a class="btn btn-link" href="http://fortawesome.github.io/Font-Awesome/examples/" target="_blank">Ejemplo Font Awesome</a></strong>, ahí encontraras ejemplos que espero que te sirvan.