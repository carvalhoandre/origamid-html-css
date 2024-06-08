// Retorne no console todas as imagens do site
const allimages = document.querySelectorAll("img");

allimages.forEach((img, index) => {
  console.log(index + 1, img);
});

// Retorne no console apenas as imagens que começaram com a palavra imagem
allimages.forEach((img, index) => {
  if (img.src.includes("imagem")) console.log(index + 1, img);
});

// Selecione todos os links internos (onde o href começa com #)
const internalLinks = document.querySelectorAll('[href^="#"]');

console.log("internalLinks", internalLinks);

// Selecione o primeiro h2 dentro de .animais-descricao
const subtitle = document.querySelector(".animais-descricao h2:first-child");

console.log("subtitle", subtitle);

// Selecione o último p do site
const lastP = document.querySelector("p:last-child");
console.log("lastP", lastP);

// Mostre no console cada parágrado do site
const paragraph = document.querySelectorAll("p");
paragraph.forEach((p, index) => console.log(`${index + 1}: ${p}`));

// Mostre o texto dos parágrafos no console
paragraph.forEach((p, index) =>
  console.log(`${index + 1} text: ${p.textContent}`)
);

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll("img");

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach((image) => {
  console.log(image);

  i++;
});

i = 0;

imgs.forEach((img) => {
  console.log(img);
  i++;
});

// Adicione a classe ativo a todos os itens do menu
const itemsMenu = document.querySelectorAll(".menu a");

itemsMenu.forEach((item) => item.classList.add("ativo"));

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itemsMenu.forEach(
  (item, index) => index !== 0 && item.classList.remove("ativo")
);

// Verifique se as imagens possuem o atributo alt
imgs.forEach((img) => {
  img.hasAttribute("alt")
    ? console.log("possui ALT")
    : console.log("não possui ALT");
});

// Modifique o href do link externo no menu
const externalLink = document.querySelector('a[href^="http"]');
externalLink.setAttribute("href", "./");

// Verifique a distância da primeira imagem
// em relação ao topo da página
const image = document.querySelector("img");
console.log(image.offsetTop);

// Retorne a soma da largura de todas as imagens
const images = document.querySelectorAll("img");
let sun = 0;
images.forEach((img) => (sun = sun + img.height));

console.log("sun", sun);

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
let have = true;

const links = document.querySelectorAll("a");

links.forEach((link) => {
  if (link.height < 48 || link.width < 48) {
    have = false;
  }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
if (window.matchMedia("(max-width: 720px)")) {
  document.querySelector(".menu").classList.add("menu-mobile");
}
