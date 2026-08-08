export const siteConfig = {
  name: "Yuの博客",
  url: "https://blog.2x.nz",
  description: "博客一定要能写",
  author: "Yu",
  // 开源仓库：页脚链接 + 文末「在 GitHub 上编辑此文章」都用它
  repo: "https://github.com/YU-1021/MagicUI_Blog",
  // 编辑分支：文末「在 GitHub 上编辑此文章」要落到 edit 而不是 main，
  // 否则网页端改动会直接进 main 并触发部署，绕过 edit → main 的发布流程
  repoBranch: "edit",
  // 头像：导航栏左上角和站点图标（favicon）共用这一个链接
  avatar: "https://avatars.githubusercontent.com/u/136226133?s=32",
};
export type SiteConfig = typeof siteConfig;
