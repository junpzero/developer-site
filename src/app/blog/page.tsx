import Container from '@/components/Container';
import BlogCard from '@/components/BlogCard';
import { posts } from '@/lib/posts';

export default function BlogPage() {
  return (
    <main className="flex-1 bg-slate-50 px-6 py-20 text-slate-900">
      <Container>
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">Blog</p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Blog</h1>
        <div className="mt-8 grid gap-4">
          {posts.map((post) => (
            <BlogCard
              key={post.slug}
              title={post.title}
              description={post.description}
              slug={post.slug}
              publishedAt={post.publishedAt}
            />
          ))}
        </div>
      </Container>
    </main>
  );
}
