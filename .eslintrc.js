module.exports = {
  env: {
    browser: true,
    // Allows for the use of predefined global variables for browsers (document, window, etc.)
    jest: true,
    // Allows for the use of predefined global variables for Jest (describe, test, etc.)
    node: true // Allows for the use of predefined global variables for Node.js (module, process, etc.)

  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:react/recommended", "plugin:prettier/recommended", "plugin:storybook/recommended"],
  parser: "@typescript-eslint/parser",
  // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020,
    // Allows for the parsing of modern ECMAScript features
    ecmaFeatures: {
      jsx: true // Allows for the parsing of JSX

    },
    sourceType: "module" // Allows for the use of imports

  },
  plugins: ["@typescript-eslint", // Allows for manually setting @typescript-eslint/* rules
  "prettier", // Allows for manually setting prettier/* rules
  "react" // Allows for manually setting react/* rules
  ],
  settings: {
    react: {
      version: "detect" // Tells eslint-plugin-react to automatically detect the version of React to use

    }
  },
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "prettier/prettier": [
      1
    ]
  }
};