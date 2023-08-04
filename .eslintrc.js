module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['prettier', 'plugin:prettier/recommended'],
    parser: '@typescript-eslint/parser',
    overrides: [],
    parserOptions: {
        sourceType: 'module',
        project: './tsconfig.json',
        ecmaVersion: 'latest',
    },
    ignorePatterns: ['*.js'],
    plugins: ['@typescript-eslint'],
    rules: {},
};
