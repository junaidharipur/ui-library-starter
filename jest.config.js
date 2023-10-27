const path = require("path");

module.exports = {
    rootDir: path.resolve("./"),
    coverageDirectory: "coverage",
    displayName: "COMPONENTIA",
    testMatch: ["**/__tests__/**/*.ts", "**/__tests__/**/*.tsx", "**/*.spec.ts", "**/*.spec.tsx"],
    testEnvironment: "jest-environment-jsdom",
    coverageThreshold: {
        global: {
            branches: 0,
            functions: 0,
            lines: 0,
            statements: 0,
        },
    },
    watchPlugins: ["jest-watch-typeahead/filename", "jest-watch-typeahead/testname"],
};
