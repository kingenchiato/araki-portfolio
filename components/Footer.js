import { profile } from "../lib/content";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <p className="eyebrow">拠点</p>
          <p className="footer-lead">
            熊本県山鹿市を拠点に、Web、業務システム、モバイル、AIまで一貫して対応します。
          </p>
          <p className="meta">生年月日　{profile.birthday}</p>
          <p className="meta">
            メールアドレスと電話番号は、公開用の連絡先が決まり次第この欄に追加します。
          </p>
        </div>
        <video
          className="footer-video"
          src="/video/v2_awv-9a50cc6287d13600.mp4"
          controls
          muted
          loop
          playsInline
          autoPlay
          preload="metadata"
          aria-label="制作動画"
          suppressHydrationWarning
        />
      </div>
      <p className="copyright" suppressHydrationWarning>
        © {new Date().getFullYear()} {profile.name}
      </p>
    </footer>
  );
}
