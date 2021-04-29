/* 1 - a) o programa retorna 10 na tela; em seguida, 50; b) seria retornado
apenas o valor '50', referente ao último argumento (10).

2 - a) 'Darvas' e 'Caio'; b) O array inteiro - 'Amanda' e 'Caio'.

3 - A função está em 'array' function. A medida
em que for atribuido um valor 'x' a 'let x', se tal
valor for par, será retornado seu quadrado. 

*/

// 4 -a)
function profile() {
    console.log('Sou o Felipe, 39 anos, moro em BH e busco transição de carreira.')
}
profile();

//b)
function perfil(alyas, age, city, student) {
    
    if (student) {
        student = 'sou estudante.'
    } else {
        student = 'não sou estudante.'
    }
    return `Eu sou ${alyas}, tenho ${age}, moro em ${city} e ${student}`;
  
}

perfil('Felipe', 39, 'BH', true); 

// 5 - a)
function soma(num1, num2) {
    const add = num1 + num2;
    return add;
}

soma(45, 1984);

//b)
function check(num1, num2) {
   return num1 > num2;
}
check(28, 44);

//c)
function repete(message) {
    for (let i = 0; i < 10; i+=1) {
        console.log(message);
    }
}
repete('Essa mensagem é de socorro');

//6) a)
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22];
function arrayLength (array) {
    return array.length;
}
arrayLength(array);

//b)
function par(numb) {
    return numb % 2 === 0;
}
par(33);

//c)
let array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22];
function evenArray(array) {
    let pares = [];
    for (const num of array) {
        if (num % 2 === 0) {
            pares.push(num);
        }
    }
    return pares;
}
evenArray(array);

//d) 
let array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22];
function par(numb) {
    return array[numb] % 2 === 0;
}
par(2);

// desafios 
// 1 a) 
const imprimir = (param) => {
    console.log(param);
}
imprimir(33);
//b)
const noReturn = (n1, n2) => {
    let add = n1 + n2;
    imprimir(add)
}
noReturn(33,44);

//2 - a)
const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13];
function array(numeros) {
    let pares = [];
    for(i=0; i<numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            numeros[i] *= 2;
            pares.push(numeros[i]);
        }

    }
    return pares;
}
array(numeros);

// (resolução amanda)
/* for ... of - passa por todos os itens sem iterar! 
const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13];
function multArrayPares(arrayNumeros) {
    let pares = [];
    for(let i of arrayNumeros) {
        if (i % 2 === 0) {
            pares.push(i * 2);
        }

    }
    return pares;
}
multArrayPares(numeros);
*/ 

//b)
const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13];
function maiorDoArray(arrayNumeros) {
    let maior = 0;
    for (i=0; i < arrayNumeros.length; i++) {
        if (arrayNumeros[i] > maior) {
            maior = arrayNumeros[i];
        }
    }
    return maior;
}
maiorDoArray(numeros);
/* (solução amanda)
const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13];
function maiorDoArray(arrayNumeros) {
let maior = arrayNumeros[0];
for (i=0; i < arrayNumeros.length; i++) {
*** se fosse 'for...of' compararia sempre o [0] com o elem. subsequente.
    if(arrayNumeros[i] > maior) {
        maior = arrayNumeros[i];
    }
}
return maior;
}
maiorDoArray(numeros);
*/

//c) (*** for ... in  -> itera!)
const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13];
function maiorIndice(arrayNums) {
    let majorIndex;
    let maior = 0;
    for (let i in arrayNums) {
        if (maior <= arrayNums[i]) {
            maior = arrayNums[i];
            majorIndex = i;
        }
    }
    return majorIndex;
}
maiorIndice(numeros);
// d)
const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13];
function arrayReverse(invertidos) {
    let arrayInvert = [];
    //(*** tamanho da var; condição de parada; decrem)
    for (let i = invertidos.length - 1; i >= 0; i--) {
        arrayInvert.push(invertidos[i]);            
        }
        return arrayInvert;
    }
console.log(arrayReverse(numeros));
