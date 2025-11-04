import axios from 'axios';
import Global from './../Global';

export default class ServiceSeries {
    getSeries() {
        return new Promise(function (resolve) {
            var request = "api/Series";
            axios.get(Global.urlSeries + request).then(response => {
                console.log("Leyendo series.")
                resolve(response.data);
            })
        })
    }

    getDetalleSerie(idSerie) {
        return new Promise(function (resolve) {
            var request = "api/Series/" + idSerie;
            axios.get(Global.urlSeries + request).then(response => {
                console.log("Leyendo detalles de la serie.")
                resolve(response.data);
            })
        })
    }

    getPerosnajesSerie(idSerie) {
        return new Promise(function (resolve) {
            var request = "api/Series/PersonajesSerie/" + idSerie;
            axios.get(Global.urlSeries + request).then(response => {
                console.log("Leyendo perosnajes de la serie.")
                resolve(response.data);
            })
        })
    }

    insertarPersonaje(personaje) {
        return new Promise(function (resolve) {
            var request = "api/Personajes";
            axios.post(Global.urlSeries + request, personaje).then(response => {
                console.log("Insertando personaje")
                resolve(response);
            })
        })
    }

    getPersonajes() {
        return new Promise(function (resolve, reject) {
            var request = "api/Personajes";
            fetch(Global.urlSeries + request).then(response => {
                if (!response.ok) {
                    // Si la respuesta no es 200-299, lanza un error, (tienes que hacer el if previo para comprobar porque fetch no te hace solo como axios).
                    throw new Error("Error al obtener los personajes");
                }
                return response.json(); // Convierte la respuesta en JSON ya que fetch no te lo transforma automaticamente
            }).then(data => {
                console.log("Leyendo personajes.");
                resolve(data); // Devuelve los datos
            }).catch(error => {
                console.error(error);
                reject(error);
            });
        });
    }


    getPersonajeId(idPersonaje) {
        return new Promise(function (resolve) {
            var request = "api/Personajes/" + idPersonaje;
            axios.get(Global.urlSeries + request).then(response => {
                console.log("Leyendo el personaje por id.")
                resolve(response.data);
            })
        })
    }

    moverElPersonaje(idpersonaje, idserie) {
        return new Promise(function (resolve) {
            var request = "api/Personajes/" + idpersonaje + "/" + idserie;
            axios.put(Global.urlSeries + request).then(response => {
                console.log("Moviendo el personaje")
                resolve(response);
            })
        })
    }
}