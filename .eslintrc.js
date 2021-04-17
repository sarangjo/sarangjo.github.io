module.exports = {
  extends: ["plugin:react/recommended"],
  plugins: ["react"],
  env: {
    browser: true, // sets window, localStorage, document, etc.
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    indent: ["error", 2, { SwitchCase: 1 }],
    semi: ["error", "always"],
    eqeqeq: ["warn", "always"],
    "no-var": "error",
    "prefer-const": "error",
    "prefer-template": "error",
    "prefer-arrow-callback": ["warn", { allowUnboundThis: false }],
    "no-useless-return": "warn",
    "no-global-assign": "off",
    "no-console": "off",
    "no-unused-vars": "error",
    "no-throw-literal": "warn",
  },
};
