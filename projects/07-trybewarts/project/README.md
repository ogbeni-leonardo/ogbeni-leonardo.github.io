# PROJETO - TRYBEWARTS

## O QUE DEVERÁ SER DESENVOLVIDO

Neste projeto, você irá desenvolver uma página de formulário da Escola de Magia de Trybewarts, em que as pessoas estudantes poderão enviar seus feedbacks sobre ela. O tema desse projeto é baseado na obra "Harry Potter", de J. K. Rowling, já que programar é o mais próximo que podemos chegar de algo **verdadeiramente mágico**! Mas não se preocupe se não tiver conhecimento sobre o universo da obra original, pois criamos nossa própria versão da Escola de Bruxaria e você terá todas as informações necessárias para a construção do projeto nesse **README**!

Use a imagem do site abaixo como base e respeite o posicionamento dos elementos, mas quanto às cores e elementos de design que não interfiram nesses aspectos sinta-se livre para deixar a sua criatividade fluir!

![exemplo](./exemplo.png)

## REQUISITOS

### 1. Crie uma barra verde na parte superior da página

#### Observações técnicas:

- Esta barra deve possuir a classe _header_;
- A classe _header_ deve determinar que o elemento é um **_flex container_**;
- A classe _header_ deve possuir a propriedade `background-color: rgb(50, 167, 145)`.

#### O que será verificado:

- Existe um elemento com a classe _header_;
- O elemento possui a propriedade CSS `display: flex`;
- O elemento possui a propriedade CSS `background-color: rgb(50, 167, 145)`.

### 2. Adicione o logotipo da Trybewarts com a classe _trybewarts-header-logo_ na barra superior

#### Observações técnicas:

- Deve existir um elemento img com a classe _trybewarts-header-logo_;
- O atributo **src** do logotipo deve apontar para `images/trybewarts-header-logo.svg`.

#### O que será verificado:

- Existe um elemento `img` com a classe _trybewarts-header-logo_;
- O elemento possui o atributo **src** apontando para `images/trybewarts-header-logo.svg`.

### 3. Acrescente um formulário de login no canto direito da barra superior contendo os inputs de email, senha e um botão de login

#### Observações técnicas:

- O formulário deve ter a classe _trybewarts-login_;
- O input de **_email_** deverá ter o atributo **name** igual a _email_ e o **placeholder** igual a _Email_;
- O input de **senha** deverá ter o atributo **name** igual a _password_ e o **placeholder** igual a _Senha_;
- O botão deverá ter o texto _"Entrar"_;
- O formulário deve ser um **_flex container_**;
- O formulário deve estar a direita da logo:
  - **Dica:** adicione a propriedade **_flex_** que faz os elementos terem o espaçamento máximo **entre eles** no **header**.
- Ao preencher o formulário e clicar no botão, será validado que:
  - Caso o email seja _"tryber@teste.com"_ e a senha seja _"123456"_ será emitido um alerta contendo o texto _"Olá, Tryber!"_;
  - Em todos os outro casos deverá ser emitido um alerta contendo o texto _"Email ou senha inválidos."_.

#### O que será verificado:

- Existe um elemento `form` com a classe _trybewarts-login_`;
- Existe um input com o atributo **name** igual a _email_ e o **placeholder** igual a _"Email"_;
- Existe um input com o atributo **name** igual a _password_ e o **placeholder** igual a _"Senha"_;
- Existe um botão com o texto _"Entrar"_;
- O formulário possui a propriedade CSS `display: flex`;
- O elemento `form` está à direita da logo;
- Ao clicar no botão de login dispara um alert com o texto _"Email ou senha inválidos"_, no caso de erro de preenchimento dos dados;
- Ao clicar no botão de login dispara um alert com o texto _"Olá, Tryber!"_, no caso de preenchimento correto dos dados.

### 4. Crie um título com o texto _"Trybewarts"_ centralizado dentro do `header`

#### Observações técnicas:

- Deve existir um elemento `h1` com o **id** _trybewarts-header-title_ e com o texto _"Trybewarts"_;
- O título deverá estar centralizado na barra verde:
  - O header deve ter exatamente três elementos filhos;
  - O filho do meio deve ser o título.

#### O que será verificado:

- Existe um elemento `h1` com o **id** _trybewarts-header-title_ e com o texto _"Trybewarts"_;
- O elemento com a classe _header_ deve possuir exatos 3 elementos filhos;
- O filho do meio do elemento com a classe _header_ deve ter o título (`h1`) _"Trybewarts"_.

### 5. Adicione um formulário no corpo da página

#### Observações técnicas:

- Deve existir um formulário com o **id** _evaluation-form_;
- O formulário deve estar inserido dentro de uma tag `main`;
- Tanto o formulário quanto o `main` devem ser **_flex containers_**;
- O formulário deve ter uma largura de 675px.

#### O que será verificado:

- Existe um elemento `form` com o **id** _evaluation-form_;
- O elemento `form` está dentro da tag `main`;
- O elemento `main` e o `form` possuem a propriedade CSS `display: flex`;
- O elemento `form` possui a propriedade CSS `width: 675px`.

### 6. Faça com que o eixo principal do formulário seja vertical

#### Observações técnicas:

- Mude o eixo principal do formulário com **id** _evaluation-form_ para vertical.

#### O que será verificado:

- O elemento _evaluation-form_ possui a propriedade CSS `flex-direction: column`.

### 7. Adicione a logo da Trybewarts no lado direito da página

#### Observações técnicas:

- Crie um elemento `img` com o **id** _trybewarts-forms-logo_;
- O atributo **src** deve apontar para _"images/trybewarts-colored.svg"_;
- A imagem deve possuir a propriedade CSS `height: 500px`.

#### O que será verificado:

- Existe um elemento `img` com o **id** _trybewarts-forms-logo_;
- O elemento possui o atributo **src** apontando para _"images/trybewarts-colored.svg"_;
- A imagem deve possuir a propriedade CSS `height: 500px`.

### 8. Acrescente ao formulário com **id** _evaluation-form_ os inputs de **_nome_**, **_sobrenome_** e **_email_**`

#### Observações técnicas:

- Deverá haver um input com o **id** _input-name_ e **placeholder** _Nome_;
- Deverá haver um input com o **id** _input-lastname_ e **placeholder** _Sobrenome_;
- Deverá haver um input com o **id** _input-email_ e **placeholder** _Email_.

#### O que será verificado:

- Existe um input com o **id** _input-name_ e **placeholder** _Nome_;
- Existe um input com o **id** _input-lastname_ e **placeholder** _Sobrenome_;
- Existe um input com o **id** _input-email_ e **placeholder** _Email_.

### 9. Acrescente ao formulário um `select` com o **id** _house_ contendo as opções "Gitnória", "Reactpuff", "Corvinode" e "Pytherina"

#### Observações técnicas:

- Deverá conter a opção com **text** e **value** igual a _"Gitnória"_ e com o **id** igual a _gitnoria-house_;
- Deverá conter a opção com **text** e **value** igual a _"Reactpuff"_ e com o **id** igual a _reactpuff-house_;
- Deverá conter a opção com **text** e **value** igual a _"Corvinode"_ e com o **id** igual a _corvinode-house_;
- Deverá conter a opção com **text** e **value** igual a _"Pytherina"_ e com o **id** igual a _pytherina-house_.

#### O que será verificado:

- Existe um elemento `select` com o id `house`;
- Existe um elemento `option` com **text** e **value** igual a _"Gitnória"_ e com o **id** igual a _gitnoria-house_;
- Existe um elemento `option` com **text** e **value** igual a _"Reactpuff"_ e com o **id** igual a _reactpuff-house_;
- Existe um elemento `option` com **text** e **value** igual a _"Corvinode"_ e com o **id** igual a _corvinode-house_;
- Existe um elemento `option` com **text** e **value** igual a _"Pytherina"_ e com o **id** igual a _pytherina-house_.

### 10. Posicione os campos de **Nome** e **Sobrenome** para que fiquem em linha

#### Observações técnicas:

- Os campos de **Nome** e **Sobrenome** devem estar lado a lado.

#### O que será verificado:

- O campo de **Sobrenome** está à direita do campo de **Nome**.

### 11. Posicione os campos de **Email** e **Casa** para que fiquem em linha

#### Observações técnicas:

- Os campos de **Email** e **Casa** devem estar lado a lado.

#### O que será verificado:

- O campo de **Casa** está à direita do campo de **Email**.

### 12. Acrescente ao formulário um campo de entrada para qual família a pessoa estudante se identifica

#### Observações técnicas:

- Crie um elemento com o **id** _label-family_ e o texto _"Qual sua família?"_ deverá ser criado;
- Crie um `input` do tipo `radio` com o atributo **name** igual a _family_ e **value** igual a _Frontend_;
- Crie um `input` do tipo `radio` com o atributo **name** igual a _family_ e **value** igual a _Backend_;
- Crie um `input` do tipo `radio` com o atributo **name** igual a _family_ e **value** igual a _FullStack_;
- Posicione os **radio buttons** para ficar abaixo um do outro, na sequência _Frontend_, _Backend_ e _Fullstack_;
- Posicione os **radio buttons** abaixo do `label`.

#### O que será verificado:

- Existe um elemento `label` com o **id** _label-family_ que possui o conteúdo de texto _"Qual sua família?"_;
- Existe um `input` do tipo `radio` com o atributo **name** igual a _family_ e **value** igual a _Frontend_;
- Existe um `input` do tipo `radio` com o atributo **name** igual a _family_ e **value** igual a _Backend_;
- Existe um `input` do tipo `radio` com o atributo **name** igual a _family_ e **value** igual a _FullStack_;
- Os **inputs** do tipo `radio` estão um abaixo do outro na sequência _Frontend_, _Backend_ e _Fullstack_;
- Os **inputs** do tipo `radio` estão abaixo do texto da `label`.

### 13. Crie campos de entrada do tipo `checkbox` contendo seis opções

#### Observações técnicas:

- Crie um elemento com o **id** _label-content_ e o texto _"Qual conteúdo você está com mais vontade de aprender?"_;
- Crie um `input` do tipo `checkbox` com o value igual a _HoFs_;
- Crie um `input` do tipo `checkbox` com o value igual a _Jest_;
- Crie um `input` do tipo `checkbox` com o value igual a _Promises_;
- Crie um `input` do tipo `checkbox` com o value igual a _React_;
- Crie um `input` do tipo `checkbox` com o value igual a _SQL_;
- Crie um `input` do tipo `checkbox` com o value igual a _Python_;
- Posicione as **checkboxes** abaixo do `label`.

#### O que será verificado:

- Existe um elemento `label` com o **id** _label-content_ que possui um conteúdo de texto _"Qual conteúdo você está com mais vontade de aprender?"_;
- Existe um `input` do tipo `checkbox` com o atributo value igual a _HoFs_;
- Existe um `input` do tipo `checkbox` com o atributo value igual a _Jest_;
- Existe um `input` do tipo `checkbox` com o atributo value igual a _Promises_;
- Existe um `input` do tipo `checkbox` com o atributo value igual a _React_;
- Existe um `input` do tipo `checkbox` com o atributo value igual a _SQL_;
- Existe um `input` do tipo `checkbox` com o atributo value igual a _Python_;
- Os elementos `checkbox` então posicionados abaixo da `label`.

### 14. Crie campo de entrada para avaliar de 1 a 10 o nível de satisfação com a Trybewarts

#### Observações técnicas:

- Um elemento com o **id** _label-rate_ e o texto _"Como você avalia a Trybewarts?"_ deverá ser criado;
- O campo deve ser formado por dez **radio buttons**, contendo as opções de 1 a 10;
- Os **radio buttons** devem ter o atributo **value** com o valor de suas opções de 1 a 10;
- Os **radio buttons** devem ter o atributo **name** com o valor _"rate"_;
- Posicione os **radio buttons** para ficar lado a lado.

#### O que será verificado:

- Existe um elemento `label` com o **id** _label-rate_ que possui um conteúdo de texto _"Como você avalia a Trybewarts?"_;
- Existem 10 **radio-buttons** com o atributo `name="rate"`;
- Existem 10 **radio-buttons** contendo o atributo **value** de 1 a 10.

### 15. Crie uma `textarea` com o **id** _textarea_ e uma `label` com a classe _textarea_ contendo o número máximo de caracteres igual à 500

#### Observações técnicas:

- Uma `label` com a classe _textarea_ e o texto _"Deixe seu comentário:"_ deverá ser criado;
- O campo _textarea_ deverá ter o máximo de 500 caracteres.

#### O que será verificado:

- Existe uma `label` com a classe _textarea_ e o texto _"Deixe seu comentário:"_;
- O elemento _textarea_ possui um limite de 500 caracteres.

### 16. Crie um campo de entrada do tipo `checkbox` com o **id** _agreement_ para validar as informações

#### Observações técnicas:

- Um label com o **id** `label-infos` e o texto _"Você concorda com o uso das informações acima?"_ deverá ser criado;
- O campo deve ser formado por um `checkbox`;
- O campo de `checkbox` deve possuir o **id** _agreement_;
- Posicione a `checkbox` ao lado da `label`.

#### O que será verificado:

- Existe uma `label` com o **id** `label-infos` que possui o texto _"Você concorda com o uso das informações acima?"_;
- Existe um input do tipo `checkbox` com o **id** _agreement_.

### 17. Crie um botão de Enviar para submeter o formulário

#### Observações técnicas:

- Um botão do tipo _submit_ deverá ser criado;
- O botão deve possuir o **id** _submit-btn_;
- Deverá conter o texto **"Enviar"**.

#### O que será verificado:

- Existe um botão do tipo _submit_ com o **id** _submit-btn_ e o texto _"Enviar"_.

### 18. Faça com que o botão **Enviar** seja habilitado somente após a `checkbox` do requisito 16 ser selecionada

#### Observações técnicas:

- O botão deverá estar desabilitado caso a `checkbox` não esteja selecionada;
- O botão deverá ser habilitado caso a `checkbox` seja selecionada.

#### O que será verificado:

- O botão está inicialmente desabilitado;
- O botão torna-se habilitado, ao marcar o campo com **id** _agreement_.

### 19. Crie um rodapé no final da página

#### Observações técnicas:

- O rodapé deverá conter o texto _"Direitos reservados à Trybewarts©"_.

#### O que será verificado:

- Existe um elemento `footer` deve possuir o texto _"Direitos reservados à Trybewarts©"_.

### BÔNUS

### 20. Crie um contador com o **id** _counter_ contendo o número de caracteres disponíveis no `textarea`, variando de 500 até 0, que deverá ser atualizado a medida que algo for digitado no `textarea`

#### Observações técnicas:

- O contador deverá possuir o **id** _counter_;
- O contador inicialmente deve possuir o valor `500`;
- O contador deverá decrementar a medida que algo for escrito no campo `textarea`;
- O contador deverá incrementar a medida que algo for deletado no campo `textarea`;
- O elemento `textarea` deverá possuir `id="textarea"`.

#### O que será verificado:

- Existe um elemento com o **id** _counter_;
- Existe um elemento com o **id** _textarea_;
- O preenchimento do campo de _textarea_ altera o número apresentado no elemento **counter**.

### 21. Faça com que, ao clicar no botão **Enviar**, o conteúdo dentro da tag `form` seja substituído pelas informações preenchidas pela pessoa usuária

#### Observações técnicas:

- Todos os campos do formulário devem ser substituídos pelas informações da pessoa usuária:

  - Deve haver um campo com o formato "Nome: Alguém Aqui"
  - Deve haver um campo com o formato "Email: email@mail.com"
  - Deve haver um campo com o formato "Casa: Casa Escolhida"
  - Deve haver um campo com o formato "Família: Família Escolhida"
  - Deve haver um campo com o formato "Matérias: Matérias, Marcadas, Aqui"
  - Deve haver um campo com o formato "Avaliação: NotaAqui"
  - Deve haver um campo com o formato "Observações: Observações aqui"

#### O que será verificado:

- A tag `form` com o **id** _evaluation-form_ deve ser exibida na tela;
- Os **inputs** tipo `checkbox` referentes à lista de conteúdo possuem `class="subject"`;
- Ao clicar no botão de enviar, existe um texto no formato "Nome: -Nome- -Sobrenome-";
- Ao clicar no botão de enviar, existe um texto no formato "Email: -Email-";
- Ao clicar no botão de enviar, existe um texto no formato "Casa: -Casa-";
- Ao clicar no botão de enviar, existe um texto no formato "Família: -Família-";
- Ao clicar no botão de enviar, existe um texto no formato "Matérias: -Matérias Selecionadas-";
- Ao clicar no botão de enviar, existe um texto no formato "Avaliação: -Avaliação-";
- Ao clicar no botão de enviar, existe um texto no formato "Observações: -Observações-";

### REQUISITOS NÃO AVALIATIVOS:

### 22. Realize o desenvolvimento da versão mobile do formulário Trybewarts

#### Observações técnicas:

- Utilize **media queries** para inserir breakpoints para telas de diferentes tamanhos;
- Leve em conta a largura da tela e a experiência do usuário ao reorganizar o layout para dispositivos menores;
- Tente inserir um menu hambúrguer na barra superior para lidar com o login usando javascript. Se não conseguir, tente criar uma página separada de login, uma prática muito comum;
- Deixe sua criatividade fluir! Preferimos não avaliar esse requisito justamente pra que você tenha liberdade para executar a responsividade da maneira que você achar mais agradável!
