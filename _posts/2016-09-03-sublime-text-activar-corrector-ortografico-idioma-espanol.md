---
layout: post
title:  "Sublime Text - Activar Corrector Ortográfico (Idioma Español)"
date:   2016-09-03 10:30:00 -0500
categories: 
photo_url : "/assets/images/portadas/sublimeText_correctorOrtografico.jpg"
description: "Sublime Text - usar este magnifico editor de código y texto se a vuelto imprescindible para muchos desarrolladores, en este tutorial vamos a activar el corrector ortográfico para el idioma español"
---
[Sublime Text](https://www.sublimetext.com/) - usar este magnifico editor de código y texto se a vuelto imprescindible para muchos desarrolladores, en este tutorial vamos a **activar el corrector ortográfico** para el idioma español.

En lo personal lo uso para escribir mis artículos que publico en este [blog](http://01luisrene.com), cabe mencionar que no es infalible pero ayuda en gran parte y me siento a gusto trabajando con el corrector de ortografía activado para el idioma español ya que por defecto esta activado el idioma ingles.

## Activar el Corrector Ortográfico

Los pasos pueden variar dependiendo de la versión de **Sublime Text**.

**Primero**: debes realizar la descarga del paquete para **Sublime Text** desde el siguiente [repositorio](https://github.com/01luisrene/Diccionario-espanol-LibreOffice).

![Descargar diccionario español y paquete Sublime Text](/assets/images/posts/sublime_text-corrector_ortografico/descargar_diccionario_y_paquete.png)

***

**Segundo**: descomprime el archivo `Diccionario-espanol-LibreOffice-master.zip` descargado.

![Descomprimir archivo](/assets/images/posts/sublime_text-corrector_ortografico/descomprimir.png)

***

**Tercero**: accede al interior de la carpeta que se creo al descomprimir el archivo, busca el paquete `Language - Spanish.sublime-package` el cual usaremos para activar el corrector ortográfico para el idioma español.

![Paquete Sublime Text con el diccionario español](/assets/images/posts/sublime_text-corrector_ortografico/paquete_diccionario_es.png)

***

**Cuarto**: copia <kbd>Ctrl + C</kbd>  el paquete `Language - Spanish.sublime-package`, para luego pegarlo <kbd>Ctrl + V</kbd> en la ruta que corresponda.

> **Sublime Text 2** : la ruta donde se instalo puede variar, pero para **Sublime Text 2** se debe pegar el paquete en la carpeta `Pristine Packages`.


```
C:\...\Sublime Text 2\Pristine Packages
```

![Carpeta Pristine Packages](/assets/images/posts/sublime_text-corrector_ortografico/carpeta_pristine_packages.png)

> **Sublime Text 3**: la ruta donde se instalo puede variar, pero para **Sublime Text 3** se debe pegar el paquete en la carpeta `Packages`.

```
C:\...\Sublime Text 3\Packages
```

![Carpeta Packages](/assets/images/posts/sublime_text-corrector_ortografico/carpeta_packages.png)

***

**Quinto**: abre **Sublime Text** ya sea la versión 2 ó 3.

Para poder activar el corrector ortográfico del idioma español nos dirigimos al <kbd>menú Sublime Text</kbd> + <kbd>View</kbd> + <kbd>Dictionary</kbd> + <kbd>Language - Spanish ></kbd> + <kbd>es_ANY</kbd>

![Activar Diccionario Español en Sublime Text](/assets/images/posts/sublime_text-corrector_ortografico/activar_diccionario_es.png)

Ahora ya esta activado.

***

**Sexto** : para activarlo o desactivarlo presiona la tecla <kbd>F6</kbd> ó la combinación de teclas <kbd>Fn + F6</kbd>

![Test Corrector Ortográfico](/assets/images/posts/sublime_text-corrector_ortografico/test.png)