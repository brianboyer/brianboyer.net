module.exports = function(eleventyConfig) {

	eleventyConfig.addPassthroughCopy("_src/_assets");

	return {
		templateFormats: [
			"md",
			"njk",
			"html"
		],

		pathPrefix: "/",
		markdownTemplateEngine: "njk",
		htmlTemplateEngine: "njk",
		dataTemplateEngine: "njk",
		passthroughFileCopy: true,
		dir: {
			input: "_src",
      includes: "_templates",
			data: "_data",
			output: "_site"
		}
	};
};
