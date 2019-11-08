module.exports = {
  "extends": [
    "airbnb-base"
  ],
  "rules": {
    "function-paren-newline": ["error", "consistent"],
    "curly": ["error", "multi"],
    "padded-blocks": ["error", "always"],
    "array-bracket-newline": ["error", { "multiline": true, "minItems": 3 }],
    "array-element-newline": ["error", { "multiline": true, "minItems": 3 }],
    "arrow-body-style": ["error", "as-needed"],
    "arrow-parens": ["error", "always"],
    "space-in-parens": ["error", "never"],
    "indent": ["error", 2],
    "no-multiple-empty-lines": ["error", { "max": 1 }],
    "object-property-newline": ["error", { "allowMultiplePropertiesPerLine": true }],
    "nonblock-statement-body-position": ["error", "below"],
    "no-underscore-dangle": ["off"]
  }
}