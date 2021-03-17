import { createApp, Transition } from 'vue'
import App from './App.vue'
import waveRipple from './directive/ripple/ripple';
import router from './router';
import './assets/index.less'
import 'material-design-icons-iconfont/dist/material-design-icons.css';

const app = createApp(App);

app.directive('wave-ripple', waveRipple);
app.use(router);
app.mount('#app');