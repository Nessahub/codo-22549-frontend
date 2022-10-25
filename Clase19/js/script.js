

function buscarDatos() {
    // simuloo que busco en un API rest !!
const persona = {
    dni: 1234,
    nombre: 'carlos',
    direcciones: [
        {
            calle: 'calle1',
            altura: 1234,
            tipo: 'postal'
        },
        {
            calle: 'calle2',
            altura: 1235,
            tipo: 'legal'
        }
    ],
    cuenta: {
        tipo: 'cc',
        nro: '012-132132-21321'
    }
 }
  return persona;
}

function dibujarDatosPersona(){
    //obtengo los datos desde el "api rest"
    const res = buscarDatos();

    const datosPersona = DatosPersona(res.dni, res.nombre);
    const direcciones = DireccionesPersona(res.direcciones);
    const cuenta = DatosCuentaPersona(res.cuenta);

    render({
        datosPersona: datosPersona,
        direcciones: direcciones,
        cuenta: cuenta
    });
}

function render(props) {
    document.getElementById('datos-persona').innerHTML = props.datosPersona;
    document.getElementById('direcciones-persona').innerHTML = props.direcciones;
    document.getElementById('cuenta-persona').innerHTML = props.cuenta;
}



function DatosPersona(dni, nombre) {
    const html = `<p>${nombre} - ${dni}</p>`;
    return html;
}
function DireccionesPersona(direcciones) {
    let html = `<ul>`;
    const dirs = direcciones.map(d => `<li>${d.calle},${d.altura},${d.tipo}</li>`);
    html += dirs; 
    html += '</ul>';
    return html ;
}

function DatosCuentaPersona(cuenta) {
    const html = `<p>Tipo: ${cuenta.tipo}</p>
        <p>Nro: ${cuenta.nro}</p>`;
    return html;
}

document.getElementById('btnBuscar').addEventListener('click', dibujarDatosPersona);


/*console.log(persona);

const personaJsonText = JSON.stringify(persona);

console.log(personaJsonText);

//volver el texto a objeto

const otraPersona = JSON.parse()*/


