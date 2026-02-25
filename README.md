#  Board de Tarefas

##  Sobre o Projeto
O Board de Tarefas é uma aplicação web desenvolvida com HTML, CSS e JavaScript que permite gerenciar tarefas de forma dinâmica e interativa.

O sistema simula um gerenciador de tarefas onde o usuário pode visualizar, adicionar e concluir atividades, com atualização automática da interface sem necessidade de recarregar a página.

Este projeto foi desenvolvido com foco na manipulação do DOM, eventos em JavaScript e organização semântica utilizando HTML5.

---

##  Funcionalidades
-  Carregamento automático da lista de tarefas ao abrir a página
-  Adição de novas tarefas pelo formulário
-  Marcar tarefas como concluídas
-  Substituição do botão "Concluir" por um botão de check
-  Texto da tarefa riscado (strikethrough) ao concluir
-  Atualização automática do contador de tarefas concluídas
-  Interface estilizada com CSS

---

##  Tecnologias Utilizadas
- HTML (estrutura semântica)
- CSS (estilização e layout)
- JavaScript (manipulação do DOM e interatividade)

---

##  Funcionamento do Sistema
Ao carregar a página, uma lista inicial de tarefas é renderizada automaticamente na interface.

Quando o usuário adiciona uma nova tarefa pelo formulário, ela é inserida dinamicamente no board utilizando JavaScript.  
Ao clicar no botão "Concluir", ocorrem as seguintes alterações:
- O botão é substituído por um botão de tarefa concluída (check)
- O nome da tarefa recebe estilo riscado (strikethrough)
- O contador de tarefas concluídas é atualizado automaticamente

Todas as interações são feitas por meio da manipulação do DOM, garantindo uma experiência dinâmica e responsiva.

---

##  Estrutura do Projeto

├── index.html<br>
├── style.css<br>
└── script.js


---

##  Como Executar o Projeto

1. Baixe ou clone o repositório
2. Abra o arquivo index.html no navegador.
Não é necessário instalar dependências ou frameworks.
