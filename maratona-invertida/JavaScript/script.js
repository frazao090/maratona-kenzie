// passo a passo

// criar card
// listar card
// criar card temporada selecionada
// adicionar um evento para add a temporada a fila
// lista as temporadas selecionadas
// remover as temporadas selecionadas

const container = document.querySelector('div')
const cima = document.querySelector('#cima')

let temporadasSelecionadas=[]

function cardPrincipal(temporada) {


const back = document.createElement('div')
back.classList.add('back')

const h2 = document.createElement('h2')
h2.innerText = temporada.nome 

const h3 = document.createElement('h3')
h3.innerText = temporada.temporada 

const h4 = document.createElement('h4')
h4.innerText = temporada.sinopse

const p = document.createElement('p')
p.innerText = 'Adicionar à fila'
p.id = temporada.id
p.type = "button"

back.append(h2,h3,h4,p)

return back

}

function listarTemporadas() {

    for (let i = 0; i < temporadas.length; i++) {
        let card = cardPrincipal (temporadas[i])

        container.appendChild(card)
    }
}
listarTemporadas()

function cardTemporadaSelecionada(temporada) {
const li = document.createElement('li')

const imgTemporada = document.createElement('img')
imgTemporada.src = temporada.imagemIcone
imgTemporada.alt = temporada.nome

const toda = document.createElement('div')

toda.classList.add('toda')

toda.insertAdjacentHTML('afterbegin', 

`
<div class="lateral">
<h4>${temporada.nome}</h4>
<span>${temporada.temporada}</span>
</div>
<div id="maratona">
<br>
<img src="..//maratona-invertida/img/imagemIcone.png" alt="icone">
<br><br>
<span id="direita"><a href="#"><img src="..//maratona-invertida/img/play-icon.png" alt="play-icon">Assistir agora</a></span>
</div>`)

const end = document.createElement('div')
end.classList.add('end')

const p = document.createElement('p')
p.id = temporada.id
end.appendChild(button)

li.append(imgTemporada, toda, end )

return li

}

container.addEventListener('click', selecionarTemporada)
function selecionarTemporada(event) {
    const elementoHTML = event.target

    console.log(elementoHTML)

    if(elementoHTML.tagName == "P"){
        
        const idTemporada = elementoHTML.id
        const temporadaEncontrada = temporadas.find((temporada) => temporada.id == idTemporada)

        temporadasSelecionadas.push(temporadaEncontrada)
        listarTemporadasSelecionadas()
    }
}

function listarTemporadasSelecionadas() {
    cima.innerHTML=''
for(let i = 0; i < temporadasSelecionadas.length; i++) {
    const card = cardTemporadasSelecionadas(temporadasSelecionadas[i])
    cima.appendChild(card)
}

}

cima.addEventListener('click', function(event){
    const elementoHTML = event.target
     if (elementoHTML.tagname == "A"){

     }
    //  seria o 'BUTTON' mais fiz o "a"

    // capturar o id do button em uma variavel
    //  vão sau o fiind para encontrar a temporada que tem o mesmo id do button
    // depois usar o idexof para encontrar o indice daquela temporada no array temporadasSelecionadas
    // remover a temporada com o slice

    // doc find: https;//developer.mozilla.org/pt-br/docs/web/JavaScript/Refence/Global_Objects/Array/find
    // doc find: https;//developer.mozilla.org/pt-br/docs/web/JavaScript/Refence/Global_Objects/Array/indexOf
})