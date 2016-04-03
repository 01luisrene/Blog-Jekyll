---
layout: null
---
<html lang="es">
<head>
	<meta charset="UTF-8"/>
	<title>Links | 01luisrene</title>
	<link rel="stylesheet" href="../css/main.css">
	<link rel="stylesheet" href="../css/estilos_others.css"/>
</head>
<body class="template-no-home">
	{% include header.html %}
<div class="page-content">
<div class="wrapper">
	<h1>Links de 01luisrene</h1>
	<ol class="lista-links">
		<li>
			<a href="{{ site.url }}/">{{ site.url }}/</a>
		</li>
		<li>
			<a href="{{ site.url }}/blog/">{{ site.url }}/blog/</a>
		</li>
		<li>
			<a href="{{ site.url }}/contacto/">{{ site.url }}/contacto/</a>
		</li>
		<li>
			<a href="{{ site.url }}/acerca/">{{ site.url }}/acerca/</a>
		</li>
		{% for page in site.posts %}
		<li>
			<a href="{{ site.url }}{{ page.url }}">{{ site.url }}{{ page.url }}</a>
		</li>
		{% endfor %}
	</ol>
	</div>
	</div>
	{% include footer.html %}
	{% include autoreload-in-debug.html %}
</body>
</html>