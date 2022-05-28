// let fruits = [3, 4, 10, 1, 12];
// let soma = 0;

// for (let i=0; i < fruits.length; i+=1){
//     soma += fruits[i];
// }
// if (soma > 15){
//     console.log(soma);
// }
// else {
//     console.log('Valor menor que 16');
// }

// EXERCICIOS BLOCO 4.3

// 1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:

// let fatorial = 1;

// for (let i=10; i>0; i-=1){
//     fatorial *= i;
// }
// console.log(fatorial);

// 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

// var esrever = require('esrever');
// let word = 'Renato';
// let reverseWord = esrever.reverse(word);
// console.log(reverseWord);


// GABARITO

// let word = 'tryber';
// let reverseWord = '';

// for (let index = 0; index < word.length; index += 1) {
//   reverseWord += word[word.length - 1 - index];
// }

// console.log(reverseWord);

// let word = 'tryber';
// let reverseWord = '';

// reverseWord = word.split('').reverse().join('');

// console.log(reverseWord); (NÃO É UMA BOA PRATICA).

// 3- Considere o array de strings abaixo:
// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

// let array = ['java', 'javascript', 'python', 'html', 'css'];

// let bigWord = array[0];
// let smallWord = array[0];

// for (let i=0; i<array.length; i+=1){
    
//     if (array[i].length > bigWord.length){
//         bigWord = array[i];
//     }
// }

// for (let i=0; i<array.length; i+=1){
//     if (array[i].length < smallWord.length){
//         smallWord = array[i];
//     }
// }
// console.log(bigWord);
// console.log(smallWord);

// 4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

// let biggestPrimeNumber = 0;

// for (let currentNumber = 0; currentNumber <= 50; currentNumber += 1) {
//   let isPrime = true;
//   for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
//     if (currentNumber % currentDivisor === 0) {
//       isPrime = false;
//     }
//   }
//   if (isPrime) {
//     biggestPrimeNumber = currentNumber;
//   }
// }

// console.log(biggestPrimeNumber);