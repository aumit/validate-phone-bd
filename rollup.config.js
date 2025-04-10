import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

export default [
    // CommonJS
    {
        input: 'src/index.ts',
        output: {
            file: 'dist/validate-phone-bd.cjs.js',
            format: 'cjs',
            exports: 'named',
        },
        plugins: [resolve(), commonjs(), typescript()],
    },

    // ES Module
    {
        input: 'src/index.ts',
        output: {
            file: 'dist/validate-phone-bd.esm.js',
            format: 'esm',
        },
        plugins: [resolve(), commonjs(), typescript()],
    },

    // UMD (for browser)
    {
        input: 'src/index.ts',
        output: {
            name: 'ValidatePhoneBD',
            file: 'dist/validate-phone-bd.umd.js',
            format: 'umd',
        },
        plugins: [resolve(), commonjs(), typescript()],
    },

    // UMD Minified
    {
        input: 'src/index.ts',
        output: {
            name: 'ValidatePhoneBD',
            file: 'dist/validate-phone-bd.umd.min.js',
            format: 'umd',
            plugins: [terser()],
        },
        plugins: [resolve(), commonjs(), typescript()],
    },
];
