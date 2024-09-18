const relogio = document.getElementById("relogio");
const iniciar = document.querySelector('.iniciar');
const zerar = document.querySelector('.zerar');
const pausar = document.querySelector('.pausar');

let timer;
let cor;
let segundos = 0;

function MostraHora(segundos)
{
let data = new Date(segundos * 1000)
return data.toLocaleTimeString('pt-BR', {
    hour12:false,
    timeZone: 'UTC'
})
}


function DefineHora()
{
   timer = setInterval(() => {
        segundos += 1;
        relogio.innerHTML = MostraHora(segundos);
    }, 1000)
}

iniciar.onclick = function()
{
    relogio.className = "";
    clearInterval(cor);
    clearInterval(timer);
    DefineHora();
}

pausar.onclick = function()
{
    clearInterval(cor);
cor = setInterval(() => 
    {
        MudarCor();
    }, 500)
    clearInterval(timer);
}
zerar.onclick = function()
{
    relogio.className = "";
    clearInterval(cor);
    clearInterval(timer);
    segundos = 0;
    relogio.innerHTML = "00:00:00";
}

function MudarCor()
{
    relogio.className = relogio.className === "pausado" ? "rodando" : "pausado";
}