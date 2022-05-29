# PROJETO - MEME GENERATOR

## O QUE DEVERÁ SER DESENVOLVIDO

Um site onde é possível fazer o upload de fotos para memes.

Veja o exemplo a seguir de como o projeto pode se parecer depois de pronto. Lembre-se que você pode ir além para deixar o projeto com a sua cara e impressionar à todos!

![exemplo](./exemplo.gif)

## REQUISITOS

### 1 - Crie uma caixa de texto com a qual quem usa pode interagir para inserir texto em cima da imagem escolhida

- A caixa onde o texto é inserido deve ter um **id** denominado _text-input_;
- Você deve criar um elemento para servir de container para a imagem e para o texto do meme. Este elemento deve ter um **id** denominado _meme-image-container_;
- Dentro do elemento de container, você deve criar um outro elemento para mostrar o texto digitado. O elemento de texto deve estar totalmente contido dentro do container e ter o **id** denominado _meme-text_;
- Se não houver imagem inserida, ele deve ser inserido e estar visível dentro do container vazio onde a imagem aparecerá.

**O que será verificado:**

- Será validado se o `input` de texto existe e conseguimos colocar texto nele;
- Será validado se o texto digitado no `input` é visível na tela;
- Será validado se existe um elemento de container para onde o texto será mostrado.

### 2 - O site deve permitir que quem usa faça upload de uma imagem de seu computador

- Dentro do elemento de container, você deve criar um outro elemento para mostrar a imagem selecionada. Este elemento deve possuir um **id** denominado _meme-image_;
- O elemento onde é feito o upload da imagem deve ser identificado com o **id** denominado _meme-insert_. Este elemento não precisa estar dentro do elemento de container;
- A imagem deve estar totalmente contida dentro do elemento identificado como _meme-image-container_;
- O texto inserido no elemento _text-input_ deve ser inserido sobre a imagem escolhida _meme-image_.

**O que será verificado:**

- Será validado se é possível carregar uma imagem através do elemento correto;
- Será validado se a imagem carregada é exibida dentro do elemento correto;
- Será validado se o texto é inserido corretamente sobre a imagem.

### 3 - Adicione uma moldura no container. A moldura deve ter 1 pixel de largura, deve ser preta e do tipo "solid". A área onde a imagem aparecerá deve ter fundo branco

- O elemento que serve de container para a imagem deve ter a cor de fundo branca;
- O elemento que serve de container para a imagem deve ter uma borda preta, sólida, com 1 pixel de largura;
- A imagem deve estar totalmente contida dentro do elemento identificado como _meme-image-container_.

**O que será verificado:**

- Será validado se o elemento que serve de container para a imagem tem a cor de fundo branca;
- Será validado se o elemento que serve de container para a imagem tem uma borda preta, sólida, com 1 pixel de largura;
- Será validado se a imagem deve estar totalmente contida dentro do elemento identificado como _meme-image-container_.

### 4 - Adicione o texto que será inserido sobre a imagem deve ter uma cor, sombra e tamanho específicos

- O texto do elemento _meme-text_ deve ter uma sombra preta, de 5 pixels na horizontal, 5 pixels na vertical e um raio de desfoque de 5 pixels;
- O texto do elemento _meme-text_ deve ter a fonte com o tamanho de 30 pixels;
- O texto do elemento _meme-text_ deve estar na cor branca.

**O que será verificado:**

- Será validado se o texto do elemento _meme-text_ tem uma sombra preta, de 5 pixels na horizontal, 5 pixels na vertical e um raio de desfoque de 5 pixels;
- Será validado se o texto do elemento _meme-text_ tem a fonte com o tamanho de 30 pixels;
- Será validado se o texto do elemento _meme-text_ deve estar na cor branca.

### 5 - Limite o tamanho do texto que o usuário pode inserir

- A quantidade máxima de caracteres digitáveis no elemento _text-input_ deve ser 60.

**O que será verificado:**

Será validado se a quantidade máxima de caracteres digitáveis no elemento _text-input_ deve ser 60.

### BÔNUS

### 6 - Permita a quem usa customizar o meme escolhido acrescentando a ele uma de três bordas. A página deve ter três botões, que ao serem clicados devem cada um trocar a própria borda ao redor do container

- As bordas devem ser acrescentadas ao container, identificado como _meme-image-container_;
- Os três botões devem ser elementos do tipo `button`;
- Cada elemento `button` deve ser estilizado de forma a ter a cor de fundo da mesma cor que a moldura que irá colocar no container;
- Cada `button` deve ter o respectivo **id** e estilizar o container conforme especificado:

  - Um botão identificado com o **id** chamado _fire_ deve estilizar o container da imagem com uma borda de 3 pixels, "dashed" e vermelha;
  - Um botão com **id** chamado _water_ deve estilizar o container da imagem com uma borda azul, com 5 pixels do tipo "double";
  - Um botão com **id** chamado _earth_ deve estilizar o container da imagem com uma borda do tipo "groove", verde e com 6 pixels.

- Após uma das três bordas ser selecionada, a borda padrão especificada no requisito 3 não deve mais aparecer.

**O que será verificado:**

- Será validado se o botão identificado com **id** _fire_ funciona corretamente;
- Será validado se o botão identificado com **id** _water_ funciona corretamente;
- Será validado se o botão identificado com **id** _earth_ funciona corretamente.

### 7 - Tenha um conjunto de quatro imagens pré prontas de memes famosos para o usuário escolher. Mostre miniaturas das imagens e, mediante clique do usuário, essa imagem deve aparecer dentro da moldura do elemento de container

- O elemento que mostra as miniaturas dos memes deve ser identificado um **id** denominado _meme-1_ para o primeiro meme, _meme-2_ para o segundo, _meme-3_ para o terceiro e _meme-4_ para o quarto;
- As imagens que identificam os memes devem ficar dentro da aplicação, num diretório chamado "imgs" com os respectivos nomes "meme1.png", "meme2.png", "meme3.png" e "meme4.png". **_Atenção para o formato das imagens!_**;
- As imagens devem aparecer dentro do container de forma análoga às imagens enviadas por upload para a página.

**O que será verificado:**

- Será validado se as imagens prontas apresentam o comportamento esperado.
