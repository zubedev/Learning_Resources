// MODULE IMPORTS
import { createApp } from 'vue';

// APP IMPORTS
import App from '@/App';
import BaseCard from '@/components/UI/BaseCard';
import BaseButton from '@/components/UI/BaseButton';
import BaseDialog from '@/components/UI/BaseDialog';

// APPLICATION
const app = createApp(App);

// COMPONENTS
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-dialog', BaseDialog);

// MOUNT
app.mount('#app');
