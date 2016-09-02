---
layout: post
title:  "Jekyll - Instalar y Crear un Proyecto"
date:   2016-09-01 09:45:00 -0500
categories: Framework 
photo_url : "/assets/images/portadas/jekyllrb.jpg"
description: "Jekyll es un generador de páginas webs estáticas diseñado para la creación de blogs, es Open Source y esta desarrollado en el lenguaje de programación Ruby"
---
**Jekyll** es un generador de páginas webs estáticas diseñado para la creación de blogs, es Open Source y esta desarrollado en el lenguaje de programación Ruby.

**Jekyll** funciona perfectamente con [**GitHub Pages**](https://pages.github.com/), por ejemplo este blog esta creado con **Jekyll** y alojado en los servidores de **GitHub Pages** de forma gratuita.

> **Importante**: las gemas que no sean parte de core de **Jekyll** no funcionaran en [**GitHub Pages**](https://pages.github.com/).

## Página Oficial de Jekyll

Esta página contiene la documentación oficial y más.

<a class="btn-link link btn" href="https://jekyllrb.com/" target="_blank">Jekyll</a>

## Preparando la Instalación de Jekyll

**Nota**: la instalación de las gemas y la creación del proyecto se realizara desde la <a href="https://medium.com/@01luisrene/ejecutar-powershell-cmd-como-administrador-s-o-windows-10-3e9a0601bd8f#.tv1rk5lcl" target="_blnak"><strong>linea de comandos</strong></a>.

**Primero**: tenemos que tener instalado [Ruby](https://www.ruby-lang.org/es/) en nuestro sistema operativo.

>  Pasos para la [instalación de Ruby en Windows 10](http://01luisrene.com/blog/2016/08/30/instalar-ruby-en-windows-10/).

***

**Segundo**: vamos a instalar las gemas **Jekyll** y **Bundler** con el siguiente comando.

```
$ gem install jekyll bundler
```

Para ver la versión de **Jekyll** instalado ejecuta el siguiente comando.

```
$ jekyll -v
```

![Versión de Jekyll](/assets/images/posts/jekyll/jekyll_version.png)

***

**Tercero**: una vez instalado las gemas **Jekyll** y **Bundler**, vamos a crear nuestro primer proyecto hecho con **Jekyll**, para crear un nuevo proyecto ejecutamos el siguiente comando.

> Accede desde la linea de comandos al disco local ó carpeta donde quieres que se aloje tu proyecto.

```
$ jekyll new blog-jekyll && cd blog-jekyll
```

Una vez creado el proyecto **Jekyll** se apreciara una estructura de archivos similar a esto.

```
.
├── /_posts
|     ├── *.markdown
├── /css
|     ├── main.scss
├── .gitignore
├── _config.yml
├── about.md
├── feed.xml
├── Gemfile
├── Gemfile.lock
└── index.html
```

***

**Cuarto**: ahora vamos a correr nuestro servidor local para ver nuestro proyecto en funcionamiento.

```
$ bundle exec jekyll serve
```

***

**Quinto**: accede al navegador que uses y en la caja de direcciones url escribe `localhost:4000`, para ver tu proyecto en marcha.

![localhost](/assets/images/posts/jekyll/localhost.png)

Bueno mis amigos ahora ya podrán realizar la personalización y configuración en su proyecto **Jekyll**.