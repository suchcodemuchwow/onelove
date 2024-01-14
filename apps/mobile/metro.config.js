/** @type {import('expo/metro-config').MetroConfig} */
const { FileStore } = require("metro-cache");
const path = require("path");

const { getDefaultConfig } = require("expo/metro-config");

const projectRoot = __dirname;

const config = getDefaultConfig(projectRoot, {
  // Enable CSS support.
  isCSSEnabled: true,
});

const workspaceRoot = path.resolve(projectRoot, "../..");

// #1 - Watch all files in the monorepo
config.watchFolders = [workspaceRoot];
// #3 - Force resolving nested modules to the folders below
config.resolver.disableHierarchicalLookup = true;
// #2 - Try resolving with project modules first, then workspace modules
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, "node_modules"),
  path.resolve(workspaceRoot, "node_modules"),
];

config.resolver.sourceExts = ["jsx", "js", "ts", "tsx", "cjs", "mjs", "json"];

// Use turborepo to restore the cache when possible
config.cacheStores = [
  new FileStore({
    root: path.join(projectRoot, "node_modules", ".cache", "metro"),
  }),
];

module.exports = config;
