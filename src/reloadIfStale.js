/**
 * GitHub Pages serves index.html with `cache-control: max-age=600` and offers
 * no way to change that. Since the JS and CSS filenames are content-hashed, a
 * browser holding a cached index.html keeps loading the *previous* build's
 * assets for up to ten minutes after a deploy — the site looks stale even
 * though the new one is live.
 *
 * So ask the server what index.html says right now. If it points at a
 * different bundle than the one running, this page is stale: reload through a
 * one-off query string, which the cache has no entry for. The marker is
 * stripped from the address bar afterwards and doubles as a guard, so this can
 * redirect at most once per load.
 */
const MARKER = "v";

export default function reloadIfStale() {
  const url = new URL(window.location.href);

  if (url.searchParams.has(MARKER)) {
    url.searchParams.delete(MARKER);
    window.history.replaceState(null, "", url.pathname + url.search + url.hash);
    return;
  }

  const running = document
    .querySelector("script[type=module][src]")
    ?.getAttribute("src");
  if (!running) return;

  fetch(`${import.meta.env.BASE_URL}index.html`, { cache: "no-store" })
    .then((res) => (res.ok ? res.text() : null))
    .then((html) => {
      const live = html?.match(/src="([^"]*index-[^"]*\.js)"/)?.[1];
      if (!live || live === running) return;

      url.searchParams.set(MARKER, Date.now().toString(36));
      window.location.replace(url.toString());
    })
    .catch(() => {
      // Offline or the request was blocked — keep showing what we have.
    });
}
