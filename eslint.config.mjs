import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    languageOptions: {
      globals: globals.node,  // Use Node.js globals
      ecmaVersion: "latest",  // Modern ECMAScript support
      sourceType: "module"    // Ensure ES6 module support
    }
  },
  pluginJs.configs.recommended,
];
