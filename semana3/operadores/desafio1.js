//a)
let fahr = prompt('Temperatura em Fº:');
Number(fahr);
let kelv = (fahr - 32) * 5/9 + 273.15;
console.log(`${fahr}ºF correspondem a ${kelv}ºK`);

//b)
let celsius = prompt('Temperatura em Cº:');
Number(celsius);
let f = celsius * 9/5 + 32;
console.log(`${celsius}ºC correspondem a ${f}ºF`);

//c) e d)
let celsius = prompt('Temperatura em Cº:');
Number(celsius);
let f = celsius * 9/5 + 32;
console.log(`${celsius}ºC correspondem a ${f}ºF`);
let kelv = Number(celsius) + 273.15;
console.log(`${celsius}ºC correspondem a ${kelv}ºK`);

// let c = (5 * f - 160) / 9;

