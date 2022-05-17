const bebidaPrincipal =  'leite';
const bebidaAlternativa = 'suco de laranja';

if (bebidaPrincipal === 'cafezinho' || bebidaAlternativa === 'suco de laranja') {
  console.log("Obrigado por me atender :D")
} else {
  console.log("Ei, eu não pedi isso!");
}

let weekDay = "sunday";

if (weekDay === "monday" || weekDay === "tuesday" || weekDay === "wednesday" || weekDay === "thursday" || weekDay === "friday"){
  console.log("Oba, mais um dia de aprendizado na Trybe >:D");
}
else if (weekDay === "satuday" || weekDay === "sunday"){
  console.log("FINALMENTE, descanso merecido UwU");
}

console.log(!(2 + 2) === 4);

const squirtle = "melhor pokemon inicial";

console.log(!squirtle); // false

console.log(!42); // false

console.log(!0); // true
// O número 0 tem o valor "falsy" no javascript. Logo, seu oposto é true.

console.log(!null); // true

console.log(!undefined); // true