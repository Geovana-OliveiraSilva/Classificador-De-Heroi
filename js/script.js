let heroiSelecionado = "";

let imagensHerois = {
  "Harry Potter": "harry.jpg",
  "Hermione Granger": "hermione.jpg",
  "Ronald Weasley": "ron.jpg",
  "Ginevra Weasley": "ginny.jpg",
  "Dumbledore e Fawkes": "dumbledore.jpg",
  "Luna Lovegood": "luna.jpg",
  "Minerva McGonagall": "minerva.jpg",
  "Rubeo Hagrid": "hagrid.jpg"
};

function mostrarTela(id) {
  let telas = document.querySelectorAll(".tela");
  telas.forEach(tela => tela.classList.add("escondido"));
  document.getElementById(id).classList.remove("escondido");
}

function selecionarHeroi(nome) {
  heroiSelecionado = nome;
  document.getElementById("nomeSelecionado").innerText = `Nome do Herói: ${nome}`;

  let imgSelecionada = document.getElementById("imgSelecionado");
  imgSelecionada.src = `assets/${imagensHerois[nome]}`;
  imgSelecionada.alt = nome;

  mostrarTela("entradaXP");
}

function classificar() {
  let xp = parseInt(document.getElementById("xpInput").value);
  let nivel = "";
  let cor = "";

  if (isNaN(xp) || xp < 0) {
    alert("Por favor, digite um XP válido!");
    return;
  }

  if (xp < 1000) {
    nivel = "Ferro";
    cor = "#505050";
  } else if (xp <= 2000) {
    nivel = "Bronze";
    cor = "#CD7F32";
  } else if (xp <= 5000) {
    nivel = "Prata";
    cor = "#C0C0C0";
  } else if (xp <= 7000) {
    nivel = "Ouro";
    cor = "#FFD700";
  } else if (xp <= 8000) {
    nivel = "Platina";
    cor = "#AAE8EE";
  } else if (xp <= 9000) {
    nivel = "Ascendente";
    cor = "#00FF80";
  } else if (xp <= 10000) {
    nivel = "Imortal";
    cor = "#DC143C";
  } else {
    nivel = "Radiante";
    cor = "#f3ff4c";
  }

  let imgSrc = `assets/${imagensHerois[heroiSelecionado]}`;

  document.getElementById("mensagemFinal").innerHTML =
    `O Personagem de Nome <strong>${heroiSelecionado}</strong> Está no Nível <strong style="color:${cor}">${nivel}</strong>`;

  document.getElementById("cardFinal").innerHTML = `
    <div style="border: 5px solid ${cor}; padding: 10px; border-radius: 12px; display: inline-block; background: #fff;">
      <img src="${imgSrc}" alt="${heroiSelecionado}" style="width: 200px; height: auto;">
      <p><strong>${heroiSelecionado}</strong></p>
    </div>
    <br><br>
    <button onclick="reiniciar()">Escolher outro herói</button>
  `;

  mostrarTela("resultado");
}

function reiniciar() {
  document.getElementById("xpInput").value = "";
  heroiSelecionado = "";
  mostrarTela("selecaoHeroi");
}
