const path = require("path");

module.exports = {
    rootDir: path.resolve("./"),
    coverageDirectory: "coverage",
    displayName: "COMPONENTIA",
    testMatch: ["**/__tests__/**/*.ts", "**/__tests__/**/*.tsx", "**/*.spec.ts", "**/*.spec.tsx"],
    testEnvironment: "jest-environment-jsdom",
    collectCoverageFrom: ["src/components/**/*.{js,jsx,ts,tsx}"],
    roots: ["<rootDir>/src"],
    moduleNameMapper: {
        ".(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
            "<rootDir>/jest-config/file-mock.js",
        "\\.(css|scss|sass|less)$": "identity-obj-proxy",
    },

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
