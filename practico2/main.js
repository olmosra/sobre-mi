let $nombreInput = document.getElementById("nombre");
/**
 * Función que toma el nombre
 */
function agregarNombre(){
    let nombre = $nombreInput.value;
    /**
     * Condición de testeo para la contención del nombre
     */
    if(nombre !== null) {
        console.log(nombre)
    }
}
let piedra = document.getElementById(piedra);
let papel = document.getElementById(papel);
let tijeras = document.getElementById(tijeras);;


function juegaPiedra() {
    document.getElementById('nombre').innerHTML = `${nombre} eligio:`;
    let jugadaUsuario = usuario.innerHTML = 'piedra';
    // console.log(jugadaUsuario);
    let jugadaComputadora = obtenerJugadaComputadora();
    // console.log(jugadaComputadora);
}
function juegaPapel() {
    document.getElementById('nombre').innerHTML = `${nombre} eligio:`;
    let jugadaUsuario = usuario.innerHTML = 'papel';
    // console.log(jugadaUsuario);
    let jugadaComputadora = obtenerJugadaComputadora();
    // console.log(jugadaComputadora);
}
function juegaTijeras() {
    document.getElementById('nombre').innerHTML = `${nombre} eligio:`;
    let jugadaUsuario = usuario.innerHTML = 'tijeras';
    // console.log(jugadaUsuario);
    let jugadaComputadora = obtenerJugadaComputadora();
    // console.log(jugadaComputadora);
}
// Funcion que determina un numero ramdon entre 1 y 2.
function getRandomInt() {
    return Math.floor(Math.random() * 2);
}

// Funcion que hace que la computadora elija aleatoriamente entre piedra, papel o tijera.
function obtenerJugadaComputadora() {
    let jugadaComputadora = getRandomInt();
    if (jugadaComputadora === 0) {
        jugadaComputadora = computadora.innerHTML = 'piedra';
        // console.log(jugadaComputadora)
        return 'piedra'
    } else if (jugadaComputadora === 1) {
        jugadaComputadora = computadora.innerHTML = 'papel';
        // console.log(jugadaComputadora)
        return 'papel'
    } else {
        jugadaComputadora = computadora.innerHTML = 'tijeras';
        // console.log(jugadaComputadora)
        return 'tijera'
    }
};