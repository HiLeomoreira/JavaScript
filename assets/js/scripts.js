// Pegar o botão
const BTN = document.getElementById('bnt_add');
//lista de tarefas
const ALIGN_TASKS = document.getElementById('align_Tasks');

function add_task() {

    // Pegar o textbox
    let inputTask = document.getElementById('input_NewTas').value;

    if (inputTask != "" ) {
        
        inputTask = ' ' + inputTask;

        //Criar o container (div) com os elementos checkbox e label 
        let align_NewTask = document.createElement('div');
        let checkBox = document.createElement('input');
        let label  = document.createElement('label');
        let inputTaskNode = document.createTextNode(inputTask); //Torna o texto da textbox compativel com a label

        //Atribuindo propriedades dos elementos filhos do container 
        align_NewTask.setAttribute('class', 'task')
        checkBox.setAttribute('type', 'checkbox');
        checkBox.setAttribute('id', inputTask);
        label.setAttribute('for', inputTask);
        label.appendChild(inputTaskNode);

        //Atribuindo os os filos ao elemento pai (div)
        align_NewTask.appendChild(checkBox);
        align_NewTask.appendChild(label);

        //atribuindo a div à lista de tarefas
        ALIGN_TASKS.appendChild(align_NewTask);

        document.getElementById('input_NewTas').value = null;

    }
} 

BTN.addEventListener('click', add_task);
