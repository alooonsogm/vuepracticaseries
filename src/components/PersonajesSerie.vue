<template>
    <div>
        <router-link class="btn btn-danger" :to="'/detalleserie/' + this.$route.params.idserie">
            Volver
        </router-link>
        <table class="table table-info">
            <thead>
                <tr>
                    <th>Personaje</th>
                    <th>Imagen</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="personaje in personajes" :key="personaje">
                    <td>{{ personaje.nombre }}</td>
                    <td><img :src="personaje.imagen" alt="foto" style="width: 250px; height: 200px;"></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import ServiceSeries from './../services/ServiceSeries';
const service = new ServiceSeries();

    export default {
        name: "PersonajesSerie",
        data(){
            return {
                personajes: []
            }
        },
        mounted(){
            service.getPerosnajesSerie(this.$route.params.idserie).then(result => {
                this.personajes = result;
            })
        }
    }
</script>