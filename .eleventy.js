const { EleventyRenderPlugin } = require("@11ty/eleventy");
const fs = require('fs');
const path = require('path');
const fm = require("front-matter");
const htmlmin = require('html-minifier');
const beautify = require("js-beautify").html;
const markdownIt = require('markdown-it')
const markdownItAnchor = require('markdown-it-anchor')
const pluginTOC = require('eleventy-plugin-nesting-toc');
const Prism = require('prismjs');
const site = require ('./src/data/site')

function eleventyConfig(config) {

	// ENV variables
	const isProduction = process.env.ELEVENTY_ENV === "production";
	const isDevelopment = process.env.ELEVENTY_ENV === "development";
	const isSnippet = process.env.ELEVENTY_ENV === "snippets";
	const isScreenshot = process.env.ELEVENTY_ENV === "screenshots";

	// Plugin options
	const options = {
		beautify: {
			"html": {
				"allowed_file_extensions": ["htm", "html", "xhtml", "shtml", "xml", "svg"],
				"brace_style": "collapse", // [collapse|expand|end-expand|none] Put braces on the same line as control statements (default), or put braces on own line (Allman / ANSI style), or just put end braces on own line, or attempt to keep them where they are
				"end_with_newline": false, // End output with newline
				"indent_char": " ", // Indentation character
				"indent_handlebars": false, // e.g. {{#foo}}, {{/foo}}
				"indent_inner_html": false, // Indent <head> and <body> sections
				"indent_scripts": "normal", // [keep|separate|normal]
				"indent_size": 2, // Indentation size
				"max_preserve_newlines": 0, // Maximum number of line breaks to be preserved in one chunk (0 disables)
				"preserve_newlines": true, // Whether existing line breaks before elements should be preserved (only works before elements, not inside tags or for text)
				"unformatted": ["sub", "sup", "em", "strong", "i", "u", "strike", "big", "pre"], // List of tags that should not be reformatted
				"wrap_line_length": 0 // Lines should wrap at next opportunity after this number of characters (0 disables)
			}
		},
		htmlmin: {
			useShortDoctype: true,
			removeComments: true,
			collapseWhitespace: true,
			minifyCSS: true
		}
	}
	
	const removeHtmlFrontmatter = function(value) {
		const fmRegex = new RegExp(/---\s*[\s\S]*?\s*---/g);
		const htmlCommentsReges = new RegExp(/(<!--.*?-->)|(<!--[\S\s]+?-->)|(<!--[\S\s]*?$)/g)
		const html = value.replace(htmlCommentsReges, '')

		return html.replace(fmRegex, '')
	}

	// Replace in files
	const removeFrontmatter = async function(value, outputPath) {
		
		return removeHtmlFrontmatter(value)
	}

	// Minify HTML
	const htmlMinify = function(value, outputPath) {
		if (outputPath && outputPath.indexOf('.html') > -1) {
			return htmlmin.minify(value, options.htmlmin);
		}
	}

	const htmlBeautify = function(value, outputPath) {
		if (outputPath && outputPath.indexOf('.html') > -1) {
			// const extname = path.extname(outputPath);
			// const parser = extname.replace(/^./, "");
			return beautify(value, options.beautify)
		}
	}

	// Passthroughs
	if (!isSnippet) {
		config.addPassthroughCopy("src/img");
		config.addPassthroughCopy("src/svg");
	}

	let layout
	if (isSnippet) layout = 'snippet'
	if (isScreenshot) layout = 'screenshot'

	// Layout aliases
	config.addLayoutAlias("app", (!layout ? "layouts/app.njk" : "layouts/"+layout+".njk"));
	config.addLayoutAlias("horizontal", (!layout ? "layouts/horizontal.njk" : "layouts/"+layout+".njk"));
	config.addLayoutAlias("compact", (!layout ? "layouts/compact.njk" : "layouts/"+layout+".njk"));
	config.addLayoutAlias("auth", (!layout ? "layouts/auth.njk" : "layouts/"+layout+".njk"));
	config.addLayoutAlias("site", (!layout ? "layouts/site.njk" : "layouts/"+layout+".njk"));
	config.addLayoutAlias("error", (!layout ? "layouts/error.njk" : "layouts/"+layout+".njk"));
	config.addLayoutAlias("docs", (!layout ? "layouts/docs.njk" : "layouts/"+layout+".njk"));

	// Markdown
  config.setLibrary('md', markdownIt({
    html: true,
    breaks: false,
    linkify: true
  })
  .use(markdownItAnchor)
)

	// Get SVG contents
	var getSvgContent = function(file) {
		let relativeFilePath = `./src/svg/${file}.svg`;
		let data = fs.readFileSync(relativeFilePath, function(err, contents) {
			if (err) return err

			return contents
		});

		return data.toString('utf8');
	}

	config.addNunjucksShortcode("svg", getSvgContent);
	
	config.addNunjucksShortcode("img", function(img) {
		let imgClass = img.class ? 'class="'+img.class+'"' : ''
		let isExternal = img.isExternal ?? false
		let imgUrl = img.src

		if (!isExternal) {
			imgUrl = isSnippet ? site.assetsUrl+img.src : '../..'+img.src;
		}

		return (
			`<img src="${imgUrl}" ${imgClass} alt="..." />`
		)
	});

	// Component shortcodes
	config.addPairedNunjucksShortcode("offcanvas", function(content, title, position, id, responsive) {
		let responsiveClass = responsive ? 'offcanvas-'+responsive+' m-'+responsive+'-0 rounded-sm-4 rounded-'+responsive+'-0' : 'offcanvas rounded-sm-4'
		let responsiveBodyClass = responsive ? 'p-3 p-sm-6 p-'+responsive+'-0 gap-3 gap-'+responsive+'-6' : 'gap-6'

		return (
			`<div class="${responsiveClass} offcanvas-${position} overflow-hidden m-sm-4" tabindex="-1" id="${id}" aria-labelledby="${id}Label">
			  <div class="offcanvas-header rounded-top-4 bg-light">
			    <h5 class="offcanvas-title" id="${id}Label">${title}</h5>
			    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#${id}" aria-label="Close"></button>
			  </div>
				<div class="offcanvas-body d-flex flex-column ${responsiveBodyClass}">
					${content}
				</div>
			</div>`
		)
	});
	
	config.addPairedNunjucksShortcode("modal", function(content, title, id, bodyClass) {
		return (
			`<div class="modal fade" id="${id}" tabindex="-1" aria-labelledby="${id}Label" aria-hidden="true">
			  <div class="modal-dialog modal-dialog-centered">
			    <div class="modal-content overflow-hidden">
			      <div class="modal-header pb-0 border-0">
			        <h1 class="modal-title h4" id="${id}Label">${title}</h1>
			        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
			      </div>
			      <div class="modal-body ${bodyClass}">
			        ${content}
			      </div>
			    </div>
			  </div>
			</div>`
		)
	});

	config.addPairedNunjucksShortcode("snippet", function(content, className = '', id = '') {
		let code = removeHtmlFrontmatter(content)
				// code = content.replace(/\n/g, '');
				code = htmlmin.minify(code, options.htmlmin);
				code = beautify(code, options.beautify)
				
    // Highlight the HTML syntax using Prism
    const highlightedContent = Prism.highlight(code, Prism.languages.html, 'html');

    // Return the preview and highlighted code
    return `
      <div class="snippet">
      	<ul class="nav nav-pills gap-4 mb-2" id="${id}-tab" role="tablist">
				  <li class="nav-item" role="presentation">
				    <button class="nav-link active" id="${id}-preview-tab" data-bs-toggle="tab" data-bs-target="#${id}-preview-tab-pane" type="button" role="tab" aria-controls="${id}-preview-tab-pane" aria-selected="true">Preview</button>
				  </li>
				  <li class="nav-item" role="presentation">
				    <button class="nav-link" id="${id}-code-tab" data-bs-toggle="tab" data-bs-target="#${id}-code-tab-pane" type="button" role="tab" aria-controls="${id}-code-tab-pane" aria-selected="false">See code</button>
				  </li>
				</ul>
				<div class="tab-content" id="${id}-tab-content">
				  <div class="tab-pane fade show active" id="${id}-preview-tab-pane" role="tabpanel" aria-labelledby="${id}-preview-tab" tabindex="0">
				  	<div class="snippet-preview bg-body-tertiary p-8 rounded border">
		      		<div class="mx-auto flex-wrap ${className}">${code}</div>
		      	</div>
				  </div>
				  <div class="tab-pane fade" id="${id}-code-tab-pane" role="tabpanel" aria-labelledby="${id}-code-tab" tabindex="0">
				  	<div class="snippet-code">
			        <pre class="m-0"><code class="language-html">${highlightedContent}</code></pre>
			      </div>
				  </div>
				</div>
	    </div>
    `;
  });

	// Transforms
	config.addTransform("replace-frontmatter", removeFrontmatter);

	if (isProduction) {
		config.addTransform("htmlmin", htmlMinify);
	}
	if (isDevelopment) {
		config.addTransform("prettier", htmlBeautify);
	}
	if (isSnippet) {
		config.addTransform("prettier", htmlBeautify);
	}

	// Plugins
	config.addPlugin(EleventyRenderPlugin);

	// Env specific dist
	// Configuration
	return {
		dir: {
			input: "src",
			output: isProduction ? "build" : "dist",
			includes: "includes",
			data: "data"
		},
		templateFormats: ["html", "njk", "md", "11ty.js"],
		htmlTemplateEngine: "njk",
		markdownTemplateEngine: "njk",
		jsDataFileSuffix: ".data"
	}
}

module.exports = eleventyConfig;
