"use client";

import { useEffect, useState } from "react";

const voices = [
  {
    src: "/images/voices/voice-01.png",
    alt: "評価5.0。YouTube・SNS動画の編集に関するレビュー。2026年10月14日"
  },
  {
    src: "/images/voices/voice-02.png",
    alt: "アプリ開発③。満足、4回リピート。2026年5月15日"
  },
  {
    src: "/images/voices/voice-03.png",
    alt: "メディアサイトの制作【ワードプレス】。満足。2026年5月15日"
  },
  {
    src: "/images/voices/voice-04.png",
    alt: "トラックのエンジン燃焼促進装置「FUEL BOOSTER」のロゴ。満足、1回リピート。2026年9月30日"
  },
  {
    src: "/images/voices/voice-05.png",
    alt: "新規法人コーポレートサイト＆インフラ全代行。満足、1回リピート。2026年5月7日"
  },
  {
    src: "/images/voices/voice-06.png",
    alt: "評価5.0。Webデザイナーに関するレビュー。2026年10月14日"
  }
];

export default function CustomerVoices({ heading = true }) {
  const [open, setOpen] = useState(null);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(null);
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <section className="band" id="voices">
      {heading ? (
        <div className="band-head">
          <p className="eyebrow">評価</p>
          <h2>お客様の声</h2>
          <p>掲載している評価です。画像を開くと、原文を確認できます。</p>
        </div>
      ) : null}
      <div className="voice-list">
        {voices.map((voice) => (
          <button
            key={voice.src}
            type="button"
            className="voice-item"
            onClick={() => setOpen(voice)}
            aria-label={`${voice.alt}。画像を拡大`}
          >
            <img src={voice.src} alt={voice.alt} />
          </button>
        ))}
      </div>
      {open ? (
        <div className="voice-modal" role="presentation" onClick={() => setOpen(null)}>
          <div
            className="voice-modal-card"
            role="dialog"
            aria-modal="true"
            aria-label={open.alt}
            onClick={(event) => event.stopPropagation()}
          >
            <button type="button" className="voice-modal-close" onClick={() => setOpen(null)}>
              閉じる
            </button>
            <img src={open.src} alt={open.alt} />
          </div>
        </div>
      ) : null}
    </section>
  );
}
