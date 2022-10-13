
function buscar() {
   // alert(`buscando algo en index.js: ${clave}`);

    //data.js >USER_DATA.data
    //funcion de flecha que aplican expresiones lambda
    const usersFiltered = USERS_DATA.data.filter(user => user.first_name.includes(clave) || user.last_name.includes(clave) );

    const htmlUsers = Users(usersFiltered);
    document.getElementById('users').innerHTML = htmlUsers;

}

//disparar a las demas funciones
function render() {
    console.log('render()');

    //usar al componente Navbar
    const htmlNavbar = Navbar('Mi primer pseudocomponente',buscar);
    document.getElementById('navbar').innerHTML = htmlNavbar;

    //ahora invoco a users
    const htmlUsers = Users(USERS_DATA).data;
    document.getElementById('users').innerHTML = htmlUsers;
}

//invocar?
//render();