const {estudiante , obtenerPromedio} =require('./calculos');
const fs = require('fs')

console.log('nombre del estudiante es '+ estudiante.nombre);
console.log('el promedio del estudiante es '+ 
obtenerPromedio(estudiante.notas.ingles,
    estudiante.notas.matematicas,estudiante.notas.programacion))

const{nombre,edad : anos,notas:{matematicas,ingles,programacion}}= estudiante

console.log('nombre del estudiante es '+ nombre);
console.log('el promedio del estudiante es '+ 
obtenerPromedio(ingles,matematicas,programacion))
console.log('la edad del estudiante es '+ anos)

const crearArchivo=(estudiante)=>{
    texto='El nombre del estudiantes es' + nombre + '\n' + 
    'ha obtenido un promedio de'+ obtenerPromedio(ingles,matematicas,programacion);

    fs.writeFile('promedio.txt',texto,(err)=>{
        err
        ? alert(err)
        : console.log('se ha creado el archivo')
    });
}

crearArchivo(estudiante)