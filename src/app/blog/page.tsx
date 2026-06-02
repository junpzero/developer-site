import Container from '@/components/Container';

const posts = [
  {
    title: '技術ブログを始める',
    description: 'このサイトで扱う技術メモや記事の方針について。',
    slug: 'first-post',
    publishedAt: '2026-05-21',
  },
];

export default function BlogPage() {
  return (
    <main className="flex-1 bg-slate-50 px-6 py-20 text-slate-900">
      <Container>
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">Blog</p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Blog</h1>
        <div className="mt-8 grid gap-4">
          {posts.map((post) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="rounded-lg border border-slate-200 bg-white p-6 transition hover:border-slate-400"
            >
              <p className="text-sm text-slate-500">{post.publishedAt}</p>
              <h2 className="mt-2 text-xl font-semibold">{post.title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{post.description}</p>
            </a>
          ))}
        </div>
      </Container>
    </main>
  );
}
