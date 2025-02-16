const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

config.resolver.extraNodeModules = {
  "web-streams-polyfill": require.resolve("web-streams-polyfill")
};

module.exports = config;
