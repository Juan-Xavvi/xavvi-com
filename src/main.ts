import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import i18n from './locales';
import { vReveal } from './directives/reveal';
import { vParallax } from './directives/parallax';
import './styles/main.css';

const app = createApp(App);
app.directive('reveal', vReveal);
app.directive('parallax', vParallax);
app.use(i18n);
app.use(router);
app.mount('#app');
