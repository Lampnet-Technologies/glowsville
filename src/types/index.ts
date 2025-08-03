/* eslint-disable @typescript-eslint/no-explicit-any */
export interface InsightDetail {
  title: string;
  publishedAt: string;
  excerpt?: string;
  mainImage?: { asset?: { url?: string } };
  author?: {
    name: string;
    image?: { asset?: { url?: string } };
  };
  body?: any;
}

export interface Insight {
  title: string;
  slug: { current: string };
  publishedAt: string;
  mainImage?: { asset?: { url?: string } };
}
