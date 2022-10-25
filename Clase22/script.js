// Agregar un interceptor a la petición
// script comun para todos los archivos, estar primero, para la seguridad.
axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';

axios.interceptors.request.use(function (config) {
    console.log('agregando seguridad');
    // Haz algo antes que la petición se ha enviada
    return config;
}, function (error) {
    // Haz algo con el error de la petición
    return Promise.reject(error);
});

function findUsers() {
    const url = 'https://reqres.in/api/users'

    const config = {
        timeout: 1000,
        headers: {
            key: 'value'
        }
    }

    axios.get(url, config)
    .then(function (response) {
        // handle success
        console.log('ok', response);
      })
      .catch(function (error) {
        // handle error
        console.log('error', error);
      })
      .then(function () {
        console.log('siempre se ejecuta')
        // always executed
      });
}

document.getElementById('btnFindUsers').addEventListener('click', ()=> {
    findUsers();
});