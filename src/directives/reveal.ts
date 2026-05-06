import type { Directive } from 'vue';

const observer = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.classList.add('revealed');
        observer.unobserve(e.target);
      }
    }
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
);

export const vReveal: Directive<HTMLElement, number | string | undefined> = {
  mounted(el, binding) {
    el.classList.add('reveal-init');

    if (typeof binding.value === 'string' && ['left', 'right', 'scale'].includes(binding.value)) {
      el.dataset.reveal = binding.value;
    } else if (typeof binding.value === 'number') {
      el.style.transitionDelay = `${binding.value * 100}ms`;
    }

    if (binding.arg && ['left', 'right', 'scale'].includes(binding.arg)) {
      el.dataset.reveal = binding.arg;
    }

    observer.observe(el);
  },
  unmounted(el) {
    observer.unobserve(el);
  },
};
