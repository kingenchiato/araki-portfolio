import Link from "next/link";
import { nav, pages } from "../../lib/content";

export const metadata = { title: pages.help.title };

export default function Page() {
  return (
    <main className="page">
      <section className="page-wrap">
        <header className="page-head">
          <p className="eyebrow">ヘルプ</p>
          <h1>{pages.help.title}</h1>
          <p>{pages.help.lead}</p>
        </header>
        <ul className="record-list">
          {nav.map((item, index) => (
            <li key={item.href}>
              <p className="years">{String(index + 1).padStart(2, "0")}</p>
              <div>
                <h2><Link href={item.href}>{item.label}</Link></h2>
                <p>{item.note}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
