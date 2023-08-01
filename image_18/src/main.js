import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from './router';
import axios from 'axios';


import '@/assets/styles.scss';

const { promiseBaseUrl } = document.querySelector('html').dataset;
if (promiseBaseUrl) {
    axios.defaults.baseURL = `${promiseBaseUrl}`;
} else {
    axios.defaults.baseURL = import.meta.env.VITE_API_URL;
}
axios.defaults.headers.post['Content-Type'] = 'application/json';

const app = createApp(App);
// createApp(App).mount('#app')
app.use(router, axios);
// 傳入物件：可以設定不同生命週期函式。
// 傳入函式：只在 mounted 執行。
app.mount('#app');
