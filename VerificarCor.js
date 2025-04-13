

export function verificarCor (quadrado,circulo){
    if (quadrado && quadrado.id === 'branco'){
        const boxsize = document.querySelector(".boxwhite").getBoundingClientRect();
        const quadSize = document.querySelector('.branco').getBoundingClientRect();
        return[boxsize,quadSize];
}

    if (quadrado && quadrado.id === 'azul'){
        const boxsize = document.querySelector('.boxblue').getBoundingClientRect();
        const quadSize = document.querySelector('.azul').getBoundingClientRect();
        return [boxsize,quadSize];
    }

    if (circulo && circulo.id === 'circulo'){
        const circboxsize = document.querySelector(".maior").getBoundingClientRect();
        const circSize = document.querySelector(".menor").getBoundingClientRect();
        return [circboxsize,circSize];
    }


}