// 1 - Crie um objeto player contendo as variáveis listadas abaixo.
// let player = {
//   name: 'Marta',
//   lastName: 'Silva',
//   age: 34,
//   medals: { golden: 2, silver: 3 },
// };

// 2 - Acesse as chaves name, lastName e age e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".

// console.log('A jogadora ' + player.name + ' ' + player['lastName'] +' tem ' + player.age + ' anos.');

// 3 - Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.

// player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];

// 4 - Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".

// console.log('A jogadora ' + player.name + ' ' + player['lastName'] +' foi eleita a melhor do mundo por ' + player.bestInTheWorld.length + ' vezes.');

// 5 - Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".

// console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata.')

// FOR IN

// let cars = ['Saab', 'Volvo', 'BMW'];

// for (let index in cars) {
//   console.log(cars[index]);
// }

// let car = {
//   type: 'Fiat',
//   model: '500',
//   color: 'white',
// };

// for (let index in car) {
//   console.log(index, car[index]);
// }

// 1 - Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.

// let names = {
//   person1: 'João',
//   person2: 'Maria',
//   person3: 'Jorge',
// };

// for (let key in names){
//   console.log('Olá ' + names[key]);
// };

// 2 - Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.

// let car = {
//   model: 'A3 Sedan',
//   manufacturer: 'Audi',
//   year: 2020
// };

// for (let key in car){
//   console.log(key, car[key]);
// };

// 1- Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:

// function sum (a, b){
//   return a + b;
// }
// console.log( sum(10, 20));

// function subtraction (a, b){
//   return a - b;
// }
// console.log(subtraction(20, 10)); 

// function multiplication (a, b){
//   return a * b;
// }
// console.log(multiplication(10, 11));

// function division(a, b){
//   return a / b;
// }
// console.log(division(10, 2));

// function module (a, b){
//   return a % b;
// }
// console.log(module(20, 5));

// 2- Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

// const numberOne = 20;
// const numberTwo = 30;

// function number(numberOne, numberTwo){
  
//   if (numberOne > numberTwo){
//     return numberOne + ' é maior que ' + numberTwo;
//   }
//   else{
//     return numberTwo + ' é maior que ' + numberOne;
//   }
// }
// console.log(number(numberOne, numberTwo));

// 3- Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

// const numOne = 30;
// const numTwo = 15;
// const numThree = 20;

// function bigThree (){
//   if (numOne > numTwo && numOne > numThree){
//     return numOne + ' é o maior numero';
//   }else if (numTwo > numOne && numTwo > numThree){
//     return numTwo + ' é o maior numero';
//   }else{
//     return numThree + ' é o maior numero';
//   }
// }
// console.log(bigThree(numOne, numTwo, numThree));

// 4- Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

// const number = 0;

// function verification(){
//   if (number > 0){
//     return 'Positivo';
//   }else if(number === 0){
//     return 'zero';
//   }else{
//     return 'Negativo';
//   }
// }
// console.log(verification(number));

// 5- Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

// const angleOne = 45;
// const angleTwo = 90;
// const angleThree = 45;

// function angleTriangle(){
  
//   let sumAngleTriangle = angleOne + angleTwo + angleThree;
//   let allAngleArePositives = angleOne > 0 && angleTwo > 0 && angleThree > 0;
  
//   if(allAngleArePositives){
//    if(sumAngleTriangle === 180){
//      return true;
//    }else{
//      return false;
//    }
//   }else{
//     return 'Erro: ângulo invalido';
//   }
// }
// console.log(angleTriangle(angleOne, angleTwo, angleThree));

// 6- Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz. 
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

// const queen = ['diagonais', 'vertical', 'horizontal'];
// const king = ['diagonal', 'vertical', 'horizontal'];
// const bishop = 'diagonais';
// const horse = 'formato de L';
// const tower = ['vertical', 'horizontal'];
// const pawn = ['vertical', 'diagonal quando ataca'];

// function chess(){

// }

// PART 1 - OBJETOS FOR/IN

// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };

// 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:

// console.log('Bem-vinda,', info.personagem);

// 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:

// info['recorrente'] = 'Sim';

// console.log(info);

// 3 - Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:

// for (let key in info){
//   console.log(key);
// }

// 4 - Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:

// for (let key in info){
//   console.log(info[key]);
// }

// 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:

// let info2 = {
//   personagem: "Tio Patinhas",
//   origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
//   nota: "O último MacPatinhas",
//   recorrente: "Sim",
// };
// console.log(info.personagem, 'e', info2.personagem);
// console.log(info.origem, 'e', info2.origem);
// console.log(info.nota, 'e', info2.nota);
// if (info.recorrente === info2.recorrente){
//   console.log('Ambos recorrentes');
// }

// GABARITO

// for (let properties in info) {
//   if (
//     properties === 'recorrente' &&
//     info[properties] === 'Sim' &&
//     info2[properties] === 'Sim'
//   ) {
//     console.log('Ambos recorrentes');
//   } else {
//     console.log(info[properties] + ' e ' + info2[properties]);
//   }
// }

// let leitor = {
//   nome: 'Julia',
//   sobrenome: 'Pessoa',
//   idade: 21,
//   livrosFavoritos: [
//     {
//       titulo: 'O Pior Dia de Todos',
//       autor: 'Daniela Kopsch',
//       editora: 'Tordesilhas',
//     },
//   ],
// };

//  6 - Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".

// console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos[0].titulo);

// 7 - Adicione um novo livro favorito na chave livrosFavoritos, que é um array. Atribua a esta chave um objeto contendo as seguintes informações:

// leitor.livrosFavoritos.push(
//   {
//     titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//     autor: 'JK Rowling',
//     editora: 'Rocco',
//   },
// );
// console.log(leitor);

//  8 - Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos".

// console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos')

// PART 2 FUNÇÕES

// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
// Exemplo de palíndromo: arara.
// verificaPalindrome('arara');
// Retorno esperado: true
// verificaPalindrome('desenvolvimento');
// Retorno esperado: false

// const animal = 'subi no onibus';

// function palindromo(){
//   const reverse = animal.split('').reverse().join('');
//   if (reverse === animal){
//     return 'É palindromo';
//   }
//   else{
//     return 'Não é palindromo';
//   }
// }
// console.log(palindromo(animal));

// function verificaPalindrome(word){
//   for(index in word){
//     if(word[index] != word[(word.length - 1) - index]){
//       return false;
//     }
//   }
//   return true;
// }

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

// let arrayNumber = [2, 3, 6, 7, 10, 1];

// function bigNumber(){
//   let compare = 0;
//   for (let index in arrayNumber){
//     if (arrayNumber[compare] < arrayNumber[index]){
//       compare = index;
//     }
//   }
//   return compare;
// }  
// console.log(bigNumber(arrayNumber));

// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

// let arrayNumber = [2, 4, 6, 7, 10, 0, -3];

// function minorNumber(){
//   let compare = 0;
//   for (let index in arrayNumber){
//     if (arrayNumber[compare] > arrayNumber[index]){
//       compare = index;
//     }
//   }
//   return compare;
// }
// console.log(minorNumber(arrayNumber));

// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

// let arrayName = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

// function bigName(){
//   let bigWord = arrayName[0];
//   for (let index in arrayName){
//     if(arrayName.length < arrayName[index].length){
//       bigWord = arrayName[index];
//     }
//   }
//   return bigWord;
// }
// console.log(bigName(arrayName));

// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

// function arrayNumber(numbers){
//   let repeat = 0;
//   for (let index in numbers){
//     if ()
//   }
// }



