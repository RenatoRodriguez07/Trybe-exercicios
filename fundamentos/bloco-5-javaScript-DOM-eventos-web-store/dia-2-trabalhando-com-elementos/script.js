// 1. Crie um irmão para elementoOndeVoceEsta.
const pai = document.getElementById('pai');
const irmao = document.createElement('section');
irmao.id = 'irmaoOndeVoceEsta';
pai.appendChild(irmao);

// 2. Crie um filho para elementoOndeVoceEsta.

const ondeVoceEsta = document.getElementById('elementoOndeVoceEsta');
const filhoOndeVoceEsta = document.createElement('div');
filhoOndeVoceEsta.id = 'filhoOndeVoceEsta';
ondeVoceEsta.appendChild(filhoOndeVoceEsta);

// 3. Crie um filho para primeiroFilhoDoFilho.

const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
const filhoPrimeiro = document.createElement('div');
filhoPrimeiro.id = 'filhoPrimeiroFilhoDoFilho';
primeiroFilhoDoFilho.appendChild(filhoPrimeiro);

// 4. A partir desse filho criado, acesse terceiroFilho.

const terceiroFilho = filhoPrimeiro.parentElement.parentElement.nextElementSibling;
console.log(terceiroFilho);