/*VARIAVEIS */
var Leonardo = window.document.getElementById('Leonardo')
var Samantha = window.document.getElementById('Samantha')
var Bruna = window.document.getElementById('Bruna')
var SetaDireita = window.document.getElementById('seta-direita')
var SetaEsquerda = window.document.getElementById('seta-esquerda')
/*FUNCOES */
function RolarParaDireita() {
    Leonardo.style = "display:none"
    Bruna.style = "display:block"
    SetaDireita.style = "display:none"
    SetaEsquerda.style = "display:block"
}
function RolarParaEsquerda() {
    Bruna.style = "display:none"
    Leonardo.style = "display:block"
    SetaEsquerda.style = "display:none"
    SetaDireita.style = "display:block"
}