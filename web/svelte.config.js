import adapter from '@sveltejs/adapter-auto';
import vercel from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';

import watchAndRun from '@kitql/vite-plugin-watch-and-run'


/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		experimental: {
			useVitePreprocess: true
		},
		adapter: adapter(),

		// adapter: vercel({
		// 	// if true, will deploy the app using edge functions
		// 	// (https://vercel.com/docs/concepts/functions/edge-functions)
		// 	// rather than serverless functions
		// 	edge: false,
	  
		// 	// an array of dependencies that esbuild should treat
		// 	// as external when bundling functions
		// 	external: [],
	  
		// 	// if true, will split your app into multiple functions
		// 	// instead of creating a single one for the entire app
		// 	split: false
		//   }),
		vite: {
			plugins: [
				watchAndRun([
					{
						watch: '**/*.(gql|graphql)',
						run: 'npm run gen'
					}
				])
			]
		},
		alias: {
			// $static: 'static',
			$lib: 'src/lib',
			$components: 'src/lib/components',
			$utils: 'src/utils'
		},
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		}
	}
};

export default config;
