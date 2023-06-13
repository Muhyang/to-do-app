const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-tasks')

let minhaListaItens = []

function adicionarNovaTarefa() {

    minhaListaItens.push({
        tarefa: input.value,
        concluida: false
    })

    input.value = ''

    mostrarTarefas()
}




function mostrarTarefas() {
    let novaLi = ''

    minhaListaItens.forEach((item, index) => {
        novaLi += `          
            <li class="task ${item.concluida && "done"}">
                <img src="./img/checked.png" alt="chech-da-tafera" onclick="concluirTarefa(${index})">
                <p>${item.tarefa}</p>
                <img src="./img/trash.png" alt="tafera-para-apagar" onclick="deletarItem(${index})">
            </li>
            `
    })

    listaCompleta.innerHTML = novaLi

    localStorage.setItem('lista', JSON.stringify(minhaListaItens))
}


function deletarItem(index) {
    minhaListaItens.splice(index, 1)
    mostrarTarefas()
}

function concluirTarefa(index) {
    minhaListaItens[index].concluida = !minhaListaItens[index].concluida
    mostrarTarefas()
}

function recarrgarTerefas() {
    const tarefasDoLocalStorage = localStorage.getItem('lista')

    if (tarefasDoLocalStorage) {
        minhaListaItens = JSON.parse(tarefasDoLocalStorage)
    }
    mostrarTarefas()
}

recarrgarTerefas()

button.addEventListener('click', adicionarNovaTarefa)
