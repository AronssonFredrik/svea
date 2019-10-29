import analyze from 'rollup-plugin-analyzer';
import autoPreprocess from 'svelte-preprocess';
import bundleSize from 'rollup-plugin-bundle-size';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import svelte from 'rollup-plugin-svelte';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';
import livereload from 'rollup-plugin-livereload';

const production = !process.env.ROLLUP_WATCH;

const { name } = pkg;

export default {
  input: 'src/main.js',
  output: [
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
      name,
    },
    {
      file: pkg.main,
      format: 'umd',
      sourcemap: true,
      name,
    }
  ],
  plugins: [
    svelte({
      // enable run-time checks when not in production
      dev: !production,
      // generate: production ? 'dom' : 'ssr',
      hydratable: true,
			css: css => {
				css.write('dist/bundle.css');
			},
      preprocess: autoPreprocess({
        postcss: {
          plugins: [require('autoprefixer')()],
        },
      })
    }),
		resolve({
			browser: true,
			dedupe: importee => importee === 'svelte' || importee.startsWith('svelte/')
		}),
    commonjs(),
		!production && livereload('public'),
    production && terser(),
    production && analyze(),
    production && bundleSize(),
  ],
  watch: {
    clearScreen: false,
  }
}