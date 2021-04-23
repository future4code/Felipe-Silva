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
