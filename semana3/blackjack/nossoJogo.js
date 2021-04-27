/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    console.log('Bem vindo ao jogo de Blackjack!');
    confirm('Quer iniciar uma nova rodada?');
    
    let i = 0;
    let scoreUs;
    let scorePc;

    if (confirm == false) {
       console.log('O jogo acabou.');
    } else {
       let userCard1 = comprarCarta();
       let userCard2 = comprarCarta();
       scoreUs = userCard1(carta.valor) + carta.valor(userCard2);
    }  
    console.log(scoreUs);

