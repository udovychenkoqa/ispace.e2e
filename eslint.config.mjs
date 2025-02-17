import globals from "globals";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config} */
export default [
    {
        files: ["**/*.{js,mjs,cjs,ts}"],
        ignores: ["**/step.ts", "**/node_modules/**", "/playwright-report/**"],
        rules: {
            // enforces a maximum line length to increase code readability and maintainability
            "max-len": [
                "warn",
                { code: 140, ignoreUrls: true, ignoreRegExpLiterals: true }
            ],
            // enforces a consistent indentation style
            indent: ["error", 4],
            // enforces consistent use of semicolons
            semi: ["error", "always"],
            // enforces the consistent use of either backticks, double, or single quotes
            quotes: [
                "warn",
                "double",
                { avoidEscape: true, allowTemplateLiterals: true }
            ],
            // enforces line breaks after opening and before closing array brackets
            "array-bracket-newline": ["warn", "consistent"],
            // enforces consistent spacing inside array brackets
            "array-bracket-spacing": ["warn", "never"],
            // enforces line breaks between array elements
            "array-element-newline": ["warn", "consistent"],
            // normalize style of spacing before/after an arrow function's arrow(=>)
            "arrow-spacing": ["warn", { before: true, after: true }],
            // or inside a close block token and previous token on the same line
            "block-spacing": ["warn", "always"],
            // enforces consistent use of trailing commas in object and array literals
            "comma-dangle": ["warn", "never"],
            // object literals, function parameters, and sequences
            "comma-spacing": ["warn", { before: false, after: true }],
            // enforce newline consistency in member expressions
            "dot-location": ["warn", "property"],
            // enforces line breaks between arguments of a function call
            "function-call-argument-newline": ["warn", "consistent"],
            // enforces spacing around the colon in object literal properties
            "key-spacing": ["warn", { beforeColon: false, afterColon: true }],
            // disallows unnecessary semicolons
            "no-extra-semi": "warn",
            // number either before or after it
            "no-floating-decimal": "warn",
            // checks BinaryExpression, LogicalExpression and ConditionalExpression
            "no-mixed-operators": [
                "error",
                {
                    groups: [
                        ["&", "|", "^", "~", "<<", ">>", ">>>"],
                        ["&&", "||"],
                        ["in", "instanceof"]
                    ],
                    allowSamePrecedence: true
                }
            ],
            // disallow multiple whitespace around logical expressions, conditional expressions, declarations,
            // array elements, object properties, sequences and function parameters
            "no-multi-spaces": "warn",
            // disallows trailing whitespace (spaces, tabs, and other Unicode whitespace characters) at the end of lines
            "no-trailing-spaces": "warn",
            // disallows whitespace around the dot or before the opening bracket before properties of objects if they
            // the same line
            "no-whitespace-before-property": "error",
            "no-unused-vars": "warn",
            "no-undef": "warn"
        }
    },
    { languageOptions: { globals: globals.browser } },
    ...tseslint.configs.recommended
];
