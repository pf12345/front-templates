#!/usr/bin/env node
const { buildDev } = require('@storybook/core/server')
const options = require('@storybook/vue/dist/server/options').default;
const { getPathRelativeRoot } = require("../util");
const config = require(getPathRelativeRoot("build/config.js"));
const { host = "localhost", port = "6006" } = config.storybook;

buildDev({
  ...options,
  host,
  mode: 'dev',
  port,
  configDir: getPathRelativeRoot("build/.storybook"),
  staticDir: ["dist"]
});