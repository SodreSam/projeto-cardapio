
function atualizarCardapio(){

    const cardapio = [
        {
            id: 0,
            codigo: "cafe",
            descricao: "Café expresso",
            valor: 3,
            imagem: "images/cafe.jpg"
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
            imagem: "images/cafe.jpg"
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
    
    const cardsContainer = document.getElementById('cards');


cardapio.forEach(produto => {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';

    const cardContent = `
    
    <img class="produto" src="${produto.imagem}" alt="produto1">
    <div class="card-bottom">
        <div class="titulo">
        <p>${produto.descricao}</p>
        <span>${produto.valor.toFixed(2)}</span>
        </div>
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
    </div>  
    `;

    cardDiv.innerHTML = cardContent;
    cardsContainer.appendChild(cardDiv);

    
});

}


window.addEventListener("load", atualizarCardapio);