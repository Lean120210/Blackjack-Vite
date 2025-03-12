export const valorCarta = (carta) =>{
    let valor = carta.substring(0,carta.length - 1)
    if(isNaN(valor)){
        valor = (valor == "A") ? 11 : 10
    } 
    return valor*1;
}