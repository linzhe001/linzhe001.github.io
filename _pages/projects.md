---
layout: page
title: projects
permalink: /projects/
description: Research projects in surgical vision, spatial intelligence, and medical robotics.
nav: true
nav_order: 3
---

<!-- pages/projects.md -->
<style>
  .projects .card .project-teaser {
    padding: 0;
    overflow: hidden;
  }

  .projects .card .project-teaser a,
  .projects .card .project-teaser img {
    width: 100%;
    height: 100%;
    display: block;
  }

  .projects .card .project-teaser img {
    object-fit: cover;
  }

  @media (min-width: 768px) {
    .projects .card .project-teaser {
      height: 240px;
    }
  }

  @media (max-width: 767.98px) {
    .projects .card .project-teaser {
      height: 200px;
    }
  }
</style>
<div class="projects">
  <div class="container px-0">
    <div class="row row-cols-1 row-cols-md-2">
      {% assign sorted_projects = site.projects | sort: "importance" %}
      {% for project in sorted_projects %}
      <div class="col">
        <div class="card h-100 hoverable">
          <div class="row no-gutters">
            {% if project.img %}
            <div class="col-md-6 project-teaser">
              <a href="{{ project.url | relative_url }}" aria-label="{{ project.title }}"><img src="{{ project.img }}" class="card-img" alt="{{ project.title }}" loading="eager"></a>
            </div>
            {% endif %}
            <div class="{% if project.img %}col-md-6{% else %}col-md-12{% endif %}">
              <div class="card-body">
                <h3 class="card-title"><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h3>
                <p class="card-text">{{ project.description }}</p>
                {% if project.github %}
                <div class="row ml-1 mr-1 p-0">
                  <div class="github-icon">
                    <div class="icon" data-toggle="tooltip" title="Code Repository"><a href="{{ project.github }}"><i class="fa-brands fa-github gh-icon"></i></a></div>
                  </div>
                </div>
                {% endif %}
              </div>
            </div>
          </div>
        </div>
      </div>
      {% endfor %}
    </div>
  </div>
</div>
