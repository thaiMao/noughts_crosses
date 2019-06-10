module.exports = {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.css$": require.resolve("./test/style-mock")
  }
};
