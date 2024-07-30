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
    parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
        warnOnUnsupportedTypeScriptVersion: false,
    },
    plugins: ['simple-import-sort'],
    overrides: [
        {
            files: ['*.ts'],
            extends: [
                'plugin:@typescript-eslint/recommended',
                'plugin:@angular-eslint/recommended',
                'plugin:@angular-eslint/template/process-inline-templates',
                'airbnb-base',
                'airbnb-typescript/base',
                'plugin:prettier/recommended',
            ],
            rules: {
                'no-unused-vars': 'error',
                'no-console': ['error', { allow: ['warn', 'error'] }],
                'import/extensions': 'off',
                'import/prefer-default-export': 'off',
                '@typescript-eslint/no-explicit-any': 'error',
                '@typescript-eslint/no-unused-vars': 'off',
                'dot-notation': 'off',
                '@typescript-eslint/dot-notation': 'off',
                'prefer-destructuring': 'off',
                'no-useless-constructor': 'off',
                'class-methods-use-this': 'off',
                '@typescript-eslint/lines-between-class-members': 'off',
                'lines-between-class-members': 'off',
                'no-empty-function': 'off',
                '@typescript-eslint/naming-convention': [
                    'error',
                    {
                        selector: 'variable',
                        format: ['camelCase', 'UPPER_CASE', 'StrictPascalCase'],
                    },
                ],
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
