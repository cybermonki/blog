import { c as createComponent, m as maybeRenderHead, f as renderTemplate, d as renderComponent, b as addAttribute } from './astro/server_Do9F8tRj.mjs';
import 'kleur/colors';
import 'clsx';

const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="nav-links"> <a href="/">home</a> <a href="/about/">about</a> <a href="/blog/">blog</a> </div>`;
}, "/home/cybermonki/gitProjects/blog/src/components/Navigation.astro", void 0);

const $$Hamburger = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="hamburger"> <span class="line"></span> <span class="line"></span> <span class="line"></span> </div>`;
}, "/home/cybermonki/gitProjects/blog/src/components/Hamburger.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header> <nav> ${renderComponent($$result, "Hamburger", $$Hamburger, {})} ${renderComponent($$result, "Navigation", $$Navigation, {})} </nav></header>`;
}, "/home/cybermonki/gitProjects/blog/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const platform = "github";
  const username = "cybermonki";
  return renderTemplate`${maybeRenderHead()}<footer class="footer"> <p>Learn more about my projects on <a${addAttribute(`https://www.${platform}.com/${username}`, "href")}>${platform}</a>!</p> </footer>`;
}, "/home/cybermonki/gitProjects/blog/src/components/Footer.astro", void 0);

export { $$Header as $, $$Footer as a };
