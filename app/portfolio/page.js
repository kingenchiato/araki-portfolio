import PortfolioCatalog from "../../components/PortfolioCatalog";
import { pages } from "../../lib/content";
import { portfolioItems } from "../../lib/portfolio";

export const metadata = { title: pages.portfolio.title };

export default function Page() {
  return (
    <main className="page">
      <section className="page-wrap">
        <header className="page-head">
          <p className="eyebrow">ポートフォリオ</p>
          <h1>{pages.portfolio.title}</h1>
          <p>
            {pages.portfolio.lead}
            全{portfolioItems.length}件を、同じ大きさのカードで並べています。カードを開くと、画面と内容を確認できます。
          </p>
        </header>
        <PortfolioCatalog />
      </section>
    </main>
  );
}
