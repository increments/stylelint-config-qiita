module.exports = {
  "plugins": [
    "stylelint-csstree-validator",
    "stylelint-order",
  ],
  "rules": {
    "at-rule-no-vendor-prefix": true,
    "block-no-empty": true,
    "color-hex-case": "lower",
    "color-hex-length": "short",
    "color-no-invalid-hex": true,
    "comment-no-empty": true,
    "declaration-block-no-duplicate-properties": true,
    "declaration-block-no-shorthand-property-overrides": true,
    "declaration-no-important": true,
    "function-calc-no-unspaced-operator": true,
    "function-linear-gradient-no-nonstandard-direction": true,
    "function-name-case": "lower",
    "indentation": 2,
    "keyframe-declaration-no-important": true,
    "length-zero-no-unit": true,
    "max-empty-lines": 1,
    "media-feature-name-case": "lower",
    "media-feature-name-no-vendor-prefix": true,
    "no-empty-source": true,
    "no-eol-whitespace": true,
    "no-extra-semicolons": true,
    "no-missing-end-of-source-newline": true,
    "no-unknown-animations": true,
    "number-leading-zero": "always",
    "number-no-trailing-zeros": true,
    "property-case": "lower",
    "property-no-vendor-prefix": true,
    "selector-descendant-combinator-no-non-space": true,
    "selector-max-empty-lines": 0,
    "selector-max-specificity": "0,5,0",
    "selector-no-vendor-prefix": true,
    "selector-pseudo-class-case": "lower",
    "selector-pseudo-element-case": "lower",
    "selector-pseudo-element-colon-notation": "double",
    "selector-type-case": "lower",
    "shorthand-property-no-redundant-values": true,
    "string-no-newline": true,
    "string-quotes": "single",
    "unit-case": "lower",
    "unit-no-unknown": true,
    "value-list-max-empty-lines": 0,
    "value-no-vendor-prefix": true,

    // stylelint-csstree-validator
    "csstree/validator": true,

    // stylelint-order
    "order/properties-order": require('./properties-order'),
  },
}
