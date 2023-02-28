
module.exports = function(eleventyConfig) {

    
    eleventyConfig.addPassthroughCopy('./src/css');
    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/admin');
    eleventyConfig.addPassthroughCopy('./src/js/script.js');

    return {
    dir: {
        input: 'src',
        includes: '_includes',
        output: 'public',
    },
    templateFormats: [ 'md', 'njk', 'html' ],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'html',
    dataTemplateEngine: 'njk',
};
}