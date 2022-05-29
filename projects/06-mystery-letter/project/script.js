// Retorna elemento pelo id
function byId(id) {
  return document.getElementById(id);
}

// Cria um novo elemento e o retorna
function createElement(elementName) {
  return document.createElement(elementName);
}

// Escolhe um valor aleatório de uma array
function randomChoice(array) {
  const index = parseInt(Math.random() * array.length, 10);
  return array[index];
}

// Classes para estilização aleatória
const grupoEstilo = ['newspaper', 'magazine1', 'magazine2'];
const grupoTamanho = ['medium', 'big', 'reallybig'];
const grupoRotacao = ['rotateleft', 'rotateright'];
const grupoInclinacao = ['skewleft', 'skewright'];

// Escolhe classes aleatórias e retorna para o elemento
function randomClass() {
  const estilo = randomChoice(grupoEstilo);
  const tamanho = randomChoice(grupoTamanho);
  const rotacao = randomChoice(grupoRotacao);
  const inclinacao = randomChoice(grupoInclinacao);

  return `${estilo} ${tamanho} ${rotacao} ${inclinacao}`;
}

// Cada elemento do array será um span e será aplicado ao parágrafo
function applyToParagraph(array) {
  // O número de palavras é aplicado ao contador
  byId('carta-contador').innerText = array.length;

  const paragraph = byId('carta-gerada');
  // Limpe todo o conteúdo anterior do parágrafo
  paragraph.innerHTML = '';

  // Percorra cada um dos elementos e crie um span para cada um deles
  for (let index = 0; index < array.length; index += 1) {
    const newSpan = createElement('span');
    newSpan.innerText = array[index];
    newSpan.className = randomClass();
    newSpan.addEventListener('click', (e) => {
      e.target.className = randomClass();
    });

    paragraph.appendChild(newSpan);
  }
}

// Pega os valores inserido no input e retorna cada palavra como um item numa lista
function getInputValue() {
  const textInput = byId('carta-texto').value.trim();

  if (textInput.length === 0) {
    byId('carta-gerada').innerHTML = 'Por favor, digite o conteúdo da carta.';
    byId('carta-contador').innerText = '0';
    return;
  }
  // O texto será quebrado e cada palavra se torará um item da lista
  const textInputSplited = textInput.split(' ');

  return applyToParagraph(textInputSplited);
}

const criarCarta = byId('criar-carta');
criarCarta.onclick = getInputValue;

const cartaTexto = byId('carta-texto');
cartaTexto.onkeyup = (e) => {
  if (e.key === 'Enter') {
    getInputValue();
  }
};
