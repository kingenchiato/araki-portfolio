import Link from "next/link";
import CustomerVoices from "../components/CustomerVoices";
import Hero from "../components/Hero";
import {
  career,
  education,
  nav,
  profile,
  skills,
  stages,
  strengths
} from "../lib/content";
import { homePortfolioItems } from "../lib/portfolio";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <div className="below-hero">
      <CustomerVoices />

      <section className="panel" id="guide">
        <div className="section-head">
          <p className="eyebrow">サイトの歩き方</p>
          <h2>ホームだけで全体が分かり、各ページで詳しく見られます</h2>
          <p>
            ログインは不要です。公開中の情報はどなたでも閲覧できます。下層ページの本編は資料が揃い次第追加し、それまでは要点をこのホームに置いています。
          </p>
        </div>
        <div className="guide-grid">
          {nav.map((item, index) => (
            <Link key={item.href} href={item.href === "/" ? "#profile" : item.href} className="glass guide-card">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{item.label}</strong>
              <p>{item.note}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="panel" id="profile">
        <div className="section-head">
          <p className="eyebrow">プロフィール</p>
          <h2>{profile.name}｜{profile.role}</h2>
        </div>
        <div className="split">
          <div className="glass prose">
            <p>{profile.summary}</p>
            <p>
              大学卒業後の2007年4月から2026年3月まで、Web、業務システム、EC、モバイル、AI関連の開発に継続して携わってきました。所属先の名称は公開資料では伏せています。職種はフルスタック開発者で、要件整理・設計・UI/UX・実装・テスト・改善・運用支援を担当しています。
            </p>
            <p>
              新規開発は将来の拡張を見据え、既存環境は資産を活かした無理のない改善を提案します。現状の課題を整理し、必要な部分から段階的に直すことで、使いやすさと運用負担の両方を見ます。
            </p>
          </div>
          <dl className="glass facts">
            <div><dt>氏名</dt><dd>{profile.name}</dd></div>
            <div><dt>よみ</dt><dd>{profile.kana}／{profile.kanaKata}</dd></div>
            <div><dt>生年月日</dt><dd>{profile.birthday}</dd></div>
            <div><dt>性別</dt><dd>{profile.gender}</dd></div>
            <div><dt>実務経験</dt><dd>{profile.experience}（{profile.period}）</dd></div>
          </dl>
        </div>
      </section>

      <section className="panel" id="stages">
        <div className="section-head">
          <p className="eyebrow">成長のステージ</p>
          <h2>レギュラーから、認定ランサーまで</h2>
          <p>ファーストビュー下段のバッジと同じ五段階です。経験の厚みを一目で伝えるための表現で、外部機関の認定番号ではありません。</p>
        </div>
        <div className="stage-grid">
          {stages.map((stage) => (
            <article key={stage.rank} className={`glass stage-card rank-${stage.rank.toLowerCase()}`}>
              <img className="stage-badge" src={stage.image} alt="" />
              <p className="rank-en">{stage.rank}</p>
              <h3>{stage.ja}</h3>
              <p className="years">{stage.years}　{stage.title}</p>
              <p>{stage.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="panel" id="career">
        <div className="section-head">
          <p className="eyebrow">職務経歴</p>
          <h2>2007年4月1日〜2026年3月31日</h2>
          <p>フルスタック開発者として、要件整理から運用支援までを担当してきました。詳細ページは資料の体裁が揃い次第、この流れを拡充します。</p>
        </div>
        <ol className="timeline">
          {career.map((item) => (
            <li key={item.years} className="glass">
              <p className="years">{item.years}</p>
              <h3>{item.area}</h3>
              <p>{item.body}</p>
              <p className="meta">{item.tech}</p>
              <p className="meta">{item.steps}</p>
            </li>
          ))}
        </ol>
        <p className="more-link"><Link href="/career">職務経歴ページへ</Link></p>
      </section>

      <section className="panel" id="works">
        <div className="section-head">
          <p className="eyebrow">主な開発実績</p>
          <h2>画面の向こうにあるのは、業務の流れです</h2>
          <p>ポートフォリオに掲載している実績から、一部をここに出しています。</p>
        </div>
        <div className="work-grid">
          {homePortfolioItems.map((project) => (
            <article key={project.id} className="glass work-card">
              <img src={project.images[0]} alt="" />
              <div>
                <h3>{project.title}</h3>
                <p className="meta">{(project.skills || []).join("、")}</p>
                <p>{project.summary}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="more-link"><Link href="/portfolio">ポートフォリオページへ</Link></p>
      </section>

      <section className="panel" id="skills">
        <div className="section-head">
          <p className="eyebrow">スキルシート</p>
          <h2>対応領域</h2>
        </div>
        <div className="skill-grid">
          {skills.map(([name, body]) => (
            <article key={name} className="glass">
              <h3>{name}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
        <p className="more-link"><Link href="/skills">スキルシートページへ</Link></p>
      </section>

      <section className="panel" id="style">
        <div className="section-head">
          <p className="eyebrow">開発スタイル</p>
          <h2>実装の前に、目的と運用を揃えます</h2>
        </div>
        <div className="strength-grid">
          {strengths.map((line) => (
            <p key={line} className="glass">{line}</p>
          ))}
        </div>
        <div className="split later">
          <article className="glass prose">
            <h3>コミュニケーション</h3>
            <p>
              非エンジニアの方にも判断しやすい言葉で技術内容や進捗を共有し、認識のずれを早期に解消します。Git／GitHub、検証環境、バックアップを使い、納品後の保守と引継ぎまで意識して対応します。
            </p>
          </article>
          <article className="glass prose">
            <h3>対応方針</h3>
            <p>
              小規模な改修から新規サービスまで、予算・納期・優先順位を踏まえて対応できます。初期開発と将来の機能を分け、必要以上に複雑な構成にはしません。既存システムの改善、機能追加、外部API連携も対象です。
            </p>
          </article>
        </div>
      </section>

      <section className="panel" id="education">
        <div className="section-head">
          <p className="eyebrow">学歴</p>
          <h2>記載のある学歴</h2>
        </div>
        <div className="edu-table glass">
          {education.map(([years, kind, school]) => (
            <div key={years}>
              <span>{years}</span>
              <span>{kind}</span>
              <strong>{school}</strong>
            </div>
          ))}
        </div>
        <p className="more-link"><Link href="/about">自己紹介ページへ</Link></p>
      </section>
      </div>
    </main>
  );
}
