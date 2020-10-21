function jogar() {
    var nome = document.getElementsByName("nome").value
    var body = document.querySelector("body")

    body.innerHTML += `<h1>VOCÊ "${nome}", foi convocado a acompanhar Luke na ida ao mercado galático!!</h1>`
    body.innerHTML += `<p>E precisa tomar não só os cuidados com os inimigos galáticos. <br> Você sabe lutar? Responda com Sim ou Nao: </p><br>`
    body.innerHTML += `<button onclick="resp1Sim()">Sim</button> 
                       <button onclick="resp2Nao()">Não</button>`
}

//PRIMEIRA ETAPA DE PERGUNTAS NAS FUNÇÕES:

function resp1Sim() {
    var body = document.querySelector("body")
    body.innerHTML += `<p>Sabemos que de luta você entende. E na pandemia galática, você saiu de máscara? Responda com Sim ou Nao:  </p>`
    body.innerHTML += `<p>E lembre-se, seja discreto!</p>`
    body.innerHTML += `<button onclick="resp2Sim()">Sim</button> 
                       <button onclick="resp2Nao()">Não</button>`
}
function resp1Nao() {
    var body = document.querySelector("body")
    body.innerHTML += `<p><strong>FORA DO CAMINHO VOCÊ ESTÁ, HM</strong></p>`
    body.innerHTML += `<br>Jedi não és, hm.`
    body.innerHTML += `<img src="Jogo/yodadead.gif">`
}

//SEGUNDA ETAPA

function resp2Sim() {
    var body = document.querySelector("body")
    body.innerHTML += `<p><strong>Agora que MASCARADO ESTÁS, melhor para você não reconhecerem, HM! Você foi discreto ou o IMPÉRIO te viu?</strong> Responda com Sim ou Nao:</p> `
    body.innerHTML += `<p>Se discreto não foi, problemas trará, HM!</p>`
    body.innerHTML += `<button onclick="resp3Sim()">Sim</button>
                       <button onclick="resp3Nao()">Nao</button>` 
}

function resp2Nao() {
    var body = document.querySelector("body")
    body.innerHTML += `<p><strong>FORA DO CAMINHO VOCÊ ESTÁ, HM</strong></p>`
    body.innerHTML += `<br>Jedi não és, hm.</button>`
    body.innerHTML += `<p><img src="Jogo/yodadead.gif"></p>`
}

//TERCEIRA ETAPA

function resp3Sim() {
    var body = document.querySelector("body")
    body.innerHTML += `<p>COMIDA TROUXE, E PERCEBIDO NÃO FOI. NO CAMINHO VOCÊ ESTÁ, HM!  </strong> Responda com Sim ou Nao:</p> `
    body.innerHTML += `<p><img src="Jogo/vocejedi.gif"></p>`
    
    //TRAVEI
}

//function resp3Nao() {
    //var body = document.querySelector("body")
    //body.innerHTML += `<p><strong>FORA DO CAMINHO VOCÊ ESTÁ, HM</strong></p>`
    //body.innerHTML += `<br><button onclick="location.reload()">Jedi não és, hm.</button>`
    //body.innerHTML += `<img src="yodadead.gif">`
//}

