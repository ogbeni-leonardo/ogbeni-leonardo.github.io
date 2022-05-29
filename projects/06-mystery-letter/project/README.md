# PROJETO - MYSTERY LETTER

## O QUE DEVERÁ SER DESENVOLVIDO

Será desenvolvida uma aplicação utilizando **JavaScript**, **HTML5** e **CSS3**. Sua função será a de gerar cartas misteriosas.

Veja o exemplo a seguir de como o projeto pode se parecer depois de pronto. Lembre-se que você pode ir além para deixar o projeto com a sua cara e impressionar a todas as pessoas!

![exemplo](./exemplo.gif)

## REQUISITOS

### 1 - Deve haver um `input` com o `id="carta-texto"` onde a pessoa usuária poderá digitar o conteúdo da carta

**O que será verificado:**

- Será validado que existe um elemento `input` com o **id** _carta-texto_.

### 2 - Deve haver um parágrafo com o `id="carta-gerada"` onde a pessoa usuária verá o resultado de sua carta misteriosa

**O que será verificado:**

- Será validado que existe um elemento `p` com o **id** _carta-gerada_.

### 3 - Deve haver um botão com `id="criar-carta"` e ao clicar nesse botão, a carta misteriosa deve ser gerada

> Pontos importantes:
>
> - Cada palavra deve aparecer dentro de uma tag `span`;
> - As tags `span` devem ser adicionadas como filhas do parágrafo que possui o **id** _carta-gerada_.

**O que será verificado:**

- Será validado que existe um elemento `button` com o **id** _criar-carta_;
- Será validado que ao clicar no botão, a carta misteriosa deve ser gerada.

### 4 - Ao criar uma carta através do botão com `id="criar-carta"`, o `input` com `id="carta-texto"` deve permanecer com o texto digitado

**O que será verificado:**

- Será validado que ao criar uma carta através do botão _criar-carta_ o `input` com o **id** _carta-texto_ permanece com o texto digitado.

### 5 - Se a pessoa usuária não preencher o campo ou preencher com apenas espaços vazios adicionar a mensagem "Por favor, digite o conteúdo da carta."

**O que será verificado:**

- Será validado que irá exibir a mensagem "Por favor, digite o conteúdo da carta." no elemento `p` com o **id** _carta-gerada_.

### 6 - Crie a classe _newspaper_

> Pontos importantes:
>
> - Defina as propriedades:
>   - **background-color** com o valor _antiquewhite_;
>   - **font-family** com o valor _Times New Roman_;
>   - **font-weight** com o valor _bold_.

**O que será verificado:**

- Será validado se a classe _newspaper_ possui a propriedade **background-color** igual a _rgb(250, 235, 215)_;
- Será validado se a classe _newspaper_ possui **font-family** igual a _Times New Roman_;
- Será validado se a classe _newspaper_ possui a propriedade **font-weight** igual a _700_.

### 7 - Crie a classe _magazine1_

> Pontos importantes:
>
> - Defina as propriedades:
>   - **background-color** com o valor _teal_;
>   - **color** com o valor _white_;
>   - **font-family** com o valor _Verdana_;
>   - **font-weight** com o valor _900_;
>   - **text-transform** com o valor _uppercase_.

**O que será verificado:**

- Será validado se a classe _magazine1_ possui a propriedade **background-color** igual a _rgb(0, 128, 128)_;
- Será validado se a classe _magazine1_ possui a propriedade **color** igual a _rgb(255, 255, 255)_;
- Será validado se a classe _magazine1_ possui propriedade **font-family** igual a _Verdana_;
- Será validado se a classe _magazine1_ possui a propriedade **font-weight** igual a _900_;
- Será validado se a classe _magazine1_ possui a propriedade **text-transform** igual a _uppercase_.

### 8 - Crie a classe _magazine2_

> Pontos importantes:
>
> - Defina as propriedades:
>   - **background-image** com a imagem _images/pink-pattern.png_;
>   - **color** com o valor _fuchsia_;
>   - **font-family** com o valor _Verdana_;
>   - **font-weight** com o valor _900_.

**O que será verificado:**

- Será validado se a classe _magazine2_ possui a propriedade **background-image** igual a _images/pink-pattern.png_;
- Será validado se a classe _magazine2_ possui a propriedade **color** igual a _rgb(255, 0, 255)_;
- Será validado se a classe _magazine2_ possui a propriedade **font-family** igual a _Verdana_;
- Será validado se a classe _magazine2_ possui a propriedade **font-weight** igual a _900_.

### 9 - Crie a classe _medium_

> Pontos importantes:
>
> - Defina as propriedades:
>   - **font-size** com o valor _20px_;
>   - **padding** com o valor _8px_.

**O que será verificado:**

- Será validado se a classe _medium_ possui a propriedade **font-size** igual a _20px_;
- Será validado se a classe _medium_ possui a propriedade **padding** igual a _8px_.

### 10 - Crie a classe _big_

> Pontos importantes:
>
> - Defina as propriedades:
>   - **font-size** com o valor _30px_;
>   - **padding** com o valor _10px_.

**O que será verificado:**

- Será validado se a classe _big_ possui a propriedade **font-size** igual a _30px_;
- Será validado se a classe _big_ possui a propriedade **padding** igual a _10px_.

### 11 - Crie a classe _reallybig_

> Pontos importantes:
>
> - Defina as propriedades:
>   - **font-size** com o valor _40px_;
>   - **padding** com o valor _15px_.

**O que será verificado:**

- Será validado se a classe _reallybig_ possui a propriedade **font-size** igual a _40px_;
- Será validado se a classe _reallybig_ possui a propriedade **padding** igual a _15px_.

### 12 - Crie a classe _rotateleft_

> Pontos importantes:
>
> - Defina a propriedade:
>   - **transform** com o valor _rotate(-5deg)_.

**O que será verificado:**

- Será validado se a classe _rotateleft_ possui a propriedade **transform** igual a _matrix(0.996195, -0.0871557, 0.0871557, 0.996195, 0, 0)_.

### 13 - Crie a classe _rotateright_

> Pontos importantes:
>
> - Defina a propriedade:
>   - **transform** com o valor _rotate(5deg)_.

**O que será verificado:**

- Será validado se a classe _rotateright_ possui a propriedade **transform** igual a _matrix(0.996195, 0.0871557, -0.0871557, 0.996195, 0, 0)_.

### 14 - Crie a classe _skewleft_

> Pontos importantes:
>
> - Defina a propriedade:
>   - **transform** com o valor _skewX(10deg)_.

**O que será verificado:**

- Será validado se a classe _skewleft_ possui a propriedade **transform** igual a _matrix(1, 0, 0.176327, 1, 0, 0)_.

### 15 - Crie a classe _skewright_

> Pontos importantes:
>
> - Defina a propriedade:
>   - **transform** com o valor _skewX(-10deg)_.

**O que será verificado:**

- Será validado se a classe _skewright_ possui a propriedade **transform** igual a _matrix(1, 0, -0.176327, 1, 0, 0)_.

### 16 - Adicione as classes de forma aleatória a fim de estilizar as palavras.

> Pontos importantes:
>
> - As classes devem ser adicionadas às tags `span` de forma aleatória;
> - Sempre adicione mais de uma classe em uma palavra;
> - Utilize as classes:
>
>   - _newspaper_, _magazine1_, _magazine2_ (grupo de estilo);
>   - _medium_, _big_, _reallybig_ (grupo de tamanho);
>   - _rotateleft_, _rotateright_ (grupo de rotação);
>   - _skewleft_, _skewright_ (grupo de inclinação).
>
> - **Não** utilize mais de uma classe do mesmo grupo;
> - Todas as palavras devem conter uma classe de cada grupo;
>   > Ou seja, se você utilizar as classes _magazine1_, _big_, _rotateleft_ e _skewright_ em uma palavra, as demais classes de cada grupo não devem ser usadas para essa mesma palavra. Por exemplo, do grupo de estilo não seriam utilizadas as classes _newspaper_ e _magazine2_ pois a classe _magazine1_ já está sendo utilizada.

**O que será verificado:**

- Será validado se ao criar uma carta ela recebe uma lista de classes aleatórias;
- Será validado se ao criar uma segunda carta ela recebe uma lista de classes aleatórias;
- Será validado se as classes das duas cartas não são exatamente iguais.

### BÔNUS

### 17 - Com uma carta misteriosa gerada, adicione a possibilidade de alterar o estilo de uma palavra específica ao clicar nela

> Pontos importantes:
>
> - Ao clicar em uma palavra, um novo estilo aleatório deve ser aplicado;
> - O número de mudanças deve ser ilimitado.

**O que será verificado:**

- Será validado se a palavra contém quatro classes, uma de cada grupo;
- Será validado se ao clicar em uma carta uma nova lista aleatória de classes é gerada;
- Será validado se ao clicar novamente na mesma carta uma nova lista aleatória de classes é gerada e se a nova lista é diferente da lista anterior.

### 18 - Deve haver um parágrafo com o `id="carta-contador"` onde existirá um contador de palavras

> Pontos importantes:
>
> - Esse contador deve informar a quantidade de palavras presentes na carta misteriosa gerada.

**O que será verificado:**

- Será validado que existe um elemento `p` com o **id** _carta-contador_;
- Será validado se ao criar uma carta o elemento `p` com o id _carta-contador_ é atualizado com o número de palavras da carta (valor numérico).
