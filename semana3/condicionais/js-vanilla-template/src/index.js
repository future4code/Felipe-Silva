// 4-
let idade = prompt(Number("Idade do cidadão: "));

if (idade >= 18) {
  console.log("Passível de habilitação");
} else {
  console.log("Habilitação vetada");
}

// 5-
let turno = prompt(
  "Turno? (digite M para (matutino), V (Vespertino) ou N (Noturno):"
);
if (turno == "M" || turno == "m") {
  console.log("Bom Dia!");
} else if (turno == "V" || turno == "v") {
  console.log("Boa Tarde!");
} else if (turno == "N" || turno == "n") {
  console.log("Boa Noite!");
} else {
  console.log("ERROR!!");
}

//6 -
let turno = prompt(
  "Turno? (digite M para (matutino), V (Vespertino) ou N (Noturno):"
);

switch (turno) {
  case "M":
    console.log("Bom Dia!");
    break;
  case "V":
    console.log("Boa Tarde!");
    break;
  case "N":
    console.log("Boa Noite!");
    break;
  default:
    console.log("ERROR!!");
    break;
}

//7 -
let movie = prompt(
  "Escolha o gênero: digite F p/ fantasia; T p/ terror; C p/ comédia; D p/ drama"
);
let price = prompt("Preço do ingresso?");
Number(price);

if (movie == "F" || (movie == "f" && price < 15)) {
  console.log("Bom filme!");
} else {
  console.log("Escolha outro filme:(");
}
//DESAFIOS
// 1
let snack = prompt("Qual snack você deseja?");
console.log("Bom filme!", `...com ${snack}`);

//2
let alyas = prompt("Nome completo:");

let game = prompt("Tipo de jogo (IN para internacional ou DO para doméstico):");
game.toUpperCase();

let price;
let unity;

let stage = prompt(
  "Etapa do jogo (SF = semifinal; DT = decisão 3º lugar; FI = final):"
);
stage.toUpperCase();
let cat = prompt("Categoria(1 - 2 - 3 - 4):");
let qtt = prompt("Quantidade de ingressos:");
Number(qtt);

if (game == "DO") {
  switch (stage) {
    case "SF":
      if (cat == 1) {
        unity = 1320;
        price = unity * qtt;
      } else if (cat == 2) {
        unity = 880;
        price = unity * qtt;
      } else if (cat == 3) {
        unity = 550;
        price = unity * qtt;
      } else {
        unity = 220;
        price = unity * qtt;
      }
      break;
    case "DT":
      if (cat == 1) {
        unity = 660;
        price = unity * qtt;
      } else if (cat == 2) {
        unity = 440;
        price = unity * qtt;
      } else if (cat == 3) {
        unity = 330;
        price = unity * qtt;
      } else {
        unity = 170;
        price = unity * qtt;
      }
      break;
    case "FI":
      if (cat == 1) {
        unity = 1980;
        price = unity * qtt;
      } else if (cat == 2) {
        unity = 1320;
        price = unity * qtt;
      } else if (cat == 3) {
        unity = 880;
        price = unity * qtt;
      } else {
        unity = 330;
        price = unity * qtt;
      }
      break;
  }
  console.log("Dados da Compra");
  console.log(`Nome: ${alyas}`);
  console.log(`Tipo de jogo: ${game}`);
  console.log(`Etapa: ${stage}`);
  console.log(`Categoria: ${cat}`);
  console.log(`Quantidade: ${qtt}`);
  console.log(`Valor unitário: ${unity}`);
  console.log(`Preço da compra: ${price}`);
} else if (game == "IN") {
  switch (stage) {
    case "SF":
      if (cat == 1) {
        unity = 1320 * 4.1;
        price = unity * qtt;
      } else if (cat == 2) {
        unity = 880 * 4.1;
        price = unity * qtt;
      } else if (cat == 3) {
        unity = 550 * 4.1;
        price = unity * qtt;
      } else {
        unity = 220 * 4.1;
        price = unity * qtt;
      }
      break;
    case "DT":
      if (cat == 1) {
        unity = 660 * 4.1;
        price = unity * qtt;
      } else if (cat == 2) {
        unity = 440 * 4.1;
        price = unity * qtt;
      } else if (cat == 3) {
        unity = 330 * 4.1;
        price = unity * qtt;
      } else {
        unity = 170 * 4.1;
        price = unity * qtt;
      }
      break;
    case "FI":
      if (cat == 1) {
        unity = 1980 * 4.1;
        price = unity * qtt;
      } else if (cat == 2) {
        unity = 1320 * 4.1;
        price = unity * qtt;
      } else if (cat == 3) {
        unity = 880 * 4.1;
        price = unity * qtt;
      } else {
        unity = 330 * 4.1;
        price = unity * qtt;
      }
      break;
  }
  console.log("Dados da Compra");
  console.log(`Nome: ${alyas}`);
  console.log(`Tipo de jogo: ${game}`);
  console.log(`Etapa: ${stage}`);
  console.log(`Categoria: ${cat}`);
  console.log(`Quantidade: ${qtt}`);
  console.log(`Valor unitário: ${unity}`);
  console.log(`Preço da compra: ${price}`);
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> master

//aula 13 (sexta, 23/04)

/* 1 - o codigo esta incrementando o valor da variavel. A cada 'loop' ele acrescenta o valor
atual de 'i' a 'valor', terminando quando a variavel for igual a 10. A cada 'loop' teremos o
par (0,0 - valor 0), (0,1 - valor 1), (1,2 - valor 3) - (3,3 - valor 6), (6,4 - valor 10).

2 - a) será impresso '19', '21', '23', '25', '27', '30'. b)Sim. Basta atribuir um valor inicial
à variavel numero, menor que o menor valor do array, e ir incrementando e substituindo a variavel
ate ela atingir o maior valor do array, 30. 

desafio 1 - O programa recebe a quantidade de linhas pedida pelo usuario e,
enquanto a variavel 'quantidadeAtual' for menor que o input, cria espaços vazios
que serão printados posteriormente. No segundo loop, 'for', a variavel 'asteriscos' é 
incrementada tendo como parâmetro de parada o valor final de 'quantidade atual' + 1, 
acrescentando '0's aos espaços vazios das linhas. Também poderia servir de parametro 
a expressão 'asteriscos < quantidadeTotal'.  
*/

//3a)
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];
for (let num = 0; num < array.length; num += 1) {
  console.log(array[num]);
}
//b)
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];
for (let num = 0; num < array.length; num += 1) {
  let newArray = array[num] / 10;
  console.log(newArray);
}
//c)
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];
let parArray = [];
for (let num = 0; num < array.length; num += 1) {
  if (array[num] % 2 == 0) {
    parArray = array[num];
  }
  console.log(parArray);
}
//d)
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];
for (let num = 0; num < array.length; num += 1) {
  console.log(`O elemento do index ${num} é: ${array[num]}`);
}
//e)
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];
let maxValue = 0;
let minValue = 1000;
for (let num = 0; num < array.length; num += 1) {
  if (maxValue < array[num]) {
    maxValue = array[num];
  }
  if (minValue > array[num]) {
    minValue = array[num];
  }
}
console.log(`O maior número é ${maxValue} e o menor é ${minValue}.`);

// desafios

//1 -
const key = Number(prompt('Digite o nº secreto:'));
let count = 0;
let x = [];

alert("Vamos jogar!");
let kicks = Number(prompt("Escolha um número de 0 a 30:"));
alert(`O número chutado foi: ${kicks}`);

while (kicks != key) {
  if (kicks > key) {
    alert("Errou! O nº escolhido é maior");
    count++;
  } else {
    alert("Errou! O nº escolhido é menor");
    count++;
  }
  x = kicks;
  kicks = Number(prompt("Escolha um número:"));
  alert(`O número chutado foi: ${kicks}`);
}

if (kicks == key) {
  alert("Acertou!");
  count++;
}

alert(`O número de tentativas foi: ${count}`);

//2 -
const key = Math.floor((Math.random() * 100) + 1);
let count = 0;
let x = [];

alert("Vamos jogar!");
let kicks = Number(prompt("Escolha um número de 1 a 100:"));
alert(`O número chutado foi: ${kicks}`);

while (kicks != key) {
  if (kicks > key) {
    alert("Errou! O nº escolhido é maior");
    count++;
  } else {
    alert("Errou! O nº escolhido é menor");
    count++;
  }
  x = kicks;
  kicks = Number(prompt("Escolha um número:"));
  alert(`O número chutado foi: ${kicks}`);
}

if (kicks == key) {
  alert("Acertou!");
  count++;
}

alert(`O número de tentativas foi: ${count}`);
<<<<<<< HEAD
=======
=======
>>>>>>> master
>>>>>>> master
