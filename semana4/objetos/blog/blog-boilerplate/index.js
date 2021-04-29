let storePost = [];
//5)e desafio1
function captureForm() {
    let title = document.getElementById('titulo-post')
    let autor = document.getElementById('autor-post')
    let content = document.getElementById('conteudo-post')
    let addCamp = document.getElementById('container-de-posts')
    let image = document.getElementById('imagem-post')
    
//2)
    const camp = {
        titulo: title.value,
        autor: autor.value,
        conteudo: content.value 
    }
//3) e 4)
    if (camp.titulo !== '' || camp.autor !== '' || camp.conteudo !== '') {
        addCamp.innerHTML += `<section> <h3>${camp.titulo}</h3> <h4>${camp.autor}</h4> <p>${camp.conteudo}</p> <img src='${image.value}'> </section>`; 
    } else {
        alert('Favor preencher todos os campos');
    }
    storePost.push(camp)
    title.value = ''
    autor.value = ''
    content.value = ''
}
console.log(storePost)