//objeto vacio
const unAlumno = {
    edad: 25,
    nombre: 'carlos',
    carrera: 'ING'
};

//array/vector/arreglos vacio de alumnos
const alumnos = [    
    {
        edad: 25,
        nombre: 'carlos',
        carrera: 'ING'
    },
    {
        edad: 30,
        nombre: 'RODRIGO',
        carrera: 'LIC'
    },
    {
        edad: 29,
        nombre: 'REINALDO',
        carrera: 'MATEMATICAS'
    },
    {
        edad: 40,
        nombre: 'jose',
        carrera: 'lengua'
    },
];

// SUMAR TODAS LAS EDADES
/*let algo = 0;
algo = algo + 5;
algo + 5;*/
let sumaEdades = 0; //acumulador
for(let i=0; i< alumnos.lenght; i++) {
    //sumaEdades = sumaEdades + alumnos[i].edad;
    sumaEdades += alumnos[i].edad;
}
console.log('primer forma', sumaEdades);

sumaEdades = 0;

for(let alumno of alumnos) {
    sumaEdades += alumno.edad;
}
console.log('segunda forma', sumaEdades);

// expresion lambda
//array.foreach()
sumaEdades = 0;
alumnos.forEach(alumno => sumaEdades+= alumno.edad); //centrar en que quiero hacer
console.log('tercera forma', sumaEdades);    

//-----------------------------
// LISTA DE ALUMNOS MENORES DE 40
const menoresDe40 = []; //inicializo el vector vacio

for(let alumno of alumnos){
    if(alumno.edad < 40){
        menoresDe40.push(alumno);
    }
}
console.log('menores de 40', menoresDe40);

// filter: funcion lambda que retorna una lista de lo que se filtro
// dentro de la expresion lambda

const alumnosMenosDe40 = alumnos.filter(alumno => alumno.edad < 40); // que quiero?
console.log(alumnosMenosDe40);

//EXISTE ALGUN ALUMNO DE 25?
let existe = false; 
for(let i=0; i< alumnos.length && !existe; i++){
  //  if(alumnos[i].edad === 25){
    existe = alumnos[i].edad === 25; // true | false
     // if(existe)
       // break; //corta el ciclo for
    
}
console.log('existe?', existe);

/* JAVASCRIPT OPERADORES LOGICOS


or  = ||         evalua dos partes, si es verdadero, no hay problema con el otro lado va a ser true. si es falso uno de los lados, va a dar false.
and = &&         ambas partes tienen q ser true para que la condicion sea verdadera, sino sera false.           
not = !          el negado es el opuesto, si el negado es true, seria false y viceversa.
xor =

*/

// .some() > boolean (true|false): expresion lambda
const existeAlumnoDe25 = alumnos.some(alumno => alumno.edad === 25); // que quiero?
console.log(existeAlumnoDe25);

// quiero saber si "todos los alumnos tiene 35"

let todos = true;
for(let i=0; alumnos.length && todos; i++) {
    todos =alumnos[i].edad === 35; //false
}
console.log('todos:', todos);

//every: boolean (si todos los elemntos cumplen una condicion determinada)
const todos2 = alumnos.every(alumno => alumno.edad === 35); // que quiero?
console.log('todos2:', todos2);

// quiero solo los nombres de los alumnos
const nombres = [];
for(let alumno of alumnos){
    nombres.push(alumno.nombre);
}
console.log('nombres:', nombres);

//map: f(algo) > otro algo
const nombresMap = alumnos.map(alumno => alumno.nombre); // que quiero?
console.log('nombresMap:', nombresMap);

//reduce
const sumaReduced = alumnos.reduce((acum, actual) => acum + actual.edad, 0); //que quiero?
console.log('sumaReduced:', sumaReduced);