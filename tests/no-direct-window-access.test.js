import { RuleTester } from "eslint";
import rule from "../lib/rules/no-direct-window-access.js";

const tester = new RuleTester({
  languageOptions: { ecmaVersion: 2022 }, // modern JS
});

tester.run("no-direct-window-access", rule, {
  valid: [
    "console.log(window.location.href);",
    "window.document.title = 'ok';",
    "window.setTimeout(() => {}, 1000);",
  ],

  invalid: [
    {
      code: "console.log(window.compensation_options);",
      errors: [
        {
          message:
            "Unexpected non-native window property 'compensation_options'.",
        },
      ],
    },
    {
      code: "const x = window.myGlobalVar;",
      errors: [
        { message: "Unexpected non-native window property 'myGlobalVar'." },
      ],
    },
    {
      code: "console.log(window);",
      errors: [{ message: "Unexpected direct use of global 'window'." }],
    },
  ],
});
