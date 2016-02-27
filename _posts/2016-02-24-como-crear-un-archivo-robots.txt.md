---
layout: post
title:  "como crear un archivo robots.txt"
date:   2016-02-24 07:40:00
categories: robots.txt seo
tumblr_id: articulo-05
photo_url : "/assets/images/portadas/robots.txt.jpg"
description: "Crear un archivo robots.txt sirve para poder controlar, a que partes de tu sitio web, no quieres que accedan los rastreadores como (Googlebot, Googlebot-Image)..."
---
![Como crear un robots.txt]({{"/assets/images/portadas/robots.txt.jpg" | prepend: domain }} )

Crear un archivo **robot** sirve para poder controlar, a que partes de tu sitio web, no quieres que accedan los rastreadores como (Googlebot, Googlebot-Image).

En este tutorial vamos a crear un archivo de tipo **txt** con el nombre **robots.txt**, ahí detallaremos para que sirve cada linea de código.

El archivo **robots.txt** se incluirá en la raíz del proyecto para que funcione correctamente.

A continuación algunos de los comandos para el archivo de tipo **robots.txt**.

{% highlight bash linenos %}
#LISTA DE SPIDERS http://www.robotstxt.org/db.html

#Usar comodín (*): esta regla se cumplirá para todos los rastreadores de Google
User-agent: *
#Tus reglas a cumplirse ...

#Bloquear todo el sitio web para los rastreadores
Disallow: /

#Bloquear una carpeta específica
Disallow: /privado/

#Bloquear una página
Disallow: /página_privada.html

#Bloquear una imagen específica de Google Imágenes
User-agent: Googlebot-Image

Disallow: /images/foto_privada.jpg

#bloquear todas las imágenes que haya en el sitio web
User-agent: Googlebot-Image

Disallow: /

#Bloquear un tipo de archivo específico de Google Imágenes
User-agent: Googlebot

Disallow: /*.png$

#Bloquear las páginas del sitio, pero mostrar los anuncios de AdSense que haya en ellas, 
#mediante el bloqueo de todos los rastreadores web que no sean Mediapartners-Google. 
User-agent: *

Disallow: /

User-agent: Mediapartners-Google

Allow: /

#Bloquear a todas las sub carpetas que comienzan con la palabra privado
User-agent: Googlebot

Disallow: /privado*/

#Para bloquear el acceso a todas las URL que incluyan signos de interrogación (?).
#Por ejemplo, las variables que se pasan por url.
User-agent: Googlebot

Disallow: /*?

#Para bloquear URLs que terminen de una forma concreta, utiliza $. Por ejemplo, el código de muestra bloquea cualquier URL que acabe en .pdf.
User-agent: Googlebot

Disallow: /*.pdf$
{% endhighlight %}

Para mayor información consulte la ayuda en Google, [cómo bloquear URLs con robots.txt](https://support.google.com/webmasters/answer/6062596)