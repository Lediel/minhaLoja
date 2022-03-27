# Olá esse é minha loja

Após 6 meses estudando, eu quis desenvolver alguma coisa para testar meus conhecimentos e exercitar, então resolvi fazer uma lojinha virtual com carrinho funcional.
Eu ia inicialmente usar somente React para fazer ela, porem eu resolvi usar esse projeto para poder aprender algo novo, entao resolvi usar o NextJS.
Fiz a maior parte do layout me baseando no site da KaBuM, onde peguei tambem os produtos e preços.

Vou explicar alguma funcionalidades que eu implementei:

* Utilizei os componentes do React para criar os Cards, fazendo somente 1 card, e puxando as informações dos itens como preço, nome e imagem de forma dinamica, formando assim quantos cards fossem necessarios sem precisar ficar adicionando de forma estatica 1 por 1. <br>
Para gerar as paginas de cada item, usei a funcionalidade do Next para pegar dinamicamente cada item, e assim formando uma pagina usando getStaticPaths, e getStaticProps



