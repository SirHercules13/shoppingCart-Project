//variavel para calcular o total geral pela adição dos subtotais
let totalG = 0;
//document.getElementById('lista-produtos').innerHTML = '';


let quantity = document.getElementById('quantidade');//pegar o campo de quantidade

//variavel para chamar o carrinho do HTML 
let shop = document.getElementById('lista-produtos');

//variavel para chamar a tag do HTMl e receber a variavel totalG no final
let totalProd = document.getElementById('valor-total');

//funçao para adicionar os produtos no carrinho
function adicionar(){
    
    //variaveis para chamar as tags do HTML
    let product = document.getElementById('produto').value; //pegar os produtos
    let productName = product.split('-')[0];//pegar o nome dos produtos
    let value = product.split('R$')[1];//pegar o valor unitário de cada produto

    //condição caso a quantidade não seja colocada
    if(quantity.value == 0){
        return alert('Por favor, Selecione os itens que deseja compar!');

        //condição caso a quantidade exceda 100
    }else if(quantity.value > 100){
        return alert('Infelizmente não temos essa quantidade em estoque, por favor escolha algo abaixo desse valor');
    
        //caso tudo esteja correto
    }else{
        
        //variavel para calcular o subtotal do produto
        let subtotal = quantity.value * value;

        //adicionando os produtos no carrinho
        shop.innerHTML = shop.innerHTML + `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantity.value}x</span> ${productName} <span class="texto-azul">R$${subtotal}</span>
        </section>`;

        //limpando o campo quantidade
        quantity.value = '';
        //calculando o total Geral
        totalG = totalG + subtotal;
    
        //mostrando na tela o total Geral chamando o textContent e escrevendo nele
        totalProd.textContent = `R$ ${totalG}`;

    }

}

//funçao para limpar tudo na tela 
function limpar(){
    //retorna a quantidade à anterior
    quantity.value = '';
    //limpa o carrinho
    shop.innerHTML = `<section class="carrinho__produtos__produto">
    <span class="texto-azul"> </span>  <span class="texto-azul"></span>
    </section>`; 
    //limpa o total dos produtos mostrado na tela
    totalProd.textContent = 'R$ ';

}