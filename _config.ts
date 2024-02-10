import lume from "lume/mod.ts";
import codeHighlight from "lume/plugins/code_highlight.ts";
import minifyHTML from "lume/plugins/minify_html.ts";
import lightningCSS from "lume/plugins/lightningcss.ts";
import picture from "lume/plugins/picture.ts";
import transformImages from "lume/plugins/transform_images.ts";
import sitemap from "lume/plugins/sitemap.ts";

const site = lume({
  src: './src',
  location: new URL("https://cesia.pages.dev"),
});

site.use(picture());
site.use(transformImages({
  cache: false,
}));
site.use(codeHighlight());
site.use(minifyHTML());
site.use(lightningCSS());
site.use(sitemap());

site.addEventListener("afterBuild", "cp _site/cesia.css ./cesia.css");

export default site;
