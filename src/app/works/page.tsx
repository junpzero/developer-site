const works = [
    {
        title: "Portfolio Site",
        description: "Next.js と TypeScript で作成した個人開発者サイトです。",
tags: ["Next.js", "TypeScript", "Tailwind CSS"],
},
];

export default function WorksPage() {
    return (
        <main className="min-h-screen bg-slate-50 px-6 py-20 text-slate-
  900">
            <div className="mx-auto max-w-4xl">
                <p className="mb-3 text-sm font-semibold uppercase tracking-
  wide text-slate-500">
                    Works
                </p>
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Works
                </h1>
                <div className="mt-8 grid gap-4">
                    {works.map((work) => (
                        <article
                            key={work.title}
                            className="rounded-lg border border-slate-200 bg-white
  p-6"
                        >
                            <h2 className="text-xl font-semibold">{work.title}</h2>
                            <p className="mt-3 leading-7 text-slate-600">
                                {work.description}
                            </p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {work.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-md bg-slate-100 px-2.5 py-1
  text-xs font-medium text-slate-600"
                                    >
                      {tag}
                    </span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </main>
    );
}