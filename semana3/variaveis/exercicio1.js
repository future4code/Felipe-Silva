let alyas;
let age;

console.log(typeof alayas);
console.log(typeof age);

/* o console retornou 'undefined', porque não houve atribuição
para as variaveis*/

alyas = prompt('Diga seu nome: ');
age = prompt('Qual a sua idade? ');

console.log(typeof alyas);
console.log(typeof age); 

/* o console retornou agora as váriaveis como string, uma vez que o prompt
do usuário, inclusive para 'age', foi inserido entre aspas*/

console.log("Olá " + alyas + ", você tem " + age + " anos.");





