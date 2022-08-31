// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./../../dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-account-dashboard-js": () => import("./../../../src/pages/account/dashboard.js" /* webpackChunkName: "component---src-pages-account-dashboard-js" */),
  "component---src-pages-account-env-vars-js": () => import("./../../../src/pages/account/env-vars.js" /* webpackChunkName: "component---src-pages-account-env-vars-js" */),
  "component---src-pages-account-js": () => import("./../../../src/pages/account/[...].js" /* webpackChunkName: "component---src-pages-account-js" */),
  "component---src-pages-account-login-js": () => import("./../../../src/pages/account/login.js" /* webpackChunkName: "component---src-pages-account-login-js" */),
  "component---src-pages-author-slug-js": () => import("./../../../src/pages/{Author.slug}.js" /* webpackChunkName: "component---src-pages-author-slug-js" */),
  "component---src-pages-authors-js": () => import("./../../../src/pages/authors.js" /* webpackChunkName: "component---src-pages-authors-js" */),
  "component---src-pages-books-js": () => import("./../../../src/pages/books.js" /* webpackChunkName: "component---src-pages-books-js" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-search-js": () => import("./../../../src/pages/search/[...].js" /* webpackChunkName: "component---src-pages-search-js" */),
  "component---src-templates-book-js": () => import("./../../../src/templates/book.js" /* webpackChunkName: "component---src-templates-book-js" */),
  "component---src-templates-custom-js": () => import("./../../../src/templates/custom.js" /* webpackChunkName: "component---src-templates-custom-js" */)
}

