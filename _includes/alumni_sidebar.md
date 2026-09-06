<div class="history-grid">
  <section class="history-panel" aria-labelledby="alumni-heading">
    <span class="history-kicker">Former Members</span>
    <h2 id="alumni-heading">Ma Lab Alumni</h2>
    <ul class="history-list">
    {% for alum in site.data.alumni %}
      <li id="{{ alum.name }}">
        <strong>{{ alum.name }}</strong>
        {% if alum.position %}<span>{{ alum.position }}</span>{% endif %}
        {% if alum.startdate or alum.enddate %}<small>{% if alum.startdate %}{{ alum.startdate }} – {% endif %}{{ alum.enddate }}</small>{% endif %}
        {% if alum.current %}<small>Currently: {{ alum.current }}</small>{% endif %}
      </li>
    {% endfor %}
    </ul>
  </section>

  <section class="history-panel" aria-labelledby="previous-interns-heading">
    <span class="history-kicker">Where They Are Now</span>
    <h2 id="previous-interns-heading">Previous Interns</h2>
    <ul class="history-list history-list--interns">
    {% for intern in site.data.interns %}
      <li>
        <strong>{{ intern.name }}</strong>
        {% if intern.current %}<span>{{ intern.current }}</span>{% endif %}
      </li>
    {% endfor %}
    </ul>
  </section>
</div>
