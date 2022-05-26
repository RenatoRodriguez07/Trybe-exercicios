// Exercício 1
// Obtenha o valor "Serviços" do array menu:

// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// let menuServices = menu [1];

// console.log(menuServices);

// Exercício 2
// Procure o índice do valor "Portfólio" do array menu:

// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// let indexOfPortfolio = menu.indexOf('Portfólio');

// console.log(indexOfPortfolio);

// Exercício 3
// Adicione o valor "Contato" no final do array menu:

// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// menu.push('Contato');
// console.log(menu);

// Exercicio 4
// Adiciona um valor no inicio do array menu:

// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// menu.unshift('Work')

// console.log(menu);

// Exercicio 5
// Remova o valor da ultima posição do menu: 

// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// menu.pop();
// console.log(menu);

// Exercicio 5
// Remove o valor da primeira posição do menu:

// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// menu.shift();
// console.log(menu);

// EXERCICIOS FOR

// Exercício 1
// Utilize o for para imprimir os elementos da lista groceryList com o console.log():

// let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

// for (let i = 0; i < groceryList.length; i += 1){
//     console.log(groceryList[i]);
//     console.log('');
// }

// FOR OF

// Exercício 1
// Utilize o for/of para imprimir os elementos da lista names com o console.log():

// let names = ['João', 'Maria', 'Antônio', 'Margarida'];

// for (let listaNames of names){
//     console.log(listaNames);
// }

// Exercicio 2
// Utilize o for/of para imprimir os elementos da variavel.

// let name = 'Jéssica';

// for (let Letter of name){
//     console.log(Letter);
// }
// console.log(name);

// WHILE

// function dice () { 
//     return Math.ceil(Math.random() * 6);
// }
// let d1 = dice();
// let d2 = dice();
// while (d1 === d2) {
//     d2 = dice();
// }
// console.log(dice());


// let counter = 0;

// while(counter !== 5) {
//   counter += 1;
// }
// console.log(counter);

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1- Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

// for (let i =0; i < numbers.length; i += 1){
//     console.log(numbers[i]);
// }

// 2- Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
// let resultado = 0;
// for (let i = 0; i < numbers.length; i += 1){
//     resultado += numbers[i];
// }
// console.log(resultado);

// 3- Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

// let media = resultado/numbers.length;
// console.log(media);

// * A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

// 4- Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

// if (media > 20){
//     console.log('valor maior que 20');
// }
// else {
//     console.log('valor menor ou igual a 20');
// }

// 🚀 5- Utilizando for, descubra qual o maior valor contido no array e imprima-o;

// let higherNumber = numbers[0];
// let counter = 0;

// for (let i = 0; i < numbers.length; i += 1){
//     if (numbers[i] > higherNumber){
//         higherNumber = numbers[i];
//     }
// }

// console.log(higherNumber);

// 6- Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

// let impar = 0;

// for (let i = 0; i < numbers.length; i += 1){
//     if (numbers[i] % 2 !== 0){
//         impar += 1;
//     }
// }
// if (impar === 0){
//     console.log('nenhum valor impar encontrado');
// }
// else{
//     console.log(impar);
// }

// 7- Utilizando for, descubra qual o menor valor contido no array e imprima-o;

// let smallesNumber = numbers[0];

// for (let i = 1; i < numbers.length; i += 1){
//     if (numbers[i] < smallesNumber){
//         smallesNumber = numbers[i];
//     }
// }
// console.log(smallesNumber);

// 8- Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

// let arrayNumber = [];

// for (var index = 1; index < 26; index += 1){
//     arrayNumber.push(index);
// }
// console.log(arrayNumber);

// 9- Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

// for (let i = 0; i < arrayNumber.length; i += 1){
//     console.log(arrayNumber[i]/2);
// }

// BONUS

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1- Ordene o array numbers em ordem crescente e imprima seus valores;

// 2- Ordene o array numbers em ordem decrescente e imprima seus valores;

//3- Agora crie um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push. O resultado deve ser o array abaixo:

// [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]