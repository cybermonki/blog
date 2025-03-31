import { _ as __vite_glob_0_0 } from '../chunks/blog_Bq_JMU2o.mjs';
import { _ as __vite_glob_0_1 } from '../chunks/post-1_BEnCpkMH.mjs';
import { _ as __vite_glob_0_2 } from '../chunks/post-2_CNncHfzB.mjs';
import { _ as __vite_glob_0_3 } from '../chunks/post-3_Dq9rDkt1.mjs';
import { _ as __vite_glob_0_4 } from '../chunks/post-4_D6x6PHxo.mjs';
import { c as createComponent, d as renderComponent, f as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_Do9F8tRj.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/MarkdownPostLayout_D8q5wNbd.mjs';
export { renderers } from '../renderers.mjs';

const $$Blog = createComponent(($$result, $$props, $$slots) => {
  const allPosts = Object.values([__vite_glob_0_0,__vite_glob_0_1,__vite_glob_0_2,__vite_glob_0_3,__vite_glob_0_4]);
  const pageTitle = "Blog Index";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>Ipso Lipsum</p> <ul> ${allPosts.map((post) => renderTemplate`<li><a${addAttribute(post.url, "href")}>${post.frontmatter.title}</a></li>`)} </ul> ` })}`;
}, "/home/cybermonki/gitProjects/blog/src/pages/blog.astro", void 0);

const $$file = "/home/cybermonki/gitProjects/blog/src/pages/blog.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Blog,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
