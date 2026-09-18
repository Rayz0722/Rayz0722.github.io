import { Link } from "react-router-dom";
import useReveal from "../useReveal";
import "./Music.css";

const PLAYLISTS = [
  {
    label: "Electronic / EDM",
    note: "Club-leaning originals produced in Ableton Live.",
    src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1871100785",
  },
  {
    label: "Cinematic",
    note: "Scoring sketches and ambient pieces.",
    src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1871133551",
  },
  {
    label: "Beat Demos",
    note: "Hip-hop beats and loop ideas.",
    src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1869483101",
  },
];

const MUSIC_TECH = [
  {
    to: "/projects/song-segmentation",
    title: "Song Mixing Structure Segmentation",
    stack: "MIR · Python · Signal Processing",
    blurb:
      "A music information retrieval method that segments a song by its mixing characteristics rather than its melodic structure — change-point detection over spectral features.",
  },
  {
    to: "/projects/multiband-distortion",
    title: "Multi-band Distortion VST",
    stack: "C++ · JUCE · DSP",
    blurb:
      "A multi-band distortion plugin built on the JUCE framework, splitting the signal with Linkwitz-Riley crossovers so each band is saturated independently.",
  },
  {
    to: "/projects/fmsynthesizer",
    title: "FM Bass Synthesizer",
    stack: "Bela · Pure Data · 3D Printing",
    blurb:
      "A playable FM bass synth built into a game joystick: Pure Data patch running on Bela, with a 3D-printed enclosure and mapped analog controls.",
  },
];

export default function Music() {
  useReveal();

  return (
    <div className="music ambient">
      <div className="music-wrap">
        <header className="music-hero" data-reveal>
          <p className="music-eyebrow">Music</p>
          <h1 className="music-title">
            Production, mixing, and the DSP behind it.
          </h1>
          <p className="music-lede">
            I produce mostly in Ableton Live, across electronic, cinematic, and
            hip-hop. Alongside digital production I&apos;ve done studio
            recording with grand piano, acoustic guitar, and drum sets, and
            completed the Recording Arts Workshop at CCRMA, Stanford (Summer
            2024), earning a certification in advanced recording techniques.
          </p>
        </header>

        <section className="music-sec">
          <h2 className="music-h2" data-reveal>
            Playlists
          </h2>
          <div className="playlists">
            {PLAYLISTS.map((p, i) => (
              <div
                className="reveal"
                data-reveal
                style={{ "--d": `${i * 90}ms` }}
                key={p.label}
              >
                <article className="playlist">
                  <div className="playlist-head">
                    <h3>{p.label}</h3>
                    <p>{p.note}</p>
                  </div>
                  <iframe
                    title={p.label}
                    width="100%"
                    height="340"
                    frameBorder="0"
                    allow="autoplay"
                    loading="lazy"
                    src={p.src}
                  ></iframe>
                </article>
              </div>
            ))}
          </div>
        </section>

        <section className="music-sec">
          <h2 className="music-h2" data-reveal>
            Music Technology
          </h2>
          <p className="music-sub" data-reveal>
            Where the code and the audio meet — instruments, plugins, and
            analysis tools I&apos;ve built.
          </p>
          <div className="tech-grid">
            {MUSIC_TECH.map((t, i) => (
              <div
                className="reveal"
                data-reveal
                style={{ "--d": `${i * 90}ms` }}
                key={t.to}
              >
                <Link className="tech-card" to={t.to}>
                  <p className="tech-stack">{t.stack}</p>
                  <h3 className="tech-title">{t.title}</h3>
                  <p className="tech-blurb">{t.blurb}</p>
                  <span className="tech-more">Read more ↗</span>
                </Link>
              </div>
            ))}
          </div>
        </section>

        <footer className="music-foot" data-reveal>
          <p>Ruiyang Zhou · more tracks on the way.</p>
        </footer>
      </div>
    </div>
  );
}
