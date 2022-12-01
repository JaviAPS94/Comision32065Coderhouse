import axios from 'axios';
import got from 'got';

const host = 'http://localhost:8080';

async function getFyH() {
    try {
        const response = await axios.get(host);
        console.log(response.data);
    } catch (error) {
        console.error(error)
    }
}

getFyH();

async function doPostRequestAxios() {
    const payload = { number: Math.floor(Math.random() * 10) };
    const response = await axios.post(host, payload);
    console.log(response.data);
}

doPostRequestAxios();

async function getFyHGot() {
    try {
        const response = await got(host);
        console.log(response.body);
    } catch (error) {
        console.log(error);
    }
}

getFyHGot();

async function getNumbersGot() {
    try {
        const response = await got(`${host}/numbers`);
        console.log(response.body);
    } catch (error) {
        console.error(error);
    }
}

getNumbersGot();

//Requerimiento implementar un algoritmo de de suma de numeros
//BDD

//Paso 1 ingreso de numero
//Paso 2 realizar la suma
//Pase 3 retornar la suma de esos numeros

// - Insert two numbers 
// - Do suma