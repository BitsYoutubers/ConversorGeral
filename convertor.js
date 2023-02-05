function converterLuz() {
  var cotacaoAnosLuz = 9.461e15;
  var nome = document.getElementById("nome").value;
  var anosLuz = document.getElementById("valor").value;
  var resultado = anosLuz * cotacaoAnosLuz;
  var load = document.getElementById("load");
  load.innerHTML = `<h3>Olá ${nome}!!<br> O resultado de Anos-Luz para Quilômetros: ${resultado}</h3>`;
}

function converterDolar() {
  var cotacaoDolar = 5.15;
  var nome = document.getElementById("nome").value;
  var real = document.getElementById("valor").value;
  var resultado = real * cotacaoDolar;
  var load = document.getElementById("load");
  load.innerHTML = `<h3>Olá ${nome}!!<br> O resultado da conversão para Real é: ${resultado}</h3>`;
}

function converterBitCoin() {
  var cotacaoBitCoin = 120.28;
  var nome = document.getElementById("nome").value;
  var real = document.getElementById("valor").value;
  var resultado = real * cotacaoBitCoin;
  var load = document.getElementById("load");
  load.innerHTML = `<h3>Olá ${nome}!!<br> O resultado da conversão para Real é: ${resultado}</h3>`;
}
