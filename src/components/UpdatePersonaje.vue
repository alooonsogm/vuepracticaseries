<template>
    <div>
        <h1 style=" color: blue;">Personajes y series</h1>
        <form>
            <label>Seleccione una serie: </label>
            <select class="form-control" v-model="idserie" @change.prevent="sacarlaSerie">
                <option v-for="serie in series" :key="serie" :value="serie.idSerie">{{ serie.nombre }}</option>
            </select>
            <label>Seleccione una personaje: </label>
            <select class="form-control" v-model="idpersonaje" @change="sacarElPersonaje">
                <option v-for="personaje in personajes" :key="personaje" :value="personaje.idPersonaje">{{ personaje.nombre }}</option>
            </select>
            <button class="btn btn-info" @click.prevent="moverPersonaje">Guardar cambios</button>
        </form>

        <div>
            <div>
                <h1 style="color: red;">{{ serieseleccionada.nombre }}</h1>
                <img :src="serieseleccionada.imagen" alt="foto" style="width: 150px; height: 100px;">
            </div>
            <div>
                <h1 style=" color: blue;">{{ personajeSeleccionado.nombre }}</h1>
                <img :src="personajeSeleccionado.imagen" alt="foto" style="width: 150px; height: 100px;">
            </div>
        </div>
    </div>
</template>

<script>
import ServiceSeries from './../services/ServiceSeries';
const service = new ServiceSeries();
import Swal from 'sweetalert2'

    export default {
        name: "UpdatePersonaje",
        data(){
            return {
                series: [],
                personajes: [],
                idserie: 1,
                idpersonaje: 1,
                personajeSeleccionado: [],
                serieseleccionada: []
            }
        },
        mounted(){
            service.getSeries().then(result => {
                this.series = result;
            })

            service.getPersonajes().then(result => {
                this.personajes = result
            })

            this.sacarlaSerie();
            this.sacarElPersonaje();
        },
        methods: {
            moverPersonaje(){
                Swal.fire({
                    title: "¿Estás seguro?",
                    text: "Moveras al personaje de serie",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Si, moverlo!"
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire({
                        title: "Personaje movido",
                        text: "El personaje ha sido movido existosamente.",
                        icon: "success"
                        });

                        service.moverElPersonaje(this.idpersonaje, this.idserie).then(() => {
                            this.$router.push("/personajesserie/" + this.idserie);
                        })
                    }
                });
            },

            sacarlaSerie(){
                service.getDetalleSerie(this.idserie).then(result => {
                    this.serieseleccionada = result
                })
            },

            sacarElPersonaje(){
                service.getPersonajeId(this.idpersonaje).then(result => {
                    this.personajeSeleccionado = result
                })
            }
        }
    }
</script>