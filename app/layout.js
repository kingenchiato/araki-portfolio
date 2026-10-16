import ChatWidget from "../components/ChatWidget";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { ThemeProvider } from "../components/ThemeContext";
import { profile } from "../lib/content";
import "./globals.css";

export const metadata = {
  title: {
    default: `${profile.name}｜${profile.role}`,
    template: `%s｜${profile.name}`
  },
  description:
    "熊本県山鹿市を拠点に、Web、業務システム、モバイル、AI・LLMまで一貫して対応する荒木秀樹のポートフォリオ。",
  icons: { icon: "/favicon.svg" }
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@500;700&family=Zen+Kaku+Gothic+New:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider>
          <a className="skip" href="#main">本文へ</a>
          <Header />
          <div id="main">{children}</div>
          <Footer />
          <ChatWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
