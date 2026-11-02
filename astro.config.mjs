import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

export default defineConfig({
  site: "https://xiaohuojianvpn.biz",
  output: "static",
  integrations: [
    mdx(),
    tailwind(),
    icon(),
    sitemap({ filter: (page) => !page.includes("/draft/") }),
  ],
  build: { format: "directory" },
});
