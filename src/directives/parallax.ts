import type { Directive } from 'vue';

export const vParallax: Directive<HTMLElement, number | undefined> = {
  mounted(el, binding) {
    const speed = binding.value ?? 0.3;
    let ticking = false;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const viewCenter = window.innerHeight / 2;
      const offset = (center - viewCenter) * speed;
      el.style.transform = `translateY(${offset}px)`;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    update();

    (el as any).__parallax_cleanup = () => {
      window.removeEventListener('scroll', onScroll);
    };
  },
  unmounted(el) {
    (el as any).__parallax_cleanup?.();
  },
};
