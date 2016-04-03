---
layout: null
---
<html lang="es">
<head>
	<meta charset="UTF-8"/>
	<meta name="description" content="Lista de cursos de ultima generación a llevar el 2016"/>
	<meta name="viewport" content="width=device-width, user-scalable=no"/>
	<link href='https://fonts.googleapis.com/css?family=Open+Sans:400,700|Roboto:400,700' rel='stylesheet' type='text/css'/>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
	<title>Cursos a llevar 2016</title>
	<link rel="stylesheet" href="../css/estilos_cursos_2016.css">
</head>
<body class="cursos_2016">
	<h1>Cursos a llevar 2016</h1>
	<div id="listCursos"></div>
	<h2>Cursos futuros</h2>
	<div id="listCursosFuturos"></div>
	<div id="proyecto">
		<h2>Fecha inicio de proyecto</h2>
		<i class="fa fa-calendar-times-o fa-3x"></i>: <span class="fecha">2016-11-01</span>
	</div>
	<footer>
		&copy; <a class="link-author" href="http://01luisrene.com">01luisrene</a> - cursos 2016
	</footer>
	<script>
	// estado: Pendiente o Culminado
	var cursos = [
		{	"name" : "Docker",
			"url" : "https://www.docker.com/",
			"description": "Automatiza el despliegue de aplicaciones dentro de contenedores de software.",
			"estado" : "Pendiente"
		},
		{	"name" : "Ruby",
			"url" : "https://www.ruby-lang.org/es/",
			"description": "<strong>Ruby</strong> es un lenguaje de programación interpretado, reflexivo y orientado a objetos, creado por el programador japonés Yukihiro 'Matz' Matsumoto.",
			"estado" : "Pendiente"
		},
		{	"name" : "NODE.js",
			"url" : "https://nodejs.org/en/",
			"description": "Node.js es un entorno de programación en la capa del servidor basado en el lenguaje de programación Javascript.",
			"estado" : "Pendiente"
		},
		{	"name" : "Socket.io",  
			"url" : "http://socket.io/",
			"description" : "Es una librería que nos permite manejar eventos en tiempo real mediante una conexión TCP y todo ello en JavaScript.",
			"estado" : "Pendiente"
		},
		{	"name" : "Ruby on Rails",
			"url" : "http://rubyonrails.org/",
			"description": "<strong>Ruby on Rails</strong> es una plataforma de trabajo para realizar desarrollos web.",
			"estado" : "Pendiente"
		},
		{	"name" : "SASS",
			"url" : "http://sass-lang.com/"	,
			"description": "Sass es un meta-lenguaje en la parte superior de la CSS que se utiliza para describir el estilo de un documento de manera limpia y estructural..",
			"estado" : "Pendiente"
		},
		{	"name" : "JavaScript",
			"url" : "http://www.w3schools.com/js/",
			"description": "Lenguaje de programación del lado cliente.",
			"estado" : "Pendiente"
		},
		{	"name" : "CoffeeScript",
			"url" : "http://coffeescript.org/",
			"description": "CoffeeScript es un lenguaje que se compila a JavaScript y que se ha vuelto muy popular dentro de la comunidad Node.js y Rails.",
			"estado" : "Pendiente"
		},
		{	"name" : "React",
			"url" : "https://facebook.github.io/react/",
			"description": "React es una biblioteca escrita en JavaScript, desarrollada en Facebook para facilitar la creación de componentes interactivos, reutilizables, para interfaces de usuario.",
			"estado" : "Pendiente"
		},
		{	"name" : "jQuery",
			"url" : "https://jquery.com/",
			"description": "jQuery es una biblioteca de JavaScript, creada inicialmente por John Resig, que permite simplificar la manera de interactuar con los documentos HTML, manipular el árbol DOM, manejar eventos, desarrollar animaciones y agregar interacción con la técnica AJAX a páginas web.",
			"estado" : "Pendiente"
		}
	];

var cursosFuturos = [
		{	"name" : "Go",
			"url" : "https://golang.org/",
			"description": "Lenguaje de programación desarrollado por Google.",
			"estado" : "Pendiente"}
	];

	listaCursos(cursos);
	listaCursosFuturos(cursosFuturos);
	function listaCursos(arr) {
	    var out = "";
	    var i;
	    for(i = 0; i < arr.length; i++) {
	        out += "<div class='list'><span class='name'><a href='"+arr[i].url+"' target='_blank'>"+arr[i].name+"</a></span> : <span class='description'>"+arr[i].description+"</span>"+" "+ "<span class='estado'data-estado="+arr[i].estado+"></span></div>";
	    }
	    document.getElementById("listCursos").innerHTML = out;
	}
	function listaCursosFuturos(arr) {
	    var out = "";
	    var i;
	    for(i = 0; i < arr.length; i++) {
	        out += "<div class='list'><span class='name'><a href='"+arr[i].url+"' target='_blank'>"+arr[i].name+"</a></span> : <span class='description'>"+arr[i].description+"</span>"+" "+ "<span class='estado' data-estado='"+arr[i].estado+"'></span></div>";
	    }
	    document.getElementById("listCursosFuturos").innerHTML = out;
	}
	</script>
</body>
</html>