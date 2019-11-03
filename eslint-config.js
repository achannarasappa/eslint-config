module.exports = {
  "extends": [
    "airbnb-base"
  ],
  "rules": {
    "function-paren-newline": ["error", "consistent"],
    "curly": ["error", "multi"],
    "padded-blocks": ["error", "always"],
    "array-bracket-newline": ["error", { "minItems": 2 }],
    "array-element-newline": ["error", { "minItems": 2 }],
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