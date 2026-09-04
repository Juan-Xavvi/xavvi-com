import { createRouter, createWebHistory } from 'vue-router';
import i18n from '@/locales';

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) return savedPosition;
    // #hash targets are scrolled by the destination page itself (see BrandsPage.vue):
    // scrollBehavior does not run on the first navigation, so a page-level handler is
    // the only thing that covers both cold loads and in-app navigation. Reset to the
    // top here so the outgoing page's offset doesn't carry over before it runs.
    return { top: 0 };
  },
  routes: [
    { path: '/', name: 'home', component: () => import('@/pages/HomePage.vue'), meta: { titleKey: 'meta.home', description: 'Launching creator brands and helping suppliers sell globally' } },
    { path: '/about', name: 'about', component: () => import('@/pages/AboutPage.vue'), meta: { titleKey: 'meta.about', description: "Learn about Xavvi's mission to power the creator economy through AI, social commerce, and digital assets." } },
    { path: '/brands', name: 'brands', component: () => import('@/pages/BrandsPage.vue'), meta: { titleKey: 'meta.brands', description: 'Brands and vendors: collaborate with hundreds of creators, launch AI-powered campaigns, and achieve better ROI with Xavvi.' } },
    { path: '/creators', name: 'creators', component: () => import('@/pages/CreatorsPage.vue'), meta: { title: 'Creators – Xavvi', description: 'Celebrities and influencers: own your data, launch your brand, monetize your audience with AI and AI Credits on Xavvi.' } },
    { path: '/brand-lab', name: 'brand-lab', component: () => import('@/pages/BrandLabPage.vue'), meta: { title: 'Brand Lab – Xavvi', description: 'Launch your own brand and store on Brand Lab. Xavvi connects you to suppliers, operates your store, and handles logistics — all for free.' } },
    { path: '/agencies', name: 'agencies', component: () => import('@/pages/AgenciesPage.vue'), meta: { title: 'Connectors – Xavvi', description: 'Connectors: help your network unlock new revenue streams powered by AI, social commerce, and blockchain technology.' } },
    { path: '/news', name: 'news', component: () => import('@/pages/NewsPage.vue'), meta: { title: 'News – Xavvi', description: 'Latest news and updates from the Xavvi ecosystem.' } },
    { path: '/news/:slug', name: 'news-detail', component: () => import('@/pages/NewsDetailPage.vue'), meta: { title: 'News – Xavvi', description: 'Latest news and updates from the Xavvi ecosystem.' } },
    { path: '/contact', name: 'contact', component: () => import('@/pages/ContactPage.vue'), meta: { title: 'Contact – Xavvi', description: "Get in touch with the Xavvi team. Whether you're a creator, brand, agency, investor, or media partner — we'd love to hear from you." } },
    { path: '/archive', name: 'archive', component: () => import('@/pages/ArchivePage.vue'), meta: { title: 'Archive – Xavvi', noindex: true } },
    { path: '/download', name: 'download', component: () => import('@/pages/DownloadPage.vue'), meta: { titleKey: 'meta.download', description: 'Download the Xavvi app and start your journey in the Web4 creator economy.' } },
    { path: '/terms', name: 'terms', component: () => import('@/pages/TermsPage.vue'), meta: { title: 'Terms of Service – Xavvi', description: 'Xavvi Terms of Service.' } },
    { path: '/privacy', name: 'privacy', component: () => import('@/pages/PrivacyPage.vue'), meta: { title: 'Privacy Policy – Xavvi', description: 'Xavvi Privacy Policy.' } },
    { path: '/community-guidelines', name: 'community-guidelines', component: () => import('@/pages/CommunityGuidelinesPage.vue'), meta: { title: 'Community Guidelines – Xavvi', description: 'Xavvi Community Guidelines.' } },
  ],
});

const { t } = i18n.global;

const DEFAULT_DESCRIPTION = 'Launching creator brands and helping suppliers sell globally';
const SITE_ORIGIN = 'https://xavvi.com';

function setMetaName(name: string, content: string) {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setMetaProperty(property: string, content: string) {
  let el = document.querySelector(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('property', property);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setRobots(noindex: boolean) {
  let el = document.querySelector('meta[name="robots"]');
  if (!noindex) {
    el?.remove();
    return;
  }
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', 'robots');
    document.head.appendChild(el);
  }
  el.setAttribute('content', 'noindex, nofollow');
}

function setLinkRel(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

router.beforeEach((to) => {
  // Title
  if (to.meta.titleKey) {
    document.title = t(to.meta.titleKey as string);
  } else {
    document.title = (to.meta.title as string) || 'Xavvi';
  }

  const title = document.title;
  const description = (to.meta.description as string) || DEFAULT_DESCRIPTION;
  const url = `${SITE_ORIGIN}${to.path}`;

  // Standard meta + canonical
  setMetaName('description', description);
  setLinkRel('canonical', url);
  setRobots(to.meta.noindex === true);

  // Open Graph
  setMetaProperty('og:title', title);
  setMetaProperty('og:description', description);
  setMetaProperty('og:url', url);
  setMetaProperty('og:site_name', 'Xavvi');

  // Twitter card
  setMetaName('twitter:card', 'summary_large_image');
  setMetaName('twitter:title', title);
  setMetaName('twitter:description', description);
});

export default router;
