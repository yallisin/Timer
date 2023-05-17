const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let segundos = 0;
let timer;

function criarHora(segundos){
    let data = new Date(segundos * 1000);
   
   return data.toLocaleTimeString('pt-BR', {
        hour12:false,
        timeZone: 'UTC'
    });
}


function iniciaRelogio(){
    timer = setInterval(() => {
        segundos+=10;
        relogio.innerHTML = criarHora(segundos);
    }, 1000);
}


document.addEventListener('click', function(e)
{
    const el = e.target;

    if(el.classList.contains('iniciar'))
    {
        relogio.classList.remove('pausado');
        clearInterval(timer);
        iniciaRelogio();
    }
    
    if(el.classList.contains('pausar'))
    {
       relogio.classList.add('pausado');
        clearInterval(timer);
  
    }
    if(el.classList.contains('zerar'))
    {
        relogio.classList.remove('pausado');
        setTimeout(function() {clearInterval(timer);})
        segundos = 0;
        relogio.innerHTML = '00:00:00';
    }
});


