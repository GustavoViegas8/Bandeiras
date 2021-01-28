// cria uma referência aos elementos da página a serem manipulados pelo programa
const btItalia = document.getElementById("btItalia");
const btNoruega = document.getElementById("btNoruega");
const btSudao = document.getElementById("btSudao");

const canBandeira = document.getElementById("canBandeira");

const outPais = document.getElementById("outPais");

function desenhaItalia() {
  let ctx = canBandeira.getContext("2d");

  // limpa um retângulo para que a figura não seja sobreposta
  ctx.clearRect(0, 0, 300, 150);

  // define a cor do desenha a ser criado
  ctx.fillStyle = "green";

  // cria o retângulo, passando as coordenadas:
  // coluna e linha inicial; largura e altura da figura
  ctx.fillRect(0, 0, 100, 150);

  ctx.fillStyle = "red";
  ctx.fillRect(200, 0, 100, 150);

  outPais.textContent = "Bandeira da Itália";
}
btItalia.addEventListener("click", desenhaItalia);

function desenhaNoruega() {
  let ctx = canBandeira.getContext("2d");

  // limpa um retângulo para que a figura não seja sobreposta
  ctx.clearRect(0, 0, 300, 150);

  // define a cor do desenha a ser criado
  ctx.fillStyle = "red";

  // cria o retângulo, passando as coordenadas:
  // coluna e linha inicial; largura e altura da figura
  ctx.fillRect(0, 0, 80, 60);
  ctx.fillRect(0, 90, 80, 60);
  ctx.fillRect(110, 0, 190, 60);
  ctx.fillRect(110, 90, 190, 60);

  ctx.fillStyle = "darkblue";
  ctx.fillRect(0, 65, 300, 20);
  ctx.fillRect(85, 0, 20, 150);

  outPais.textContent = "Bandeira da Noruega";
}
btNoruega.addEventListener("click", desenhaNoruega);

function desenhaSudao() {
  let ctx = canBandeira.getContext("2d");

  // limpa um retângulo para que a figura não seja sobreposta
  ctx.clearRect(0, 0, 300, 150);

  // define a cor do desenha a ser criado
  ctx.fillStyle = "crimson";

  // cria o retângulo, passando as coordenadas:
  // coluna e linha inicial; largura e altura da figura
  ctx.fillRect(0, 0, 300, 50);

  ctx.fillStyle = "black";
  ctx.fillRect(0, 100, 300, 150);

  // desenho do triângulo
  ctx.fillStyle = "green";
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(0, 150);
  ctx.lineTo(110, 75);
  ctx.lineTo(0, 0);
  ctx.fill();

  outPais.textContent = "Bandeira do Sudão";
}
btSudao.addEventListener("click", desenhaSudao);
