/**
 * @type {import('eslint').ESLint.ConfigData}
 */
module.exports = {
    root: true,
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    ignorePatterns: '*.spec.ts',
    parserOptions: { project: './tsconfig.json', sourceType: 'module' },
    plugins: ['simple-import-sort'],
    overrides: [
        {
            files: ['*.ts'],
            extends: [
                'plugin:@typescript-eslint/recommended',
                'plugin:@angular-eslint/recommended',
                'plugin:@angular-eslint/template/process-inline-templates',
                'airbnb-typescript/base',
                'airbnb-base',
                'plugin:prettier/recommended',
            ],
            rules: {
                'no-console': ['error', { allow: ['warn', 'error'] }],
                'import/extensions': 'off',
                'import/prefer-default-export': 'off',
                '@typescript-eslint/no-explicit-any': 'error',
                'max-len': ['error', 100],
                '@angular-eslint/directive-selector': [
                    'error',
                    {
                        type: 'attribute',
                        prefix: 'app',
                        style: 'camelCase',
                    },
                ],
                '@angular-eslint/component-selector': [
                    'error',
                    {
                        type: 'element',
                        prefix: 'app',
                        style: 'kebab-case',
                    },
                ],
            },
        },
        {
            files: ['*.html'],
            extends: [
                'plugin:@angular-eslint/template/recommended',
                'plugin:@angular-eslint/template/accessibility',
            ],
        },
    ],
};
