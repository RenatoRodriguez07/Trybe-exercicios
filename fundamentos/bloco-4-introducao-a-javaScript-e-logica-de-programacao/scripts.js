const student = 101;

if (student >= 80 && student <= 100){
    console.log("Parabéns, você foi aprovado");
} 
else if (student < 80 && student >= 60){
    console.log("Você está na nossa lista de espera");
}
else if (student < 60 && student >=0){
    console.log("Você foi reprovado");
}
else {
    console.log("Não se aplica");
}