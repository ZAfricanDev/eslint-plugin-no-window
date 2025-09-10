import noWindow from "./index.js";

export default [
  {
    plugins: {
      "no-window": noWindow,
    },
    rules: {
      "no-window/no-direct-window-access": "error",
    },
  },
];
