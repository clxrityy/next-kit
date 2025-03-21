import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    env: {
      node: true,
      es2021: true,
      browser: true,
      jest: true,
    },
    plugins: ["react", "prettier"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
    globals: {
      React: "readonly",
    },
    overrides: [
      {
        files: ["__tests__/**/*.spec.ts"],
        rules: {
          "playwrite/no-standalone-expect": "off",
          "comma-dangle": ["error"],
        },
      },
    ],
    rules: {
      "prettier/prettier": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
    },
  }),
];

export default eslintConfig;
