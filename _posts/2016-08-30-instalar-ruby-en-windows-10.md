---
layout: post
title:  "Instalar Ruby en Windows 10"
date:   2016-08-30 13:39:00 -0500
categories: Framework 
photo_url : "/assets/images/portadas/ruby.jpg"
description: 'Ruby es un lenguaje de programación interpretado, reflexivo y orientado a objetos, creado por el programador japonés Yukihiro "Matz" Matsumoto'
---

**Ruby** es un lenguaje de programación interpretado, reflexivo y orientado a objetos, creado por el programador japonés **Yukihiro "Matz" Matsumoto**.

En este artículo vamos a instalar **Ruby** en el Sistema Operativo Windows 10 para poder desarrollar aplicaciones con este lenguaje de programación.

Para instalarlo en el Sistema Operativo Windows 10 ó en otras versiones de forma sencilla utilizaremos la aplicación [RubyInstaller](http://rubyinstaller.org/).

## Pagina de RubyInstaller

<a class="btn link btn-link" href="http://rubyinstaller.org/" target="_blank">RubyInstaller</a>

## Pasos para la Instalación

Una vez abierta la página de **RubyIntaller** procedemos a descargar la aplicación haciendo <em>clic</em> en el botón <kbd>Download</kbd>.

![Botón descargar](/assets/images/posts/rubyinstaller/btn_download.png)

***

Esta página nos permite seleccionar la versión de **Ruby** y a la vez nos permite escoger el tipo de arquitectura ya sea 32 bits ó 64 bits donde correrá la aplicación **RubyInstaller**.

Para este tutorial voy a descargar **RubyInstaller** con `Ruby 2.3.1`

![Seleccionar versión de Ruby](/assets/images/posts/rubyinstaller/seleccionar_version_ruby.png)

***

Accedemos a la ruta donde se descargo **RubyInstaller**, que por defecto se guarda en la carpeta <i class="fa fa-folder-open" aria-hidden="true"></i>&nbsp;Descargas.

Para proceder con la instalación hacemos <em>clic derecho</em> y escogemos la opción <kbd>Abrir</kbd>

![Abrir RubyInstaller para la instalación](/assets/images/posts/rubyinstaller/abrir_rubyinstaller.png)

***

En esta ventana seleccionamos el idioma **"ingles"** para el lenguaje de programación **Ruby**,  como en la gran mayoría de lenguajes y hacemos <em>clic</em> en el botón <kbd>Ok</kbd>.

![Selecciona el idioma](/assets/images/posts/rubyinstaller/idioma_rubyinstaller.png)

***

Aceptamos los términos de licencia para el uso de **RubyInstaller** y hacemos <em>clic</em> en el botón <kbd>Next</kbd>.

![Términos de licencia RubyInstaller](/assets/images/posts/rubyinstaller/terminos_licencia.png)

***

Esta ventana nos muestra la ruta donde se instalara **Ruby** lo dejamos por defecto, seleccionamos la opción <kbd>Add Ruby executables to your PATH</kbd> y para finalizar hacemos <em>clic</em> en el botón <kbd>Install</kbd>

![Ruta y path RubyInstaller](/assets/images/posts/rubyinstaller/ruta_path.png)

***

Este es el progreso de instalación.

![Progreso de instalación RubyInstaller](/assets/images/posts/rubyinstaller/progreso.png)

> Para comprobar que la instalación a finalizado de forma correcta, abrimos la consola de comandos y ejecutamos

```
$ ruby -v
```

ó 

```
$ ruby --version
```

Este comando nos debe mostrar la versión instalada de **Ruby**  y debe funcionar de cualquier ruta porque agregamos la variable de entorno apuntando a **Ruby**.

![Test Ruby](/assets/images/posts/rubyinstaller/test_ruby.png)