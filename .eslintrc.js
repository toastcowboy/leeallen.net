/**
 * Please refer to the ESLint documentation for info on how each rule works:
 * http://eslint.org/docs/rules
 */

module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": "eslint:recommended",
  "rules": {
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ],
    "no-extra-parens": [
      "error",
      "all"
    ],
    "valid-jsdoc": [
      "error",
      {
        "prefer": {
          "arg": "param",
          "argument": "param",
          "class": "constructor",
          "return": "returns",
          "virtual": "abstract"
        }
      }
    ],
    "require-jsdoc": [
      "error", {
        "require": {
          "FunctionDeclaration": true,
          "MethodDefinition": true,
          "ClassDeclaration": true
        }
      }
    ],
    "array-callback-return": ["error"],
    "consistent-return": ["error"],
    "curly": ["error"],
    "default-case": ["error"],
    "dot-notation": ["error"],
    "eqeqeq": [
      "error",
      "smart"
    ],
    "guard-for-in": ["error"],
    "no-alert": ["warn"],
    "no-caller": ["error"],
    "no-else-return": ["error"],
    "no-empty-function": ["error"],
    "no-eq-null": ["error"],
    "no-eval": ["error"],
    "no-extra-bind": ["error"],
    "no-extra-label": ["error"],
    "no-floating-decimal": ["error"],
    "no-implicit-coercion": ["error"],
    "no-implicit-globals": ["error"],
    "no-implied-eval": ["error"],
    "no-invalid-this": ["warn"],
    "no-iterator": ["error"],
    "no-loop-func": ["error"],
    "no-multi-str": ["error"],
    "no-native-reassign": ["error"],
    "no-new": ["error"],
    "no-new-func": ["error"],
    "no-new-wrappers": ["error"],
    "no-octal": ["error"],
    "no-octal-escape": ["error"],
    "no-param-reassign": ["error"],
    "no-proto": ["error"],
    "no-return-assign": ["error"],
    "no-script-url": ["error"],
    "no-self-compare": ["error"],
    "no-sequences": ["error"],
    "no-throw-literal": ["error"],
    "no-unmodified-loop-condition": ["error"],
    "no-unused-expressions": ["error"],
    "no-useless-call": ["error"],
    "no-useless-concat": ["error"],
    "no-useless-escape": ["error"],
    "no-void": ["error"],
    "no-warning-comments": ["warn"],
    "no-with": ["error"],
    "radix": ["error"],
    "vars-on-top": ["error"],
    "yoda": ["error"],
    "strict": ["error"],
    "init-declarations": [
      "warn",
      "never"
    ],
    "no-catch-shadow": ["warn"],
    "no-label-var": ["error"],
    "no-restricted-globals": [
      "error",
      "event"
    ],
    "no-shadow": [
      "error",
      {
        "builtinGlobals": false,
        "hoist": "functions",
        "allow": []
      }
    ],
    "no-shadow-restricted-names": ["error"],
    "no-undef-init": ["error"],
    "no-undefined": ["error"],
    "no-use-before-define": ["error"],
    "array-bracket-spacing": [
      "error",
      "never"
    ],
    "block-spacing": [
      "error",
      "always"
    ],
    "brace-style": [
      "error",
      "1tbs"
    ],
    "camelcase": ["error"],
    "comma-spacing": ["error"],
    "comma-style": ["error"],
    "consistent-this": ["error"],
    "eol-last": ["error"],
    "func-names": ["error"],
    "func-style": ["error"],
    "id-blacklist": [
      "error",
      "data",
      "err",
      "e",
      "cb",
      "callback"
    ],
    "id-length": [
      "warn",
      {"min": 2}
    ],
    "key-spacing": ["error"],
    "keyword-spacing": ["error"],
    "lines-around-comment": [
      "error",
      {
        "beforeBlockComment": true,
        "afterBlockComment": false,
        "beforeLineComment": true,
        "afterLineComment": false,
        "allowBlockStart": true,
        "allowBlockEnd": true,
        "allowObjectStart": true,
        "allowObjectEnd": true,
        "allowArrayStart": true,
        "allowArrayEnd": true
      }
    ],
    "max-depth": [
      "error",
      {"max": 4}
    ],
    "max-len": [
      "warn",
      {
        "code": 120,
        "tabWidth": 2,
        "comments": 120,
        "ignoreComments": false,
        "ignoreUrls": true
      }
    ],
    "max-nested-callbacks": [
      "error",
      {"max": 10}
    ],
    "max-params": [
      "error",
      {"max": 3}
    ],
    "max-statements-per-line": [
      "error",
      {"max": 1}
    ],
    "new-cap": ["error"],
    "new-parens": ["error"],
    "newline-after-var": ["error"],
    "newline-before-return": ["error"],
    "newline-per-chained-call": ["error"],
    "no-array-constructor": ["error"],
    "no-bitwise": ["error"],
    "no-continue": ["error"],
    "no-inline-comments": ["error"],
    "no-lonely-if": ["error"],
    "no-multiple-empty-lines": [
      "error",
      {
        "max": 1,
        "maxEOF": 1,
        "maxBOF": 0
      }
    ],
    "no-negated-condition": ["error"],
    "no-nested-ternary": ["error"],
    "no-new-object": ["error"],
    "no-plusplus": ["error"],
    "no-spaced-func": ["error"],
    "no-trailing-spaces": ["error"],
    "no-unneeded-ternary": ["error"],
    "no-whitespace-before-property": ["error"],
    "object-curly-newline": ["error"],
    "object-curly-spacing": ["error"],
    "object-property-newline": ["error"],
    "semi-spacing": ["error"],
    "sort-vars": ["error"],
    "space-before-blocks": ["error"],
    "space-before-function-paren": [
      "error",
      {
        "anonymous": "always",
        "named": "never"
      }
    ],
    "space-in-parens": ["error"],
    "space-infix-ops": ["error"],
    "space-unary-ops": ["error"],
    "spaced-comment": ["error"]
  }
};
