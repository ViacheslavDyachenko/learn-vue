import { createApp } from 'vue'
import App from './index.vue';

const app = createApp(App);

app.mount('#app');

if(module.hot) {
    module.hot.accept();
}