
function atualizarCardapio(){


    //array para armanezar objetos/produtos do cardápio
    const cardapio = [
        {
            id: 0,
            codigo: "cafe",
            descricao: "Café expresso pequeno",
            valor: 3,
            imagem: "images/cafe-chantilly.webp"
        },
        {
            id: 1,
            codigo: "chantily",
            descricao: "Chantily(extra do Café)",
            valor: 1.50,
            imagem: "images/cafe.jpg"
        },
        {
            id: 2,
            codigo: "suco",
            descricao: "Suco Natural",
            valor: 6.20,
            imagem: "images/suco-natural.webp"
        },
        {
            id: 3,
            codigo: "sanduiche",
            descricao: "Sanduíche",
            valor: 6.50,
            imagem: "images/cafe.jpg"
        },
        {
            id: 4,
            codigo: "queijo",
            descricao: "Queijo (extra do Sanduíche)",
            valor: 2,
            imagem: "images/cafe.jpg"
        },
        {
            id: 5,
            codigo: "salgado",
            descricao: "Salgado",
            valor: 7.25,
            imagem: "images/cafe.jpg"
        },
        {
            id: 6,
            codigo: "combo1",
            descricao: "1 Suco e 1 Sanduíche",
            valor: 9.50,
            imagem: "images/cafe.jpg"
        },
        {
            id: 7,
            codigo: "combo2",
            descricao: "1 Café e 1 Sanduíche",
            valor: 7.50,
            imagem: "images/cafe.jpg"
        },
    ]
    
    //constante para salvar a <section> do html que possui o ID cards
    const cardsContainer = document.getElementById('cards');


//para cada produto que está no array cardapio, ele vai criar uma div e insere a classe card na div criada
cardapio.forEach(produto => {
    const cardDiv = document.createElement('div'); //cria a div
    cardDiv.className = 'card'; //define a classe como card

    //cria uma variável onde vai a estrutura dos objetos/produtos do cardapio
    const cardContent = `
    <img class="produto" src="${produto.imagem}" alt="produto1"> 
  
    <div class="card-bottom">
        <div class="titulo">
        <p>${produto.descricao}</p>
        <span>R$ ${produto.valor.toFixed(2)}</span>
        </div>
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
    </div>  
    `;

    //insere na div criada "cards" o conteúdo dos objetos em HTML
    cardDiv.innerHTML = cardContent;

    //define a div "card" como "filha" da section com o id "cards" de modo que a a estrutura fique
    //<section id="cards">
    //<div class="card">
    // conteúdo da variável cardContent
    // </div> 
    //</section>
    cardsContainer.appendChild(cardDiv);

    
});
}

//função para que no carregamento da página ele chame a função atualizarCardapio
window.addEventListener("load", atualizarCardapio);