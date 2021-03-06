const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/james/repos/flipperguy.github.io/src/pages/404.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/james/repos/flipperguy.github.io/src/pages/blog.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/james/repos/flipperguy.github.io/src/pages/index.js"))),
  "component---src-templates-post-template-js": hot(preferDefault(require("/Users/james/repos/flipperguy.github.io/src/templates/postTemplate.js")))
}

