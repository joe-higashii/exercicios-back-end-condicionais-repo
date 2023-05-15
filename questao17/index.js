const valorDoProduto = 100000;
const quantidadeDoParcelamento = 10;
const valorPago = 300;
const valorParclaEmReais = (valorDoProduto / quantidadeDoParcelamento) / 100;
const parcelasPagas = valorPago / valorParclaEmReais;

console.log(parcelasPagas);
