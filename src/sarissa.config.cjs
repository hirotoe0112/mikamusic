export default {
  siteTitle: "mikamusic",
  siteDescription: "フリー音楽素材配布サイト",
  favicon: "/favicon.ico",
  siteImagePath: "/images/main.jpg",
  footer: "© 2022 - 2022 Suzuka Mikami",
  dateFormat: "yyyy/MM/dd",
  pageSize: 20,
  categories: [
    {
      name: "theme",
      color: "btn-warning",
      image: "/images/theme.jpg",
      order: 1,
    },
  ],
  categorySettings: {
    order: "name", // name | count
    layout: "card", //button | card
    image: "",
    color: "btn-warning",
    countVisibility: true,
  },
  searchOptions: {
    includeScore: true,
    includeMatches: true,
    keys: [
      { name: "title", weight: 3 },
      { name: "description", weight: 2 },
    ],
  },
  i18n: {
    search: {
      placeholder: "Search post title and description...",
    },
    archive: {
      select: "Select Year",
    },
    page: "Page",
    resultFound: " result(s) found",
  },
  audioRoot: "/audio/"
};
