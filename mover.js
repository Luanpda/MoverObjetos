import { verificarCirculo } from "./VerificarCirculo.js";
import { verificarCor } from "./VerificarCor.js";
import { verificarPosicao } from "./verificarPosicao.js";
 
 
 let quadrado,circulo = null;
 let offsetX, offsety;
 export let circu = false,quadA=false,quadB=false;

document.addEventListener('mousedown',(evento) =>{
    if (evento.target.classList.contains('quadrado')) {
        
        quadrado = evento.target;
        offsetX = evento.clientX - quadrado.offsetLeft;
        offsety = evento.clientY - quadrado.offsetTop;
        quadrado.style.cursor = 'grabbing';
      } 


  if (evento.target.classList.contains('menor')){
    circulo = evento.target;
    offsetX = evento.clientX - circulo.offsetLeft;
    offsety = evento.clientY - circulo.offsetTop;
    circulo.style.cursor = 'grabbing';
    console.log("clocou");
  }
});


document.addEventListener('mouseup', () => {
  console.log('Soltei o mouse');
    if (quadrado) {
      
       if (quadrado.id === 'branco'){
        let [boxsize, quadSize] = verificarCor(quadrado,circulo,quadA,quadB);
        quadB = verificarPosicao(boxsize, quadSize, quadrado);
       }
       if (quadrado.id === 'azul'){
        let [boxsize, quadSize] = verificarCor(quadrado,circulo,quadA,quadB);
        quadA= verificarPosicao(boxsize, quadSize, quadrado);
       }
        
             
        quadrado.style.cursor = 'grab';
        quadrado = null;

        
      }

      if (circulo){
        let [circboxsize,circSize] = verificarCor(quadrado,circulo,circu);
        circu = verificarCirculo(circboxsize,circSize,circulo);

        circulo.style.cursor = "grab";
        circulo = null;
      }
      if(circu && quadA && quadB){
        
        const msgfinal = document.querySelector('.menssagem-final');
        msgfinal.style.display = 'block';
        console.log("Era prafuncionar")
      }

  });

  document.addEventListener('mousemove', (evento) => {

    

    if (quadrado) {
      quadrado.style.left = (evento.clientX - offsetX) + 'px';
      quadrado.style.top = (evento.clientY - offsety) + 'px';   
    }
    if (circulo){
      circulo.style.left = (evento.clientX - offsetX) + 'px';
      circulo.style.top = (evento.clientY - offsety) + 'px';
    }

  });
  