// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "scientistnik",
  tagline: "Better is the enemy of good enough",
  url: "https://scientistnik.ru",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  organizationName: "scientistnik",
  projectName: "scientistnik.github.io",

  i18n: {
    defaultLocale: "ru",
    locales: ["ru", "en"],
    localeConfigs: {
      en: {
        htmlLang: "en",
      },
      ru: {
        htmlLang: "ru",
      },
    },
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/scientistnik/scientistnik.github.io/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [{ name: "yandex-verification", content: "84cb57aa3ccaa471" }],
      navbar: {
        title: "scientistnik",
        logo: {
          alt: "scientistnik",
          src: "img/logo.jpg",
        },
        items: [
          // {
          //   type: "doc",
          //   docId: "intro",
          //   position: "left",
          //   label: "Tutorial",
          // },
          {
            to: "/blog",
            label: "Blog",
            position: "left",
            feedOptions: {
              type: "all",
              copyright: `Copyright © ${new Date().getFullYear()} scientistnik.ru`,
            },
          },
          {
            href: "https://github.com/scientistnik",
            label: "GitHub",
            position: "right",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Content",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
            ],
          },
          {
            title: "Contacts",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/users/3770959/scientistnik",
              },
              {
                label: "GitHub",
                href: "https://github.com/scientistnik",
              },
              {
                label: "VK",
                href: "https://vk.com/scientistnik",
              },
              {
                label: "Telegram",
                href: "https://t.me/scientistnik",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "This repo on GitHub",
                href: "https://github.com/scientistnik/scientistnik.github.io",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} scientistnik.ru`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  plugins: [
    [
      "docusaurus-plugin-yandex-metrica",
      {
        counterID: "62320633",
      },
    ],
  ],
};

module.exports = config;
