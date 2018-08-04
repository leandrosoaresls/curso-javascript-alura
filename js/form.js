const botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    const form = document.querySelector("#form-adiciona");

    const paciente = obtemPacienteDoFormulario(form);

    adicionaPacienteNaTabela(paciente);

    const erros = validaPaciente(paciente);
    
    if(erros.length > 0) {
        exibeMensagemDeErro(erros);
        return;
    }
    
    const ul = document.querySelector(".mensagens-erro");

    ul.innerHTML = ""; //limpa lista de erros

    form.reset(); //limpa formulario
});

function adicionaPacienteNaTabela (paciente) {

    const pacienteTr = criaTr(paciente);
    const tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function obtemPacienteDoFormulario (form) {
    const paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
};

function criaTr (paciente) {
    const tr = document.createElement("tr");
    tr.classList.add("paciente");

    tr.appendChild(criaTd(paciente.nome, "info-nome"));
    tr.appendChild(criaTd(paciente.peso, "info-peso"));
    tr.appendChild(criaTd(paciente.altura, "info-altura"));
    tr.appendChild(criaTd(paciente.gordura, "info-gordura"));
    tr.appendChild(criaTd(paciente.imc, "info-imc"));
    

    return tr;
};

function criaTd (dado, classe) {
    const td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
};

function validaPaciente (paciente) {
    let erros = [];

    //console.log(paciente.nome.length);

    if(paciente.nome.length == 0) { 

        erros.push("O nome não pode estar em branco.");
    }

    if(paciente.gordura.length == 0) {

        erros.push("A gordura não pode estar em branco.");
    }

    if(!validaPeso(paciente.peso)) {

        erros.push("Peso inválido ou vazio.");
    } 

    if (!validaAltura(paciente.altura)) {
        erros.push("Altura inválida ou vazio.");
    }

    return erros;
}

function exibeMensagemDeErro (erros) {
    const ul = document.querySelector(".mensagens-erro");

    ul.innerHTML = "";

    erros.forEach(function(erro) {
        const li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    })
}