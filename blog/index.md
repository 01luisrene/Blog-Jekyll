---
layout: blog
title: BLog
description: "Este es mi blog diseñado para publicar contenido relacionado con HTML5, CSS3, Javascript, etc. Para poder compartirlo con ustedes."
portada_url: "/assets/images/portadas/bg_post.png"
---

<section class="post-list">
    {% for post in site.posts limit:15 %}
      <article class="post">
        {% if post.photo_url %}
        <header>
          <div class="image" style="background-image:url('{{ post.photo_url }}')"></div>
        </header>
        {% endif %}
        <section>
        <h2>
          <a class="post-link" href="{{ post.url | prepend: site.domain }}">{{ post.title }}</a>
        </h2>
        <span class="post-meta"><i class="fa fa-calendar-o"></i> {{ post.date | date: "%b %-d, %Y" }}</span>
        {% if post.description %}
        <span class="body">{{ post.description | markdownify }}</span>
        {% else %}
        <span class="body">{{ post.excerpt | strip_html }}</span>
        {% endif %}
        </section>
        <footer>
        <a class="btn btn-primary" href="{{ post.url | prepend: site.domain }}">Leer m&aacute;s <i class="fa fa-angle-double-right"></i></a>
        </footer>
      </article>
    {% endfor %}
  <p class="rss-subscribe">subscribe <a href="{{ "/feed.xml" | prepend: site.domain }}">via RSS</a></p>

</section>