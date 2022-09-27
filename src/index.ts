import { createApp } from 'vue';
import { provideStore } from 'redux-vuex';
import store from './stores/rootStore';
import { actions } from './stores/increment';
import 'styles/reset.scss';
import 'styles/fonts.scss';
import Landing from 'pages/Landing';
import { createRouter, createWebHashHistory } from 'vue-router';
import PersonalArea from 'pages/PersonalArea';
import Excursions from 'pages/Excursions';
import RootRouter from 'components/RootRouter';

const routes = [
  { path: '/', component: Landing },
  { path: '/excursions', component: Excursions },
  { path: '/personal-area', component: PersonalArea },
]

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

const app = createApp(RootRouter);

provideStore({
  app,
  store,
  actions: actions
})

app.use(router)

app.mount('#app');

if(module.hot) {
  module.hot.accept();
}