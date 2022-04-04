# Em andamento 

## Olá essa é minha loja

Após 6 meses estudando, eu quis desenvolver alguma coisa para testar meus conhecimentos e exercitar, então resolvi fazer uma lojinha virtual com carrinho funcional.<br>
Eu ia inicialmente usar somente React para fazer ela, porem eu resolvi usar esse projeto para poder aprender algo novo, entao resolvi usar o NextJS.<br>
Fiz a maior parte do layout me baseando no site da KaBuM, onde peguei tambem os produtos e preços.

### Vou explicar alguma funcionalidades que eu implementei:

* Utilizei os componentes do React para criar os Cards, fazendo somente 1 card, e puxando as informações dos itens como preço, nome e imagem de forma dinâmica, formando assim quantos cards fossem necessários sem precisar ficar adicionando de forma estática 1 por 1. <br>
Para gerar as páginas de cada item, usei a funcionalidade do Next para pegar dinâmicamente cada item, e assim formando uma página usando <b>getStaticPaths</b>, e <b>getStaticProps</b>

<p aling="center">
  <img src="/public/assets/images/toReadme/1.gif"> 
</p>

* Fiz a adição no carrinho utilizando tambem componentes dinâmicos, e adicionando a quantidade no ícone de carrinho na parte superior direita.

<p aling="center">
  <img src="/public/assets/images/toReadme/2.gif"> 
</p>

* Em cada componente do carrinho, tem um estado onde é possível controlar a quantidade de cada item, assim também somando no preço e no ícone do carrinho.

<p aling="center">
  <img src="/public/assets/images/toReadme/3.gif"> 
</p>

* Adicionei um botão onde é possível excluir cada ítem, como também adicionei um botão onde é possivel excluir todos os ítens, também refletindo no preço e no ícone do carrinho.

<p aling="center">
  <img src="/public/assets/images/toReadme/4.gif"> 
</p>
