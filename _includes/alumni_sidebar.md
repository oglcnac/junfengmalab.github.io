
## Ma Lab Alumni


{% for alum in site.data.alumni %}
<hr>
<div id = "{{alum.name}}" style="padding-top: 60px; margin-top: -60px;">
<p><strong>{{alum.name}}</strong> - <em>{{alum.position}}</em><br>
{% if alum.startdate or alum.enddate %}{% if alum.startdate %} {{alum.startdate}} - {% endif %}{{alum.enddate}} <br>{% endif %}
{% if alum.current %}Currently: {{alum.current}}{% endif %}</p>
</div> {% endfor %}
---

<section class="previous-interns" aria-labelledby="previous-interns-heading">
<h2 id="previous-interns-heading">Previous Interns <small>(Current Status)</small></h2>
<ul class="previous-interns-list">
{% for intern in site.data.interns %}
  <li>
    <strong>{{ intern.name }}</strong>
    <span>{{ intern.current }}</span>
  </li>
{% endfor %}
</ul>
</section>
