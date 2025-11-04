import { createWebHistory, createRouter } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import DetallesSeries from "./components/DetallesSeries.vue";
import PersonajesSerie from "./components/PersonajesSerie.vue";
import CreatePersonaje from "./components/CreatePersonaje.vue";
import UpdatePersonaje from "./components/UpdatePersonaje.vue";

const myRoutes = [
    { path: "/", component: HomeComponent},
    { path: "/detalleserie/:idserie", component: DetallesSeries},
    { path: "/personajesserie/:idserie", component: PersonajesSerie},
    { path: "/create", component: CreatePersonaje},
    { path: "/moverpersonaje", component: UpdatePersonaje},
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router;