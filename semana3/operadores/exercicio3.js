let listaDeTarefas = [];
listaDeTarefas[0] = prompt("1ª tarefa do dia:");
listaDeTarefas[1] = prompt("2ª tarefa do dia:");
listaDeTarefas[2] = prompt("3ª tarefa do dia:");
console.log(listaDeTarefas);
let i = prompt("Tarefa já realizada:");
listaDeTarefas.splice(i,1);
console.log(listaDeTarefas);