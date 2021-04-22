// 4-
let idade = prompt(Number('Idade do cidadão: '));

if (idade >= 18) {
    console.log('Passível de habilitação');
}
else {
    console.log('Habilitação vetada');
}

// 5-
let turno = prompt('Turno? (digite M para (matutino), V (Vespertino) ou N (Noturno):');
if (turno == 'M' || turno == 'm') {
    console.log('Bom Dia!');
} else if (turno == 'V' || turno == 'v') {
    console.log('Boa Tarde!');
} else if (turno == 'N' || turno =='n') {
    console.log('Boa Noite!');
} 

else {
    console.log('ERROR!!')
}

//6 -
let turno = prompt('Turno? (digite M para (matutino), V (Vespertino) ou N (Noturno):');

switch (turno) {
    case 'M':
        console.log('Bom Dia!');
        break
    case 'V':
        console.log('Boa Tarde!');
        break
    case 'N':
        console.log('Boa Noite!');
        break
    default:
        console.log('ERROR!!');
        break
    }

    //7 -
    let movie = prompt('Escolha o gênero: digite F p/ fantasia; T p/ terror; C p/ comédia; D p/ drama');
    let price = prompt('Preço do ingresso?');
    Number(price);

    if (movie == 'F' || movie == 'f' && price < 15){
        console.log('Bom filme!')
    } else {
        console.log('Escolha outro filme:(');
    }
