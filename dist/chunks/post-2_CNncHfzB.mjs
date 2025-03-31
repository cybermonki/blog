import { c as createComponent, d as renderComponent, f as renderTemplate, u as unescapeHTML } from './astro/server_Do9F8tRj.mjs';
import 'kleur/colors';
import { a as $$MarkdownPostLayout } from './MarkdownPostLayout_D8q5wNbd.mjs';

const html = () => "<h1 id=\"my-second-blog-post\">My Second Blog Post</h1>";

				const frontmatter = {"layout":"../../layouts/MarkdownPostLayout.astro","title":"My First Blog Post","pubDate":"2025-03-19T00:00:00.000Z","description":"This is the first post of my new Astro blog.","author":"cybermonki","image":{"url":"https://docs.astro.build/assets/rose.webp","alt":"The Astro logo on a dark background with a pink glow."},"tags":["astro","blogging","learning in public"]};
				const file = "/home/cybermonki/gitProjects/blog/src/pages/posts/post-2.md";
				const url = "/posts/post-2";
				function rawContent() {
					return "   \n                                              \n                           \n                   \n                                                           \n                    \n      \n                                                    \n                                                                \n                                                 \n   \n# My Second Blog Post\n\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":1,"slug":"my-second-blog-post","text":"My Second Blog Post"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$MarkdownPostLayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html())}`
							})}`;
				});

const __vite_glob_0_2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	compiledContent,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	rawContent,
	url
}, Symbol.toStringTag, { value: 'Module' }));

export { __vite_glob_0_2 as _ };
