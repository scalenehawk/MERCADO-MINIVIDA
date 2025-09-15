function atualizarDataHora() {
  const agora = new Date();
  document.getElementById("dataHora").innerText =
    "Acesso em: " + agora.toLocaleString();
}
setInterval(atualizarDataHora, 1000);
