import { createApp, Transition } from 'vue';
import App from './App.vue';
import waveRipple from './directive/ripple/ripple';
import router from './router';
import './assets/index.less';

// material-design-icons
import 'material-design-icons-iconfont/dist/material-design-icons.css';

// vue-echarts
// import ECharts from 'vue-echarts';
// import { use } from "echarts/core";
// // 手动引入 ECharts 各模块来减小打包体积
// import { CanvasRenderer } from 'echarts/renderers'
// import { BarChart } from 'echarts/charts'
// import { GridComponent, TooltipComponent } from 'echarts/components'
// use([
//   CanvasRenderer,
//   BarChart,
//   GridComponent,
//   TooltipComponent
// ]);

const app = createApp(App as any);

app.use(router);
app.directive('wave-ripple', waveRipple);
// app.component('v-chart', ECharts)
app.mount('#app');