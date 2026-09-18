import { useEffect } from "react";

const TRIGGER = 0.94; // reveal once the element's top is inside 94% of the viewport

/**
 * Fades + lifts every [data-reveal] element into place as it scrolls into
 * view. The check is position-based rather than entry-based, so anything the
 * page jumps past (scroll restore, a deep link) is revealed too instead of
 * staying invisible. Honors prefers-reduced-motion by showing everything.
 */
export default function useReveal() {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll("[data-reveal]"));
    if (!items.length) return;

    const showAll = () => items.forEach((el) => el.classList.add("is-in"));

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      showAll();
      return;
    }

    let pending = null;
    const sweep = () => {
      pending = null;
      const limit = window.innerHeight * TRIGGER;
      items.forEach((el) => {
        if (el.classList.contains("is-in")) return;
        if (el.getBoundingClientRect().top < limit) el.classList.add("is-in");
      });
    };
    const schedule = () => {
      if (pending === null) pending = requestAnimationFrame(sweep);
    };

    sweep();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      if (pending !== null) cancelAnimationFrame(pending);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);
}
