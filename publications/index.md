---
title: Publications from the Ma Lab
layout: default
group: publications
---

<div class="publications-page">
  <header class="publications-hero">
    <span class="publications-eyebrow">Research Output</span>
    <h1>Publications</h1>
    <p>Selected research and review articles from the Ma Lab, spanning O-GlcNAc biology, quantitative proteomics, analytical chemistry, and biomedical applications.</p>
    <div class="publication-actions">
      <a class="publication-action publication-action--primary" href="https://scholar.google.com/citations?user=EiWAopQAAAAJ" target="_blank" rel="noopener">Google Scholar <span aria-hidden="true">↗</span></a>
      <a class="publication-action" href="https://orcid.org/0000-0002-5183-5425" target="_blank" rel="noopener">ORCID <span aria-hidden="true">↗</span></a>
    </div>
    <div class="publication-stats" aria-label="Publication collection summary">
      <span><strong>{{ site.data.selected_publications.research | size }}</strong> selected research articles</span>
      <span><strong>{{ site.data.selected_publications.reviews | size }}</strong> selected review articles</span>
    </div>
  </header>

  {% assign publication_groups = "research,reviews" | split: "," %}
  {% for group in publication_groups %}
    {% if group == "research" %}
      {% assign group_title = "Selected Research Articles" %}
      {% assign group_kicker = "Original Research" %}
      {% assign group_label = "Research article" %}
    {% else %}
      {% assign group_title = "Selected Review Articles" %}
      {% assign group_kicker = "Perspectives & Reviews" %}
      {% assign group_label = "Review article" %}
    {% endif %}
    {% assign publications = site.data.selected_publications[group] %}

    <section class="publication-section publication-section--{{ group }}" aria-labelledby="{{ group }}-articles-heading">
      <div class="publication-section-heading">
        <div>
          <span class="publications-eyebrow">{{ group_kicker }}</span>
          <h2 id="{{ group }}-articles-heading">{{ group_title }}</h2>
        </div>
        <span class="publication-count">{{ publications | size }} articles</span>
      </div>

      <div class="publication-list">
      {% for publication in publications %}
        <article class="publication-card"{% if publication.pmid %} id="pmid-{{ publication.pmid }}"{% endif %}>
          <div class="publication-card-number" aria-hidden="true"></div>
          <div class="publication-card-content">
            <div class="publication-meta"><span>{{ publication.year }}</span><span>{{ group_label }}</span></div>
            <p class="publication-authors">{{ publication.authors }}</p>
            <h3>{{ publication.title }}</h3>
            <p class="publication-source">{{ publication.source }}</p>
            <div class="publication-links">
              {% if publication.doi %}<a href="https://doi.org/{{ publication.doi }}" target="_blank" rel="noopener">DOI</a>{% endif %}
              {% if publication.pmid %}<a href="https://pubmed.ncbi.nlm.nih.gov/{{ publication.pmid }}/" target="_blank" rel="noopener">PMID {{ publication.pmid }}</a>{% endif %}
              {% if publication.pmcid %}<a href="https://pmc.ncbi.nlm.nih.gov/articles/{{ publication.pmcid }}/" target="_blank" rel="noopener">{{ publication.pmcid }}</a>{% endif %}
            </div>
          </div>
        </article>
      {% endfor %}
      </div>
    </section>
  {% endfor %}

  <p class="publication-note"><sup>*</sup> Corresponding author &nbsp;·&nbsp; <sup>#</sup> Co-first author</p>
</div>
