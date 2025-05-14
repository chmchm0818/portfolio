// モーダルの型定義
export type Project = {
    id: number;
    title: string;
    description: string;
    descriptionModal: string;
    image: string;
    period: string;
    flow: string;
    siteUrl: string;
    colors: string[];
    tech: { src: string; alt: string }[];
  };  