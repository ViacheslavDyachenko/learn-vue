import { createApp } from 'vue';
import { provideStore } from 'redux-vuex';
import App from './index.vue';
import store from './stores/rootStore';
import { actions } from './stores/increment';

const app = createApp(App);

provideStore({
    app,
    store,
    actions: actions
  })

app.mount('#app');

if(module.hot) {
    module.hot.accept();
}