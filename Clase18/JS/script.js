const btnAdd =document.getElementById('btnAdd');


//puedo agregar un evento desde javascript
//declaro la funcion
//onclick="add()" en html se pone asi

//declaro la funcion
const claves = [];

function add(){

    //capturo el input por si id
   // const clave = document.getElementById('clave').value;
    const clave = getKey();
    const isValid = validateKey(claves);

    
    if(!isValid) {
        
        alert('Debe completar la clave');
        return;
    }

    //pasa las validaciones
    //agrega a las lista de claves
    addToList(clave);

    //renderKeys();
    renderKeyByDOM();
}

function renderKeyByDOM(){
    const list = findKeys();
    //crear <ul>
    const ul = document.createElement('ul');
    ul.id = 'classUl';
    ul.className = 'classUl';

    //agregar al div el hijo: <ul>
    list.appendChild(ul);

    //creo los <li> en base al array claves y los agrego al <ul>
    for(let clave of claves){
        const li = document.createElement('li');
        li.innerHTML = clave;
        li.id=Math.random(); //0 - 0.9999999 (le asignamos un numero identificador si un id se repite)
        ul.appendChild(li);
    // al li le agregamos un evento
    li.addEventListener('click', () => alert('soy un li'))
    ul.appendChild(li);   
    }
}
function renderKeys(){
    const list = findKeys();
    list.innerHTML = '';
    claves.forEach(clave => {
        list.innerHTML += `<li>${clave}</li>`
    })
    
}
//true|false
function validateKey(key) {
    //validacion
    return key !== '';//true | false
}

function addToList(clave) {
    claves.push(clave);
}

function getKey() {
    return document.getElementById('clave').value;
}

function findKeys() {
    return document.getElementById('claves');
}
btnAdd.addEventListener('click', add);