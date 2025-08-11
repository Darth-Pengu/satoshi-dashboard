---
layout: docs
title: Customize
---

## Creating themes

Sky is the limit when it comes to customizing our templates. Themes are a powerful feature that support extending or adding new styles to your project.

Working with source files showcases how powerful themes can be. You can use smart features like Sass variables to change anything in terms of colors, typography, component properties, and more.

And no worries. You don't need to be a Sass/CSS expert to do this.

### Main Sass file

All themes are stored in the `themes` folder from your `scss` directory. We included the default one that you can use as a boilerplate for a custom one. Just duplicate it and start changing variables. 

When you're done, just import it in your `main.scss` file:

```scss
@import 'themes/blue';
```

Create your own `data-bs-theme` selector with a custom value as the name of your color mode, then modify our Sass and CSS variables as needed.

And at the end of the file, in the color modes section initialize it:

```scss
[data-bs-theme="blue"] {
  @include blue;
}
```

### Theme's variables

While the primary use case for color modes is light and dark mode, custom color modes are also possible. Create your own data-x-theme selector with a custom value as the name of your color mode, then modify our Sass and CSS variables as needed.

```scss
@mixin blue {
  --x-body-color: var(--x-white);
  --x-body-color-rgb: #{to-rgb($white)};
  --x-body-bg: var(--x-blue);
  --x-body-bg-rgb: #{to-rgb($blue)};
  --x-tertiary-bg: #{$blue-600};

  .dropdown-menu {
    --x-dropdown-bg: #{mix($blue-500, $blue-600)};
    --x-dropdown-link-active-bg: #{$blue-700};
  }

  .btn-secondary {
    --x-btn-bg: #{mix($gray-600, $blue-400, .5)};
    --x-btn-border-color: #{rgba($white, .25)};
    --x-btn-hover-bg: #{darken(mix($gray-600, $blue-400, .5), 5%)};
    --x-btn-hover-border-color: #{rgba($white, .25)};
    --x-btn-active-bg: #{darken(mix($gray-600, $blue-400, .5), 10%)};
    --x-btn-active-border-color: #{rgba($white, .5)};
    --x-btn-focus-border-color: #{rgba($white, .5)};
    --x-btn-focus-box-shadow: 0 0 0 .25rem rgba(255, 255, 255, .2);
  }
}
```

Create a new file for storing the new Sass variables and import it as shown in the example above.
