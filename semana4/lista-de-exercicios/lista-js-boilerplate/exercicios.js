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
   if(a !== b && b !== c) {
      return'Escaleno'
     } else if(a === b && b === c) {
       return'Equilátero'
      } else {
        return'Isósceles'
      }
    }
   /* if ((a === b) && (a===c)){
      triangle = 'equilátero';
   } else if (((a===b) && (a!==c)) || ((a!==b) && (b===c)) || ((a===c) && (a!==b))){
      triangle = 'isósceles';
   } else {
      triangle = 'escaleno';
   }
   return triangle;
  } */

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

// Exercício 10 

function segundoMaiorEMenor(array) {
   let menor = Infinity;
   let maior = 0;
   let segundoMenor = Infinity;
   let segundoMaior = 0;
   let indiceMenor = 0;
   let indiceMaior = 0;
   let novoArray = [];

   //capturando os elementos maiores e menores
   for (let i of array) {
      //'i' captura o numero em si, não o index
      if(i < menor){
         menor = i;
         indiceMenor = array.indexOf(menor);
      }
      if (i > maior) {
         maior = i;
         indiceMaior = array.indexOf(maior);
      }
   }
   //retira o elemento de maior indice e menor
   array.splice(indiceMaior,1)
   array.splice(indiceMenor, 1)
   //--- 1º retirou os elm maior e menor.
   
   //aqui, imprime o maior e menor (antes, 2º maior e menor)
   // captura o 1º elm e compara com os seguintes, substituindo se atende condição
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
console.log(segundoMaiorEMenor([0, -2, 1, 3]));

//Exercício 11
function ordenaArray(array) {
   const len = array.length;
   for (j = 0; j < array.length; j++){
      for(i = 0; i < array.length; i++){
         if (array[i] > array[i+1]){
            //troca de posição
            let tmp = array[i];
            array[i] = array[i+1];
            array[i+1] = tmp;
         }
      }
   }
   return array;
}
console.log(ordenaArray([7,-77, 6, 5, 4, 13, 44, 66, 897, 22]));


// Exercício 12

function filmeFavorito() {
   const filme = {
      nome:'O Diabo Veste Prada',
      ano: 2006,
      diretor: 'David Frankel',
      atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
   }
   return filme;
}
console.log(`O filme favorito do astrodev é: ${filmeFavorito}`);

// Exercício 13

function imprimeChamada() {
   const filme = {
      nome:'O Diabo Veste Prada',
      ano: 2006,
      diretor: 'David Frankel',
      atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
   }
   /*let actors = '';
   //p/ pegar o ultimo nome, sem espaço no final
   for (i = 0; i < filme.atores.length; i++) {
      if (i === filme.atores.length - 1){
         actors += filme.atores[i]
         // pega os elementos em sequencia
      } else {
         actors += filme.atores[i] + ', '
      }
   }*/
   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor}, estrelado por ${filme.atores}.`
}
console.log(imprimeChamada());

// Exercício 14

function criaRetangulo(lado1, lado2) {
   const retangulo = {
      largura: lado1,
      altura: lado2,
      perimetro: 2 * (lado1 + lado2),
      area: lado1 * lado2
   }
   return retangulo;
}
console.log(criaRetangulo(8,6));

// Exercício 15

function anonimizaPessoa(pessoa) {
   const person = {
      nome: "Astrodev",
      idade: 25,
      email: "astrodev@future4.com.br",
      endereco: "Rua do Futuro, 4"
   }
   return {
      ...person,
      nome: 'Anônimo'
   } 
}
console.log(anonimizaPessoa());

// Exercício 16

const arrayDePessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 } 
]

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   //o param. ja chama cada item do objeto, com suas prop.
   const adultos = arrayDePessoas.filter((pessoa) => {
      return pessoa.idade >= 18
   })
   return adultos;
}
console.log(maioresDe18(arrayDePessoas));

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   const criancas = arrayDePessoas.filter((pessoa) => {
      return pessoa.idade < 18
   })
   return criancas;
}
console.log(maioresDe18(arrayDePessoas));

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   const doubleArr = array.map((i) => {
      return i*2;      
   })
   return doubleArr;
}
console.log(multiplicaArrayPor2(array));

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
   const doubleArr = array.map((i) => {
      return (i*2).toString();      
   })
   return doubleArr;
}
console.log(multiplicaArrayPor2(array));

// Exercício 17, letra C

function verificaParidade(array) {
   const checkArray = array.map((i) => {
      if (i % 2 === 0) {
         return `${i} é par`;
      } else {
         return `${i} é ímpar`;
      }
   })
   return checkArray;
}
console.log(verificaParidade(array));

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
   let pessoasAutorizadas = [];
   for(const pessoa of pessoas) {
     if(pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60) {
       pessoasAutorizadas.push(pessoa)
     }
   }
   return pessoasAutorizadas;
}
console.log(retornaPessoasAutorizadas());
  /* const peopleAllowed = pessoas.filter((pessoa) => {
      return (pessoa.idade > 14 && pessoa.idade < 60 && pessoa.altura >= 1.5);
   })
   return peopleAllowed;
}
console.log(retornaPessoasAutorizadas()); */



// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
   let pessoasNaoAutorizadas = [];
   for(const pessoa of pessoas) {
     if(pessoa.altura <= 1.5 || pessoa.idade < 14 || pessoa.idade > 60){
       pessoasNaoAutorizadas.push(pessoa);
     }
   }
   return pessoasNaoAutorizadas;
}
console.log(retornaPessoasNaoAutorizadas());
/* function retornaPessoasNaoAutorizadas() {
   const peopleNotAllowed = pessoas.filter((pessoa) => {
      return (pessoa.idade < 14 || pessoa.idade > 60 || pessoa.altura < 1.5);
   })
   return peopleNotAllowed;
}
console.log(retornaPessoasNaoAutorizadas()); */

//Exercício 19

const consultasNome = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia",  dataDaConsulta: "04/05/2021" }
 ]
 
 //Exercício 19, letra A
 
 function ordenaPorNome() {
   for(let i = 0; i < consultasNome.length; i++) {
      for(let j = 0; j < consultasNome.length - i - 1; j++) {
        if(consultasNome[j].nome > consultasNome[j + 1].nome) {
          const temp = consultasNome[j]
          consultasNome[j] = consultasNome[j + 1]
          consultasNome[j + 1] = temp
        }
      }
    }
    return consultasNome  
 }
 console.log(ordenaPorNome());
 
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