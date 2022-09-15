import mongoose from "mongoose";

CRUD();

function gradeAverage(students) {
    let sumNotas = 0
    students.forEach(student => {
      sumNotas += student.nota
    })
    console.log(`Promedio: ${(sumNotas / students.length).toFixed(2)}`)
}

async function CRUD() {
    try {
        const estudianteSchema = new mongoose.Schema({
            nombre: { type: String, required: true },
            apellido: { type: String, required: true },
            edad: { type: Number, required: true },
            dni: { type: String, required: true, unique: true },
            curso: { type: String, required: true },
            nota: { type: Number, required: true },
          })
          
          const EstudiantesModel = mongoose.model('estudiantes', estudianteSchema)

        //Conexión a la base de datos
        const URL = 'mongodb://localhost/colegio';
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('Base de datos conectada');

        console.log('\n4) El segundo estudiante más joven')

        const youngestStudent = await EstudiantesModel.find({}).sort({ edad: 1 }).skip(1).limit(1);
        console.log(youngestStudent);

        //----------------------------------------------------------------------------
        console.log('\n5) Sólo los nombres y apellidos de los estudiantes con su curso correspondiente, ordenados por apellido descendente (z a a)')
        //----------------------------------------------------------------------------
        const studentsNameLastName = await EstudiantesModel.find({}, { nombre: 1, apellido: 1, curso: 1, _id: 0 }).sort({ apellido: -1 });
        console.log(studentsNameLastName);

        console.log('\n6) El estudiante que sacó mejor nota')
        //----------------------------------------------------------------------------
        const betterStudent = await EstudiantesModel.find({ nota: 10 })
        console.log(betterStudent);

        //----------------------------------------------------------------------------
        console.log('\n7) El promedio de notas del total de alumnos')
        //----------------------------------------------------------------------------
        const studentsForAvg = await EstudiantesModel.find({})
        gradeAverage(studentsForAvg);

        console.log('\n8) El promedio de notas del curso \'1A\'')
        //----------------------------------------------------------------------------
        const studentsForAvg1A = await EstudiantesModel.find({ curso: '1A' })
        gradeAverage(studentsForAvg1A);

    } catch (error) {
        console.log(error);
    } finally {
        mongoose.disconnect().catch(err => { throw new Error('error al desconectar la base de datos') })
    }
}