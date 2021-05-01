//Exercício 1

function inverteArray(array) {
   const arrayReverse = [];
   for(let i = array.length -1; i>=0; i--) {
      arrayReverse.push(array[i]);
   }     
      return arrayReverse;
}
console.log(inverteArray([0, 12, 14, 16]));

//Exercício 2

function retornaNumerosParesElevadosADois (array) {
   const doubleArray = [];
   for (i in array) {
      if (array[i] % 2 ===0){
         array[i] **= 2;
         doubleArray.push(array[i]);
      }
   }
   return doubleArray;
}
console.log(retornaNumerosParesElevadosADois([1,2,3,4,5,6]));
//Exercício 3

function retornaNumerosPares (array) {
   const evenArray = [];
   for (i in array){
      if(array[i] % 2 ===0){
         evenArray.push(array[i]);
      }
   }
   return evenArray;
}
console.log(retornaNumerosPares([8, 18, 11, 33, 16]));

//Exercício 4

function retornaMaiorNumero(array) {
   let majorArr = array[0];
   for (i in array) {
      if (array[i] > majorArr){
         majorArr = array[i];
      }
   }
   return majorArr;
}
console.log(retornaMaiorNumero([-100, -10, -14, -8]));

//Exercício 5

function retornaQuantidadeElementos (array) {
   return array.length;
  /* let arrayIndex = 0;
   for (i of array){
      arrayIndex += 1;
   }
   return arrayIndex;  */ 
}
console.log(retornaQuantidadeElementos([0, 12, 2, 3]));

//Exercício 6

function retornaExpressoesBooleanas() {
   const arrayBoolean = [false, false, true, true, true];
   return arrayBoolean;
}
console.log(retornaExpressoesBooleanas());

//Exercício 7

function retornaNNumerosPares(n) {
   const arrayNum = [];
   for (nums = 0; arrayNum.length < n; nums++){
      if(nums % 2 ===0){
         arrayNum.push(nums);
      }
   }
   return arrayNum;
}
console.log(retornaNNumerosPares(22));

// Exercício 8

function checaTriangulo(a, b, c) {
   let triangle;
   if ((a === b) && (a===c)){
      triangle = 'equilátero';
   } else if (((a===b) && (a!==c)) || ((a!==b) && (b===c)) || ((a===c) && (a!==b))){
      triangle = 'isósceles';
   } else {
      triangle = 'escaleno';
   }
   return triangle;
  }
  console.log(checaTriangulo(12,14,22));
  

// Exercício 9

function comparaDoisNumeros(num1, num2) {
   let maiorNumero;
   let maiorDivisivelporMenor;
   let menorNumero;

   if(num1 > num2) {
      maiorNumero = num1;
      menorNumero = num2;
   } else if(num1 < num2) {
      maiorNumero = num2;
      menorNumero = num1;
   } else {
      maiorNumero = num1;
      menorNumero = num1;
   }

   maiorDivisivelporMenor = maiorNumero % menorNumero === 0;
   const diferenca = maiorNumero - menorNumero;

   return {
      maiorNumero: maiorNumero,
      maiorDivisivelporMenor: maiorDivisivelporMenor,
      diferenca: diferenca
    }
  }
  console.log(comparaDoisNumeros(0,0));

// Exercício 10 (não entendi)

function segundoMaiorEMenor(array) {
   let menor = Infinity;
   let maior = -Infinity;
   let segundoMenor = Infinity;
   let segundoMaior = -Infinity;
   let indiceMenor = 0;
   let indiceMaior = 0;
   let novoArray = [];

   for (let i of array) {
      if(i < menor){
         menor = i;
         indiceMenor = array[menor];
      }
      if (i > maior) {
         maior = i;
         indiceMaior = array[maior];
      }
   }
   array.splice(indiceMaior,1)
   array.splice(indiceMenor, 1)

   for(let i of array){
      if(i < segundoMenor){
         segundoMenor = i;
      }
      if(i > segundoMaior){
         segundoMaior = i;
      }
   }
   novoArray.push(segundoMaior);
   novoArray.push(segundoMenor);
   return novoArray;
}
console.log(segundoMaiorEMenor([4, 66, -6626, 0, 133, 33, 36, -669]));

//Exercício 11

function ordenaArray(array) {
   // implemente sua lógica aqui
}

// Exercício 12

function filmeFavorito() {
   // implemente sua lógica aqui
}

// Exercício 13

function imprimeChamada() {
   // implemente sua lógica aqui
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
   // implemente sua lógica aqui
}

// Exercício 15

function anonimizaPessoa(pessoa) {
   // implemente sua lógica aqui
}

// Exercício 16

const arrayDePessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 } 
]

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   // implemente sua lógica aqui
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
  // implemente sua lógica aqui
}

// Exercício 17, letra C

function verificaParidade(array) {
   // implemente sua lógica aqui
}

// Exercício 18

const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8},
  { nome: "João", idade: 20, altura: 1.3},
  { nome: "Pedro", idade: 15, altura: 1.9},
  { nome: "Luciano", idade: 22, altura: 1.8},
  { nome: "Artur", idade: 10, altura: 1.2},
  { nome: "Soter", idade: 70, altura: 1.9}
]

//Exercício 18, letra A

function retornaPessoasAutorizadas() {
   // implemente sua lógica aqui
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
   // implemente sua lógica aqui
}

//Exercício 19

const consultasNome = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia",  dataDaConsulta: "04/05/2021" }
 ]
 
 //Exercício 19, letra A
 
 function ordenaPorNome() {
  
 }
 
 // Exercício 19, letra B
 
 const consultasData = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia",  dataDaConsulta: "04/05/2021" }
 ]
 
 function ordenaPorData() {
 
 }

//Exercício 20

const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
  // implemente sua lógica aqui
}