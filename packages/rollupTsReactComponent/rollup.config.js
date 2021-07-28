import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import babel  from 'rollup-plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import { DEFAULT_EXTENSIONS } from '@babel/core';
import {terser} from 'rollup-plugin-terser';
import autoprefixer from 'autoprefixer';
import postcss from 'rollup-plugin-postcss';

export default {
  input: "./src/index.ts",
  output: {
    file: './dist/index.js',
    format: 'es',
    plugins: [terser()]
  },
  plugins: [
    postcss({
      plugins: [autoprefixer()],
      sourceMap: true,
      extract: false,
      minimize: true
    }),
    typescript({
      tsconfigDefaults: { compilerOptions: { declaration: true } },
      tsconfig: "tsconfig.json",
      tsconfigOverride: { compilerOptions: { declaration: false } }
    }),
    nodeResolve({
      jsnext: true,
      main: true,
      extensions: [...DEFAULT_EXTENSIONS, '.js', '.ts', '.tsx']
    }),
    babel({ 
      extensions: [...DEFAULT_EXTENSIONS, '.js', '.ts', '.tsx'], 
      exclude: "node_modules/**", 
      presets: ['@babel/env', '@babel/preset-react'] 
    }),
    commonjs({
      include: [
        'node_modules/**'
      ],
      exclude: [
        'node_modules/process-es6/**'
      ],
      namedExports: {
        'react': ['createElement', 'Component' ],
        'react-dom': ['render']
      }
    }),
  ],
  watch: {
    include: 'src/**',
    clearScreen: true
  }
}