let numero1 = document.querySelector("#numero1");
let numero2 = document.querySelector("#numero2");
let numero3 = document.querySelector("#numero3");
let numero4 = document.querySelector("#numero4");

let botao = document.querySelector("#botao");

function encontrarMenorNumero() {
  let nu1 = Number(numero1.value);
  let nu2 = Number(numero2.value);
  let nu3 = Number(numero3.value);
  let nu4 = Number(numero4.value);

  let menor = nu1;

  if (nu2 < menor) {
    menor = nu2;
  }
  if (nu3 < menor) {
    menor = nu3;
  }
  if (nu4 < menor) {
    menor = nu4;
  }

  return menor;
}

botao.onclick = function() {
    let menorNumero = encontrarMenorNumero();
    alert("O menor número é: " + menorNumero);
  };


