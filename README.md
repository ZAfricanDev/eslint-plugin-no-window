# eslint-plugin-no-window

An ESLint plugin that disallows direct access to the global `window` object, except for known native properties (like `window.location` or `window.setTimeout`). This helps enforce safer browser code and encourages abstraction instead of using globals directly.

---

## Installation

```bash
# Install ESLint if not already installed
npm install --save-dev eslint

# Install the plugin
npm install --save-dev eslint-plugin-no-window
```

Usage

Add the plugin to your ESLint configuration.

For .eslintrc.js:

```js
module.exports = {
  plugins: ["no-window"],
  rules: {
    "no-window/no-direct-window-access": "error",
  },
};
```

For eslint.config.js (flat config):

```js
import noWindow from "eslint-plugin-no-window";

export default [
  {
    plugins: { "no-window": noWindow },
    rules: {
      "no-window/no-direct-window-access": "error",
    },
  },
];
```

Rule Name

`no-window/no-direct-window-access`

```js
Examples
✅ Allowed:
window.location.href;
window.document.title = "Hello";
window.setTimeout(() => {}, 1000);

❌ Disallowed:
window; // direct reference
window.compensation_options;
window.myCustomThing = 123;
```

Testing

This plugin uses ESLint's RuleTester and Mocha for tests.

To run the tests:

npm install
npm test

You should see all valid and invalid cases verified.

Contributing

Contributions are welcome! Feel free to submit issues or pull requests to improve the plugin or add more native window properties to the whitelist.

License:
`MIT`
