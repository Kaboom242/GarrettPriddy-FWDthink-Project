import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

import 'bootstrap-icons/bootstrap-icons.css';
import './styles/style.scss';
//import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap styles

createApp(App).use(router).mount('#app');
