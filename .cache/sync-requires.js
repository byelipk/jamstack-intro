const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/byelipk/Sandbox/jamstack-intro/sections/basic/.cache/dev-404-page.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/byelipk/Sandbox/jamstack-intro/sections/basic/src/pages/index.js")))
}

