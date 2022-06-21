// 1 - Altere as variáveis para respeitarem o escopo em que foram declaradas.
// Modifique a estrutura da função para que ela seja uma arrow function;
// Modifique as variáveis para que respeitem o escopo onde estão declaradas;
// Modifique as concatenações para template literals.

// const testingScope = (escopo) => {
//     let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     if (escopo === true) {
//       ifScope = `${ifScope}, ' ótimo, fui utilizada no escopo !'`;
//       console.log(ifScope);
//     } else {
//       let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
//   }

//   testingScope(true);

// 2 - Crie uma função que retorne um array em ordem crescente.
// Crie uma função que faça com que o array oddsAndEvens fique na ordem crescente;
// Utilize o console.log e template literals para retornar a frase: 'Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!'.
// Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne a frase "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// const sortOddsAndEvens = () => {
//   oddsAndEvens[0] = 2;
//   oddsAndEvens[1] = 3;
//   oddsAndEvens[2] = 4;
//   oddsAndEvens[3] = 7;
//   oddsAndEvens[4] = 10;
//   oddsAndEvens[5] = 13;

//   return oddsAndEvens;
// };

// const sortArray = sortOddsAndEvens();

// console.log(`Os números ${sortArray} se encontram ordenados de forma crescente`); 

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// const sortArrayBonus = (Array) => {
//   const sortOddsAndEvens = Array.sort((a,b) => a - b);
//   return sortOddsAndEvens;
// }

// const sortedOddsAndEvens = sortArrayBonus(oddsAndEvens);
// console.log(`Os números ${sortedOddsAndEvens} se encontram ordenados de forma crescente`);

// console.log(`Os números ${oddsAndEvens.sort((a, b) => a - b)} se encontram ordenados de forma crescente`);

// PARTE 2

// 1 - Crie uma função que receba um número e retorne seu fatorial.

// const factorial = (number) => number > 1 ? number * factorial(number - 1) : 1;
// console.log(factorial(4));

// 2 - Crie uma função que receba uma frase e retorne a maior palavra.

// const longestWord = (text) => {
//   const wordArray = text.split(' ');
//   let maxLength = 0;
//   let result = '';
//   for (const word of wordArray){
//     if (word.length > maxLength){
//       maxLength = word.length;
//       result = word;
//     }
//   }
//   return result;
// };

// const longestWord = (text) => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];

// console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

// 3- Crie uma página com um contador de cliques
// Sua página deve conter:
// Um botão ao qual será associado um event listener;
// Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
// Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.

// 4 - Crie duas funções JavaScript com as seguintes especificações:
// Não se esqueça de usar template literals
// Função 1: Escreva uma função que substitua a letra 'x' em uma frase.
// A função deverá receber um nome por parâmetro;
// Declare dentro da função uma variável com o nome frase, do tipo const e com o valor igual a 'Tryber x aqui!';
// A função deverá retornar uma nova frase onde o x da frase 'Tryber x aqui!' seja substituído pelo nome passado por parâmetro.
// Exemplo:
// Parâmetro: 'Bebeto'
// Retorno: 'Tryber Bebeto aqui!'
// Função 2: Escreva uma função que irá receber o retorno da Função 1 por parâmetro e retornará uma nova string.
// A função deverá receber o retorno da Função 1 por parâmetro;
// Declare dentro da função uma variável com o nome skills, do tipo const;
// A variável skills deverá ser um array contendo três strings com tecnologias que você já aprendeu.
// Concatene o valor retornado da Função 1, a frase 'Minhas três principais habilidades são:' e o valor da variável skills.
// Exemplo de retorno:
// Tryber Bebeto aqui!
// Minhas três principais habilidades são:
// JavaScript
// HTML
// CSS

const changeWord = (nome) => {
  const frase = 'Tryber x aqui!';
  const fraseArray = frase.split(' ');
  for (let index = 0; index < fraseArray.length; index += 1){
    if (fraseArray[index] === 'x'){
      fraseArray[index] = nome;
    }
  }
  return fraseArray.join(' ');
}
// console.log(changeWord('Bebeto'));

const mySkills = (func) => {
  const skills = ['JavaScript', 'HTML', 'CSS'];
  let result = `${func} 
  Minhas três principais habilidades são:`;
  skills.forEach((skill) => {
    result = `${result} 
    - ${skill}`
  })
  return result;
}

console.log(mySkills(changeWord('Bebeto')));