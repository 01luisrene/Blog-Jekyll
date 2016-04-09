---
layout: post
title:  "Cookie o galleta informática"
date: 2016-04-09 01:09:00 -0500
categories: JavaScript
tags: js javascript
photo_url : "/assets/images/portadas/cookies.png"
description: "Una Cookie o galleta informática, son pequeños archivos electrónicos que se alojan en el navegador del usuario, sirven para poder obtener información"
---
Una Cookie o galleta informática, son pequeños archivos electrónicos que se alojan en el navegador del usuario, sirven para poder obtener información como (**sesiones de usuario**, **carrito de compras**, **analíticas**, etc).

Es obligación del propietario del sitio web informar a los usuarios, de las **cookies** que se están usando en su página web.

En mi caso lo utilizo para poder validar si el usuario acepto las condiciones sobre **políticas de cookies** en mi página web, si es así el mensaje se oculta y si no acepta las condiciones el mensaje se seguirá mostrando.

Una vez explicado sobre **cookies o galletas informáticas**, vamos a escribir código **JavaScript** para crear, leer y eliminar una **cookie**.

## Crear una cookie

<script>
	function setCookie(cname,cvalue,exdays) {
			    var d = new Date();
			    d.setTime(d.getTime() + (exdays*24*60*60*1000));
			    var expires = "expires=" + d.toGMTString();
			    document.cookie = cname+"="+cvalue+"; "+expires + "; path=/";
			}

			function getCookie(cname) {
			    var name = cname + "=";
			    var ca = document.cookie.split(';');
			    for(var i=0; i<ca.length; i++) {
			        var c = ca[i];
			        while (c.charAt(0)==' ') c = c.substring(1);
			        if (c.indexOf(name) == 0) {
			            return c.substring(name.length, c.length);
			        }
			    }
			    return "";
			}

	    var user=getCookie("_01lr");
	    if (user == "") {
	        $('#js_barra_aceptacion_cookie').css({
	          display: 'block'
	        });
	     }
			$('#js_btn_cookie').on('click', function(e) {
			  e.preventDefault();
			  user = '01luisrene';
			  if (user != "" && user != null) {
			    setCookie("_01lr", user, 30);
			    $('#js_barra_aceptacion_cookie').css({
	          display: 'none'
	        });
			    console.log("cookie creada: " + user);
			   }
			});
			if(user == ""){
        console.log("cookie actual: Null");
      }else{
			 console.log("cookie actual: " + user);
      }
    }
</script>


