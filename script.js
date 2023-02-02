const imagem = document.querySelector(".imagem")
const ligar = document.querySelector(".ligar")
const desligar = document.querySelector(".desligar")

function lampadaquebrada () {
    return imagem.src.indexOf ("quebrada") > -1
}

function lampadaligada () {
    if (!lampadaquebrada () ){
    imagem.src = 'imagens/ligada.jpg'
    }
}
function lampadadesligada () {
    if (!lampadaquebrada () ){
    imagem.src = 'imagens/desligada.jpg'
    }
}
function quebrarlampada(){
    imagem.src = 'imagens/quebrada.jpg'
}
ligar.addEventListener("click",  lampadaligada)
desligar.addEventListener("click",  lampadadesligada)
imagem.addEventListener("mouseover", lampadaligada)
imagem.addEventListener("mouseleave", lampadadesligada)
imagem.addEventListener("dblclick", quebrarlampada)
