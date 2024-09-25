const produtos = document.querySelectorAll('.produto');
produtos.forEach(produto => {
    const imagemProduto = produto.querySelector('.produto-imagem');
    const botoesCores = produto.querySelectorAll('.cor');

    botoesCores.forEach(botao => {
        botao.addEventListener('click', () => {
            const corSelecionada = botao.dataset.cor;
            let tipoProduto = '';

            if (imagemProduto.src.includes('stanley946ml')) {
                tipoProduto = 'stanley946ml';
            } else if (imagemProduto.src.includes('mateira')) {
                tipoProduto = 'mateira';
            } else if (imagemProduto.src.includes('jaqueta')) {
                tipoProduto = 'jaqueta';
            } else if (imagemProduto.src.includes('bombacha')) {
                tipoProduto = 'bombacha';
            } else if (imagemProduto.src.includes('pijama')) {
              tipoProduto = 'pijama'; 
            } else if (imagemProduto.src.includes('bota')) {
              tipoProduto = 'bota'; 
            }

            imagemProduto.src = `img/${tipoProduto}-${corSelecionada}.webp`;
            botoesCores.forEach(btn => btn.classList.remove('ativo'));
            botao.classList.add('ativo');
        });
    });
});
