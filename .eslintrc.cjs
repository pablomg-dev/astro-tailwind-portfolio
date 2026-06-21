module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:astro/recommended"
  ],
  "parserOptions": {
    "ecmaVersion": 2022,
    "sourceType": "module",
    "parser": "@typescript-eslint/parser"
  },
  "plugins": [
    "@typescript-eslint"
  ],
  "rules": {
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-empty-interface": "warn",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-inferrable-types": "off",
    "eqeqeq": "error",
    "curly": "error",
    "no-console": "warn"
  },
  "settings": {
    "astro": {
      "astGlob": "**/*.astro"
    }
  }
};