import { Link } from "react-router-dom";
import useReveal from "../../useReveal";
import "./article.css";

/**
 * Shell shared by the music-technology write-ups: the same frosted panel,
 * type scale, and scroll reveal the Home and Music pages use.
 */
export function Article({ stack, title, lede, children }) {
  useReveal();

  return (
    <div className="article ambient">
      <div className="article-wrap">
        <header className="article-head" data-reveal>
          <Link className="article-back" to="/Music">
            ← Music
          </Link>
          <p className="article-stack">{stack}</p>
          <h1 className="article-title">{title}</h1>
          <p className="article-lede">{lede}</p>
        </header>

        <div className="article-body">{children}</div>

        <footer className="article-foot" data-reveal>
          <Link to="/Music">← Back to Music</Link>
        </footer>
      </div>
    </div>
  );
}

/** A figure in its own panel. `narrow` reins in tall diagram screenshots. */
export function Figure({ src, alt, caption, narrow = false }) {
  return (
    <figure className={narrow ? "fig fig-narrow" : "fig"} data-reveal>
      <img src={src} alt={alt} loading="lazy" />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

/** Two or more images sharing one panel. */
export function FigureRow({ images, caption }) {
  return (
    <figure className="fig" data-reveal>
      <div className="fig-row">
        {images.map((img) => (
          <img key={img.src} src={img.src} alt={img.alt} loading="lazy" />
        ))}
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
