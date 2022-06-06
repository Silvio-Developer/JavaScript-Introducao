var listaTarefas = document.getElementById('listaVazia');
var adicionarTarefa = document.getElementById('tarefaAdicionada');
var tarefaRealizada = document.getElementById('tarefaRealizada');
var tarefaNaoRealizada = document.getElementById('tarefaNaoRealizada');
const form = document.getElementById('task-form');
const taskList = document.getElementById('tasks');
var contadorTarefa = 0;

form.onsubmit = function (e) {
	e.preventDefault();
	const inputField = document.getElementById('task-input');
    if (inputField.value != ""){

        addTask(inputField.value);
	    form.reset();
        contadorTarefa = contadorTarefa + 1
        adicionarTarefa.innerHTML = contadorTarefa;
        verificarCheckBox();
    }
};

function verificarCheckBox() {
    var checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
    let  contadorRealizada = 0;
    for (let i = 0 ; i < checkboxes.length; i++){ 
        if (checkboxes[i].checked == true){
            contadorRealizada += 1
        } 
        else{
            contadorRealizada -= 1;
        }
    }
    if (contadorTarefa > 0){
        listaTarefas.innerHTML = 'Você tem nova(s) tarefa(s)! Oba:)';
    }
    if (contadorTarefa > 0 && contadorTarefa === contadorRealizada){
        listaTarefas.innerHTML = 'Você finalizou sua(s) tarefa(s) Parabéns!:)';
    }
    tarefaRealizada.innerHTML = contadorRealizada;
    tarefaNaoRealizada.innerHTML = contadorTarefa - contadorRealizada;

}
let contadorCheckBox = 0;
function addCheckBox(){
    contadorCheckBox = contadorCheckBox + 1;
    return contadorCheckBox;
}
function addTask(description) {
	const taskContainer = document.createElement('li');
	const newTask = document.createElement('input');
	const taskLabel = document.createElement('label');
	const taskDescriptionNode = document.createTextNode(description);
    var id = (description + contadorCheckBox);
	newTask.setAttribute('type', 'checkbox');
	newTask.setAttribute('name', description);
	newTask.setAttribute('id', id);
    taskLabel.setAttribute('for', description);
	taskLabel.appendChild(taskDescriptionNode);
	taskContainer.classList.add('task-item');
	taskContainer.appendChild(newTask);
	taskContainer.appendChild(taskLabel);

	taskList.appendChild(taskContainer);
}