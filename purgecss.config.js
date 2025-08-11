module.exports = {
  content: [
    './build/**/*.html', 
  ],
  css: ['./build/css/main.css', './build/css/utility.css'],
  safelist: {
    deep: [
      // Bootstrap
      /data-bs-.*/, // data attributes used by bootstrap for js plugins
      /bs-.*/, // classes used by bootstrap for JS components
      /fade$/,
      /show$/,
      /modal-backdrop$/,
      /modal-open$/,
      /collapse$/,
      /collapsing$/,
      /tooltip.*/,
      /popover.*/,

      // Libs
      /DocSearch.*/,
      /flatpickr.*/
    ]
  }
}