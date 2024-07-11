// ID (getElementById)
// Retorna null, caso não exista
const animaisSection = document.getElementById("animais");

// retorna um objeto, com diversas propriedades e métodos
// console.log(animaisSection.innerText); // retorna todo o texto da seção

// CLASSE E TAG (getElementsByClassName / getElementsByTagName)
// Sempre retorna uma lista de elementos, mesmo que só exista um
// * a lista retornada se atualiza automaticamente, ao inserir um novo item HTML que bate com a seleção *

// seleciona pela classe, retorna uma HTML collection
const gridSectionElements = document.getElementsByClassName("grid-section");

// ao informar mais de uma classe no seletor, seleciona apenas os elementos que possuirem todas essas classes ao mesmo tempo
const contato = document.getElementsByClassName("grid-section contato");

// seleciona todas as UL's, retorna uma HTML collection
const ulElements = document.getElementsByTagName("ul");

// HTML collections são parecidas com array e permitem selecionar por índice
console.log(gridSectionElements[0]);

// SELETOR GERAL ÚNICO (querySelector)
// retorna o primeiro elemento que combinar com o seletor CSS informado
const contatoSection = document.querySelector(".contato");

// é possível selecionar assim como no CSS, de fato
const ultimoAnimalDaLista = document.querySelector(
  ".animais-lista li:last-child"
);
const linkCSS = document.querySelector('[href^="https://"]');
const primeiroUl = document.querySelector("ul");
const primeiroLinkInterno = document.querySelector("[href^='#']"); // a "^" significa "que comece com", caso contrário, vai se restringir somente ao que estiver entre os parênteses simples
console.log(primeiroLinkInterno.href);

// SELETOR GERAL LISTA (querySelectorAll)
// retorna todos os elementos compatíveis com o seletor CSS em uma NodeList
// possui alguns métodos e propriedades que uma HTML collection não possui
// * diferente de getElementsByClassName e getElementsByClassName, retorna uma lista estática *
const todasAsGridSections = document.querySelectorAll(".grid-section");
console.log(todasAsGridSections);

// retorna todas as fotos que estiverem dentro de ".animais-lista"
const todasAsFotosAnimais = document.querySelectorAll(".animais-lista img");
console.log(todasAsFotosAnimais);

// também permite selecionar por índice
console.log(todasAsFotosAnimais[1]);

// DIFERENÇAS: HTML COLLECTION x NODE LIST (Tempo Real x Estático)
const gridSectionHTMLCollection =
  document.getElementsByClassName("grid-section");
const gridSectionNodeList = document.querySelectorAll(".grid-section");

// I - Adição de Classes em tempo real
primeiroUl.classList.add("grid-section"); // pelo JS, mais um elemento terá essa classe

console.log(gridSectionHTMLCollection); // retorna 4 elementos (atualizado)
console.log(gridSectionNodeList); // retorna 3 elementos (desatualizado)

// II - Array-Like
// HTMLColletion e NodeList são array-like, parecem array mas não são. O método forEach(), por exemplo, existe apenas em NodeList
gridSectionNodeList.forEach(function (gridItem, index, colecao) {
  if (index === colecao.length - 1) {
    console.log(
      `A coleção "gridSectionNodeList" possui ${colecao.length} itens!`
    );
  }
});

// * É possível transformar elementos array-like em Arrays reais, através do método "Array.from()"
const arrayGrid = Array.from(gridSectionHTMLCollection);
console.log(arrayGrid);

// ================== EXERCÍCIOS ==================
console.log("======== EXERCÍCIOS ========");
// Retorne no console todas as imagens do site
const todasAsImagens = document.querySelectorAll("img");
console.log(todasAsImagens); // 6 imagens de animais + a imagem do mapa

// Retorne no console apenas as imagens que começaram com a palavra "imagem"
const todasImagensAnimais = document.querySelectorAll("img[src^='img/imagem']");
console.log(todasAsFotosAnimais);

// Selecione todos os links internos (onde o href começa com #)
const todosOsLinksInternos = document.querySelectorAll("a[href^='#']");
console.log(todosOsLinksInternos);

// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroH2emDescricao = document.querySelector(".animais-descricao h2");
console.log(primeiroH2emDescricao);

// Selecione o último p do site ( MACETEZINHO! )
const paragrafos = document.querySelectorAll("p");
console.log(paragrafos[--paragrafos.length]); // ou paragrafos.length -1
// lembre-se, tudo que está entre chaves torna-se um índice, e a propriedade .length tem um número a mais do que os índices, porque não considera o "0", por isso subtraimos 1
