// // 1.
// document.createElement('h1');
// let createH1 = document.createElement('h1');
// createH1.innerText('Exercicio 5.2 - JavaScript DOM');

// let container = document.getElementsByTagName('body');
// parent.createH1('h1');

const ondeVcEsta = document.querySelector('#elementoOndeVoceEsta');
const pai = ondeVcEsta.parentElement;
pai.style.color = 'blue';
const neto1 = ondeVcEsta.firstElementChild;
neto1 = 'Hello!';
const primeiroFilho = pai.firstElementChild;
const primeiroFilho2 = ondeVcEsta.previousElementSibling;
const textElement = ondeVcEsta.nextSibling;
const terceiroFilho = ondeVcEsta.nextElementSibling;
const terceiroFilho2 = pai.lastElementChild.previousElementSibling;