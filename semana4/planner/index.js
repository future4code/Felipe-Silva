//1))
function criarTarefa() {
    //2)
    let task = document.getElementById('tarefa');
    //3)
    let diasDaSemana = document.getElementById('dias-semana');
    
    //4)
    //console.log(task.value)
    //console.log(diasDaSemana)
    //console.log(diaEscolhido)
    
//5)(com desafio1)
if (task.value !==''){
    switch (diasDaSemana.value) {
        case "domingo":
            const day1 = document.getElementById('itens')
            day1.innerHTML += `<li onclick='scratchText(this)'>${task.value}</li>`;
            break;
/*
        case "segunda":
            diaEscolhido.innerHTML += `<p>${task.value}</p>`;
            diaEscolhido.innerHTML += `<p >${task.value}</p>`;
            break;
        case "terca":
            diaEscolhido.innerHTML += `<p>${task.value}</p>`;
            diaEscolhido.innerHTML += `<p onclick='scratchText(this)'>${task.value}</p>`;
            break;
        case "quarta":
            diaEscolhido.innerHTML += `<p>${task.value}</p>`;
            diaEscolhido.innerHTML += `<p onclick='scratchText(this)'>${task.value}</p>`;
            break;
        case "quinta":
            diaEscolhido.innerHTML += `<p>${task.value}</p>`;
            diaEscolhido.innerHTML += `<p onclick='scratchText(this)'>${task.value}</p>`;
            break;
        case "sexta":
            diaEscolhido.innerHTML += `<p>${task.value}</p>`;
            diaEscolhido.innerHTML += `<p onclick='scratchText(this)'>${task.value}</p>`;
            break;
        case "sabado":
            diaEscolhido.innerHTML += `<p>${task.value}</p>`;
            diaEscolhido.innerHTML += `<p onclick='scratchText(this)'>${task.value}</p>`;
            break;
    */ }
    } else {
        alert("Por favor, insira uma tarefa!");
    }    
//6)
    task.value = '';
}

//desafio2
function scratchText(risk) {
    risk.style = 'text-decoration: line-through';
}
function addTask() {
    const meuInput = document.getElementById('tarefa').value
    const taskItems = document.getElementById('itens')

    itens.innerHTML += `<li>${meuInput}</li>`
}