//a)
let libra = prompt('Massa em libras:');
Number(libra);
let kilos = libra / 2.2046;
console.log(`${libra}lb equivalem a ${kilos}kg`);

//b)
let on = prompt('Massa em onças:');
Number(on);
let kilos = (on * 45359237) / 1600000000;
console.log(`${on}oz equivalem a ${kilos}kg`);

//c)
let milha = prompt('Distância em milhas:');
Number(milha);
let metros = milha / 0.00062137;
console.log(`${milha}mi equivalem a ${metros}m`);

//d)
let pes = prompt('Distância em pés:');
Number(pes);
let metros = pes / 3.281;
console.log(`${pes}ft equivalem a ${metros}m`);

//e)
let gal = prompt('Volume em galões:');
Number(gal);
let litro = gal * 3.785;
console.log(`${gal}gal equivalem a ${litro}l`);

//f)
let xic = prompt('Volume em xícaras:');
Number(xic);
let litro = xic * 0.24;
console.log(`${xic}xic equivalem a ${litro}l`);