const { resolve } = require("path");
const validateGeneratedModule = require("../../helpers/validateGeneratedModule");
const createSchemaInfos = require("../../helpers/createSchemaInfos");
const { generateApiForTest } = require("../../helpers/generateApiForTest");
const assertGeneratedModule = require("../../helpers/assertGeneratedModule");

const schemas = createSchemaInfos({ absolutePathToSchemas: resolve(__dirname, "./") });

schemas.forEach(({ absolutePath, apiFileName }) => {
  generateApiForTest({
    testName: "--axios --single-http-client test",
    silent: true,
    name: apiFileName,
    input: absolutePath,
    output: resolve(__dirname, "./generated"),
    generateClient: true,
    singleHttpClient: true,
    httpClientType: "axios",
    separatedHttpClient: true,
    specificApiBaseUrl: true,
  }).then(() => {
    const outputFileNames = [
      "http-client",
      "schema",
    ];

    for (const fileName of outputFileNames) {
      validateGeneratedModule(resolve(__dirname, `./generated/${fileName}.ts`));
      assertGeneratedModule(
        resolve(__dirname, `./generated/${fileName}.ts`),
        resolve(__dirname, `./expected/${fileName}.ts`),
      );
    }
  });
});
