import { c as createComponent, a as createAstro, b as addAttribute, r as renderHead, d as renderComponent, g as renderSlot, e as renderScript, f as renderTemplate } from './astro/server_Do9F8tRj.mjs';
import 'kleur/colors';
import { $ as $$Header, a as $$Footer } from './Footer_DvWrv784.mjs';
/* empty css                          */

const $$Astro$1 = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { pageTitle } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${pageTitle}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <div class="content"> <h1>${pageTitle}</h1> ${renderSlot($$result, $$slots["default"])} </div> ${renderScript($$result, "/home/cybermonki/gitProjects/blog/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts")} </body> ${renderComponent($$result, "Footer", $$Footer, {})} </html>`;
}, "/home/cybermonki/gitProjects/blog/src/layouts/BaseLayout.astro", void 0);

const $$Astro = createAstro();
const $$MarkdownPostLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MarkdownPostLayout;
  const { frontmatter } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": frontmatter.pageTitle }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/home/cybermonki/gitProjects/blog/src/layouts/MarkdownPostLayout.astro", void 0);

export { $$BaseLayout as $, $$MarkdownPostLayout as a };
