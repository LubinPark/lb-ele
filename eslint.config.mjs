import js from '@eslint/js'
import globals from 'globals'
import css from '@eslint/css'
import json from '@eslint/json'
import tseslint from 'typescript-eslint'
import eslintReact from '@eslint-react/eslint-plugin'
import { defineConfig } from 'eslint/config'
// import markdown from '@eslint/markdown'

export default defineConfig([
    {
        files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
        plugins: { js },
        extends: ['js/recommended'],
        languageOptions: { globals: { ...globals.browser, ...globals.node } },
        rules: {
            // 限制最多1个连续空行
            'no-multiple-empty-lines': ['error', { max: 1 }],
            // 类成员之间需要空行
            'lines-between-class-members': ['error', 'always'],
            // 函数定义之间需要空行
            'padding-line-between-statements': [
                'error',
                { blankLine: 'always', prev: '*', next: 'function' },
                { blankLine: 'always', prev: 'function', next: '*' }
            ],
            // 箭头函数参数只有一个时，可以省略括号
            'arrow-parens': ['error', 'as-needed'],
            // 数组最后一个元素后面不需要逗号
            'comma-dangle': ['error', 'never'],
            // 箭头函数体只有一个语句时，可以省略大括号
            'arrow-body-style': ['error', 'as-needed'],
            // 使用 单引号
            'quotes': ['error', 'single']
        }
    },
    tseslint.configs.recommended,
    eslintReact.configs.recommended,
    {
        ignores: [
            'node_modules/',
            'dist/',
            'build/',
            '**/temp/*.js',
            '.vite/',
            '.vscode/',
            'doc/',
            'package-lock.json'
        ]
    },
    {
        files: ['**/*.json'],
        plugins: { json },
        language: 'json/json',
        extends: ['json/recommended']
    },
    {
        files: ['**/*.jsonc'],
        plugins: { json },
        language: 'json/jsonc',
        extends: ['json/recommended']
    },
    {
        files: ['**/*.json5'],
        plugins: { json },
        language: 'json/json5',
        extends: ['json/recommended']
    },
    {
        files: ['**/*.css'],
        plugins: { css },
        language: 'css/css',
        extends: ['css/recommended']
    }
    // {
    //     files: ['**/*.md'],
    //     plugins: { markdown },
    //     language: 'markdown/gfm',
    //     extends: ['markdown/recommended']
    // }
])
