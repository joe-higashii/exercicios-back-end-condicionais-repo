const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 3000000;

if (aposentada || portadoraDeDoenca) {
    console.log("isenta");
} else if (totalDeRendimentos < 2851970) {
    console.log("vaza leão! já está difícil sem você");
} else {
    console.log("pega leão");
}