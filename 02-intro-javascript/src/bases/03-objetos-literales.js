const persona =     {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
}

console.log({ persona })

const persona2 = {...persona};
persona2.apellido = 'JR';
console.log(persona);
console.log(persona2);
