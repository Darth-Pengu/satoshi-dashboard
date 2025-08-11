---
layout: docs
title: Getting Started
---

## Installation

For easier asset management we've chosen [Parcel](https://parceljs.org/). If you want to see all the npm scripts included for this starter kit, open the `package.json` file.

Next, navigate to the root folder of the site and run:

```
npm install
```

To run a local server and watch for changes:

```
npm start
```

To build for production:

```
npm run build
```

To build for development:

```
npm run dev
```

---

## Create the Sass files

In your `scss` folder you'll find two files:

- main.scss
- utility.scss

### Import the base styles and components

In your main.scss, you’ll import the source Sass files. Bootstrap is automatically loaded when you use the source files, so you don't need to worry about what Bootstrap files should you incorporate in your styles.

```scss
// Functions
@import "bootstrap/scss/functions";
   
// Theme
@import 'themes/default';

// Main   
@import "@webpixels/css/main";
```

### Import the utility classes

In [Webpixels CSS](https://webpixels.io/docs/css) you'll notice that we don't create custom styles, but rather make use of the utility classes. We are using the new Bootstrap Utility API to generate a comprehensive list of classes.

In your utility.scss you'll import all the utilities:

```scss
@import "@webpixels/css/utility"; 
```

---

## HTML starter template

Be sure to have your pages set up with the latest design and development standards. That means using an HTML5 doctype and including a viewport meta tag for proper responsive behaviors. Put it all together and your pages should look like this:


```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
  </head>
  <body>
    <h1>Hello, world!</h1>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
  </body>
</html>
```

### HTML5 doctype

Bootstrap requires the use of the HTML5 doctype. Without it, you’ll see some funky incomplete styling, but including it shouldn’t cause any considerable hiccups.

```html
<!doctype html>
<html lang="en">
    <!-- ... -->
</html>
```

### Responsive meta tag

Bootstrap is developed mobile first, a strategy in which we optimize code for mobile devices first and then scale up components as necessary using CSS media queries. To ensure proper rendering and touch zooming for all devices, add the responsive viewport meta tag to your <head>.

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

## Learn more

Check out Bootstrap [documentation website](https://getbootstrap.com/).

## Integrations

If you want to see how it works, check out these functional examples of using Bootstrap and Webpixels CSS in common JS frameworks like Webpack, Parcel, Vite, and more!

[See all integrations](https://github.com/twbs/examples)
