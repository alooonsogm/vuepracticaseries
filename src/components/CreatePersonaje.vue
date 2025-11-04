<template>
    <div>
        <h1 style="color: blue;">Nuevo personaje</h1>
        <form>
            <label>Nombre: </label>
            <input type="text" class="form-control" v-model="personaje.nombre"/>
            <label>Imagen: </label>
            <input type="text" class="form-control" v-model="personaje.imagen"/>
            <label>Serie: </label>
            <select class="form-control" v-model="personaje.idSerie">
                <option v-for="serie in series" :key="serie" :value="serie.idSerie">{{ serie.nombre }}</option>
            </select>
            <button class="btn btn-info" @click.prevent="insertarPersonaje">Insertar perosnaje</button>
        </form>
    </div>
</template>

<script>
import ServiceSeries from './../services/ServiceSeries';
const service = new ServiceSeries();

    export default {
        name: "CreatePersonaje",
        data(){
            return {
                series: [],
                personaje: {
                    idPersonaje: 1,
                    nombre: "",
                    imagen: "",
                    idSerie: 0
                }
            }
        },
        methods: {
            insertarPersonaje(){
                service.insertarPersonaje(this.personaje).then(() => {
                    this.$router.push("/personajesserie/" + this.personaje.idSerie);
                })
            }
        },
        mounted(){
            service.getSeries().then(result => {
                this.series = result;
            })
        }
    }
</script>