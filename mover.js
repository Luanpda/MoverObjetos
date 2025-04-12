let quadrado = null;
let arrastando = false;
let offsetX, offsety;


document.addEventListener('mousedown',(evento) =>{
    if (evento.target.classList.contains('quadrado')) {
        
        quadrado = evento.target;
        offsetX = evento.clientX - quadrado.offsetLeft;
        offsety = evento.clientY - quadrado.offsetTop;
        quadrado.style.cursor = 'grabbing';
      } 

});

document.addEventListener('mouseup', () => {
    if (quadrado) {
        const box = document.querySelector(".boxwhite");
        const boxBlue = document.querySelector('.boxblue');
        const quadradoBranco = document.querySelector('.branco');
        const quadradoAzul = document.querySelector('.azul');

        const boxsize = box.getBoundingClientRect();
        const boxAzulSize = boxBlue.getBoundingClientRect();
        const quadBrancoSize = quadradoBranco.getBoundingClientRect();
        const quadAzulSize = quadradoAzul.getBoundingClientRect();
        
        

        if (quadrado.id === 'branco'){

            if(boxsize.top <= quadBrancoSize.top && 
                boxsize.bottom >= quadBrancoSize.bottom && 
                boxsize.left <= quadBrancoSize.left && 
                boxsize.right >= quadBrancoSize.right) {
                  const msgEntrou = document.querySelector('.h2-branco')
                  msgEntrou.style.display = 'block';
                  const container = document.querySelector('.container-texto-quadrado');
                  container.appendChild(msgEntrou);
                }
        }
        if (quadrado.id === 'azul'){
            
            if(boxAzulSize.top <= quadAzulSize.top && 
                boxAzulSize.bottom >= quadAzulSize.bottom && 
                boxAzulSize.left <= quadAzulSize.left && 
                boxAzulSize.right >= quadAzulSize.right) {
                  const msgEntrou = document.querySelector('.h2-azul')
                  msgEntrou.style.display = 'block';
                  const container = document.querySelector('.container-texto-quadrado');
                  container.appendChild(msgEntrou);
                }
        }
        quadrado.style.cursor = 'grab';
        quadrado = null;

        
      }

  });

  document.addEventListener('mousemove', (evento) => {

    

    if (quadrado) {
      quadrado.style.left = (evento.clientX - offsetX) + 'px';
      quadrado.style.top = (evento.clientY - offsety) + 'px';
         

    }

  });