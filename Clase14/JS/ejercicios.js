/*
calculadora:
+
-
*
/

*/
function calcular() {// inicio 
    let op1;
    let op2;
    let operaciones;
    let resultado;

    // leer dato
    // javascript tiene una funcion: document.getElementById('Id').value;
    //permite acceder al elemento a traves de html
    op1 = document.getElementById('op1').value;
    operacion = document.getElementById('operacion').value;
    op2 = document.getElementById('op2').value;
    
    // muestra el valor en consola (F12)
    console.log('op1 vale: ', op1)
    console.log('operacion vale: ', operacion)
    console.log('op2 vale: ', op2)

    // ahora bloque if(casita)
    // Estructura de datos de un "if"; va a evaluar un valor de tipo boolean (true/false), 
    // tiene q ser true para que se ejecute el codigo ingresado (logica)

    //if ('true) {
    // logica
    //}

    if(operacion === '+') {
       resultado = parseInt(op1) + parseInt(op2);
    }

    if (operacion === '-') {
        resultado = parseInt(op1) - parseInt(op2);
    }

    if (operacion === '*') {
        resultado = parseInt(op1) * parseInt(op2);
    }

    if(operacion === '/'){
        if(parseInt(op2) !=0) {
            resultado = parseInt(op1) / parseInt(op2);
        } else {
            //document.getElementById('resultado'). innerHTML = 'No se puede dividir entre cero';
            resultado = 'No se puede dividir entre cero';
        }
    }
    console.log(resultado);
    // actualizar el label del html con el resultado de la operacion
    document.getElementById('resultado'). innerHTML = resultado;
} // fin

function borrar() {
    //op1
    document.getElementById('op1').value='';
    document.getElementById('op2').value='';
    document.getElementById('operacion').value='';
    document.getElementById('resultado').innerHTML='';
}



