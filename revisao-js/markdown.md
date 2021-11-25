### 1 - [ ]  Funções em JavaScript ###
 Funções são blocos de construção fundamentais em JavaScript. Uma função é um procedimento de JavaScript - um conjunto de instruções que executa uma tarefa ou calcula um valor. Para usar uma função, você deve defini-la em algum lugar no escopo do qual você quiser chamá-la.

 ### 2 - [ ] Objeto em JavaScript => Sintaxe, o que é e como usar ###

Um objeto é uma entidade independente, com propriedades e tipos. Compare-o com uma xícara, por exemplo. Uma xícara é um objeto, com propriedades. ... Da mesma forma, objetos em JavaScript podem ter propriedades, que definem suas características.

### 3 - [ ]  Array  ⇒ Sintaxe, o que é e como usar ###
O JavaScript Array faz parte dos objetos globais da linguagem e é utilizado para armazenar uma coleção de elementos em uma única variável. Na prática, o array é uma estrutura de dados que contém um índice numérico e um elemento, que pode ser de qualquer tipo primitivo de dados, um objeto ou, até mesmo, um outro array.

 ### 4 - [ ]  Map  ⇒ Sintaxe, o que é e como usar ###

 O JavaScript map faz parte do conjunto de métodos disponíveis na linguagem para a manipulação de objetos do tipo array. Ele funciona como uma estrutura de repetição, pois percorre todos os elementos do array, executa determinada ação e retorna um novo conteúdo.


### 5 - [ ]  Filter  ⇒ Sintaxe, o que é e como usar ###

filter() chama a função callback fornecida, uma vez para cada elemento do array, e constrói um novo array com todos os valores para os quais o callback retornou o valor true ou um valor que seja convertido para true.



### 6 - [ ]  Diferenças entre Map e Filter ###

filter() - Filtra um array
Ele irá aplicar essa condição em todos os itens de nosso array e aqueles que se enquadrarem na condição serão retornados e adicionados ao novo array de saída. Dessa forma, diferente do que ocorre no map() e no reduce(), o filter() irá retornar sempre true ou false.


### 7 - [ ]  Diferença entre os métodos push e pop e como usá-los ###

Se não sabe, pushing é adicionar um elemento ao topo da stack de elementos e popping é remover o elemento no topo da mesma stack.

<!-- como usar push : -->

# - O método push() adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array. ...
# - O seguinte código cria um array esportes que contém dois elementos. ...
# - Este exemplo utiliza apply() para adicionar todos os elementos de um segundo array.

<!-- como usar pop:  -->

# - O método pop remove o último elemento de um array e retorna aquele valor.

# - Esse método é intencionalmente genérico. Podendo ser utilizado por call ou apply em objetos que implementam arrays.

# - Se você chamar pop() em um array vazio, ele retorna o valor undefined.

### 8 - [ ]  Método slice do array  ⇒ Sintaxe, o que é e como usar ###

O método slice() retorna uma cópia de parte de um array a partir de um subarray criado entre as posições início e fim (fim não é necessário) de um array original. O Array original não é modificado.



### 9 - [ ]  Método splice do array  ⇒ Sintaxe, o que é e como usar ###

O método splice() permite inserir novos elementos e excluir elementos existentes em um array simultaneamente. Para fazer isso você passa pelo menos 3 argumentos, sendo o segundo que vai especificar o número de ítens a serem excluídos e o terceiro indicando os elementos a serem inseridos.

