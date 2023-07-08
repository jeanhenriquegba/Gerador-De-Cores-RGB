// Variaveis globais
const btnGerar = document.querySelector(".trocarCor");
const corExibida = document.querySelector(".corContainer");
const cor = document.getElementById("cor");
const corHistory = document.getElementById("corHistory");
let corGuardada = 'Nenhuca cor foi computada ainda.';

//Botão para gerar a cor
btnGerar.addEventListener('click',()=>{

let resultado = 'rgb(';
for(let i = 0; i < 1 ;i++){resultado += Math.floor(Math.random()*254);};
resultado = resultado +',';
for(let i = 0; i < 1 ;i++){resultado += Math.floor(Math.random()*254);};
resultado = resultado +',';
for(let i = 0; i < 1 ;i++){resultado += Math.floor(Math.random()*254);};
resultado = resultado +')';

corExibida.textContent = resultado;
document.body.style.backgroundColor = resultado;
cor.style.color = resultado;
corGuardada = resultado;

corHistory.innerHTML += 
`<span style="background:${resultado};">${resultado}</span>`;
let scrollar = document.querySelector(".historyContainer");
    scrollar.scrollTop = scrollar.scrollHeight;
});

// Botão para copiar a cor
document.getElementById("cor").addEventListener('click',()=>{
    if(corGuardada == ''){}else{
    navigator.clipboard.writeText(corGuardada)
    cor.style.color = '#00e600';
    cor.innerHTML = 'Copiado &#10003;';
    setTimeout(() => {
    cor.style.color = corGuardada;
    cor.textContent = 'Copiar cor para Ctrl+V';
    }, 2000);
    }
});
