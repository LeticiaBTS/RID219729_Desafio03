const formulario = document.getElementById('formulario');
const nomeTarefaInput = document.getElementById('nomeTarefa');
const etiquetaInput = document.getElementById('etiqueta');
const botaoAdicionar = document.querySelector('#botaoAdicionar');
const listaTarefas = document.getElementById('tarefas');
const contadorConcluidas = document.querySelector('.contadorConcluidas');
const contadorTotal = document.querySelector('.contadorTotal');

botaoAdicionar.addEventListener('click', adicionarTarefa);
formulario.addEventListener('submit', adicionarTarefa);

listaTarefas.addEventListener('click', function(event) {
  const botao = event.target.closest('.botaoConcluir, .botaoTarefaConcluida');

  if (botao) {
    const tarefaItem = event.target.closest('.tarefaItem');
    tarefaItem.classList.toggle('tarefaConcluida');

    if (botao.classList.contains('botaoConcluir')) {
      botao.classList.remove('botaoConcluir');
      botao.classList.add('botaoTarefaConcluida');
      botao.innerHTML = '<img src="icones/visto.svg" alt="">';
      botao.setAttribute('aria-label', 'Tarefa concluída');
    } else {
      botao.classList.remove('botaoTarefaConcluida');
      botao.classList.add('botaoConcluir');
      botao.textContent = 'Concluir';
      botao.removeAttribute('aria-label');
    }

    atualizarContador();
  }
});

function adicionarTarefa(e) {
  e.preventDefault();

  const nome = nomeTarefaInput.value.trim();
  const etiqueta = etiquetaInput.value.trim() || 'sem-etiqueta';

  if (!nome) return;

  const data = new Date().toLocaleDateString('pt-BR');

  const li = document.createElement('li');
  li.className = 'tarefaItem';

  li.innerHTML = `
    <span class="nomeTarefa">${nome}</span>
    <span class="etiqueta">${etiqueta}</span>
    <span class="data">Criado em: ${data}</span>
    <button class="botaoConcluir" type="button">Concluir</button>
  `;

  listaTarefas.appendChild(li);

  nomeTarefaInput.value = '';
  etiquetaInput.value = '';

  atualizarContador();
}

function atualizarContador() {
  const total = listaTarefas.querySelectorAll('.tarefaItem').length;
  const concluidas = listaTarefas.querySelectorAll('.tarefaItem.tarefaConcluida').length;

  contadorTotal.textContent = total;
  contadorConcluidas.textContent = concluidas;
}

atualizarContador();
