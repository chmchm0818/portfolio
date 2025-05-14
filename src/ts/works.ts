// データ定義
import { Project } from './types';

export const projects: Project[] = [
    {
        id: 2,
        title: "ポートフォリオサイト",
        description: "自分の作品など作ってきたものをまとめるために作成いたしました。",
        descriptionModal: `開発コストを削減するためにMaterial UIを使ってデザインしました。
        また、自分らしさを表現するようにサイト全体を落ち着いた色合いでまとめました。`,
        image: "/image/portfolio-site.webp",
        period: "1ヶ月",
        flow: "構成 〉デザイン 〉開発",
        siteUrl: "https://example.com/",
        colors: ["#e6e6e6", "#171717", "#ffffff"],
        tech: [
          { src: "/image/react.svg", alt: "react logo" },
          { src: "/image/typescript.svg", alt: "typescript logo" },
          { src: "/image/next-js.svg", alt: "next js logo" },
          { src: "/image/tailwind-css.svg", alt: "tailwind css logo" },
        ],
    },
    {
    id: 1,
    title: "キートス合同会社公式サイト",
    description: "キートス合同会社の公式サイトです。デザインから実装までを行いました。",
    descriptionModal: `サイト全体的に清潔感と高級感を演出するために、落ち着いた色とスクロールアニメーションを使用しました。
            ほかにも、テキストの行間やサイト全体の余白を少し大きめに取るなど細部も意識して制作しました。
            また、ユーザビリティを意識し、ホバーアニメーションを工夫してCSSを実装しました。`,
    image: "/image/kiitos-site.webp",
    period: "6ヶ月",
    flow: "企画 〉デザイン 〉実装",
    siteUrl: "https://www.kiitos-llc.com/",
    colors: ["#f9f7f4", "#2f2e2e", "#ffffff"],
    tech: [
      { src: "/image/html.svg", alt: "html logo" },
      { src: "/image/sass.svg", alt: "sass logo" },
      { src: "/image/javascript.svg", alt: "javascript logo" },
      { src: "/image/wordpress.svg", alt: "wordpress logo" },
    ],
  },
];
