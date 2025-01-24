import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        files: ["**/*.{js,mjs,cjs,ts}"],
        ignores: ["**/step.ts", "**/node_modules/**"],
        rules: {
            // enforces a maximum line length to increase code readability and maintainability
            "max-len": ["warn", { "code": 120, "ignoreUrls": true, "ignoreRegExpLiterals": true }],
            // enforces a consistent indentation style
            "indent": ["error", 4],
            // enforces consistent use of semicolons
            "semi": ["error", "always"],
            // enforces the consistent use of either backticks, double, or single quotes
            "quotes": ["warn", "double", { "avoidEscape": true, "allowTemplateLiterals": true }],
            // enforces line breaks after opening and before closing array brackets        
            "array-bracket-newline": ["warn", "consistent"],
            // enforces consistent spacing inside array brackets
            "array-bracket-spacing": ["warn", "never"],
            // enforces line breaks between array elements
            "array-element-newline": ["warn", "consistent"],
            // normalize style of spacing before/after an arrow function's arrow(=>)
            "arrow-spacing": ["warn", { "before": true, "after": true }],
            // or inside a close block token and previous token on the same line
            "block-spacing": ["warn", "always"],
            // enforces consistent use of trailing commas in object and array literals
            "comma-dangle": ["warn", "never"],
            // object literals, function parameters, and sequences
            "comma-spacing": ["warn", { "before": false, "after": true }],
            // enforce newline consistency in member expressions
            "dot-location": ["warn", "property"],
            "no-unused-vars": "warn",
            "no-undef": "warn"
        }
    },
    {files: ["**/*.js"], languageOptions: { sourceType: "commonjs" }},
    {languageOptions: { globals: globals.browser }},
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended
];