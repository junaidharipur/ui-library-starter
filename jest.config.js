const path = require("path");

module.exports = {
    rootDir: path.resolve("./"),
    coverageDirectory: "coverage",
    displayName: "COMPONENTIA",
    testMatch: ["**/__tests__/**/*.ts", "**/__tests__/**/*.tsx", "**/*.spec.ts", "**/*.spec.tsx"],
    testEnvironment: "jest-environment-jsdom",
    coverageThreshold: {
        global: {
            branches: 50,
            functions: 50,
            lines: 50,
            statements: 50,
        },
    },
    watchPlugins: ["jest-watch-typeahead/filename", "jest-watch-typeahead/testname"],
};
