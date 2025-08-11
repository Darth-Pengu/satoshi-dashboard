---
layout: docs
title: Style Guide
---

## Colors

We use a subset of all colors to create a smaller color palette for generating color schemes, also available as Sass variables. This enables more comprehensive customization and extension for any project.

### Theme colors

<div class="d-flex gap-2 flex-wrap">
    {%- for item in styles.colors.theme -%}
    <div class="my-2">
        <div class="h-rem-20 w-rem-40 d-inline-flex flex-column align-items-center justify-content-center rounded-2 bg-{{ item.name }}">
            <span class="d-block mt-1 text-xs fw-bold text-uppercase text-white text-opacity-90">{{ item.hex }}</span>
        </div>
        <div class="pt-1">
            <span class="d-block text-sm fw-semibold font-code">${{ item.name }}</span>
        </div>
    </div>
    {%- endfor -%}
</div>

---

### Gray colors

Each gray color has a specific use in our themes. Some of them are used for backgrounds, some of them are used for component properties or text colors.

<div class="vstack gap-6">
    {%- for group in styles.colors.grays -%}
    <div class="d-flex align-items-center">
        <div class="d-flex gap-2 flex-wrap">
            {%- for i in range(1, 10) -%}
            <div>
                <div class="h-rem-20 w-rem-40 d-inline-flex flex-column align-items-center justify-content-center rounded-2 bg-{{ group.name }}-{{ [i, '00'] | join }}" style="background-color: var(--x-gray-{{ [i, '00'] | join }});">
                    <span class="d-block mt-1 text-xs fw-bold {{ 'text-dark' if i < 4 else 'text-white' }} text-opacity-90">{{ [i, '00'] | join }}</span>
                </div>
            </div>
            {%- endfor -%}
        </div>
    </div>
    {%- endfor -%}
</div>

---

## Typography

### Headings

All HTML headings, `<h1>` through `<h6>`, are available.

<div class="docs-example bg-body-secondary rounded p-7">
    <h1 class="py-3">h1. This is a heading</h1>
    <h2 class="py-3">h2. This is a heading</h2>
    <h3 class="py-3">h3. This is a heading</h3>
    <h4 class="py-3">h4. This is a heading</h4>
    <h5 class="py-3">h5. This is a heading</h5>
    <h6 class="py-3">h6. This is a heading</h6>
</div>

```html
<h1>h1. This is a heading</h1>
<h2>h2. This is a heading</h2>
<h3>h3. This is a heading</h3>
<h4>h4. This is a heading</h4>
<h5>h5. This is a heading</h5>
<h6>h6. This is a heading</h6>
```

`.h1` through `.h6` classes are also available, for when you want to match the font styling of a heading but cannot use the associated HTML element.

<div class="docs-example bg-body-secondary rounded p-7">
    <p class="h1 py-3">h1. This is a heading</p>
    <p class="h2 py-3">h2. This is a heading</p>
    <p class="h3 py-3">h3. This is a heading</p>
    <p class="h4 py-3">h4. This is a heading</p>
    <p class="h5 py-3">h5. This is a heading</p>
    <p class="h6 py-3">h6. This is a heading</p>
</div>

```html
<p class="h1">h1. This is a heading</p>
<p class="h2">h2. This is a heading</p>
<p class="h3">h3. This is a heading</p>
<p class="h4">h4. This is a heading</p>
<p class="h5">h5. This is a heading</p>
<p class="h6">h6. This is a heading</p>
```

### Display headings

Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using a display heading—a larger, slightly more opinionated heading style.

<div class="docs-example bg-body-secondary rounded p-7">
    <h1 class="display-1 py-3">Display 1</h1>
    <h2 class="display-2 py-3">Display 2</h2>
    <h3 class="display-3 py-3">Display 3</h3>
    <h4 class="display-4 py-3">Display 4</h4>
    <h5 class="display-5 py-3">Display 5</h5>
    <h6 class="display-6 py-3">Display 6</h6>
</div>

```html
<h1 class="display-1">Display heading</h1>
<h1 class="display-2">Display heading</h1>
<h1 class="display-3">Display heading</h1>
<h1 class="display-4">Display heading</h1>
<h1 class="display-5">Display heading</h1>
<h1 class="display-6">Display heading</h1>
```

### Lead

Make a paragraph stand out by adding `.lead`.

<div class="docs-example bg-body-secondary rounded p-7">
    <p class="lead">
        This is a lead paragraph. It stands out from regular paragraphs.
    </p>
</div>

```html
<p class="lead">
    This is a lead paragraph. It stands out from regular paragraphs.
</p>
```
