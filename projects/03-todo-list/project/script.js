const listaTarefas = document.getElementById('lista-tarefas');
const textoTarefa = document.getElementById('texto-tarefa');
const criaTarefa = document.getElementById('criar-tarefa');

// Altera a classe da  li ao clicar sobre ela
function selectedItem(element, className) {
  const selected = document.getElementsByClassName(className);
  if (selected[0]) selected[0].classList.remove(className);

  element.classList.add(className);
}

// Se for clicado duas vezes ele será marcado como completo
function completedItem(element, className) {
  if (element.className.includes(className)) {
    element.classList.remove(className);
    return;
  }
  element.classList.add(className);
}

// Adiciona item na lista de tarefas
function addTask(onload = false) {
  const task = textoTarefa.value.trim();

  if (task.length > 0 || onload === true) {
    const listItem = document.createElement('li');
    listItem.innerText = task;

    listItem.addEventListener('click', (e) => {
      selectedItem(e.target, 'selected-item');
    });

    listItem.addEventListener('dblclick', (e) => {
      completedItem(e.target, 'completed');
    });

    listaTarefas.appendChild(listItem);
    textoTarefa.value = '';
    return listItem;
  }
}

textoTarefa.onkeyup = (event) => {
  if (event.key === 'Enter') addTask();
};

criaTarefa.onclick = addTask;

// Limpa todas as tarefas da lista
function cleanAllTasks() {
  const tasks = document.querySelectorAll('#lista-tarefas li');
  for (let index = 0; index < tasks.length; index += 1) {
    listaTarefas.removeChild(tasks[index]);
  }
}

const apagaTudo = document.getElementById('apaga-tudo');
apagaTudo.onclick = cleanAllTasks;

// Remove todas as tarefas finalizadas
function removeCompletedTask() {
  const completedTask = document.querySelectorAll('.completed');
  for (let index = 0; index < completedTask.length; index += 1) {
    listaTarefas.removeChild(completedTask[index]);
  }
}

const apagaTarefaCompleta = document.getElementById('remover-finalizados');
apagaTarefaCompleta.onclick = removeCompletedTask;

// Salva tarefas no localstorage
function saveTasks() {
  if (typeof Storage === 'undefined') {
    alert('Sem suporte a Web Storage!');
    return;
  }

  const tasks = document.querySelectorAll('#lista-tarefas li');
  const savedTasks = [];
  for (let index = 0; index < tasks.length; index += 1) {
    const listItem = tasks[index];
    savedTasks.push([listItem.className, listItem.innerText]);
  }
  localStorage.setItem('tasks', JSON.stringify(savedTasks));
}

const salvaTarefas = document.getElementById('salvar-tarefas');
salvaTarefas.onclick = saveTasks;

// Verifica se tarefas foram salvas e então as aplica a lista de tarefas
function restoreTasks() {
  if (localStorage.tasks === undefined) return;
  const restoredTasks = JSON.parse(localStorage.getItem('tasks'));

  for (let index = 0; index < restoredTasks.length; index += 1) {
    const listData = restoredTasks[index];

    const listItem = addTask(true);
    [listItem.className, listItem.innerText] = [listData[0], listData[1]];
  }
}

window.onload = restoreTasks;

// Define se o item pode ser movido na direção escolhida
function canIMove(element, moveTo) {
  const parent = element.parentNode;
  if (moveTo === 'up' && parent.firstChild === element) return false;
  if (moveTo === 'down' && parent.lastChild === element) return false;
  return true;
}

// Subindo a posição do item selecionado na lista com  a ação do botão
function moveSelectedItem(moveTo) {
  const selectedItemToMove = document.querySelector('.selected-item');
  if (!selectedItemToMove) return;

  const parent = selectedItemToMove.parentNode;

  if (canIMove(selectedItemToMove, moveTo)) {
    let sibling;
    if (moveTo === 'up') {
      sibling = selectedItemToMove.previousSibling;
    } else {
      sibling = selectedItemToMove.nextSibling.nextSibling;
    }
    parent.insertBefore(selectedItemToMove, sibling);
  }
}

const moverCima = document.getElementById('mover-cima');
moverCima.onclick = () => moveSelectedItem('up');

const moverBaixo = document.getElementById('mover-baixo');
moverBaixo.onclick = () => moveSelectedItem('down');

// Apaga item selecionado
const removeSelecionado = document.getElementById('remover-selecionado');

removeSelecionado.onclick = () => {
  const selectedItemToRemove = document.querySelector('.selected-item');
  if (selectedItemToRemove) {
    selectedItemToRemove.parentElement.removeChild(selectedItemToRemove);
  }
};
