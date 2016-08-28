---
layout: post
title:  "Realizar Animaciones con CSS3"
date:   2016-08-27 00:00:00 -0500
categories: windows  
photo_url : "/assets/images/portadas/animaciones_css3.jpg"
description: "Realizar animaciones con CSS3 es algo que hay que tener presente, porque gracias a las bondades del CSS3 podemos realizar animaciones hermosas"
---
Realizar animaciones con CSS3 es algo que hay que tener presente, porque gracias a las bondades del CSS3 podemos realizar animaciones hermosas.

En este artículo voy a mostrar algunas de las animaciones que se puede realizar con **CSS3**, espero despertar tu curiosidad para investigar más a fondo.

***

## Animación del planeta tierra con la luna

### Código HTMl

```
<section>
  <div class="planeta">
    <img class="tierra" src="http://01luisrene.com/assets/images/posts/animaciones_css3/tierra.png">
    <img class="luna" src="http://01luisrene.com/assets/images/posts/animaciones_css3/luna.png">
  </div>
</section>
```

### Código CSS3

```
/*
Animación de la tierra con la luna
*/
.planeta{
  animation-name: planeta;
  animation-duration: 10s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  -webkit-animation-name: planeta; /* Chrome, Safari, Opera */
  -webkit-animation-duration: 10s; /* Chrome, Safari, Opera */
  -webkit-animation-iteration-count: infinite; /* Chrome, Safari, Opera */
  -webkit-animation-timing-function: linear; /* Chrome, Safari, Opera */
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
}
.planeta, .planeta .tierra{
  height: 100px;
  width: 100px;
}
@keyframes planeta{
  100% {
    -ms-transform: rotate(360deg); /* IE 9 */
    -webkit-transform: rotate(360deg); /* Chrome, Safari, Opera */
    transform: rotate(360deg);
  }
}
/* Chrome, Safari, Opera */
@-webkit-keyframes planeta {
  100% {
    -ms-transform: rotate(360deg); /* IE 9 */
    -webkit-transform: rotate(360deg); /* Chrome, Safari, Opera */ 
    transform: rotate(360deg);
  }
}
.luna{
  animation-name: luna;
  animation-duration: 10s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  -webkit-animation-name: luna; /* Chrome, Safari, Opera */
  -webkit-animation-duration: 10s; /* Chrome, Safari, Opera */
  -webkit-animation-iteration-count: infinite; /* Chrome, Safari, Opera */
  -webkit-animation-timing-function: linear; /* Chrome, Safari, Opera */
  height: 50px;
  width: 50px;
}
@keyframes luna{
  100% {
  -ms-transform: rotate(-360deg); /* IE 9 */
  -webkit-transform: rotate(-360deg); /* Chrome, Safari, Opera */ 
	transform: rotate(-360deg);
	}
}
/* Chrome, Safari, Opera */
@-webkit-keyframes luna {
  100% { 
  -ms-transform: rotate(-360deg); /* IE 9 */
  -webkit-transform: rotate(-360deg); /* Chrome, Safari, Opera */ 
  transform: rotate(-360deg);
  }
}
```

### Resultado

<p data-height="265" data-theme-id="0" data-slug-hash="grVGxQ" data-default-tab="css,result" data-user="01luisrene" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/01luisrene/pen/grVGxQ/">Planeta tierra - Animación css</a> by Luis Rene Mas Mas (<a href="http://codepen.io/01luisrene">@01luisrene</a>) on <a href="http://codepen.io">CodePen</a>.</p>

***

## Animación de una Rueda

### Código HTML

```
<section >
  <img class="rueda" src="http://01luisrene.com/assets/images/posts/animaciones_css3/rueda.jpg" >
</section>
```

### Código CSS3

```
/*
Animación Rueda
*/
.rueda{
  animation-name: rueda;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  -webkit-animation-name: rueda; /* Chrome, Safari, Opera */
  -webkit-animation-duration: 2s; /* Chrome, Safari, Opera */
  -webkit-animation-iteration-count: infinite; /* Chrome, Safari, Opera */
  -webkit-animation-timing-function: linear; /* Chrome, Safari, Opera */
  display: block;
  margin: 0 auto;
  height:200px;
  width: 200px;
}
/* Chrome, Safari, Opera */
@-webkit-keyframes rueda {
  100% {
    -ms-transform: rotate(360deg); /* IE 9 */
    -webkit-transform: rotate(360deg); /* Chrome, Safari, Opera */ 
    transform: rotate(360deg);
  }
}
@keyframes rueda{
  100% {
    -ms-transform: rotate(360deg); /* IE 9 */
    -webkit-transform: rotate(360deg); /* Chrome, Safari, Opera */ 
    transform: rotate(360deg);
  }
}
```

### Resultado

<p data-height="265" data-theme-id="0" data-slug-hash="XKvZzp" data-default-tab="css,result" data-user="01luisrene" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/01luisrene/pen/XKvZzp/">Animación css3 - Rueda</a> by Luis Rene Mas Mas (<a href="http://codepen.io/01luisrene">@01luisrene</a>) on <a href="http://codepen.io">CodePen</a>.</p>

***

## Animación de un Gusanito

### Código HTMl

```
<section>
  <img class="gusanito" class="" src="http://01luisrene.com/assets/images/posts/animaciones_css3/gusano.png" alt="">
</section>
```

### Código CSS3

```
/*
Animación gusanito
*/
.gusanito{
  animation: muevete 15s infinite normal .5s ease-out;
  -webkit-animation: muevete 15s infinite normal .5s ease-out;
  position: relative;
  height: 80px;
}
@keyframes muevete {
  0%, 100%{
    left:0;
  }
  45%{
    left: 90%;
    -ms-transform: rotateY(0deg); /* IE 9 */
    -webkit-transform: rotateY(0deg); /* Chrome, Safari, Opera */
    transform:rotateY(0deg);
  }
  55%{
    left:90%;
    -ms-transform: rotateY(-180deg); /* IE 9 */
    -webkit-transform: rotateY(-180deg); /* Chrome, Safari, Opera */
    transform:rotateY(-180deg);
  }
  90%{
    left:0;
    -ms-transform: rotateY(-180deg); /* IE 9 */
    -webkit-transform: rotateY(-180deg); /* Chrome, Safari, Opera */
    transform:rotateY(-180deg);
  }
}

```

### Resultado

<p data-height="265" data-theme-id="0" data-slug-hash="wWVApb" data-default-tab="css,result" data-user="01luisrene" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/01luisrene/pen/wWVApb/">Animación CSS3 - Gusanito</a> by Luis Rene Mas Mas (<a href="http://codepen.io/01luisrene">@01luisrene</a>) on <a href="http://codepen.io">CodePen</a>.</p>

***

## Animación Cuadrado

### Código HTMl

```
<section class="cuadrado">
  <div></div>
</section>
```

### Código CSS3

```
.cuadrado div {
  width: 100px;
  height: 100px;
  background-color: red;
  position: relative;
  -webkit-animation-name: cuadrado; /* Chrome, Safari, Opera */
  -webkit-animation-duration: 4s; /* Chrome, Safari, Opera */
  -webkit-animation-iteration-count: 3; /* Chrome, Safari, Opera */
  -webkit-animation-direction: reverse; /* Chrome, Safari, Opera */
  animation-name: cuadrado;
  animation-duration: 4s;
  animation-iteration-count: 3;
  animation-direction: reverse;
}

/* Chrome, Safari, Opera */
@-webkit-keyframes cuadrado {
  0%   {background-color:red; left:0px; top:0px;}
  25%  {background-color:yellow; left:90%; top:0px;}
  50%  {background-color:blue; left:90%; top:80px;}
  75%  {background-color:green; left:0px; top:80px;}
  100% {background-color:red; left:0px; top:0px;}
}

/* Standard syntax */
@keyframes cuadrado {
  0%   {background-color:red; left:0px; top:0px;}
  25%  {background-color:yellow; left:90%; top:0px;}
  50%  {background-color:blue; left:90%; top:80px;}
  75%  {background-color:green; left:0px; top:80px;}
  100% {background-color:red; left:0px; top:0px;}
}
```

### resultado

<p data-height="265" data-theme-id="0" data-slug-hash="zBgEWw" data-default-tab="css,result" data-user="01luisrene" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/01luisrene/pen/zBgEWw/">Animación CSS3 - Cuadrado</a> by Luis Rene Mas Mas (<a href="http://codepen.io/01luisrene">@01luisrene</a>) on <a href="http://codepen.io">CodePen</a>.</p>

***

## Animación Rebote

### Código HTMl

```
<section class="circulo">
  <img src="http://01luisrene.com/assets/images/posts/animaciones_css3/balon-verde.png">
  <span></span>
</section>
```

### Código CSS3

```
.rebote img{
  width: 100px;
  height: 100px;
  margin-left: 50px;
  margin-top: 100px;
  position: relative;
  -webkit-animation-name: rebote; /* Chrome, Safari, Opera */
  -webkit-animation-duration: 2s; /* Chrome, Safari, Opera */
  -webkit-animation-iteration-count: infinite; /* Chrome, Safari, Opera */
  -webkit-animation-direction: reverse; /* Chrome, Safari, Opera */
  animation-name: rebote;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-direction: reverse;
  animation-timing-function: ease-out;
}
.rebote span{
  background-color: #2F2B2B;
  display: block;
  margin-top: -4px;
  height: 15px;
  width: 200px;
}
/* Standard syntax */
@keyframes rebote {
  0%   {left:0px; top:0px;}
  25%  {left:0px; top:0px;}
  50%  {left:0px; top:-100px;}
  75%  {left:0px; top:-100px;}
  100% {left:0px; top:0px;}
}
```

### Resultado

<p data-height="300" data-theme-id="0" data-slug-hash="bZXovX" data-default-tab="css,result" data-user="01luisrene" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/01luisrene/pen/bZXovX/">Animación CSS3 - Rebote</a> by Luis Rene Mas Mas (<a href="http://codepen.io/01luisrene">@01luisrene</a>) on <a href="http://codepen.io">CodePen</a>.</p>

## Info

[http://www.w3schools.com/css/css3_animations.asp](http://www.w3schools.com/css/css3_animations.asp)