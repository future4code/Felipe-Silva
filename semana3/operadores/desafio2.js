//a)
let kwt = prompt("Consumo em quilowatts:");
Number(kwt);
let conta = kwt * 0.05;
console.log(`Valor a ser pago: R$${conta}`);
//b)
let desconto = prompt('Desconto à vista:');
Number(desconto);
console.log(`Valor com desconto: R$${conta - (conta * desconto)}`);

