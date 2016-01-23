---
layout: post
title:  "Codear con LESS"
date:   2016-01-23 09:41:41 -0500
categories: LESS Preprocesador
tumblr_id: 02-article
---
La mayoría de programadores a utilizado por decadas las hojas de estilo <strong>CSS</strong>, que sirven para dar estilos, apariencia de como se vera su web.

El problema se da cuando hay la necesidad de crear variables para poder usarlos en múltiples <strong>clases e id</strong> por ejemplo.

<h3>Ejemplo con CSS</h3>
Tenemos las siguintes variables ( <code>.contenedor</code>, <code>.text</code>, <code>.link</code>, <code>#main</code> ).
<pre><code class="css">&#60;style type="text/css" media="screen"&#62;
	#main{
		background: #000;
		color: #fff;
		font-size: 20px;
	}
	.contenedor{
		background: #fff;
		color: #000;
		font-size: 16px;
	}
	.text{
		color: #fff;
		font-size: 18px;
	}
	.link{
		color: #000;
		font-size: 14px;
	}
&#60;/style&#62;</code></pre>

Este es un pequeño ejemplo, pero que pasaría si tenemos un mega proyecto ahí es donde <strong>LESS</strong> seria de gran ayuda.

<h3>Ejemplo con LESS</h3>

<pre><code class="css">&#60;style type="text/less" media="screen"&#62;
/*Variables LESS*/
@bg: #fff;
@color-black: #000;
@font-size-base: 16px;
#main{
	background: @color-black;
	color: @bg;
	font-size: @font-size-base + 4;
}
.contenedor{
	background: @bg;
	color: @color-black;
	font-size: @font-size-base;
}
.text{
	color: @color-black;
	font-size: @font-size-base + 2;
}
.link{
	color: @color-black;
	font-size: @font-size-base - 2;
}
&#60;/style&#62;</code></pre>

Este código al ser renderizado por <strong>LESS</strong> a <strong>CSS</strong> nos daría el mismo estilo que del ejemplo anterior, solo que nos deja con mas expectativas.

<h3>Página Oficial de LESS</h3>

Para aquellos que despertó su curiosidad como la mía en algún momento aquí les dejo el link de la web oficial para que puedan experimentar y profundizar sus conocimientos.

<a href="http://lesscss.org/" target="_blank"><strong>Página de LESS</strong></a>