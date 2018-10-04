const TodosOsAlunos = document.querySelectorAll('.aluno');

for (let i = 0; i< TodosOsAlunos.length; i++){
    //console.log(TodosOsAlunos[i]);

    const aluno = TodosOsAlunos [i];
    const tdNotaUm = aluno.querySelector(".info-notaum");
    const AlunoNotaUm = tdNotaUm.textContent;
    const tdNotaDois = aluno.querySelector(".info-notadois");
    const AlunoNotaDois = tdNotaDois.textContent;
    const NotaMedia = aluno.querySelector(".info-media");
    
    const Calculo =(parseFloat(AlunoNotaUm) + parseFloat(AlunoNotaDois)) /2;

    NotaMedia.textContent = Calculo.toFixed(2);
}

