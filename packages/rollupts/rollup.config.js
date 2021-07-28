import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import babel  from 'rollup-plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import { DEFAULT_EXTENSIONS } from '@babel/core';
import {terser} from 'rollup-plugin-terser';

let defaults = { compilerOptions: { declaration: true } };
let override = { compilerOptions: { declaration: false } };

export default {
  input: "src/index.ts",
  output: {
    file: './dist/index.js',
    format: 'es',
    plugins: [terser()]
  },
  plugins: [
    typescript({
      tsconfigDefaults: defaults,
      tsconfig: "tsconfig.json",
      tsconfigOverride: override
    }),
    nodeResolve({
      jsnext: true,
      main: true
    }),
    commonjs({
      // non-CommonJS modules will be ignored, but you can also
      // specifically include/exclude files
      include: 'node_modules/**',  // Default: undefined
    }),
    babel({ extensions: [...DEFAULT_EXTENSIONS, '.js', '.ts'], exclude: "node_modules/**" })
  ],
  watch: {
    include: 'src/**',
    clearScreen: true
  }
}