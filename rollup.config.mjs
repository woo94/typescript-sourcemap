// rollup.config.mjs
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import json from "@rollup/plugin-json";
import terser from "@rollup/plugin-terser";

export default {
  input: "./src/index.ts",
  output: {
    file: "./dist/bundle.js",
    format: "cjs",
    sourcemap: true,
  },
  plugins: [
    terser(),
    resolve({
      preferBuiltins: true,
    }),
    commonjs(),
    json(),
    typescript(),
  ],
};
