// .eslintrc.cjs o el archivo donde exportes config
import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'

const eslintConfig = defineConfig([
  ...nextVitals,
  {
    parserOptions: {
      ecmaVersion: 2024,
      sourceType: 'module',
      ecmaFeatures: { jsx: true },
      jsxRuntime: 'automatic'
    },
    settings: {
      react: { version: 'detect' }
    },
    plugins: ['react'],
    rules: {
      'react/react-in-jsx-scope': 'off'
    }
  },
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
])

export default eslintConfig
