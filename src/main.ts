import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import { createAuth0 } from '@auth0/auth0-vue';

const app = createApp(App);
const pinia = createPinia();

app
    .use(router)
    .use(pinia)
    .use(
        createAuth0({
            domain: import.meta.env.VITE_AUTH0_DOMAIN,
            clientId: import.meta.env.VITE_AUTH0_CLIENT_ID,
            authorizationParams: {
                redirect_uri: import.meta.env.VITE_AUTH0_CALLBACK_URL,
            },
        })
    )
    .mount('#app');