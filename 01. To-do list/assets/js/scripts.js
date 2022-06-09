// Pegar o botão
const BTN = document.getElementById('bnt_add');
//lista de tarefas
const ALIGN_TASKS = document.getElementById('align_Tasks');
//Definir array com checkbox
var allCheckbox = [];

function add_task() {

    // Pegar o textbox
    let inputTask = document.getElementById('input_NewTas').value;

    if (inputTask != "" ) {
        
        inputTask = ' ' + inputTask;

        //Criar o container (div) com os elementos checkbox e label 
        let align_NewTask = document.createElement('div');
        let checkBox = document.createElement('input');
        let inputTaskNode = document.createTextNode(inputTask); //Torna o texto da textbox compativel com a label
        let label  = document.createElement('label');

        //Atribuindo propriedades dos elementos filhos do container 
        align_NewTask.setAttribute('class', 'task')
        align_NewTask.setAttribute('id', inputTask);
        checkBox.setAttribute('name', 'checkbox')
        checkBox.setAttribute('type', 'checkbox');
        checkBox.setAttribute('class', 'checkbox');
        checkBox.setAttribute('id', 'i' + inputTask);
        checkBox.addEventListener('change', riscar); //Adiciona o evento mudar ao checkbox; funçao riscar;
        label.setAttribute('for', 'i' + inputTask);
        label.appendChild(inputTaskNode);

        //Atribuindo os os filos ao elemento pai (div)
        align_NewTask.appendChild(checkBox);
        align_NewTask.appendChild(label);

        //atribuindo a div à lista de tarefas
        ALIGN_TASKS.appendChild(align_NewTask);

        //Adicionar o novo input a array allChecbox;
        allCheckbox.push(inputTask);

        //Limpar a caixa de texto
        document.getElementById('input_NewTas').value = null;
    }
} 

function riscar() {
    allCheckbox.forEach(element => {
        var idCheckbox = document.getElementById(element);
        idCheckbox.classList.toggle('checked');
    })
}

//Eventos
BTN.addEventListener('click', add_task);
