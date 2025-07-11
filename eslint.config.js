// eslint.config.js
import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import prettierConfig from "eslint-config-prettier"; // 1. IMPORTE AQUI

export default [
  // Configurações existentes do seu projeto Vite...
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } }, // Adicionei node para ser mais completo
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ...pluginReactConfig,
    rules: {
      // Garante que as regras do React não conflitem
      ...pluginReactConfig.rules,
      "react/react-in-jsx-scope": "off", // Regra desnecessária com Vite/React 17+
      "react/jsx-no-target-blank": "off",
    },
  },

  // ...outras configurações que seu projeto possa ter...

  // 2. ADICIONE ESTA LINHA POR ÚLTIMO!
  // Ela desativa as regras de estilo do ESLint que entram em conflito com o Prettier.
  prettierConfig,
];
