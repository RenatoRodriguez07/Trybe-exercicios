
// const valorA = 60;
// const valorB = 15;
// const valorC = 30;

// 1.

// console.log(valorA + valorB);

// console.log(valorA - valorB);

// console.log(valorA * valorB);

// console.log(valorA / valorB);

// console.log(valorA % valorB);

// 2.

// if (valorA > valorB){
//     console.log("Valor A é maior que valor B");
// }
// else {
//     console.log ("Valor B é maior que valor A");
// }

// 3.

// if (valorA > valorB && valorA > valorC){
//     console.log("Valor A é maior que valor B e C");
// } else if (valorB > valorA && valorB > valorC){
//     console.log("Valor B é maior que valor A e C");
// }
// else {
//     console.log ("Valor C é maior que valor A e B");
// }

// 4.

// if (valorA > 0){
//     console.log("Positivo");
// } else if (valorA === 0){
//     console.log("Zero");
// }
// else{
//     console.log("Negativo");
// }

// 5.

// if (valorA + valorB + valorC === 180){
//     console.log("true");
// } else if (valorA + valorB + valorC >=0 && valorA + valorB + valorC < 180){
//     console.log("false");
// }
// else{
//     console.log("Erro");
// }

// 6.


// let lowercased = chessPieces.map(chessPieces => chessPieces.toLowerCase());



// let chessPieces = {
//   queen: ['Horizontal', 'Vertical', 'Diagonals'];
//   horse: 'em forma de L';
//   bishop: 'Diagonals';
//   tower: ['Horizontal', 'Vertical'];
// }

// switch (chessPieces) {
//   case chessPieces[queen];
//     console.log(lowercased);
// }

// 7.

// let note = -45;

// if(note >= 90 && note <= 100){
//    console.log('A');
// }
// else if(note >= 80 && note < 90){
//   console.log('B');
// }
// else if(note >= 70 && note < 80){
//   console.log('C');
// }
// else if(note >= 60 && note < 70){
//   console.log('D');
// }
// else if(note >= 50 && note < 60){
//   console.log('E');
// }
// else if(note >= 0 && note < 50){
//   console.log('F');
// }
// else{
//   console.log('Não se aplica');
// }

// 8.

// const num1 = 13;
// const num2 = 21;
// const num3 = 15;

// if(num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 ===0){
//   console.log('True');
// }
// else{
//   console.log('False');
// }

// 9.

// const num1 = 11;
// const num2 = 14;
// const num3 = 24;

// if(num1 % 2 !== 0 || num2 % 2 !== 0 || num3 % 2 !== 0){
//   console.log('True');
// }
// else{
//   console.log('False');
// }

// 10.

// const valorCusto = 100;
// const valorImposto = 0.2;
// const valorVenda = 200;
// let quantProduto = 1000;
// let lucro = (valorVenda - (valorCusto + (valorCusto * valorImposto))) * quantProduto;

// if(quantProduto >= 0){
//   console.log(lucro);
// }
// else{
//   console.log('Erro');
// }

// 11.

let salaryGross = 4000;
let aliquotaInss;
// let inss;
// let salaryBase = (salaryGross - aliquotaInss);
// let aliquotaIr;
let impostoRenda;
let salaryNet;

if(salaryGross <= 1556.94){
    aliquotaInss = salaryGross * 0.08;
    
  }
  else if(salaryGross >= 1556.95 && salaryGross <= 2594.92){
    aliquotaInss = salaryGross * 0.09;
    
  }
  else if (salaryGross >= 2594.93 && salaryGross <= 5189.82){
    aliquotaInss = salaryGross * 0.11;
    
  }
  else{
    aliquotaInss = 570.88;
   
}

// if()

let salaryBase = (salaryGross - aliquotaInss);
let aliquotaIr;

// console.log(aliquotaInss);
// console.log('salario base', salaryBase);

if (salaryBase <= 1903.98){
  aliquotaIr = salaryBase;
}
else if(salaryBase >= 1903.99 && salaryBase <= 2826.65){
  aliquotaIr = (salaryBase * 0.075) - 142.80;
}
else if(salaryBase >= 2826.66 && salaryBase <= 3751.05){
  aliquotaIr = (salaryBase * 0.15) - 354.80;
}
else if(salaryBase)


console.log(aliquotaIr);