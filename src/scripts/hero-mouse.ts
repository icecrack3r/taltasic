import { gsap } from "gsap";

export function initHeroMouse(root: HTMLElement) {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (!matchMedia("(pointer: fine)").matches) return;

  const layers = [...root.querySelectorAll<HTMLElement>("[data-depth]")];
  const setters = layers.map((el) => ({
    el,
    depth: parseFloat(el.dataset.depth || "0"),
    x: gsap.quickTo(el, "x", { duration: 0.8, ease: "power3.out" }),
    y: gsap.quickTo(el, "y", { duration: 0.8, ease: "power3.out" }),
    rx: gsap.quickTo(el, "rotationY", { duration: 0.9, ease: "power3.out" }),
    ry: gsap.quickTo(el, "rotationX", { duration: 0.9, ease: "power3.out" }),
  }));

  gsap.set(root, { transformPerspective: 1000 });

  root.addEventListener("mousemove", (e) => {
    const r = root.getBoundingClientRect();
    const nx = (e.clientX - r.left) / r.width - 0.5;
    const ny = (e.clientY - r.top) / r.height - 0.5;
    setters.forEach(({ depth, x, y, rx, ry }) => {
      x(nx * depth * 80);
      y(ny * depth * 80);
      rx(nx * depth * 12);
      ry(-ny * depth * 12);
    });
  });

  root.addEventListener("mouseleave", () => {
    setters.forEach(({ x, y, rx, ry }) => { x(0); y(0); rx(0); ry(0); });
  });
}
