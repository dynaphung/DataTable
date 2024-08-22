import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

// PrimeVue Components
import Paginator from 'primevue/paginator'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'

const app = createApp(App);
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});

//PrimeVue Components
app.component('Paginator', Paginator)
app.component('DataTable', DataTable)
app.component('Column', Column)

app.mount('#app')
