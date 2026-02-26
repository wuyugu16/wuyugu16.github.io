import {blogPlugin} from "@vuepress/plugin-blog";
import {defaultTheme} from "@vuepress/theme-default";
import {defineUserConfig} from "vuepress";
import {viteBundler} from "@vuepress/bundler-vite";

import sub_plugin from "markdown-it-sub";
import sup_plugin from "markdown-it-sup";
import footnote_plugin from "markdown-it-footnote";
import math_plugin from "markdown-it-math";
import container_plugin from "markdown-it-container";
import hljs from "highlight.js";

export default defineUserConfig({
	MarkdownOptions: {},
	extendsMarkdown: md => {
		md.use(sub_plugin)
			.use(sup_plugin)
			.use(footnote_plugin)
			.use(math_plugin)
			.use(container_plugin, "fold", {
				validate: function (params) {
					return params
						.trim()
						.match(/^(warn|prove|info)(\[(.*)\])?$/);
				},
				render: function (tokens, idx) {
					var m = tokens[idx].info
						.trim()
						.match(/^(warn|prove|info)(\[(.*)\])?$/);
					if (tokens[idx].nesting === 1) {
						let sum = md.renderInline(m[3] ? m[3] : "");
						if (!sum)
							sum = {warn: "警告", prove: "证明", info: "提示"}[
								m[1]
							];
						return (
							'<details class="' +
							m[1] +
							'"><summary>' +
							sum +
							'</summary><div class="det-in">'
						);
					} else {
						return "</div></details>\n";
					}
				},
			})
			.set({
				html: true,
				highlight: function (str, lang, sti = "") {
					if (lang && hljs.getLanguage(lang)) {
						var res = hljs.highlight(str, {
							language: lang,
							ignoreIllegals: true,
						}).value;
						return '<pre class="hljs">' + res + "</pre>";
					}
					return (
						'<pre class="hljs">' +
						md.utils.escapeHtml(str) +
						"</pre>"
					);
				},
			});
	},

	lang: "zh-CN",

	title: "wuyugu",

	theme: defaultTheme({
		sidebar: false,
		navbar: [
			"/",
			{
				text: "文章",
				link: "/article/",
			},
			{
				text: "类别",
				link: "/category/",
			},
			{
				text: "标签",
				link: "/tag/",
			},
		],
	}),

	plugins: [
		blogPlugin({
			// Only files under posts are articles
			filter: ({filePathRelative}) =>
				filePathRelative
					? filePathRelative.startsWith("posts/")
					: false,

			// Getting article info
			getInfo: ({frontmatter, title, data}) => ({
				title,
				date: frontmatter.date || null,
				category: frontmatter.category || [],
				tag: frontmatter.tag || [],
			}),

			// Generate excerpt for all pages excerpt those users choose to disable
			excerptFilter: ({frontmatter}) => false,

			category: [
				{
					key: "category",
					getter: page => [page.frontmatter.category || ""],
					layout: "Category",
					itemLayout: "Category",
					frontmatter: () => ({
						title: "Categories",
						sidebar: false,
					}),
					itemFrontmatter: name => ({
						sidebar: false,
					}),
				},
				{
					key: "tag",
					getter: page => page.frontmatter.tag || [],
					layout: "Tag",
					itemLayout: "Tag",
					frontmatter: () => ({
						title: "Tags",
						sidebar: false,
					}),
					itemFrontmatter: name => ({
						title: `Tag ${name}`,
						sidebar: false,
					}),
				},
			],

			type: [
				{
					key: "article",
					// Remove archive articles
					filter: page => true,
					layout: "Article",
					frontmatter: () => ({
						title: "Articles",
						sidebar: false,
					}),
					// Sort pages with time and sticky
					sorter: (pageA, pageB) => {
						if (
							pageA.frontmatter.sticky &&
							pageB.frontmatter.sticky
						)
							return (
								pageB.frontmatter.sticky -
								pageA.frontmatter.sticky
							);

						if (
							pageA.frontmatter.sticky &&
							!pageB.frontmatter.sticky
						)
							return -1;

						if (
							!pageA.frontmatter.sticky &&
							pageB.frontmatter.sticky
						)
							return 1;

						if (!pageB.frontmatter.date) return 1;
						if (!pageA.frontmatter.date) return -1;

						return (
							new Date(pageB.frontmatter.date).getTime() -
							new Date(pageA.frontmatter.date).getTime()
						);
					},
				},
			],
			hotReload: true,
		}),
	],

	bundler: viteBundler(),
});
