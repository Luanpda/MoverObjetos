



export function verificarCirculo(circboxsize,circSize,circu){
    const msgEntrou = document.querySelector('.h2-lightblue');
    //Circulo maior
    const cx1 = circboxsize.left + circboxsize.width/2;
    const cy1 = circboxsize.top + circboxsize.height/2;
    const raioMaior = circboxsize.width/2;

    //Circulo menor
    const cx2 = circSize.left + circSize.width/2;
    const cy2 = circSize.top + circSize.height/2;
    const raioMenor = circSize.width/2;

    const distancia = Math.sqrt(Math.pow(cx2-cx1,2) + Math.pow(cy2-cy1,2));

    if(distancia + raioMenor <= raioMaior){
        circu = true;
        const container = document.querySelector('.container-texto-quadrado');
        msgEntrou.style.display = 'block';
        container.appendChild(msgEntrou);
        return circu;
    }else{
        msgEntrou.style.display = 'none';
        circu = false;
        return circu;
    }
}