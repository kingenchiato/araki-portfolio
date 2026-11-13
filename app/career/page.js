import Link from "next/link";
import { career, profile } from "../../lib/content";

export const metadata = { title: "職務経歴" };

export default function CareerPage() {
  return (
    <main className="page">
      <section className="page-wrap">
        <header className="page-head">
          <p className="eyebrow">職務経歴</p>
          <h1>{profile.period}</h1>
          <p>
            フルスタック開発者として、要件整理から運用支援までを担当してきました。所属先の名称は公開していません。期間ごとの担当領域だけをまとめています。
          </p>
        </header>
        <ol className="record-list">
          {career.map((item) => (
            <li key={item.years}>
              <p className="years">{item.years}</p>
              <div>
                <h2>{item.area}</h2>
                <p>{item.body}</p>
                <p className="meta">{item.tech}</p>
                <p className="meta">{item.steps}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="more-link"><Link href="/">ホームへ戻る</Link></p>
      </section>
    </main>
  );
}
