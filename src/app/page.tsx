export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-20">
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
          <a
            href="/works"
            className="rounded-md bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Worksを見る
          </a>
          <a
            href="/blog"
            className="rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-white"
          >
            Blogを見る
          </a>
        </div>
      </section>
    </main>
  );
}
