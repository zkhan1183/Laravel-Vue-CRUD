// resources/app.js

require('./bootstrap');

import { createApp } from 'vue';
import { createRouter , createWebHistory  } from 'vue-router';
import App from './components/AppComponent.vue';
import { routes } from './routes.js';

const router = createRouter({ history: createWebHistory(), routes })

createApp({
    components: {
        App,
    }
})
.use(router)
.mount('#app');