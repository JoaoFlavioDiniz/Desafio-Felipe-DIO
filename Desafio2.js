let vitorias = 85;
let derrotas = 5;

calculadora(vitorias, derrotas);

function calculadora(vitorias, derrotas) {
    let somatorio = vitorias - derrotas;
    let nivel = "";

if (somatorio <= 10) {
    nivel = "ferro";
} else if (somatorio >= 11 && somatorio <= 20) {
    nivel = "Bronze";
} else if (somatorio >= 21 && somatorio <= 50) {
    nivel = "Prata";
} else if (somatorio >= 51 && somatorio <= 80) {
    nivel = "Ouro";
} else if (somatorio >= 81 && somatorio <= 90) {
    nivel = "Diamante";
} else if (somatorio <= 91 && somatorio >= 100) {
    nivel = "Lendario";
} else {
    nivel = "Imortal";
};

console.log("O heroi tem saldo de " + somatorio + " e esta no nivel " + nivel);

}