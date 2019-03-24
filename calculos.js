const estudiante= {
    nombre:'Juan',
    edad:25,
    notas:{
            matematicas:3,
            ingles:4,
            programacion:5
    }
}

const obtenerPromedio=(nota_uno,nota_dos,notas_tres)=>(nota_uno+nota_dos+notas_tres)/3;

module.exports={
    estudiante,
    obtenerPromedio   
}