---
layout: docs
title: Components
---

## Accordion

{% snippet "w-lg-75", "accordion" %}
  {% renderFile "./src/components/accordion.njk", {} %}
{% endsnippet %}

## Alerts

{% snippet "w-lg-75 vstack gap-3", "alerts" %}
<div class="alert alert-primary" role="alert"> 
  A simple primary alert—check it out!
</div>
<div class="alert alert-secondary" role="alert">
  A simple secondary alert—check it out!
</div>
<div class="alert alert-success" role="alert">
  A simple success alert—check it out!
</div>
<div class="alert alert-danger" role="alert">
  A simple danger alert—check it out!
</div>
<div class="alert alert-warning" role="alert">
  A simple warning alert—check it out!
</div>
<div class="alert alert-info" role="alert">
  A simple info alert—check it out!
</div>
<div class="alert alert-light" role="alert">
  A simple light alert—check it out!
</div>
<div class="alert alert-dark" role="alert">
  A simple dark alert—check it out!
</div>
{% endsnippet %}

## Avatars

{% snippet "hstack gap-4 justify-content-center", "avatars" %}
<div class="avatar avatar-xs rounded-circle">
  <img alt="..." src="https://images.unsplash.com/photo-1522307837370-cc113a36b784?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=256&amp;h=256&amp;q=80">
</div>
<div class="avatar avatar-sm rounded-circle">
  <img alt="..." src="https://images.unsplash.com/photo-1522307837370-cc113a36b784?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=256&amp;h=256&amp;q=80">
</div>
<div class="avatar rounded-circle">
  <img alt="..." src="https://images.unsplash.com/photo-1522307837370-cc113a36b784?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=256&amp;h=256&amp;q=80">
</div>
<div class="avatar avatar-lg rounded-circle">
  <img alt="..." src="https://images.unsplash.com/photo-1522307837370-cc113a36b784?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=256&amp;h=256&amp;q=80">
</div>
<div class="avatar avatar-xl rounded-circle">
  <img alt="..." src="https://images.unsplash.com/photo-1522307837370-cc113a36b784?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=256&amp;h=256&amp;q=80">
</div>
{% endsnippet %}

---

## Badges

Documentation and illustrative instances showcasing badges, which serve as our compact count and labeling element.

{% snippet "hstack gap-4 justify-content-center", "badges" %}
<span class="badge text-bg-primary">Primary</span>
<span class="badge text-bg-secondary">Secondary</span>
<span class="badge text-bg-success">Success</span>
<span class="badge text-bg-danger">Danger</span>
<span class="badge text-bg-warning">Warning</span>
<span class="badge text-bg-info">Info</span>
<span class="badge text-bg-light">Light</span>
<span class="badge text-bg-dark">Dark</span>
{% endsnippet %}

## Buttons 

### Solid buttons

{% snippet "hstack gap-4 justify-content-center", "buttons-solid" %}
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>
<button type="button" class="btn btn-link">Link</button>
{% endsnippet %}

### Outline buttons

{% snippet "hstack gap-4 justify-content-center", "buttons-outline" %}
<button type="button" class="btn btn-outline-primary">Primary</button>
<button type="button" class="btn btn-outline-secondary">Secondary</button>
<button type="button" class="btn btn-outline-success">Success</button>
<button type="button" class="btn btn-outline-danger">Danger</button>
<button type="button" class="btn btn-outline-warning">Warning</button>
<button type="button" class="btn btn-outline-info">Info</button>
<button type="button" class="btn btn-outline-light">Light</button>
<button type="button" class="btn btn-outline-dark">Dark</button>
{% endsnippet %}

### Soft buttons

{% snippet "hstack gap-4 justify-content-center", "buttons-soft" %}
<button type="button" class="btn bg-primary bg-opacity-25 bg-opacity-100-hover text-primary text-white-hover">Primary</button>
<button type="button" class="btn bg-secondary bg-opacity-25 bg-opacity-100-hover text-secondary text-white-hover">Secondary</button>
<button type="button" class="btn bg-success bg-opacity-25 bg-opacity-100-hover text-success text-white-hover">Success</button>
<button type="button" class="btn bg-danger bg-opacity-25 bg-opacity-100-hover text-danger text-white-hover">Danger</button>
<button type="button" class="btn bg-warning bg-opacity-25 bg-opacity-100-hover text-warning text-white-hover">Warning</button>
<button type="button" class="btn bg-info bg-opacity-25 bg-opacity-100-hover text-info text-white-hover">Info</button>
{% endsnippet %}

## Button Group

## Cards

Bootstrap cards offer a versatile and customizable content holder with numerous variations and choices. For a comprehensive list of options, we recommend referring to the official Bootstrap documentation.

### Activity timeline card

{% snippet "w-lg-50", "card-activity-timeline" %}
  {% renderFile "./src/components/card-activity-timeline.njk", {
    cryptos: cryptos
  } %}
{% endsnippet %}

### Card with balance stats

{% snippet "w-lg-50", "card-balance" %}
  {% renderFile "./src/components/card-balance.njk", {} %}
{% endsnippet %}

### Card with charts

{% snippet "w-lg-50", "card-chart-1" %}
  {% renderFile "./src/components/card-chart-1.njk", {} %}
{% endsnippet %}

{% snippet "w-lg-50", "card-chart-2" %}
  {% renderFile "./src/components/card-chart-2.njk", {} %}
{% endsnippet %}

{% snippet "w-lg-75", "card-chart-3" %}
  {% renderFile "./src/components/card-chart-3.njk", {} %}
{% endsnippet %}

{% snippet "w-lg-50", "card-chart-4" %}
  {% renderFile "./src/components/card-chart-4.njk", {} %}
{% endsnippet %}

### Card with icons

{% snippet "w-lg-50", "card-icon-1" %}
  {% renderFile "./src/components/card-icon-1.njk", {} %}
{% endsnippet %}

{% snippet "w-lg-50", "card-icon-2" %}
  {% renderFile "./src/components/card-icon-2.njk", {} %}
{% endsnippet %}

### Card with order history

{% snippet "w-lg-50", "card-latest-orders" %}
  {% renderFile "./src/components/card-latest-orders.njk", {
    orders: orders
  } %}
{% endsnippet %}

{% snippet "w-lg-100", "card-orders" %}
  {% renderFile "./src/components/card-orders.njk", {
    orders: orders
  } %}
{% endsnippet %}

### NFT cards

{% snippet "w-lg-50", "card-nft" %}
  {% renderFile "./src/components/card-nft.njk", {} %}
{% endsnippet %}

{% snippet "w-lg-50", "card-nft-auction" %}
  {% renderFile "./src/components/card-nft-auction.njk", {} %}
{% endsnippet %}

{% snippet "w-lg-50", "card-nft-collection" %}
  {% renderFile "./src/components/card-nft-collection.njk", {} %}
{% endsnippet %}

### Payment cards

{% snippet "w-lg-50", "card-payment-methods" %}
  {% renderFile "./src/components/card-payment-methods.njk", {} %}
{% endsnippet %}

{% snippet "w-lg-50", "card-plan-details" %}
  {% renderFile "./src/components/card-plan-details.njk", {} %}
{% endsnippet %}

### Progress cards

{% snippet "w-lg-50", "card-progress-1" %}
  {% renderFile "./src/components/card-progress-1.njk", {} %}
{% endsnippet %}

{% snippet "w-lg-50", "card-progress-2" %}
  {% renderFile "./src/components/card-progress-2.njk", {} %}
{% endsnippet %}

### Stats cards 

{% snippet "w-rem-md-80", "card-stat-1" %}
  {% renderFile "./src/components/card-stat-1.njk", {} %}
{% endsnippet %}

{% snippet "w-rem-md-80", "card-stat-2" %}
  {% renderFile "./src/components/card-stat-2.njk", {} %}
{% endsnippet %}

{% snippet "w-rem-md-80", "card-stat-3" %}
  {% renderFile "./src/components/card-stat-3.njk", {} %}
{% endsnippet %}

{% snippet "w-rem-md-80", "card-stat-4" %}
  {% renderFile "./src/components/card-stat-4.njk", {} %}
{% endsnippet %}

## Dropdowns

### User dropdown

{% snippet "", "dropdown-user" %}
<div class="dropdown">
  <button class="btn btn-neutral dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown
  </button> 
  <div class="dropdown-menu">
    <div class="dropdown-header">
      <span class="d-block text-sm text-muted mb-1">Signed in as</span>
      <span class="d-block text-heading fw-semibold">{{ profile.name }}</span>
    </div>
    <div class="dropdown-divider"></div>
    <a class="dropdown-item" href="#">
      <i class="bi bi-house me-3"></i>Home
    </a>
    <a class="dropdown-item" href="#">
      <i class="bi bi-pencil me-3"></i>Edit profile
    </a>
    <div class="dropdown-divider"></div>
    <a class="dropdown-item" href="#">
      <i class="bi bi-gear me-3"></i>Settings
    </a>
    <a class="dropdown-item" href="#">
      <i class="bi bi-image me-3"></i>Media
    </a>
    <a class="dropdown-item" href="#">
      <i class="bi bi-box-arrow-up me-3"></i>Share
    </a>
    <div class="dropdown-divider"></div>
    <a class="dropdown-item" href="#">
      <i class="bi bi-person me-3"></i>Login
    </a>
  </div>
</div>
{% endsnippet %}

### Dropdown with avatars

{% snippet "", "dropdown-avatars" %}
<div class="dropdown">
  <button class="btn btn-neutral dropdown-toggle" type="button" id="userDropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown
  </button>
  <div class="dropdown-menu" aria-labelledby="userDropdownMenuButton">
    <a href="#" class="dropdown-item d-flex gap-3 align-items-center position-relative">
      <div class="flex-none avatar avatar-xs bg-primary rounded-circle text-white">
        RF
      </div>
      <span>
        Robert Fox
      </span>
    </a>
    <a href="#" class="dropdown-item d-flex gap-3 align-items-center position-relative">
      {% img 
        src="/img/memoji/memoji-1.svg", 
        class="flex-none avatar avatar-xs rounded-circle "
      %}
      <span>
        Darlene Robertson
      </span>
    </a>
    <a href="#" class="dropdown-item d-flex gap-3 align-items-center position-relative">
      {% img 
        src="/img/memoji/memoji-2.svg", 
        class="flex-none avatar avatar-xs rounded-circle"
      %}
      <span>
        Theresa Webb
      </span>
    </a>
    <a href="#" class="dropdown-item d-flex gap-3 align-items-center position-relative">
      <div class="flex-none avatar avatar-xs bg-success rounded-circle text-white">
        KW
      </div>
      <span>
        Kristin Watson
      </span>
    </a>
    <a href="#" class="dropdown-item d-flex gap-3 align-items-center position-relative">
      {% img 
        src="/img/memoji/memoji-3.svg", 
        class="flex-none avatar avatar-xs rounded-circle"
      %}
      <span>
        Cody Fisher
      </span>
    </a>
  </div>
</div>
{% endsnippet %}

### Dropdown with checklist

{% snippet "", "dropdown-checklist" %}
<div class="dropdown">
  <button class="btn btn-neutral dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
    Dropdown
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <div class="dropdown-item py-1 d-flex align-items-center">
      <div class="text-lg">
        <input class="form-check-input" type="checkbox" id="flexCheck1" value="" aria-label="...">
      </div>
      <div class="ms-3 me-5">
        <label for="flexCheck1">First option</label>
      </div>
    </div>
    <div class="dropdown-item py-1 d-flex align-items-center">
      <div class="text-lg">
        <input class="form-check-input" type="checkbox" id="flexCheck2" value="" aria-label="...">
      </div>
      <div class="ms-3 me-5">
        <label for="flexCheck2">Second option</label>
      </div>
      <div class="ms-auto">
        <span class="badge rounded-pill bg-opacity-25 bg-success text-success">23</span>
      </div>
    </div>
    <div class="dropdown-item py-1 d-flex align-items-center">
      <div class="text-lg">
        <input class="form-check-input" type="checkbox" id="flexCheck3" value="" aria-label="...">
      </div>
      <div class="ms-3 me-5">
        <label for="flexCheck3">Third option</label>
      </div>
    </div>
    <div class="dropdown-item py-1 d-flex align-items-center">
      <div class="text-lg">
        <input class="form-check-input" type="checkbox" id="flexCheck4" value="" aria-label="...">
      </div>
      <div class="ms-3 me-5">
        <label for="flexCheck4">Fourth option</label>
      </div>
      <div class="ms-auto">
        <span class="badge rounded-pill bg-opacity-25 bg-warning text-warning">190</span>
      </div>
    </div>
    <div class="dropdown-item py-1 d-flex align-items-center">
      <div class="text-lg">
        <input class="form-check-input" type="checkbox" id="flexCheck5" value="" aria-label="...">
      </div>
      <div class="ms-3 me-5">
        <label for="flexCheck5">Fifth option</label>
      </div>
    </div>
    <div class="mt-3">
      <button class="btn btn-lg btn-primary w-100">Save</button>
    </div>
  </div>
</div>
{% endsnippet %}

## Forms

### Login form

{% snippet "bg-body p-6 rounded w-lg-50", "form-login" %}
  {% renderFile "./src/components/form-login.njk", {} %}
{% endsnippet %}

### Register form

{% snippet "bg-body p-6 rounded w-lg-50", "form-register" %}
  {% renderFile "./src/components/form-register.njk", {} %}
{% endsnippet %}

## List Groups

### Crypto list

{% snippet "w-lg-50", "list-group-cryptos" %}
  {% renderFile "./src/components/list-group-cryptos.njk", {
    cryptos: cryptos
  } %}
{% endsnippet %}

### Crypto list

{% snippet "w-lg-50", "list-group-switchers" %}
  {% renderFile "./src/components/list-group-switchers.njk", {} %}
{% endsnippet %}

### Crypto list

{% snippet "w-lg-50", "list-group-wallets" %}
  {% renderFile "./src/components/list-group-wallets.njk", {
    wallets: wallets
  } %}
{% endsnippet %}
