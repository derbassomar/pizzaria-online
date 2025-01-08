"use strict"
let carrinho = [];
let  total = 0;

function adicionarAoCarrinho(nome,preco) {
   console.log("Adicionando ${nome} ao carrinho por R$${preco}");
   carrinho.push({ nome, preco });
   total += preco;
   atualizarCarrinho();
}
function atualizarCarrinho() {
let itensCarrinho = document.getElementById("itensCarrinho");
let totalElement = document.getElementById("total");
itensCarrinho.innerHTML = ""
carrinho.forEach(item => {
  let li = document.createElement("li");
  li.textContent = `${item.nome} - R$${item.preco},00`;
itensCarrinho.appendChild(li)
});

totalElement.textContent = total;
    console.log(`Total atualizado: R$${total}`);
}

function finalizarPedido() {
    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio!');
    } else {
        alert(`Pedido finalizado! Total: R$${total},00`);
        console.log('Carrinho:', carrinho);
        carrinho = [];
        total = 0;
        atualizarCarrinho();
    }
}
