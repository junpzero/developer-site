export type Post = {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
};

export const posts: Post[] = [
  {
    title: '技術ブログを始める',
    description: 'このサイトで扱う技術メモや記事の方針について。',
    slug: 'first-post',
    publishedAt: '2026-05-21',
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}
