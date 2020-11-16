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
    body.innerHTML += `<h1>Sabemos que, de luta você entende.<br> E na pandemia galática, você saiu de máscara?</h1>`
    body.innerHTML += `<p>E lembre-se, seja discreto!</p>`
    body.innerHTML += `<button onclick="resp2Sim()">Sim</button> 
                       <button onclick="resp2Nao()">Nao</button>`
}
function resp1Nao() {
    var body = document.querySelector("body")
    body.innerHTML += `<h1><strong>FORA DO CAMINHO VOCÊ ESTÁ, HM</strong></h1>`
    body.innerHTML += `<br><button onclick="location.reload()">Jedi não és, hm.</button>`
    body.innerHTML += `<img src="Jogo/img/yodadead.gif">`
    document.body.appendChild(body);
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
    body.innerHTML += `<br><button onclick="location.reload()">Jedi não és, hm.</button>`
    body.innerHTML += `<p img src="Jogo/img/yodadead.gif" alt="yoda"></p>`
    document.body.appendChild(body);
}

//TERCEIRA ETAPA

function resp3Sim() {
    var body = document.querySelector("body")
    body.innerHTML += `<h1>COMIDA TROUXE, E PERCEBIDO NÃO FOI. NO CAMINHO VOCÊ ESTÁ, HM!  </strong> </h1> `
    body.innerHTML += `<p><img src="Jogo/img/vocejedi.gif"></p>`
    document.body.appendChild(body);    
    
}

function resp3Nao() {
    var body = document.querySelector("body")
    body.innerHTML += `<h1><strong>FORA DO CAMINHO VOCÊ ESTÁ, HM</strong></h1>`
    body.innerHTML += `<br><button onclick="location.reload()">Jedi não és, hm.</button>`
    body.innerHTML += `<img src="Jogo/img/yodadead.gif" alt="yoda">`
}

