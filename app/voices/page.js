import CustomerVoices from "../../components/CustomerVoices";
import { pages } from "../../lib/content";

export const metadata = { title: pages.voices.title };

export default function Page() {
  return (
    <main className="page">
      <section className="page-wrap">
        <header className="page-head">
          <p className="eyebrow">お客様の声</p>
          <h1>{pages.voices.title}</h1>
          <p>{pages.voices.lead}</p>
        </header>
      </section>
      <CustomerVoices heading={false} />
    </main>
  );
}
