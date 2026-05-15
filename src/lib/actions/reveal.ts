import { animate } from "motion";

interface RevealOptions {
  delay?: number;
  y?: number;
  duration?: number;
}

export function reveal(
  node: HTMLElement,
  { delay = 0, y = 24, duration = 0.7 }: RevealOptions = {},
) {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        animate(
          node as any,
          { opacity: [0, 1], y: [y, 0] } as any,
          { duration, delay, easing: [0.25, 1, 0.5, 1] } as any,
        );
        observer.disconnect();
      }
    },
    { threshold: 0.15 },
  );
  node.style.opacity = "0";
  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    },
  };
}
