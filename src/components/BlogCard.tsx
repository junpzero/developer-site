import Link from 'next/link';

type BlogCardProps = {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
};

export default function BlogCard({ title, description, slug, publishedAt }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="rounded-lg border border-slate-200 bg-white p-6 transition hover:border-slate-400"
    >
      <p className="text-sm text-slate-500">{publishedAt}</p>
      <h2 className="mt-2 text-xl font-semibold">{title}</h2>
      <p className="mt-3 leading-7 text-slate-600">{description}</p>
    </Link>
  );
}
