let simbolosDisponibles = ["&#128151;","&#128525;","&#128516;"]

let listaCasillas = []

function crearCasillas(){
    
    for(let i=0; i < simbolosDisponibles.length; i++){
        let casilla1 = {
            simbolo : simbolosDisponibles[i],
            mostrandoSimbolo : false
        }
        let casilla2 = {
            simbolo : simbolosDisponibles[i],
            mostrandoSimbolo : false      
        }
        listaCasillas.push(casilla1)
        listaCasillas.push(casilla2)
    }
}

function devolverCasilla(row, col){
    const pos = (row * 3) + col
    return listaCasillas[pos]    
}

function ponerSimbolosCasillas(){
    for (let i = 0; i < 2; i++){
        for (let j = 0; j < 3; j++){
            const but = document.getElementById(i+"_"+j)
            const casilla = devolverCasilla(i,j)
            but.innerHTML = casilla.simbolo
        }
    }

}

function main(){
    crearCasillas()
    ponerSimbolosCasillas()
}

main()