import Container from '@/components/Container';

type BlogDetailProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogDetailPage({ params }: BlogDetailProps) {
  const { slug } = await params;

  return (
    <main className="flex-1 bg-slate-50 px-6 py-20 text-slate-900">
      <Container>
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">Blog</p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{slug}</h1>
        <p className="mt-6 leading-8 text-slate-600">ここに記事本文を表示</p>
      </Container>
    </main>
  );
}
