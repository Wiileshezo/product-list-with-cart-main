import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import BaseButton from "./components/UI/BaseButton.vue";
import BaseCard from "./components/UI/baseCard.vue";
import BaseDialog from "./components/UI/BaseDialog.vue";

const app = createApp(App);
const pinia = createPinia();

app.component("base-button", BaseButton);
app.component("base-card", BaseCard);
app.component("base-dialog", BaseDialog);

app.use(pinia);

app.mount("#app");
