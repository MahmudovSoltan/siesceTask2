module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb-base' // Sərt qaydalar üçün
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    // Dəyişən adları MÜTLƏQ camelCase olmalıdır
    'camelcase': ['error', {
      properties: 'always',
      ignoreDestructuring: false,
      ignoreImports: false,
      ignoreGlobals: false
    }],
    
    // Alt xətt (_) qadağan edirik
    'no-underscore-dangle': ['error', {
      allow: [],
      allowAfterThis: false,
      allowAfterSuper: false
    }],
    
    // İstifadə edilməyən dəyişənlər
    'no-unused-vars': ['error', {
      vars: 'all',
      args: 'after-used',
      ignoreRestSiblings: false
    }],
    
    // Digər vacib qaydalar
    'consistent-return': 'error',
    'no-console': 'warn'
  }
};