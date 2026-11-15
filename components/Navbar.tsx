import { NAV, TEAM_NAME } from "@/lib/config";
export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-canvas/85 backdrop-blur">
      <nav aria-label="Primary" className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a href="#home" className="text-xl font-bold tracking-tight">{TEAM_NAME}</a>
        <ul className="hidden gap-9 md:flex">
          {NAV.map(([l, h], i) => <li key={l}><a href={h} aria-current={i === 0 ? "page" : undefined} className={`text-sm font-medium transition-colors hover:text-brand ${i === 0 ? "text-brand" : "text-muted"}`}>{l}</a></li>)}
        </ul>
      </nav>
    </header>
  );
}
