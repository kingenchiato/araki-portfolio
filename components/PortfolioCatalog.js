"use client";

import { useEffect, useState } from "react";
import { itemsInCategory, portfolioCategories } from "../lib/portfolio";

function overviewParagraphs(overview) {
  if (Array.isArray(overview)) return overview.filter(Boolean);
  return String(overview || "")
    .split(/\n\n+/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

function ProjectDialog({ item, onClose }) {
  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [onClose]);

  const paragraphs = overviewParagraphs(item.overview);
  const facts = [
    item.period ? ["開発期間", item.period] : null,
    item.approach ? ["開発の進め方", item.approach] : null,
    item.problem ? ["困っていたこと / 課題", item.problem] : null,
    item.response ? ["対応したこと", item.response] : null
  ].filter(Boolean);

  return (
    <div className="folio-modal" role="presentation" onClick={onClose}>
      <div
        className="folio-modal-card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="folio-dialog-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" className="folio-modal-close" onClick={onClose} autoFocus>
          閉じる
        </button>
        <div className="folio-gallery">
          {item.images.map((src, index) => (
            <img key={`${src}-${index}`} src={src} alt={`${item.title}の画面 ${index + 1}`} />
          ))}
        </div>
        <h2 id="folio-dialog-title">{item.title}</h2>
        {item.skills?.length ? <p className="meta folio-skills">{item.skills.join("、")}</p> : null}
        {paragraphs.length ? (
          <div className="folio-overview">
            <h3>概要</h3>
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        ) : null}
        {facts.length ? (
          <dl className="folio-facts">
            {facts.map(([label, body]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{body}</dd>
              </div>
            ))}
          </dl>
        ) : null}
        {item.url ? (
          <p className="folio-url">
            公開URL：
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              {item.url}
              <span className="visually-hidden">（別タブで開きます）</span>
            </a>
          </p>
        ) : null}
      </div>
    </div>
  );
}

const studioIds = new Set(["logo", "card"]);

export default function PortfolioCatalog() {
  const [open, setOpen] = useState(null);

  return (
    <div className="folio-catalog">
      <nav className="toc-row" aria-label="領域">
        {portfolioCategories.map((category) => (
          <a key={category.id} href={`#folio-${category.id}`}>
            {category.short || category.title}
          </a>
        ))}
      </nav>
      {portfolioCategories.map((category) => {
        const items = itemsInCategory(category.id);
        return (
          <section key={category.id} className="group" aria-labelledby={`folio-${category.id}`}>
            <header className="group-head">
              <h2 id={`folio-${category.id}`}>{category.title}</h2>
              <p className="count-mark">{items.length}件</p>
            </header>
            {category.id === "logo" ? (
              <p className="note">手作業で制作したロゴです。</p>
            ) : null}
            {items.length ? (
              <div className={studioIds.has(category.id) ? "work-grid work-grid-studio" : "work-grid"}>
                {items.map((item) => (
                  <button
                    key={item.id}
                    id={item.id}
                    type="button"
                    className="work-row"
                    onClick={() => setOpen(item)}
                  >
                    <span className="work-shot">
                      <img src={item.images[0]} alt="" />
                    </span>
                    <span className="work-copy">
                      {item.label && item.label !== item.title ? (
                        <span className="work-label">{item.label}</span>
                      ) : null}
                      <strong>{item.title}</strong>
                      <span className="work-summary">{item.summary}</span>
                    </span>
                  </button>
                ))}
              </div>
            ) : (
              <p className="note">これから追加します</p>
            )}
          </section>
        );
      })}
      {open ? <ProjectDialog key={open.id} item={open} onClose={() => setOpen(null)} /> : null}
    </div>
  );
}
