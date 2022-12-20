


const btnResume = document.getElementById("btnResume");
const btnResult = document.getElementById("calcular");
const btnReset = document.getElementById("reset");

const ticket = 200;
const student = 0.2; 
const trainee = 0.5; 
const junior = 0.85; 

function cant () {
    let cant = document.getElementById("cantidad").value;
    return cant;
}

function category()  {
    let cat = document.getElementById("select").value;
    return cat;
}


function cost(){
    if (cant () <= 0 || cant() > 99) {
        
        document.querySelector('.input-error-cantidad').style.background = 'pink';

    } else {
        if (category() == 1 ){
            total = ticket * cant () * student;
        } else if (category() == 2) {
            total = ticket * cant() * trainee;
        } else {
            total = ticket * cant() * junior;
        }
    }
    return total;
}


function resumen(e) {
    e.preventDefault();
    total = cost();
    btnResult.innerHTML = `Total a pagar: $ ${total}`;
}

btnResume.onclick = resumen;

function reset() {
    window.location.href = window.location.href;
}

btnReset.onclick = reset;