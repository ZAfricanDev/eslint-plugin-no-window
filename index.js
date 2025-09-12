const noDirectWindowAccess = require("./lib/rules/no-direct-window-access.js");

export default {
  rules: {
    "no-direct-window-access": noDirectWindowAccess,
  },
};
