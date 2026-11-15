import Link from "next/link";
import CustomerVoices from "../components/CustomerVoices";
import TokyoNow from "../components/TokyoNow";
import {
  career,
  education,
  profile,
  skills,
  stages,
  strengths
} from "../lib/content";
import { itemsInCategory, portfolioCategories, portfolioItems } from "../lib/portfolio";

const studioIds = new Set(["logo", "card"]);
const faceIds = ["choimite", "medireserve", "app-4", "web-2"];

const faceWorks = faceIds
  .map((id) => portfolioItems.find((item) => item.id === id))
  .filter(Boolean);

const areas = portfolioCategories.map((category) => {
  const items = itemsInCategory(category.id);
  return {
    ...category,
    count: items.length,
    cover: items[0]?.images?.[0] || ""
  };
});

const featured = portfolioCategories.flatMap((category) =>
  itemsInCategory(category.id).slice(0, 2)
);

export default function HomePage() {
  return (
    <main>
      <section className="fv" aria-label="ファーストビュー">
        <div className="fv-main">
          <p className="fv-index">紹介</p>
          <div>
            <p className="fv-kana">{profile.kana}　／　{profile.kanaKata}</p>
            <h1>{profile.name}</h1>
            <p className="fv-role">{profile.role}</p>
            <p className="fv-lead">
              企画から公開後の保守まで。Web、業務システム、モバイル、AIを、一つの仕事として受けています。
            </p>
            <div className="fv-actions">
              <Link className="button" href="/portfolio">実績を見る</Link>
              <Link className="button button-line" href="/about">自己紹介</Link>
            </div>
          </div>
        </div>
        <div className="fv-stage">
          <p className="eyebrow">主な画面</p>
          <div className="fv-mosaic">
            {faceWorks.map((item) => (
              <Link key={item.id} href={`/portfolio#${item.id}`} className="fv-tile">
                <img src={item.images[0]} alt="" />
                <span>{item.label || item.title}</span>
              </Link>
            ))}
          </div>
          <TokyoNow />
        </div>
        <dl className="fv-facts">
          <div>
            <dt>実務</dt>
            <dd>{profile.experience}</dd>
          </div>
          <div>
            <dt>期間</dt>
            <dd>
              2007–2026
              <span className="meta">{profile.period}</span>
            </dd>
          </div>
          <div>
            <dt>実績</dt>
            <dd>
              {portfolioItems.length}件
              <span className="meta">{portfolioCategories.length}つの領域</span>
            </dd>
          </div>
          <div>
            <dt>拠点</dt>
            <dd>熊本県山鹿市</dd>
          </div>
        </dl>
      </section>

      <section className="band" id="works">
        <div className="band-head">
          <p className="eyebrow">実績</p>
          <h2>領域ごとの画面</h2>
          <p>
            掲載は{portfolioItems.length}件です。ここでは各領域から二件を、同じ大きさのカードで並べています。
          </p>
        </div>
        <div className="area-index">
          {areas.map((area) => (
            <Link
              key={area.id}
              href={`/portfolio#folio-${area.id}`}
              className={studioIds.has(area.id) ? "area-card studio" : "area-card"}
            >
              {area.cover ? <img src={area.cover} alt="" /> : null}
              <strong>{area.short}</strong>
              <em>{area.count}件</em>
            </Link>
          ))}
        </div>
        <div className="work-grid">
          {featured.map((project) => (
            <Link
              key={project.id}
              href={`/portfolio#${project.id}`}
              className={studioIds.has(project.category) ? "work-row studio" : "work-row"}
            >
              <span className="work-shot">
                <img src={project.images[0]} alt="" />
              </span>
              <span className="work-copy">
                {project.label && project.label !== project.title ? (
                  <span className="work-label">{project.label}</span>
                ) : null}
                <strong>{project.title}</strong>
                <span className="work-summary">{project.summary}</span>
              </span>
            </Link>
          ))}
        </div>
        <p className="more-link"><Link href="/portfolio">すべての実績を見る</Link></p>
      </section>

      <section className="band" id="career">
        <div className="band-head">
          <p className="eyebrow">職務経歴</p>
          <h2>{profile.period}</h2>
          <p>要件整理から運用支援までを、期間ごとに担当してきました。</p>
        </div>
        <ol className="record-list">
          {career.map((item) => (
            <li key={item.years}>
              <p className="years">{item.years}</p>
              <div>
                <h3>{item.area}</h3>
                <p>{item.body}</p>
                <p className="meta">{item.tech}</p>
                <p className="meta">{item.steps}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="more-link"><Link href="/career">職務経歴のページへ</Link></p>
      </section>

      <section className="band" id="skills">
        <div className="band-head">
          <p className="eyebrow">スキル</p>
          <h2>対応領域</h2>
        </div>
        <ul className="skill-list">
          {skills.map(([name, body]) => (
            <li key={name}>
              <h3>{name}</h3>
              <p>{body}</p>
            </li>
          ))}
        </ul>
        <p className="more-link"><Link href="/skills">スキルシートへ</Link></p>
      </section>

      <section className="band" id="stages">
        <div className="band-head">
          <p className="eyebrow">経過</p>
          <h2>レギュラーから、認定ランサーまで</h2>
          <p>経験の厚みを示すこのサイト独自の五段階です。外部機関の認定番号ではありません。</p>
        </div>
        <ol className="stage-list">
          {stages.map((stage, index) => (
            <li key={stage.rank}>
              <p className="years">{String(index + 1).padStart(2, "0")}</p>
              <div>
                <h3>{stage.ja}</h3>
                <p className="meta">{stage.years}　{stage.title}</p>
                <p>{stage.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="band" id="style">
        <div className="band-head">
          <p className="eyebrow">進め方</p>
          <h2>実装の前に、目的と運用を揃えます</h2>
        </div>
        <ul className="record-list">
          {strengths.map((line, index) => (
            <li key={line}>
              <p className="years">{String(index + 1).padStart(2, "0")}</p>
              <p>{line}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="band" id="profile">
        <div className="band-head">
          <p className="eyebrow">人物</p>
          <h2>{profile.name}</h2>
        </div>
        <div className="prose-split">
          <div>
            <p>{profile.summary}</p>
            <p>
              大学卒業後の2007年4月から2026年3月まで、Web、業務システム、EC、モバイル、AI関連の開発に継続して携わってきました。所属先の名称は公開資料では伏せています。職種はフルスタック開発者で、要件整理・設計・UI/UX・実装・テスト・改善・運用支援を担当しています。
            </p>
            <p>
              新規開発は将来の拡張を見据え、既存環境は資産を活かした無理のない改善を提案します。現状の課題を整理し、必要な部分から段階的に直すことで、使いやすさと運用負担の両方を見ます。
            </p>
            <ul className="edu-list">
              {education.map(([years, kind, school]) => (
                <li key={years}>
                  <span>{years}</span>
                  <span>{kind}</span>
                  <strong>{school}</strong>
                </li>
              ))}
            </ul>
          </div>
          <dl className="facts">
            <div><dt>氏名</dt><dd>{profile.name}</dd></div>
            <div><dt>よみ</dt><dd>{profile.kana}／{profile.kanaKata}</dd></div>
            <div><dt>生年月日</dt><dd>{profile.birthday}</dd></div>
            <div><dt>性別</dt><dd>{profile.gender}</dd></div>
            <div><dt>実務経験</dt><dd>{profile.experience}（{profile.period}）</dd></div>
          </dl>
        </div>
        <p className="more-link"><Link href="/about">自己紹介へ</Link></p>
      </section>

      <CustomerVoices />
    </main>
  );
}
