const relogio = document.getElementById("relogio");
const iniciarcrono = document.querySelector('.iniciar');
const zerarcrono = document.querySelector('.zerar');
const pausarcrono = document.querySelector('.pausar');


let timercrono;
let cor;
let segundoscrono = 0;

let minutos = document.querySelector('.minutos');
let segundostimer = document.querySelector('.segundos');
let horas = document.querySelector('.horas');
const contando = document.querySelector('.contando');
const buttons = document.querySelector('.buttons');
const iniciarbtn = document.querySelector('.iniciartimer')
let pausartimer;
let zerartimer;
let iniciartimer;
let timerT;
const messi = true;

const relogiomundi = document.getElementById("horario-local");
const amostrarelogio = document.querySelector('.amostra-relogio');
const teste = document.querySelector('.teste');
let fusoselecionado;

function MostraHora(segundoscrono)
{
let data = new Date(segundoscrono * 1000)
return data.toLocaleTimeString('pt-BR', {
    hour12:false,
    timeZone: 'UTC'
})
}


function DefineHora()
{
   timercrono = setInterval(() => {
        segundoscrono += 1;
        relogio.innerHTML = MostraHora(segundoscrono);
    }, 1000)
}

iniciarcrono.onclick = function()
{
    relogio.className = "";
    clearInterval(cor);
    clearInterval(timercrono);
    DefineHora();
}

pausarcrono.onclick = function()
{
    clearInterval(cor);
cor = setInterval(() => 
    {
        MudarCor();
    }, 500)
    clearInterval(timercrono);
}
zerarcrono.onclick = function()
{
    relogio.className = "";
    clearInterval(cor);
    clearInterval(timercrono);
    segundoscrono = 0;
    relogio.innerHTML = "00:00:00";
}

function MudarCor()
{
    relogio.className = relogio.className === "pausado" ? "rodando" : "pausado";
}


iniciarbtn.onclick = function()
{

this.remove();
clearInterval(timerT);
setTimeout(timerT);

horas.style.display = 'none';
minutos.style.display = 'none';
segundostimer.style.display = 'none';

criarBotoes();

transformarEmInt();

removeElements();

}


function marcaTempo(horas, minutos, segundostimer)
{
    const time = new Date();

    clearInterval(timerT);

    timerT = setInterval(() => {
        segundostimer -= 1;
        time.setHours(horas, minutos, segundostimer);
        contando.innerHTML = time.toLocaleTimeString();

        if(time.toLocaleTimeString() == "00:00:00")
            {
                clearInterval(timerT);
                reiniciar();
            }
    }, 1000) 



pausartimer.onclick = function()
{
    clearInterval(timerT);
}

iniciartimer.onclick = function()
{
    marcaTempo(horas, minutos, segundostimer)
}

zerartimer.onclick = function()
{

    inserirDisplay();

    inserirHoras();
    
    clearInterval(timerT);
    contando.innerHTML = ""

    iniciartimer.remove();
    pausartimer.remove();
    zerartimer.remove();
    
    buttons.appendChild(iniciarbtn);

}

}

function criarBotoes()
{
    
iniciartimer = document.createElement("button")

iniciartimer.className = "iniciartimer"
iniciartimer.innerHTML = "Iniciar";


buttons.appendChild(iniciartimer);

pausartimer = document.createElement("button")

pausartimer.className = "pausartimer"
pausartimer.innerHTML = "Pausar";


buttons.appendChild(pausartimer);

zerartimer = document.createElement("button")

zerartimer.className = "zerartimer"
zerartimer.innerHTML = "Zerar";

buttons.appendChild(zerartimer);

}

function transformarEmInt()
{
let horasreais = horas.innerHTML;
let minutosreais = minutos.innerHTML;
let segundosreais = segundostimer.innerHTML;

minutosreais = parseInt(minutosreais);
segundosreais = parseInt(segundosreais);
horasreais = parseInt(horasreais);

if(horasreais == 0 & minutosreais == 0 & segundosreais == 0)
{
    contando.innerHTML == "00:00:00"
    segundosreais = 1
    reiniciar();
}


marcaTempo(horasreais, minutosreais, segundosreais);


}

function removeElements()
{
   minutos.innerHTML = "";
   segundostimer.innerHTML = "";
   horas.innerHTML = "";
}


function inserirHoras()
{
    horas.innerHTML = "00h";
    minutos.innerHTML = "00m";
    segundostimer.innerHTML = "00s";
}

function inserirDisplay()
{
    horas.style.display = 'block';
    minutos.style.display = 'block';
    segundostimer.style.display = 'block'; 
}

function reiniciar()
{
    iniciartimer.remove();
    pausartimer.remove();
    zerartimer.innerHTML = "Reinicar";
}

relogiomundi.onchange = function()
{
    fusoselecionado = relogiomundi.value;
    
    relogioMundi();
}

function relogioMundi()
{
    

    if(fusoselecionado == "brasil")
    {
        
        setTimeout(() => {
        let data = new Date()
        amostrarelogio.innerHTML = data.toLocaleTimeString('pt-BR')}, 1000);
    
     }

    if(fusoselecionado == "estados-unidos")
        {
            setTimeout(() => {
            let datalocal = new Date();
            let datafuso = new Date(datalocal.getTime() - (120 * 60000))
            amostrarelogio.innerHTML = datafuso.toLocaleTimeString('pt-BR')}, 1000); 
        }

    if(fusoselecionado == "china")
            {
                setTimeout(() => {
                    let datalocal = new Date()
                    let datafuso = new Date(datalocal.getTime() + (660 * 60000))
                    amostrarelogio.innerHTML = datafuso.toLocaleTimeString('pt-BR')}, 1000);
            }

    if(fusoselecionado == "alemanha")
                {
                        setTimeout(() => {
                        let datalocal = new Date()
                        let datafuso = new Date(datalocal.getTime() + 240 * 60000)
                        amostrarelogio.innerHTML = datafuso.toLocaleTimeString('pt-BR')}, 1000)
                }
            }


relogiomundi.onchange();



