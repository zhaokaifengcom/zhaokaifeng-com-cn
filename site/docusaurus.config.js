// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '荒原之梦考研数学 Lite 版',
  tagline: '轻快学习，快速进步！',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://zhaokaifeng.com.cn',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  //organizationName: 'facebook', // Usually your GitHub org/user name.
  //projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },


  presets: [
    [

      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
           //'https://zhaokaifeng.com.cn',
        },

        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },

      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '',
        logo: {
          alt: '荒原之梦考研数学 Lite 版',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'gdsx',
            position: 'left',
            label: '高等数学',
          },

	 {
            href: 'https://zhaokaifeng.com/',
            label: '考研数学 Ultra 版',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '官网：ZhaoKaifeng.com',
            items: [
/*              {
                label: 'ZhaoKaifeng.com',
                to: 'https://zhaokaifeng.com/',
              }, */
            ],
          },
          {
            title: '联系方式：hyzmky@163.com',
            items: [
            ],
          },
          {
            title: '工作时间：周一至周五 08:00-18:00',
            items: [
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ZhaoKaifeng.com.cn, All rights reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};




export default config;