# PROJETO - COLOR GUESS

## O QUE DEVERÁ SER DESENVOLVIDO

Será desenvolvida uma aplicação utilizando **JavaScript**, **HTML5** e **CSS3**. Nesta aplicação deverá ser possível jogar um jogo de adivinhação de cores e sua pontuação deverá atualizar de acordo com os acertos.

Veja o exemplo a seguir de como o projeto pode se parecer depois de pronto. Lembre-se que você pode ir além para deixar o projeto com a sua cara e impressionar à todos!

![exemplo](./exemplo.gif)

## REQUISITOS

### 1 - Adicione no seu site um título com o nome do seu jogo

**O que será verificado:**

- Será verificado se o **id** do título é _title_.

### 2 - Adicione um texto com o código RGB a ser adivinhado

**O que será verificado:**

- Será verificado se o seu **id** deve ser _rgb-color_;
- Será verificado se o texto deve conter os três números das cores rgb a ser adivinhada, no seguinte formato: "(168, 34, 1)".

### 3 - Adicione à página opções de cores para serem adivinhadas

**O que será verificado:**

- Será verificado que deve conter 6 círculos como opção de cor de adivinhação;
- Será verificado que a classe de todos os círculos deve ser _ball_.

### 4 - Adicione cores nas bolas, elas devem ser geradas dinamicamente

**O que será verificado:**

- Será verificado que ao carregar a página, as cores de cada um dos 6 círculos coloridos devem ser geradas via JavaScript.

### 5 - Clicar em um círculo colorido, deve ser mostrado um texto indicando se está correto

**O que será verificado:**

- Será verificado que o **id** do elemento deve ser _answer_;
- Será verificado que quando o jogo é iniciado, o texto exibido deve ser "Escolha uma cor";
- Será verificado se o círculo colorido for o **correto**, deve ser exibido o texto "Acertou!";
- Será verificado se o círculo colorido for o **incorreto**, deve ser exibido o texto "Errou! Tente novamente!".

### 6 - Crie um botão para iniciar/reiniciar o jogo

**O que será verificado:**

- Será verificado que o botão deve ter o **id** _reset-game_;
- Será verificado que ao clicar no botão, novas cores devem ser geradas via JavaScript e o elemento _rgb-color_ deve ser atualizado;
- Será verificado que ao clicar no botão, o elemento _answer_ deve voltar ao estado inicial, exibindo o texto "Escolha uma cor".

### BÔNUS

### 7 - Crie um placar que incremente 3 pontos para cada acerto no jogo

**O que será verificado:**

- Será verificado que o elemento deve ter o **id** _score_;
- Será verificado que o valor inicial dele deve ser 0;
- Será verificado que a cada acerto, é incrementado 3 pontos ao placar;
- Será verificado que ao clicar no botão reiniciar, o placar **não** deve ser redefinido.
