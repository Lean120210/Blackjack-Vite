import _ from "underscore"

//Esta funcion crea una nueva baraja
export const crearBaraja = (tipos,especiales) =>{
    let baraja = []
    
    for(let i = 2; i <= 10; i++){
        for(let tipo of tipos){
            baraja.push(i + tipo)
        }
    }
    for(let especial of especiales){
        for(let tipo of tipos){
            baraja.push(especial + tipo)
        }
    }
    baraja = _.shuffle(baraja)
    return baraja
}