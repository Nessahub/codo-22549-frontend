function incrementar(){
    const label = document.getElementById('contador');
    let valor = parseInt(label.innerHTML);

    // incremento el valor del contadorValor
    //contadorValor = contadorValor + 1;
    valor++; // post incremento
    //++contadorValor; // pre incremento
    label.innerHTML = valor;

    paridad(valor);
}
// retorna un boolean
function esPar(valor){
    //determino si el valor es par:
    let resto = valor % 2; // 0 o 1
    return valor === 0;
    

}
function paridad(valor){
    
    // SCOPE es donde es visible la variable
    const labelParidad = document.getElementById('paridad');
    //invocar a la funcion
    let esNumeroPar = esPar(valor);

    if(resto === 0){
        
        labelParidad.innerHTML = 'PAR';
    }else {
        labelParidad.innerHTML = 'IMPAR';
    }

}
function decrementar() {
    const label = document.getElementById('contador');
    let valor = label.innerHTML;
    valor = parseInt(valor) - 1;

    //update del valor
    label.innerHTML = valor;

    paridad(valor);
}