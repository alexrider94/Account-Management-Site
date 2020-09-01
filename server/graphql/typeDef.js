const { mergeTypeDefs, loadFilesSync } = require("graphql-tools");
const path = require("path");

const typesArray = loadFilesSync(path.join(__dirname, "./types"), {
  extensions: ["graphql"],
});

module.exports = mergeTypeDefs(typesArray, { all: true });
