const noDirectWindowAccess = require("./lib/rules/no-direct-window-access");

module.exports = {
  rules: {
    "no-direct-window-access": noDirectWindowAccess,
  },
};
