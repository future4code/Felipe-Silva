let ageUser = prompt("Qual a sua idade?");
let ageFriend = prompt("Idade do seu amigo?");
let diferenca = Number(ageUser) - Number(ageFriend);
console.log("Você é mais velho que seu amigo?", ageUser > ageFriend);
console.log('A diferença de idade é de ' + diferenca + ' anos.');