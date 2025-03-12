import {crearBaraja} from "./usecases/crearBaraja.js"
import { pedirCarta } from "./usecases/pedirCarta.js";
import {valorCarta} from "./usecases/valorCarta.js"
import { turnoComputadora } from "./usecases/turnoComputadora.js";

const   tipos      = ["H","C","S","D"],
        especiales = ["A","J","Q","K"];
export let puntosJugador = 0,
puntosIA = 0;

export let baraja = crearBaraja(tipos,especiales)

export const sumarPuntosIa = (puntos) =>{
    puntosIA += puntos
}

const deshabilitarBotones = () =>{
    btnPedir.disabled = true
    btnDetener.disabled = true;
}

//Referencias de html
const   btnPedir   = document.querySelector("#btnPedir"),
        btnDetener = document.querySelector("#btnDetener"),
        btnNuevo  = document.querySelector("#btnNuevo")

export const jugadorCartas = document.querySelector("#jugador-cartas"),
        computadoraCartas = document.querySelector("#computadora-cartas")

export const puntajeJugador    = document.querySelector(".puntosJugador"),
    puntajeComputadora = document.querySelector(".puntosComputadora")


//Eventos

btnPedir.addEventListener("click",()=>{
    if(baraja.length === 0){
        alert("Ya no hay cartas")
        console.error("Ya no hay cartas")
    }
    const   carta = pedirCarta( baraja );

    let imagenCarta = document.createElement("IMG")
    imagenCarta.src = `/assets/cartas/${carta}.png`

    imagenCarta.classList.add("carta")

    jugadorCartas.append(imagenCarta)
    
    puntosJugador += valorCarta(carta)
    
    puntajeJugador.innerHTML = puntosJugador;
    
    if(puntosJugador > 21){
        alert("Gana la computadora")
        deshabilitarBotones()
        btnPedir.style.display = "none"
        btnDetener.style.display = "none"
    }
    else if(puntosJugador === 21){
    alert("¡21! Genial :)")
        btnPedir.disabled = true;
    }
})


btnDetener.addEventListener("click",()=>{
    turnoComputadora(baraja)

    //Validaciones

    if(puntosJugador > puntosIA && puntosJugador <= 21){
        alert("Gana el jugador")
    }
    else if(puntosIA > 21){
        alert("Gana el jugador")
    }
    else if(puntosIA > puntosJugador){
        alert("Gana la computadora")
    }
    else if((puntosIA && puntosJugador > 21)){
        alert("Empate")
    }
    btnDetener.style.display = "none"
    btnPedir.style.display   = "none"
})
btnNuevo.addEventListener("click",()=>{
    baraja
    puntosIA      = 0
    puntosJugador = 0
    puntajeComputadora.innerHTML = ""
    puntajeJugador.innerHTML = ""
    btnDetener.disabled = false;
    btnPedir.disabled = false;
    btnPedir.style.display = "block"
    btnDetener.style.display = "block"
    computadoraCartas.innerHTML = ""
    jugadorCartas.innerHTML = ""
})







