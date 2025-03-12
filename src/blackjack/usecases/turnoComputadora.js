import { pedirCarta } from "./pedirCarta";
import { computadoraCartas, puntosIA , baraja, sumarPuntosIa, puntajeComputadora,puntosJugador} from "../index";
import { valorCarta } from "./valorCarta";

export const turnoComputadora = (baraja) => {
    do{
        let carta = pedirCarta(baraja);

        const imagenCarta = document.createElement("IMG")
        imagenCarta.src = `/assets/cartas/${carta}.png`

        imagenCarta.classList.add("carta")

        computadoraCartas.append(imagenCarta)
        
        sumarPuntosIa(valorCarta(carta))
        
        puntajeComputadora.innerHTML = puntosIA;
    }
    while(puntosIA <= puntosJugador)
}
