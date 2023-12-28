import { defineConfig } from 'astro/config';
import { myRemarkPlugin } from './testRemarkPlugin.mjs'

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [],
	markdown: {
		remarkPlugins: [myRemarkPlugin]
	}
});
