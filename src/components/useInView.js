import { useEffect, useRef, useState } from "react";

// Reports whether an element has scrolled into view. Only fires once -
// once something has animated in, it stays in (no re-hiding on scroll up).
export function useInView(options = { threshold: 0.15 }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.unobserve(node);
      }
    }, options);

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, inView];
}
