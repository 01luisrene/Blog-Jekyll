---
layout: post
title:  "GHOST Plataforma para Blogging"
date:   2016-06-01 13:06:41 -0500
categories:  
photo_url : "/assets/images/portadas/ghost.jpg"
description: "Ghost es una plataforma para blogging desarrollado en NODE.js de increíble velocidad con un cliente de administración con Ember.js y temas de Handlebars.js"
---

**Ghost** es una Plataforma para Blogging desarrollado en Node.js de increíble velocidad con un cliente de administración con **Ember.js** y temas de **Handlebars.js**.

En mi opinión es una excelente plataforma para blogging y lo mejor de todo es que esta publicado con <a class="link" href="https://opensource.org/licenses/MIT" target="_blank" rel="nofollow">licencia MIT</a>, lo cual significa que es completamente de código abierto.

Para poder utilizar esta plataforma primero tenemos que realizar algunas configuraciones.

## Instalaciones previas

<ul class="lista-ordenada">
	<li>
		 <a class="link" href="http://01luisrene.com/blog/2016/05/15/instalar-nodejs-en-windows/" target="_blank" rel="nofollow">Instalar Node.js - Windows</a>
	</li>
	<li>
		<blockquote>
			Ghost recomienda Node.js 0.10.x . Por favor, vea las <a class="link" href="http://support.ghost.org/supported-node-versions/" target="_blank" rel="nofollow">versiones de Node.js admitidas</a> para más información sobre todas las versiones compatibles.
		</blockquote>
	</li>
</ul>

### Instalación de Node.js en MAC

<ul class="lista-desordenada">
	<li>Para instalar Node.js visita la página <a class="link" href="https://nodejs.org/en/" target="_blank" rel="nofollow">https://nodejs.org/</a> y descargue el archivo ".pkg", <a class="link" href="http://support.ghost.org/supported-node-versions/" target="_blank" rel="nofollow">compatible con Ghost</a></li>
	<li>Haga clic en el archivo descargado para ejecutar el instalador, esto va a instalar ambas aplicaciones <strong>Node.js</strong> y <strong>NPM</strong>.</li>

	<li>Siga los pasos a través del instalador, finalmente introduzca la contraseña y haz clic en "instalar software".</li>

	<li>Una vez que el instalador haya finalizado, abre un  terminal y escriba <code>echo $PATH</code> para comprobar que la ruta <code>/usr/local/bin/</code> esta en su camino.</li>
</ul>

<strong>
	Nota:
</strong>

<blockquote>
	Si '/usr/local/bin' no aparece en su <code>$PATH</code>, consulte las sugerencias para solucionar problemas para encontrar la manera de agregarlo
</blockquote>

Si se queda atascado se puede ver todo el <a href="/assets/images/posts/ghost/install-node-mac.gif" target="_blank" rel="nofollow">proceso en acción aquí</a>.

### Instalación y ejecución de Ghost en MAC

<ul class="lista-desordenada">
<li>En la siguiente <a href="https://ghost.org/es/developers/">página de descargas</a> , pulse el botón <kbd>Download Ghost</kbd> para descargar la última versión de Ghost en un archivo zip.</li>

<li>
Haga clic en la flecha al lado del archivo recién descargado, y elegir 'Mostrar en Finder'.
</li>
<li>
En Finder, haga doble clic en el archivo zip descargado para extraerlo.
</li>
<li>A continuación, agarrar la carpeta recién extraída  'ghost-#.#.#'  y arrastrarlo a la barra de pestañas del terminal abierto, esto abre una pestaña nueva en el terminal con la ubicación correcta.</li>

<li>En el nuevo tab del terminal escribe <code>npm install --production</code> <b>tener en cuenta los dos guiones</b></li>

<li>Cuando haya terminado de instalarse las dependencias NPM, escribe <code>npm start</code> para iniciar Ghost en el modo de desarrollo</li>

<li>En un navegador, vaya a 127.0.0.1:2368 para ver su nueva configuración del blog Ghost</li>

<li>Cambiar la url por 127.0.0.1:2368/ghost y crear su usuario administrador para iniciar sesión, en el administrador de Ghost.</li>
</ul>

![Instalar Ghost en MAC](/assets/images/posts/ghost/install-ghost-mac.gif)

### Instalar Node en Windows

<ul class="lista-desordenada">
	<li>Para instalar Node.js visita la página <a class="link" href="http://01luisrene.com/blog/2016/05/15/instalar-nodejs-en-windows/" target="_blank">instalar Nodejs en Windows</a>
	</li>
</ul>

### Descargar Ghost

<ul class="lista-desordenada">
<li>En la <a href="https://ghost.org/es/developers/">página de descargas</a> , pulse el botón <kbd>Download Ghost</kbd> para descargar la última versión de Ghost en un archivo zip.</li>

<li>Haga clic archivo recién descargado, y selecciona 'Mostrar en la carpeta'.
<img src="/assets/images/posts/ghost/mostrar_carpeta_ghost_windows.png" alt="Mostrar Carpeta de Ghost Windows">
</li>

<li>Cuando se abra la carpeta, haga clic derecho sobre el archivo zip descargado y seleccione 'Extraer todo'.</li>
</ul>

Si se queda atascado se puede ver todo el <a href="/assets/images/posts/ghost/install-ghost-win.gif" target="_blank">proceso en acción aquí</a>.


### Instalación y ejecución de Ghost en Windows

<ul class="lista-desordenada">
<li>En el menú de inicio, buscar 'Node.js' y luego seleccione 'Node.js command prompt'</li>

<li>En el símbolo del sistema de Node.js, es necesario cambiar al directorio donde extrajo Ghost. Escribe: <code>cd Downloads/ghost-#.#.#</code> (sustituir los hashes '#' con la versión de Ghost descargado).</li>

<li>A continuación, en el 'Node.js command prompt' escribe <code>npm install --production</code> <b>tener cuenta los dos guiones</b></li>

<li>Cuando haya terminado de instalarse las dependencias NPM, escribe <code>npm start</code> para iniciar Ghost en el modo de desarrollo</li>

<li>En un navegador, vaya a 127.0.0.1:2368 para ver su nueva configuración del blog Ghost</li>

<li>Cambiar la url para 127.0.0.1:2368/ghost y crear su usuario administrador para iniciar sesión, en el administrador de Ghost.</li>
</ul>

Consulte la <a href="http://support.ghost.org/" target="_blank">documentación</a> de uso para obtener instrucciones sobre los pasos a seguir.

![Instalación de Ghost en Windows](/assets/images/posts/ghost/install-ghost-win-2.gif)

<strong>Advertencia</strong>
<blockquote>
	Hay un error en el instalador Node.js 0.10.30 de Windows que significa que puede obtener el error "Error: ENOENT", en cuyo caso es necesario agregar manualmente la variable de entorno con la ruta apuntando hacia la carpeta "C:\Users\%USERNAME%\AppData\Roaming\npm"
</blockquote>

## Info Recopilada

La información a sido traducida de su sitio oficial <a class="link" href="http://support.ghost.org/installation/">http://support.ghost.org/installation/</a>, con algunas modificaciones.