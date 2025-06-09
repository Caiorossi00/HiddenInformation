import cenas from "./cenas.js";

const mostrarCena = (id) => {
  const cena = cenas[id];
  const textoDiv = document.getElementById("texto");
  const opcoesDiv = document.getElementById("opcoes");
  const container = document.querySelector(".container");
  const musicaPosto = document.getElementById("musica-posto");

  if (id === "FalaComFrentista") {
    container.style.backgroundImage = "url('bg2.jpeg')";
    musicaPosto.play();
  } else {
    container.style.backgroundImage = "";
    musicaPosto.pause();
    musicaPosto.currentTime = 0;
  }

  textoDiv.textContent = cena.texto;
  opcoesDiv.innerHTML = "";

  if (cena.opcoes && cena.opcoes.length > 0) {
    cena.opcoes.forEach((op) => {
      const btn = document.createElement("button");
      btn.textContent = op.texto;
      btn.onclick = () => mostrarCena(op.proxima);
      opcoesDiv.appendChild(btn);
    });
  } else if (cena.proxima) {
    const btn = document.createElement("button");
    btn.textContent = "Continuar";
    btn.onclick = () => mostrarCena(cena.proxima);
    opcoesDiv.appendChild(btn);
  }

  // Botão reiniciar jogo
  const btnReiniciar = document.createElement("button");
  btnReiniciar.textContent = "Reiniciar jogo";
  btnReiniciar.style.marginTop = "20px";
  btnReiniciar.onclick = () => {
    localStorage.removeItem("progressoCena");
    mostrarCena("A_Posto");
  };
  opcoesDiv.appendChild(btnReiniciar);

  localStorage.setItem("progressoCena", id);
};

const cenaSalva = localStorage.getItem("progressoCena");
if (cenaSalva && cenas[cenaSalva]) {
  mostrarCena(cenaSalva);
} else {
  mostrarCena("A_Posto");
}
