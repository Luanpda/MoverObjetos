
export function verificarPosicao(boxsize, quadsize, quadrado,quadA,quadB){
    
    if (quadrado.id === 'branco'){
        const msgEntrou = document.querySelector('.h2-branco')
        const container = document.querySelector('.container-texto-quadrado');

          if(boxsize.top <= quadsize.top && 
              boxsize.bottom >= quadsize.bottom && 
              boxsize.left <= quadsize.left && 
              boxsize.right >= quadsize.right) {   

                msgEntrou.style.display = 'block';
                container.appendChild(msgEntrou);
                return  true;
                
              }else{
                msgEntrou.style.display = 'none';
                return  false;
                
              }
      }

      if (quadrado.id === 'azul'){

        const msgEntrou = document.querySelector('.h2-azul')
        const container = document.querySelector('.container-texto-quadrado');

          if(boxsize.top <= quadsize.top && 
              boxsize.bottom >= quadsize.bottom && 
              boxsize.left <= quadsize.left && 
              boxsize.right >=quadsize.right) {   

                msgEntrou.style.display = 'block';      
                container.appendChild(msgEntrou);
                return quadA = true;
              }else{
                msgEntrou.style.display = 'none';
                return quadA = false
                
              }
      }


      

}