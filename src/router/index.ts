import { createRouter, createWebHistory } from 'vue-router';
import i18n from '@/locales';

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(_to, _from, savedPosition) {
    return savedPosition || { top: 0 };
  },
  routes: [
    { path: '/', name: 'home', component: () => import('@/pages/HomePage.vue'), meta: { titleKey: 'meta.home' } },
    { path: '/about', name: 'about', component: () => import('@/pages/AboutPage.vue'), meta: { titleKey: 'meta.about' } },
    { path: '/brands', name: 'brands', component: () => import('@/pages/BrandsPage.vue'), meta: { titleKey: 'meta.brands' } },
    { path: '/business', name: 'business', component: () => import('@/pages/BusinessPage.vue'), meta: { titleKey: 'meta.business' } },
    { path: '/creators', name: 'creators', component: () => import('@/pages/CreatorsPage.vue'), meta: { title: 'Creators – Xavvi' } },
    { path: '/brand-lab', name: 'brand-lab', component: () => import('@/pages/BrandLabPage.vue'), meta: { title: 'Brand Lab – Xavvi' } },
    { path: '/agencies', name: 'agencies', component: () => import('@/pages/AgenciesPage.vue'), meta: { title: 'Agencies & MCNs – Xavvi' } },
    { path: '/news', name: 'news', component: () => import('@/pages/NewsPage.vue'), meta: { title: 'News – Xavvi' } },
    { path: '/contact', name: 'contact', component: () => import('@/pages/ContactPage.vue'), meta: { title: 'Contact – Xavvi' } },
    { path: '/archive', name: 'archive', component: () => import('@/pages/ArchivePage.vue'), meta: { title: 'Archive – Xavvi' } },
    { path: '/download', name: 'download', component: () => import('@/pages/DownloadPage.vue'), meta: { titleKey: 'meta.download' } },
    { path: '/terms', name: 'terms', component: () => import('@/pages/TermsPage.vue'), meta: { title: 'Terms of Service – Xavvi' } },
    { path: '/privacy', name: 'privacy', component: () => import('@/pages/PrivacyPage.vue'), meta: { title: 'Privacy Policy – Xavvi' } },
    { path: '/community-guidelines', name: 'community-guidelines', component: () => import('@/pages/CommunityGuidelinesPage.vue'), meta: { title: 'Community Guidelines – Xavvi' } },
  ],
});

const { t } = i18n.global;

router.beforeEach((to) => {
  if (to.meta.titleKey) {
    document.title = t(to.meta.titleKey as string);
  } else {
    document.title = (to.meta.title as string) || 'Xavvi';
  }
});

export default router;
