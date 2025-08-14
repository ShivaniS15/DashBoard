import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
          <Link href="/" className="text-lg font-semibold">
            FinDash
          </Link>
          <nav className="flex gap-4 text-sm">
            <Link href="/" className="hover:underline">
              Dashboard
            </Link>
            <Link href="/investors" className="hover:underline">
              Investors
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-4 md:p-6">{children}</main>
    </div>
  );
}
