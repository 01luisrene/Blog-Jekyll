---
layout: post
title: "Editor de texto y código Sublime Text"
date: 2016-01-23 10:49:00 -0500
categories: sublime-text editor
tumblr_id: 03-article
photo_url : "/assets/images/portadas/sublime-text.jpg"
description: "Sublime Text es un potente editor de texto y código, en mi opinión es agradable,  fácil de configurar y lo mejor de todo es que cuenta con múltiples plugins..."
---

**Sublime Text** es un potente editor de texto y código, en mi opinión es agradable,  fácil de configurar y lo mejor de todo es que cuenta con múltiples **plugins**.

Personalmente lo uso para escribir código como ( **CSS3**, **JavaScript**, **HTML5** ).

### Descargar sublime text

**Sublime Text** es multiplataforma, esta disponible en su versión (2 y 3).

<a class="btn btn-link" href="http://www.sublimetext.com/" target="_blank">**Sublime Text**</a>

### Instalando el Package Control

La instalación de **Sublime Text** es como toda aplicación, pero para poder instalar los **plugins**, primero tenemos que instalar el **Package Control**.

Nos dirigimos al menú de **Sublime Text** el la opción <kbd>View</kbd> > <kbd>Show Console</kbd>, el cual abrirá una caja de texto en la parte inferior, es ahí donde pegaremos el siguiente código.

#### Código para Sublime Text 2
{% highlight bash %}
import urllib2,os,hashlib; h = '2915d1851351e5ee549c20394736b442' + '8bc59f460fa1548d1514676163dafc88'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); os.makedirs( ipp ) if not os.path.exists(ipp) else None; urllib2.install_opener( urllib2.build_opener( urllib2.ProxyHandler()) ); by = urllib2.urlopen( 'http://packagecontrol.io/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); open( os.path.join( ipp, pf), 'wb' ).write(by) if dh == h else None; print('Error validating download (got %s instead of %s), please try manual install' % (dh, h) if dh != h else 'Please restart Sublime Text to finish installation')
{% endhighlight %}

#### Código para Sublime Text 3

{% highlight bash %}
import urllib.request,os,hashlib; h = '2915d1851351e5ee549c20394736b442' + '8bc59f460fa1548d1514676163dafc88'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); by = urllib.request.urlopen( 'http://packagecontrol.io/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); print('Error validating download (got %s instead of %s), please try manual install' % (dh, h)) if dh != h else open(os.path.join( ipp, pf), 'wb' ).write(by)

{% endhighlight %}

Esperamos a que se instale y si todo salio bien al realizar la combinación de teclas <kbd>ctrl + shift + p</kbd> se abrirá el Package Control.

![Sublime Text Package Control]({{ "/assets/images/posts/sublime-text-package-control.jpg" | prepend: site.baseurl }} "Sublime Text Package Control")

Ahora elegimos la opción <kbd>Install Package</kbd>, escribimos el nombre del plugin y elegimos el que deseamos instalar.

![Install Package]({{ "/assets/images/posts/install-package.jpg" | prepend: site.baseurl }} "Install Package")

Bueno amigos ahora pueden instalar los plugin que deseen.
