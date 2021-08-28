const { createProxyMiddleware } = require("http-proxy-middleware");
const { getPathRelativeRoot } = require("../util");
const config = require(getPathRelativeRoot("build/config"));

module.exports = function expressMiddleware (router) {
  const { proxyApi, proxyTarget } = config.storybook;
  router.use(proxyApi, createProxyMiddleware({
    target: proxyTarget,
    changeOrigin: true
  }))
}