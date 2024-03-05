const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./imagens/aprovado.png" alt="Emoji Aprovado"/>';
const imgReprovado = '<img src="./imagens/reprovado.png" alt="Emoji Reprovado"/>';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="aprovado">Aprovado</span>';
const spanReprovado = '<span class="reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt('Digite a nota minima: '))

let linhas = '';

form.addEventListener('submit',function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
});

function adicionaLinha(){
    const inputNomeativade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if(atividades.includes(inputNomeativade.value)){
        alert(`A atividade "${inputNomeativade.value}" já foi inserida`);
    } else {
    atividades.push(inputNomeativade.value);
    notas.push(parseFloat(inputNotaAtividade.value));
    
    let linha = '<tr>';
    linha += `<td>${inputNomeativade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
    linha += `</tr>`;

    linhas += linha;
    }
    inputNomeativade.value = '';
    inputNotaAtividade.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal(){
    const mediaFinal = calculaMediaFinal();
    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;


}

function calculaMediaFinal(){
    let somaDasNotas = 0;

    for(let i = 0; i < notas.length; i++){
        somaDasNotas += notas[i];
    }

    return somaDasNotas / notas.length;
}


