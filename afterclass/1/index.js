class Persona {
    constructor(nombre, edad, profesion, series) {
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;
        this.series = series;
    }

    obtenerNombre() {
        return this.nombre;
    }

    obtenerEdad() {
        return this.edad;
    }

    obtenerProfesion() {
        return this.profesion;
    }

    obtenerSeries() {
        return this.series;
    }
}

const persona1 = new Persona('Alex', 27, 'Desarrollador', ['serie1','serie2','serie3']);
const persona2 = new Persona('Danilo', 45, 'Mecánico', ['serie4', 'serie5', 'serie6']);

console.log(persona1.obtenerNombre());
console.log(persona1.obtenerEdad());
console.log(persona1.obtenerProfesion());
console.log(persona1.obtenerSeries());

console.log(persona2.obtenerNombre());
console.log(persona2.obtenerEdad());
console.log(persona2.obtenerProfesion());
console.log(persona2.obtenerSeries());

