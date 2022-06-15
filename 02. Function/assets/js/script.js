const enviar = document.getElementById("enviar");

function addAlunos() {
    //Pegar valores do documento.
    let nomeAluno = document.getElementById("nomeAluno").value;
    let notaUm = document.getElementById("notaUm").value;
    let notaDois = document.getElementById("notaDois").value;

    if (nomeAluno =="" || notaUm == "" || notaDois == "") {
        return;
    }
    
    //Verificar de o aluno foi aprovado.
    CalcMedia(nomeAluno, notaUm, notaDois);

    //Mudar variável para objetos de texto
    nomeAluno = document.createTextNode(nomeAluno);
    notaUm = document.createTextNode(notaUm);
    notaDois = document.createTextNode(notaDois);
    
    //Criar elemento da página HTML.
    const NOVO_ALUNO = document.createElement("p");
    NOVO_ALUNO.appendChild(nomeAluno);
    
    //Atribuir elementos à página HTML.
    const ALIGN_TODOS_ALUNOS = document.getElementById("alignAlunos");
    ALIGN_TODOS_ALUNOS.appendChild(NOVO_ALUNO);    
}

function CalcMedia(nomeAluno, notaUm, notaDois) {
    let aluno = {
        nome: nomeAluno,
        primeiraNota: notaUm,
        segundaNota: notaDois,
        media: 0,
    }
        
    aluno.media = (Number(aluno.primeiraNota) + Number(aluno.segundaNota))/2;
    
    if (aluno.media >= 5) {
        console.log(aluno.media);

        let alunoAprovado = document.createElement("p");
        aluno.nome = document.createTextNode(aluno.nome);
        alunoAprovado.appendChild(aluno.nome);

        const ALIGN_APROVADOS = document.getElementById("alignAlunosAprovados");
        ALIGN_APROVADOS.appendChild(alunoAprovado);
    }

}

enviar.addEventListener("click", addAlunos);