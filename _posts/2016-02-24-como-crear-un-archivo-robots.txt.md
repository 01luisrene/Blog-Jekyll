---
layout: post
title:  "como crear un archivo robots.txt"
date:   2016-02-24 07:40:00
categories: robots.txt seo
tumblr_id: articulo-05
photo_url : "/assets/images/portadas/less.jpg"
description: "Crear un archivo robots.txt sirve para poder controlar, a que partes de tu sitio web, no quieres que accedan los rastreadores como (Googlebot, Googlebot-Image)..."
---

Crear un archivo **robots.txt**, sirve para poder controlar, a que partes de tu sitio web, no quieres que accedan los rastreadores como (Googlebot, Googlebot-Image).

En este tutorial vamos a crear un archivo de tipo **txt** con el nombre **robots.txt**.

El archivo **robots.txt** se incluye en la raíz del proyecto para que funcione correctamente.

{% highlight txt %}
	#LISTA DE SPIDERS http://www.robotstxt.org/db.html
	
	#Usar comodín (*) esta regla se cumplirá para todos los rastreadores
	User-agent: *
	#Reglas a cumplirse

	#Bloquear una carpeta para Googlebot
	User-agent: Googlebot
	Disallow: /privado/

{% endhighlight %}