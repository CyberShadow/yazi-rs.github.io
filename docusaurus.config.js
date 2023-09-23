// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const darkCodeTheme = require("prism-react-renderer/themes/dracula")
const lightCodeTheme = require("prism-react-renderer/themes/github")

/** @type {import('@docusaurus/types').Config} */
const config = {
	title  : "Yazi",
	tagline: "⚡️ Blazing fast terminal file manager written in Rust, based on async I/O.",
	favicon: "img/favicon.ico",

	url    : "https://yazi-rs.github.io",
	baseUrl: "/docs/",

	organizationName: "yazi-rs",
	projectName     : "docs",

	onBrokenLinks        : "throw",
	onBrokenMarkdownLinks: "warn",

	i18n: {
		defaultLocale: "en",
		locales      : ["en"],
	},

	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			{
				docs: {
					path         : "usage",
					routeBasePath: "usage",
					sidebarPath  : require.resolve("./sidebars.js"),
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl      : "https://github.com/yazi-rs/docs/tree/main/",
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl        : "https://github.com/yazi-rs/docs/tree/main/",
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			},
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		{
			// Replace with your project's social card
			image : "img/docusaurus-social-card.jpg",
			navbar: {
				title: "Yazi",
				logo : {
					alt: "My Site Logo",
					src: "img/logo.svg",
				},
				items: [
					{
						type     : "docSidebar",
						sidebarId: "usageSidebar",
						position : "left",
						label    : "Usage",
					},
					{ to: "/showcase", label: "Showcase", position: "left" },
					// { to: "/blog", label: "Blog", position: "left" },
					{
						href    : "https://github.com/sxyazi/yazi",
						label   : "GitHub",
						position: "right",
					},
				],
			},
			footer: {
				style: "dark",
				links: [
					{
						title: "Docs",
						items: [
							{
								label: "Usage",
								to   : "/docs/usage/installation",
							},
							{
								label: "Showcase",
								to   : "/docs/showcase",
							},
						],
					},
					{
						title: "Community",
						items: [
							{
								label: "Discord (English mainly)",
								href : "https://discord.gg/qfADduSdJu",
							},
							{
								label: "Telegram (Chinese mainly)",
								href : "https://t.me/yazi_rs",
							},
						],
					},
					{
						title: "More",
						items: [
							// {
							// 	label: "Blog",
							// 	to: "/blog",
							// },
							{
								label: "GitHub",
								href : "https://github.com/sxyazi/yazi",
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} Yazi. Built with ❤️️.`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		},
}

module.exports = config
