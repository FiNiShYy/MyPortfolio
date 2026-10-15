module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  globals: { __ULTIMA_ATUALIZACAO__: "readonly", __ESTATISTICAS__: "readonly" },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "19.2" } },
  plugins: ["react-refresh"],
  rules: {
    "react/prop-types": "off",
    "react/self-closing-comp": "error",
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    eqeqeq: ["warn", "always", { null: "ignore" }],
    // Guarda-corpo de estilo: estilo mora no styles.jsx.
    // Valor dinâmico vai por $prop ou custom property (style={{ "--x": v }}),
    // marcado com `// inline-dinamico:` no eslint-disable.
    "no-restricted-syntax": [
      "error",
      {
        selector: "JSXAttribute[name.name='style']",
        message: "Sem style inline: mova para o styles.jsx do componente.",
      },
    ],
  },
};
