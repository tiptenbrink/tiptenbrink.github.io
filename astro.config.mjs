import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import { myRemarkPlugin } from './testRemarkPlugin.mjs'

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [],
	markdown: {
		remarkPlugins: [remarkMath, myRemarkPlugin]
	}
});
