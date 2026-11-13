import { education, profile, strengths } from "../../lib/content";

export const metadata = { title: "自己紹介" };

export default function Page() {
  return (
    <main className="page">
      <section className="page-wrap">
        <header className="page-head">
          <p className="eyebrow">自己紹介</p>
          <h1>{profile.name}</h1>
          <p>
            熊本県山鹿市を拠点にする開発者としての経歴、学歴、仕事の進め方です。
          </p>
        </header>
        <div className="prose-split">
          <div>
            <p>{profile.summary}</p>
            <p>
              大学卒業後の2007年4月から2026年3月まで、Web、業務システム、EC、モバイル、AI関連の開発に継続して携わってきました。所属先の名称は公開資料では伏せています。
            </p>
            {strengths.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <div>
            <dl className="facts">
              <div><dt>よみ</dt><dd>{profile.kana}／{profile.kanaKata}</dd></div>
              <div><dt>生年月日</dt><dd>{profile.birthday}</dd></div>
              <div><dt>性別</dt><dd>{profile.gender}</dd></div>
              <div><dt>実務経験</dt><dd>{profile.experience}（{profile.period}）</dd></div>
            </dl>
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
        </div>
      </section>
    </main>
  );
}
