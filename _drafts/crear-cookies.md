---
layout: post
title:  "Cookie o galleta informática"
date: 2016-04-09 01:09:00 -0500
categories: JavaScript
tags: js javascript
photo_url : "/assets/images/portadas/cookies.png"
description: "Una Cookie o galleta informática, son pequeños archivos electrónicos que se alojan en el equipo del usuario, sirven para poder obtener información"
---
Una Cookie o galleta informática, son pequeños archivos electrónicos que se alojan en el equipo del usuario, sirven para poder obtener información como (**sesiones de usuario**, **carrito de compras**, **analíticas**, etc).

Cuando un servidor web ha enviado una página web a un navegador, la conexión se cierra, y el servidor se olvida de todo lo relacionado con el usuario.

Las cookies se inventaron para resolver el problema de "**cómo recordar información sobre el usuario**":

* Cuando un usuario visita una página web, su nombre puede ser almacenado en una cookie.

* La próxima vez que el usuario visita la página, la cookie "recuerda" su nombre.

> Es obligatorio informar a los usuarios, sobre las **cookies** que se están usando en tu sitio web.

En mi caso lo utilizo para poder validar, si el usuario acepto las condiciones sobre **políticas de cookies** en mi página web, si es así el mensaje se oculta, y si no acepta las condiciones el mensaje se seguirá mostrando.

Una vez explicado sobre **cookies o galletas informáticas**, vamos a escribir código **JavaScript** para crear, leer y eliminar una **cookie**.

## crear, leer y eliminar cookie

Las cookies se crea con la siguiente sintaxis `"username=Jennifer López; expires=Thu, 01 Dec 2017 12:00:00 UTC"`

**Descripción**:

* **username**: nombre de la cookie.
* **Jennifer López**: valor de cookie.
* **expires=Thu, 01 Dec 2017 12:00:00 UTC**: fecha de expiración.

### Código HTML

Para que funcione correctamente la aplicación tienes que ejecutarlo en un servidor local o remoto.

{% highlight html linenos %}
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>Cookies</title>
<style>
  /*No es tan importante*/
  h4{margin:0 0 10px 0;}
  .child-form{display:inline-block;width: 15%;}
  .btn{display: inline-block;border-radius: 3px;border:thin solid;cursor:pointer;padding: 3px 0; margin-top: 15px;width: 105px;}
  .message{color: green;display: block;height: 20px;margin-top: 15px;min-height: 50px;width: 300px;}
  .error{color:red;}
</style>
</head>
<body>
	<!--No cambiar las id de los tags html-->
<h4>Formulario de test</h4>
<form>
  <!--Contenedor del nombre cookie-->
  <input type="text" class="child-form" id="name_cookie_txt" placeholder="Nombre cookie">
  <!--Contenedor del valor cookie-->
  <input type="text" class="child-form" id="cookie_valor_txta" placeholder="Valor cookie">
   <!--Contenedor del valor numérico (días de vida de la cookie)-->
  <input type="text" class="child-form" id="num_dias_expirar_txt" placeholder="Número de días">
   <!--Botón para crear la cookie-->
  <button class="child-form btn" id="crear_cookie_btn">Crear cookie</button>
  <br>
  <!--Contenedor del nombre de la cookie a leer-->
  <input type="text" class="child-form" id="leer_cookie_txt" placeholder="Ingrese el nombre de la cookie">
  <!--Botón para leer la cookie-->
  <button class="child-form btn" id="leer_cookie_btn">Leer cookies</button>
  <br>
    <!--Contenedor del nombre de la cookie a eliminar-->
  <input type="text" class="child-form" id="eliminar_txt" placeholder="Nombre cookie a eliminar">
  <!--Botón para eliminar la cookie-->
  <button class="child-form btn" id="eliminar_cookie_btn">Eliminar cookies</button>
</form>
<textarea class="child-form message" placeholder="Mensajes" disabled></textarea>
<script src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
<script>
'use strict';
$(function(){
 //función para crear las cookies
function crearCookie(cookie_nombre, cookie_valor, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cookie_nombre + "=" + cookie_valor + "; " + expires + "; path=/";
}
 //función para leer las cookies
function leerCookie(cookie_nombre) {
    var name = cookie_nombre + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}
 //función para eliminar las cookies
function eliminarCookie(cookie_nombre) {
   return document.cookie = cookie_nombre + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/';
}
//crear cookie cuando el usuario de clic en el botón Crear cookie
 $('#crear_cookie_btn').on('click', function(e){
  e.preventDefault();
  var nCookie = $('#name_cookie_txt').val();
  var cValor = $('#cookie_valor_txta').val();
  var nDias = $('#num_dias_expirar_txt').val();
  var reg = /^([0-9]\s*)*$/;
  if(nCookie == 0){
    $('.message').addClass('error');
    $('.message').html('Ingrese el nombre de la cookie');
    return false;
  }
   if(cValor == 0){
    $('.message').addClass('error');
    $('.message').html('Ingrese el valor para cookie a crear');
     return false;
  }
  if(reg.test(nDias) && nDias != ""){
   crearCookie(nCookie, cValor, nDias);
    var d = new Date();
    d.setTime(d.getTime() + (nDias*24*60*60*1000));
   $('.message').removeClass('error');
   $('.message').html("Nombre cookie: "+nCookie+"="+cValor+"; expires="+d);
  }else{
    $('.message').addClass('error');
    $('.message').html('Ingrese un valor numérico, equivale a los días de vida de la cookie.');
    return false;
  }
  
 });

  //leer cookie cuando el usuario de clic en el botón Leer cookie
  $('#leer_cookie_btn').on('click', function(e){
    e.preventDefault();
    var nameCookieText = $('#leer_cookie_txt').val();
    var cookie = leerCookie(nameCookieText);
    if(nameCookieText != ""){
      if(cookie != ""){
        $('.message').removeClass('error');
        $('.message').html("Cookie: "+nameCookieText+"="+cookie);
      }else{
        $('.message').addClass('error');
        $('.message').html("Cookie: Null");
      }
    }else{
      $('.message').addClass('error');
      $('.message').text("Ingresa el nombre de la cookie");
    }
  });
  
  //eliminar cookie cuando el usuario de clic en el botón Eliminar cookie
  $('#eliminar_cookie_btn').on('click', function(e){
    e.preventDefault();
    var cEliminar = $('#eliminar_txt').val();
    var cLeer = leerCookie(cEliminar);
   if(cEliminar != ""){
      if(cLeer != ""){
        eliminarCookie(cEliminar);
        $('.message').removeClass('error');
        $('.message').html('Cookie eliminada : ' + cEliminar );
      }else{
        $('.message').addClass('error');
        $('.message').html('No existe cookie con ese nombre');
      }
    }else{
      $('.message').addClass('error');
      $('.message').html('Ingrese nombre de la cookie a eliminar');
    }
  });

});
</script>
</body>
</html>
{% endhighlight %}

### Ver en funcionamiento

<p data-height="300" data-theme-id="0" data-slug-hash="yOvBRo" data-default-tab="result" data-user="01luisrene" class="codepen">See the Pen <a href="http://codepen.io/01luisrene/pen/yOvBRo/">crear, leer y eliminar cookie</a> by Luis Rene Mas Mas (<a href="http://codepen.io/01luisrene">@01luisrene</a>) on <a href="http://codepen.io">CodePen</a>.</p>

## Solventar aviso de política de cookies

Este es la solución de tantas, para informar sobre las políticas de cookies.

<p data-height="268" data-theme-id="0" data-slug-hash="KzQPvN" data-default-tab="result" data-user="01luisrene" class="codepen">See the Pen <a href="http://codepen.io/01luisrene/pen/KzQPvN/">Cookies</a> by Luis Rene Mas Mas (<a href="http://codepen.io/01luisrene">@01luisrene</a>) on <a href="http://codepen.io">CodePen</a>.</p>

### Descargar archivos

<a class="btn btn-link" href="https://gist.github.com/01luisrene/978fcfa7c32e993736c1fa6d01e3d085" target="_blank">Cookies o galletas informáticas</a>
