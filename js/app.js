    let totalGeral;
    limpar();

    function adicionar() {
    // recuperar valores nome do produto, quantidade e valor 
        let produto = document.getElementById('produto').value;
        let nomeProduto = produto.split('-')[0];
        let valorUnitario = produto.split('R$')[1];
        let quantidade = document.getElementById('quantidade').value;
        let mensagem = document.getElementById('mensagem');

        if (!produto) {
            mensagem.textContent = 'Por favor, selecione um produto válido.';
            return;
        }

        if (!quantidade || quantidade <= 0) {
            mensagem.textContent = 'Por favor, insira uma quantidade válida.';
            return;
        }

        mensagem.textContent = 'Produto adicionado ao carrinho com sucesso!';
       
    
        
        // calcular o preço, o nosso subtotal
        let preco = quantidade * valorUnitario;
        
        //adicionar o produto no carrinho
        let carrinho = document.getElementById('lista-produtos');
        carrinho.innerHTML += `<section class="carrinho__produtos__produto">
            <span class="texto-azul">${quantidade}</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
            </section>`;
            document.getElementById('quantidade').value = 0;
        //atualizar o valor total
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`; 
    }

    function limpar() {
        totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';


    }