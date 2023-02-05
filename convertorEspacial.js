function converterLuz() {
  var cotacaoAnosLuz = 9.461e15;
  var nome = document.getElementById("nome").value;
  var anosLuz = document.getElementById("valor").value;
  var resultado = anosLuz * cotacaoAnosLuz;
  var load = document.getElementById("load");
  load.innerHTML = `<h3>Olá ${nome}!!<br> O resultado de Anos-Luz para Quilômetros: ${resultado}</h3>`;
}
