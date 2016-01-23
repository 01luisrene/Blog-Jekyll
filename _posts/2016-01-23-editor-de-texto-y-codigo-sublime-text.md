---
layout: post
title: "Editor de texto y código Sublime Text"
date: 2016-01-23 10:49:00 -0500
categories: sublime-text editor
tumblr_id: 03-article
---

<strong>Sublime Text</strong> es un potente editor de texto y código, en mi opinión es agradable,  fácil de configurar y lo mejor de todo es que cuenta con múltiples <strong>plugins</strong>.

Personalmente lo uso para escribir código como ( <strong>CSS3</strong>, <strong>JavaScript</strong>, <strong>HTML5</strong> ).

<h3>Descargar sublime text</h3>

<strong>Sublime Text</strong> es multiplataforma, esta disponible en su versión (2 y 3).

<a class="btn btn-link" href="http://www.sublimetext.com/" target="_blank"><strong>Sublime Text</strong></a>

<h3>Instalando el Package Control</h3>

La instalación de <strong>Sublime Text</strong> es como toda aplicación, pero para poder instalar los <strong>plugins</strong>, primero tenemos que instalar el <strong>Package Control</strong>.

Nos dirigimos al menú de <strong>Sublime Text</strong> el la opción <kbd>View</kbd> > <kbd>Show Console</kbd>, el cual abrirá una caja de texto en la parte inferior, es ahí donde pegaremos el siguiente código.

<h4>Código para Sublime Text 2</h4>
<pre><code class="bash">import urllib2,os,hashlib; h = '2915d1851351e5ee549c20394736b442' + '8bc59f460fa1548d1514676163dafc88'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); os.makedirs( ipp ) if not os.path.exists(ipp) else None; urllib2.install_opener( urllib2.build_opener( urllib2.ProxyHandler()) ); by = urllib2.urlopen( 'http://packagecontrol.io/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); open( os.path.join( ipp, pf), 'wb' ).write(by) if dh == h else None; print('Error validating download (got %s instead of %s), please try manual install' % (dh, h) if dh != h else 'Please restart Sublime Text to finish installation')</code></pre>
<h4>Código para Sublime Text 3</h4>
<pre><code class="bash">import urllib.request,os,hashlib; h = '2915d1851351e5ee549c20394736b442' + '8bc59f460fa1548d1514676163dafc88'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); by = urllib.request.urlopen( 'http://packagecontrol.io/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); print('Error validating download (got %s instead of %s), please try manual install' % (dh, h)) if dh != h else open(os.path.join( ipp, pf), 'wb' ).write(by)</code></pre>

Esperamos a que se instale y si todo salio bien al realizar la combinación de teclas <kbd>ctrl + shift + p</kbd> se abrirá el Package Control.

<img src="{{site.url}}/assets/images/posts/sublime-text-package-control.jpg" alt="Sublime Text Package Control">

Ahora elegimos la opción <kbd>Install Package</kbd>, escribimos el nombre del plugin y elegimos el que deseamos instalar.

<img src="{{site.url}}/assets/images/posts/install-package.jpg" alt="Install Package">

Bueno amigos ahora pueden instalar los plugin que deseen.
