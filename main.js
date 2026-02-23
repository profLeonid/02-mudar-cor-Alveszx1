'use strict'

//Pegando o botao (selecionando para editar)
const botaoTrocarCor = document.getElementById("botao-trocar-cor")
console.log(botaoTrocarCor)



//função para trocar a cor
function trocaCor (){
        let corUsuario = document.getElementById('cor-usuario').value

        if(corUsuario == "verde"){
            corUsuario = "green"
        }
        if(corUsuario == "vermelho"){
            corUsuario = "red"
        }
        if(corUsuario == "amarelo"){
            corUsuario = "yellow"
        }
        if (corUsuario == "azul"){
            corUsuario = "blue"
        }

        document.documentElement.style.setProperty('--color-bg', corUsuario)
}

//Adicionar função á uma ação (clique)
botaoTrocarCor.addEventListener('click', trocaCor)


const corVerde = document.getElementById("bt-verde")

function trocarCorVerde(){
    document.documentElement.style.setProperty("--color-bg", "green")
    
}

corVerde.addEventListener("click" , trocarCorVerde)

const corVermelha = document.getElementById("bt-vermelho")

function trocarCorVermelho(){
    document.documentElement.style.setProperty("--color-bg", "red")
}

corVermelha.addEventListener("click" , trocarCorVermelho)
