<template>
    <div>
        <img :src="laSerie.imagen" alt="foto" style="width: 350px; height: 300px;">
        <h1>{{laSerie.nombre}}</h1>
        <h4>IMDB: {{ laSerie.puntuacion }}</h4>
        <p>Año de publicación: {{ laSerie.anyo  }}</p>
        <router-link class="btn btn-info" :to="'/personajesserie/' + laSerie.idSerie">
            Personajes
        </router-link>
    </div>
</template>

<script>
import ServiceSeries from './../services/ServiceSeries';
const service = new ServiceSeries();

    export default {
        name: "DetallesSeries",
        data(){
            return {
                laSerie: []
            }
        },
        mounted(){
            service.getDetalleSerie(this.$route.params.idserie).then(result => {
                this.laSerie = result;
            })
        },
        watch: {
        '$route.params.idserie'(nextVal, oldVal) {
            if (nextVal != oldVal) {
                service.getDetalleSerie(this.$route.params.idserie).then(result => {
                this.laSerie = result;
            })
            }
        }
    }
    }
</script>