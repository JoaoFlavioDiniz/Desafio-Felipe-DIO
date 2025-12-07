let nome = "Flavio"
let experiencia = 20000

if (experiencia <= 1000){
    console.log("ferro");
} else if (experiencia >= 1001 && experiencia <= 2000){
    console.log("Bronze");

}  else if (experiencia >= 2001 && experiencia <= 5000){
    console.log("Prata");

}  else if (experiencia >= 5001 && experiencia <= 7000){
    console.log("Ouro");

}  else if (experiencia >= 7001 && experiencia <= 8000){
    console.log("Platina");

}  else if (experiencia >= 8001 && experiencia <= 9000){
    console.log("Ascendente");

} else if (experiencia >= 9001 && experiencia <= 10.000){
    console.log("Imortal");    
}else  {
    console.log("Radiante")
}

console.log("O heroi de nome: " + nome + " está no nivel: " + experiencia)
  

