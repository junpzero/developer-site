import Link from "next/link";

const navItems = [
    { href: "/about", label: "About" },
    { href: "/works", label: "Works" },
    { href: "/blog", label: "Blog" },
];

export default function Header() {
    return (
        <header className="border-b border-slate-200 bg-white">
            <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
                <Link href="/" className="text-sm font-bold text-slate-900">
                    J.Sato
                </Link>

                <nav className="flex items-center gap-5 text-sm font-medium text-slate-600">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="transition hover:text-slate-900"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}
