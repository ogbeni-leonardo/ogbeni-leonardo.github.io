const colors = document.getElementsByClassName('color');

// Aplicando a cor principal da paleta de cores
colors[0].style.backgroundColor = 'rgb(0 0 0)';

// Gerador de cores aleatórias
function colorGenerator() {
  const redColor = parseInt(Math.random() * 255, 10);
  const greenColor = parseInt(Math.random() * 255, 10);
  const blueColor = parseInt(Math.random() * 255, 10);

  return `rgb(${redColor} ${greenColor} ${blueColor})`;
}

// Aplicando uma cor aleatória aos blocos da paleta de cores, exceto o primeiro
for (let index = 1; index < colors.length; index += 1) {
  colors[index].style.backgroundColor = colorGenerator();
}

// Cria elementos option para o select
function createOptions(parentElement, size) {
  for (let counter = 1; counter <= size; counter += 1) {
    const optionElement = document.createElement('option');
    optionElement.value = counter;
    optionElement.innerText = counter.toString().padStart(2, '0');

    parentElement.appendChild(optionElement);
  }
}

// Options para linhas

const boardSizeLine = document.getElementById('board-size-line');
createOptions(boardSizeLine, 14);

// Options para colunas
const boardSizeColumn = document.getElementById('board-size-column');
createOptions(boardSizeColumn, 23);

// Criador de pixels
function pixelGenerator(parent) {
  const newPixel = document.createElement('div');
  newPixel.className = 'pixel';

  parent.appendChild(newPixel);
}

// Altera o tamanho o pixel-board proporcionalmente ao tamanho de blocos por linha e coluna
function pixelBoardSize(parent, width, height) {
  const element = parent;
  element.style.width = `${width * 42}px`;
  element.style.height = `${height * 42}px`;
}

// Esta função retorna a cor selecionada da paleta de cores
function selectedColorPalette() {
  return document.querySelector('.selected').style.backgroundColor;
}

// Os pixels receberão uma função ao serem clicados
function pixelChangeColor() {
  const pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].onclick = () => {
      pixels[index].style.backgroundColor = selectedColorPalette();
    };
  }
}

// Adiciona os pixels ao elemento parent com n linhas e n colunas
function pixelsAdd(parent, lines, columns) {
  // Altere o tamanho do pixel board em relação as linhas e colunas
  pixelBoardSize(parent, columns, lines);

  for (let line = 0; line < lines; line += 1) {
    for (let column = 0; column < columns; column += 1) {
      pixelGenerator(parent);
    }
  }
  // Atribua uma função a todos os pixels
  pixelChangeColor();
}

const pixelBoard = document.getElementById('pixel-board');

// Adicionando pixels ao pixel-board
pixelsAdd(pixelBoard, 5, 5);

// Altera a classe de seleção dos elementos
function changeClassOfSelectedColor(element) {
  const selected = document.querySelector('.selected');
  selected.classList.remove('selected');

  element.classList.add('selected');
}

// Quando uma cor da paleta for clicada ela será selecionada
for (let index = 0; index < colors.length; index += 1) {
  colors[index].onclick = () => {
    changeClassOfSelectedColor(colors[index]);
  };
}

// Função que altera a cor de fundo da opção multicolor na paleta de cores
function colorPickerChange(color) {
  const extraColor = document.querySelector('.multicolor');
  extraColor.style.backgroundColor = color;

  // Ao mudar sua cor padrão faça dessa div a opção selecionada
  changeClassOfSelectedColor(extraColor);
}

const colorPicker = document.getElementById('color-picker');
colorPicker.addEventListener('change', (event) => {
  colorPickerChange(event.target.value);
});

// Limpar todos os blocos de pintura
function pixelClean() {
  const pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'rgb(255 255 255)';
  }
}

const clearBoard = document.getElementById('clear-board');
clearBoard.onclick = pixelClean;

const generateBoard = document.getElementById('generate-board');

// Função para remover e atualizar todos os elementos do pixel board
function pixelBoardCleaner() {
  const allPixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < allPixels.length; index += 1) {
    pixelBoard.removeChild(allPixels[index]);
  }
}

generateBoard.addEventListener('click', () => {
  pixelBoardCleaner();
  pixelsAdd(pixelBoard, boardSizeLine.value, boardSizeColumn.value);
});
