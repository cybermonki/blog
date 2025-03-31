import { _ as __vite_glob_0_0 } from '../../chunks/blog_Bq_JMU2o.mjs';
import { _ as __vite_glob_0_1 } from '../../chunks/post-1_BEnCpkMH.mjs';
import { _ as __vite_glob_0_2 } from '../../chunks/post-2_CNncHfzB.mjs';
import { _ as __vite_glob_0_3 } from '../../chunks/post-3_Dq9rDkt1.mjs';
import { _ as __vite_glob_0_4 } from '../../chunks/post-4_D6x6PHxo.mjs';
import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, f as renderTemplate, d as renderComponent } from '../../chunks/astro/server_Do9F8tRj.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/MarkdownPostLayout_D8q5wNbd.mjs';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro();
const $$BlogPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { title, url } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li><a${addAttribute(url, "href")}>${title}</a></li>`;
}, "/home/cybermonki/gitProjects/blog/src/components/BlogPost.astro", void 0);

const $$Astro = createAstro();
async function getStaticPaths() {
  const allPosts = Object.values([__vite_glob_0_0,__vite_glob_0_1,__vite_glob_0_2,__vite_glob_0_3,__vite_glob_0_4]);
  const uniqueTags = [...new Set(allPosts.map((post) => post.frontmatter.tags).flat())];
  return uniqueTags.map((tag) => {
    const filteredPosts = allPosts.filter((post) => post.frontmatter.tags.includes(tag));
    return {
      params: { tag },
      props: { posts: filteredPosts }
    };
  });
}
const $$tag = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$tag;
  const { tag } = Astro2.params;
  const { posts } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": tag }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>Posts tagged with ${tag}</p> <ul> ${posts.map((post) => renderTemplate`${renderComponent($$result2, "BlogPost", $$BlogPost, { "url": post.url, "title": post.frontmatter.title })}`)} </ul> ` })}`;
}, "/home/cybermonki/gitProjects/blog/src/pages/tags/[tag].astro", void 0);

const $$file = "/home/cybermonki/gitProjects/blog/src/pages/tags/[tag].astro";
const $$url = "/tags/[tag]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$tag,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
