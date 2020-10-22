function jogar() {
    //var nome = document.getElementsByName("name").value
    var nome = document.querySelector("#name").value
    var body = document.querySelector("body");

    body.innerHTML += `<h1>${nome}, você foi convocado a acompanhar Luke na ida ao mercado galático!!</h1>`
    body.innerHTML += `<p>E precisa tomar não só os cuidados com os inimigos galáticos. <br> Você sabe lutar?</p><br>`
    body.innerHTML += `<button onclick="resp1Sim()">Sim</button> 
                       <button onclick="resp2Nao()">Nao</button>`
}

//PRIMEIRA ETAPA DE PERGUNTAS NAS FUNÇÕES:

function resp1Sim() {
    var body = document.querySelector("body")
    body.innerHTML += `<h1>Sabemos que de luta você entende.<br> E na pandemia galática, você saiu de máscara?</h1>`
    body.innerHTML += `<p>E lembre-se, seja discreto!</p>`
    body.innerHTML += `<button onclick="resp2Sim()">Sim</button> 
                       <button onclick="resp2Nao()">Nao</button>`
}
function resp1Nao() {
    var body = document.querySelector("body")
    body.innerHTML += `<h1><strong>FORA DO CAMINHO VOCÊ ESTÁ, HM</strong></h1>`
    body.innerHTML += `<br><p><strong>Jedi não és, hm.</strong></p>`
    body.innerHTML += `<img src="Jogo/yodadead.gif">`
}

//SEGUNDA ETAPA

function resp2Sim() {
    var body = document.querySelector("body")
    body.innerHTML += `<h1><strong>Agora que MASCARADO ESTÁS, melhor para você não reconhecerem, HM! Você foi discreto ou o IMPÉRIO te viu?</strong></h1> `
    body.innerHTML += `<p>Se discreto não foi, problemas trará, HM!</p>`
    body.innerHTML += `<button onclick="resp3Sim()">Sim</button>
                       <button onclick="resp3Nao()">Nao</button>` 
}

function resp2Nao() {
    var body = document.querySelector("body")
    body.innerHTML += `<h1><strong>FORA DO CAMINHO VOCÊ ESTÁ, HM</strong></h1>`
    body.innerHTML += `<p>Jedi não és, hm.</p>`
    body.innerHTML += `<p img src="Jogo/yodadead.gif" alt="yoda"></p>`
}

//TERCEIRA ETAPA

function resp3Sim() {
    var body = document.querySelector("body")
    body.innerHTML += `<h1>COMIDA TROUXE, E PERCEBIDO NÃO FOI. NO CAMINHO VOCÊ ESTÁ, HM!  </strong> </h1> `
    body.innerHTML += `<p><img src="Jogo/vocejedi.gif" alt="jedi"></p>`    
    
}

function resp3Nao() {
    var body = document.querySelector("body")
    body.innerHTML += `<p><strong>FORA DO CAMINHO VOCÊ ESTÁ, HM</strong></p>`
    body.innerHTML += `<br><button onclick="location.reload()">Jedi não és, hm.</button>`
    body.innerHTML += `<img src="yodadead.gif" alt="yoda">`
}

