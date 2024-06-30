let intentos = 6;
let palabra

fetch("https://clientes.api.greenborn.com.ar/public-random-word")
    .then(response => response.json())
    .then(response => {
        console.log(response[0].toUpperCase());
        palabra = response[0].toUpperCase();

    })
    .catch(err => {
        console.log("pero que ha pasao!")
        let diccionario = ["PERRO", "CIELO",
            "COCHE", "FRUTA", "PIANO", "NIEVE",
            "LIBRO", "AMIGO", "REINA", "PLUMA", "FUEGO",
            "LLAVE", "PANAL", "PLATO", "ARBOL", "VERDE",
            "CALLE", "DULCE", "FLACO", "TRAJE", "PUNTO",
            "PLAYA", "DONDE", "LENTO", "SIGLO", "PODER",
            "VACIO", "HECHO", "LETRA", "GRITO", "NEGRO",
            "BUENO", "HUEVO", "GORDO", "AVION",
            "CARTA", "VIENTO", "LUCHA", "LINDO", "PASTA",
            "PARAR", "OJOS", "TIGRE", "NUNCA",]
        let aleatorio = Math.floor(Math.random() * diccionario.length);
        palabra = diccionario[aleatorio];
        console.log(palabra);
    })

function leerintento() {
    let intentos = document.getElementById("guess-input");
    intentos = intentos.value;
    intentos = intentos.toUpperCase();
    return intentos
}
const button = document.getElementById("guess-button");
button.addEventListener('click', intentar);

function intentar() {
    const INTENTO = leerintento();



    const GRID = document.getElementById("grid");
    const ROW = document.createElement("div");
    ROW.className = 'row';
    //No necesito row.classname pq la linea de arriba ya obtiene el input con una clase row.
    for (let i in palabra) {
        const SPAN = document.createElement("span");
        SPAN.className = 'letter';
        if (INTENTO[i] === palabra[i]) {
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#79b851';
        } else if (palabra.includes(INTENTO[i])) {
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#f3c237'
        } else {
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#a4aec4';
        }
        ROW.appendChild(SPAN);
    }

    intentos--
    console.log(intentos);
    if (intentos == 0) {
        terminar("<h1>PERDISTE!</h1>");

    }

    GRID.appendChild(ROW);
    if (INTENTO === palabra) {
        terminar("<h1>GANASTE!</h1>")
        return
    }

}
function terminar(mensaje) {
    const INPUT = document.getElementById("guess-input")
    INPUT.disabled = true;
    button.disabled = true;
    let contenedor = document.getElementById("guesses");
    contenedor.innerHTML = mensaje;
}