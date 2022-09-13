import mongoose from 'mongoose'

const estudiantes = []

/* --------------------------------------------------------------------- */
/*  Definición del esquema de documento y del modelo                     */
/*  (para poder interactuar con la base de datos: leer, escribir, etc)   */
/* --------------------------------------------------------------------- */
const estudianteSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    edad: { type: Number, required: true },
    dni: { type: String, required: true, unique: true },
    curso: { type: String, required: true },
    nota: { type: Number, required: true },
})

const EstudiantesModel = mongoose.model('estudiantes', estudianteSchema)

/* ------------------------------------------------------------------ */
/*               Conexión a la base de datos : colegio                */
/* ------------------------------------------------------------------ */

await mongoose.connect('mongodb://localhost/colegio', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
console.log('Base de datos conectada')

/* ------------------------------------------------------------------- */
/*   Escritura de la base de datos: colegio, collection: estudiantes   */
/* ------------------------------------------------------------------- */


await EstudiantesModel.insertMany(estudiantes);

// for (estudiante of estudiantes) {
//     const userSaveModel = new EstudiantesModel(estudiante);
//     const savedUser = await userSaveModel.save();
// }
console.log('todo ok!');

await mongoose.disconnect()
