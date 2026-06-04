import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex-1 bg-slate-50 px-6 py-20 text-slate-900">
      <section className="mx-auto flex max-w-5xl flex-col justify-center py-20">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-500">
          Developer Portfolio
        </p>

        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          J.Sato
          <span className="block text-slate-600">Software Engineer</span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
          これまでに取り組んだ制作物などをまとめる予定
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/works"
            className="rounded-md bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Worksを見る
          </Link>
          <Link
            href="/blog"
            className="rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-white"
          >
            Blogを見る
          </Link>
        </div>
      </section>
    </main>
  );
}
