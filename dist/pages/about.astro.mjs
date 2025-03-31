import { c as createComponent, a as createAstro, b as addAttribute, r as renderHead, d as renderComponent, e as renderScript, f as renderTemplate } from '../chunks/astro/server_Do9F8tRj.mjs';
import 'kleur/colors';
import { $ as $$Header, a as $$Footer } from '../chunks/Footer_DvWrv784.mjs';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const pageTitle = "about";
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${pageTitle}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <h1>${pageTitle}</h1> ${renderComponent($$result, "Footer", $$Footer, {})} ${renderScript($$result, "/home/cybermonki/gitProjects/blog/src/pages/about.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "/home/cybermonki/gitProjects/blog/src/pages/about.astro", void 0);

const $$file = "/home/cybermonki/gitProjects/blog/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
