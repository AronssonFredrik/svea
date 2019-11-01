import analyze from 'rollup-plugin-analyzer';
import bundleSize from 'rollup-plugin-bundle-size';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import svelte from 'rollup-plugin-svelte';
import {
	terser
} from 'rollup-plugin-terser';
import sass from 'node-sass';
import pkg from './package.json';
import livereload from 'rollup-plugin-livereload';

const production = !process.env.ROLLUP_WATCH;

const {
	name
} = pkg;

export default {
	input: 'src/main.js',
	output: [{
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
			// we'll extract any component CSS out into
			// a separate file — better for performance
			css: css => css.write('dist/bundle.css'),
			hydratable: true,
			preprocess: {
				style: ({ content, attributes }) => {
					if (attributes.type !== 'text/scss') return;
					return new Promise((fulfil, reject) => {
						sass.render({
							data: content,
							includePaths: ['src'],
							sourceMap: true,
							outFile: 'x' // this is necessary, but is ignored
						}, (err, result) => {
							if (err) return reject(err);

							fulfil({
								code: result.css.toString(),
								map: result.map.toString()
							});
						});
					});
				}
			}
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