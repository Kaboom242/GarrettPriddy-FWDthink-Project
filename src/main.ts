import { createApp } from 'vue'

import App from './App.vue'
import router from './router';

import './styles/style.scss'
import 'bootstrap-icons/font/bootstrap-icons.css';
//import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap styles


createApp(App).use(router).mount('#app');
