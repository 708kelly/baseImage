import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import axios from 'axios';
import "@esb-common/ui/css/esb-ui.css"
import EsbUi from "@esb-common/ui"

// import jQuery from 'jquery'
// window.jQuery = window.$ = jQuery
// const { promiseBaseUrl } = document.querySelector('html').dataset;
// if (promiseBaseUrl) {
//     axios.defaults.baseURL = `${promiseBaseUrl}`;
// } else {
//     axios.defaults.baseURL = import.meta.env.VITE_API_URL;
// }
axios.defaults.baseURL = 'http://localhost/backend/'
axios.defaults.headers.post['Content-Type'] = 'application/json';

const app = createApp(App);
app.use(router, axios);
app.use(EsbUi);
// 傳入物件：可以設定不同生命週期函式。
// 傳入函式：只在 mounted 執行。
app.mount('#app');
