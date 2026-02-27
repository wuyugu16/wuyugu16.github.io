import {blogPlugin} from "@vuepress/plugin-blog";
import {defaultTheme} from "@vuepress/theme-default";
import {defineUserConfig} from "vuepress";
import {viteBundler} from "@vuepress/bundler-vite";

import footnote_plugin from "markdown-it-footnote";
import math_plugin from 'markdown-it-math/temml';
import container_plugin from "markdown-it-container";

export default defineUserConfig({
	MarkdownOptions: {},
	extendsMarkdown: md => {
		md.use(footnote_plugin)
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
			});
	},

	lang: "zh-CN",

	title: "wuyugu",

	theme: defaultTheme({
		sidebar: false,
		navbar: [
			"/",
			{
				text: "所有页面",
				link: "/article/",
			},
			{
				text: "分类",
				link: "/category/",
			},
			{
				text: "标签",
				link: "/tag/",
			},
			{
				text: "网站",
				link: "/website",
			},
		],
		lastUpdated: false,
   	 	contributors: false,
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
				category: frontmatter.category || "",
				tag: frontmatter.tag || [],
				hide: !!frontmatter.hide,
			}),

			// Generate excerpt for all pages excerpt those users choose to disable
			excerptFilter: ({frontmatter}) => false,

			category: [
				{
					key: "category",
					getter: page =>
						page.frontmatter.hide
							? []
							: [page.frontmatter.category || ""],
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
					getter: page =>
						page.frontmatter.hide ? [] : page.frontmatter.tag || [],
					layout: "Tag",
					itemLayout: "Tag",
					frontmatter: () => ({
						title: "Tags",
						sidebar: false,
					}),
					itemFrontmatter: name => ({
						title: `${name}`,
						sidebar: false,
					}),
				},
			],

			type: [
				{
					key: "article",
					filter: page => !page.frontmatter.hide,
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
				{
					key: "hider",
					filter: page => !!page.frontmatter.hide,
					layout: "Hider",
					frontmatter: () => ({
						title: "Hiders",
						sidebar: false,
					}),
				},
			],
			hotReload: true,
		}),
	],

	bundler: viteBundler({
		vuePluginOptions: {
			template: {
				compilerOptions: {
					// 将所有 MathML 标签视为自定义元素，跳过 Vue 组件解析
					isCustomElement: tag =>
						tag.startsWith("math") ||
						[
							"math",
							"maction",
							"annotation",
							"annotation-xml",
							"menclose",
							"merror",
							"mfenced",
							"mfrac",
							"mi",
							"mmultiscripts",
							"mn",
							"mo",
							"mover",
							"mpadded",
							"mphantom",
							"mprescripts",
							"mroot",
							"mrow",
							"ms",
							"semantics",
							"mspace",
							"msqrt",
							"mstyle",
							"msub",
							"msup",
							"msubsup",
							"mtable",
							"mtd",
							"mtext",
							"mtr",
							"munder",
							"munderover",
						].includes(tag),
				},
			},
		},
	}),
});
