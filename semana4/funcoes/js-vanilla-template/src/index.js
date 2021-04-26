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
const beautifulGirl = (param) => {
    console.log('O parametro da função é: ', param);
}
beautifulGirl('Roberta');
//b)


