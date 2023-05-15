const rendaMensalEmCentavos = 300000;

const mesesDecorridos = 12;

const totalJaPagoPeloAluno = 1000000;

if (mesesDecorridos > 60) {
    console.log("Você não deve nada pra Cubos");
} else if (totalJaPagoPeloAluno => 1800000) {
    console.log("Você já quitou todas as parcelas");
} else if (rendaMensalEmCentavos < 200000) {
    console.log("O valor da parcela desse mês é R$ 0. Nenhum valor é devido pois a renda do estudante é inferior ao mínimo de R$ 2.000,00")
} else {
    const valorParcela = (rendaMensalEmCentavos / 100) * 18 / 100;
    console.log(`O valor da parcela desse mês é R$ ${valorParcela}`);
}