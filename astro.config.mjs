import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import NetlifyCMS from "astro-decap-cms";

// https://astro.build/config
export default defineConfig({
	site: "https://example.com",
	integrations: [
		NetlifyCMS({
			config: {
				backend: {
					name: "git-gateway",
					branch: "main",
				},
				collections: [
					// Define a blog post collection
					{
						name: "posts",
						label: "Blog Posts",
						folder: "src/content/blog",
						create: true,
						delete: true,
						fields: [
							{ name: "title", widget: "string", label: "Post Title" },
							{
								name: "description",
								widget: "string",
								label: "Post Description",
							},
							{ name: "pubDate", widget: "datetime", label: "Publish Date" },
							{ name: "heroImage", widget: "image", label: "Featured Image" },
							{ name: "body", widget: "markdown", label: "Post Body" },
						],
					},
				],
			},
		}),
		mdx(),
		sitemap(),
	],
});
