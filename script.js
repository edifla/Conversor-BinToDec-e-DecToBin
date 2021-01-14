let botaodec = document.getElementById("dectobin")
let botaobin = document.getElementById("bintodec")
let escolhido = document.createElement('input')
let container = document.querySelector(".container2")
function trocartela1(){
    botaodec.style.display = 'none'
    botaobin.style.display = 'none'
    escolhido.setAttribute("type","number")
    container.appendChild(escolhido)
    botaobin.style.display = ""
    botaobin.setAttribute("onclick","bintodec()")
    botaobin.innerHTML = "Converter"
    let titulo = document.getElementById('titulo').innerHTML = "Insira um número para ser convertido"
}
function trocartela2(){
    botaodec.style.display = 'none'
    botaobin.style.display = 'none'
    escolhido.setAttribute("type","number")
    container.appendChild(escolhido)
    botaodec.style.display = ""
    botaodec.setAttribute("onclick","dectobin()")
    botaodec.innerHTML = "Converter"
    let titulo = document.getElementById('titulo').innerHTML = "Insira um número para ser convertido"
}
function dectobin(){
    let conversao = Number(escolhido.value)
    let Nbinario = conversao.toString(2);
    let resultado = document.getElementById('resultado').innerHTML = `O número ${conversao} convertido para binário é igual a : ${Nbinario}`
}
function bintodec(){
    let conversao = Number(escolhido.value)
    let Ndecimal = parseInt(conversao, 2);
    let resultado = document.getElementById('resultado').innerHTML = `O número ${conversao} convertido para decimal é igual a : ${Ndecimal}`
}
