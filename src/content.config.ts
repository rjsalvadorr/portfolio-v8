import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const portfolio = defineCollection({
	// Load Markdown and MDX files in the `src/content/portfolio/` directory.
	loader: glob({ base: './src/content/portfolio', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			subtitle: z.string().nullable().optional(),
			description: z.string(),
			category: z.string(),
			slug: z.string(),
			draft: z.boolean(),
			tags: z.array(z.string()).optional(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			thumbnail: image().optional(),
			heroImage: image().optional(),
			template: z.string().optional(),
		}),
});

const pages = defineCollection({
	// Load Markdown and MDX files in the `src/content/portfolio/` directory.
	loader: glob({ base: './src/content/pages', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			subtitle: z.string().nullable().optional(),
			description: z.string(),
			category: z.string(),
			slug: z.string(),
			draft: z.boolean(),
			tags: z.array(z.string()).optional(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			thumbnail: image().optional(),
			heroImage: image().optional(),
			template: z.string().optional(),
		}),
});

export const collections = { portfolio, pages };
