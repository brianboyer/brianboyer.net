---
layout: base.njk
title: "TKTK title"
description: "TKTK description"
---

<h1>Blog</h1>
<p>Howdy! New website, new blog. I'll probably bring over some posts from the <a href="/writing-talks/">old blogs</a>. Until then, this is what I've got to offer. :)</p>

{%- for post in collections.posts | reverse %}
<article>
  <h3>
    <a href="{{ post.url}}">{{ post.data.title }}</a>
  </h3>
  <time>{{ post.data.date }}</time>
  <p>{{ post.data.description }}</p>
</article>
{%- endfor %}