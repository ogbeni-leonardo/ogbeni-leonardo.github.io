let allBallColors;
let chosenColor;
let started;
let score = 0;

// Retorna elemento por id
function byId(id) {
  return document.getElementById(id);
}

// Retorna todos os elementos com a classe especificada
function byClass(className) {
  return document.getElementsByClassName(className);
}

// Query Selector All
function qsa(query) {
  return document.querySelectorAll(query);
}

// Criar um elemento
function createElement(elementName) {
  return document.createElement(elementName);
}

// Gerar cores aleatórias
function colorGenerator() {
  const redColor = parseInt(Math.random() * 255, 10);
  const greenColor = parseInt(Math.random() * 255, 10);
  const blueColor = parseInt(Math.random() * 255, 10);

  return `rgb(${redColor}, ${greenColor}, ${blueColor})`;
}

// Escolhe um item aleatoriamente de um array
function randomChoice(array) {
  const index = parseInt(Math.random() * (array.length - 1), 10);
  return array[index];
}

// Remova todas as bolas da tela
function cleanAllBalls() {
  const balls = qsa('#colors .ball');
  for (let index = 0; index < balls.length; index += 1) {
    const ball = balls[index];
    byId('colors').removeChild(ball);
  }
}

// Mensagem de resultado da escolha é apresentado no parágrafo 'answer'
function result(value) {
  const answer = byId('answer');
  if (value) {
    answer.innerText = 'Acertou!';
    // Aplique o valor do score ao placar se o jogo ainda não foi iniciado
    if (!started) {
      score += 3;
      started = true;
      byId('score').innerText = score;
    }
  } else answer.innerText = 'Errou! Tente novamente!';
}

// Retorne se a cor clicada é a correta
function isTrue(ballElement) {
  result(ballElement.style.backgroundColor === chosenColor);
}

// Atribui uma função as bolas quando essas são clicadas
function addFunctionToBall() {
  const allBalls = byClass('ball');
  for (let index = 0; index < allBalls.length; index += 1) {
    const ball = allBalls[index];
    ball.onclick = () => isTrue(ball);
  }
}

// Resetar o jogo
function resetGame() {
  allBallColors = [];
  started = false;
  byId('answer').innerText = 'Escolha uma cor';
  cleanAllBalls();
}

// Criando bolas com cores aleatórias
function ballGenerator() {
  // Resete o jogo
  resetGame();

  for (let counter = 0; counter < 6; counter += 1) {
    const newBall = createElement('div');
    newBall.className = 'ball';
    const colorOfBall = colorGenerator();
    newBall.style.backgroundColor = colorOfBall;
    allBallColors.push(colorOfBall);

    byId('colors').appendChild(newBall);
  }
  // Escolha uma das cores da lista de cores e aplique ao parágrafo
  chosenColor = randomChoice(allBallColors);
  [byId('rgb-color').innerText] = [chosenColor.split('rgb')[1]];

  // Adicione uma função a todas as bolas aqui criadas
  addFunctionToBall();
}

ballGenerator();

// Adicionando função ao botão de reset
byId('reset-game').onclick = ballGenerator;
