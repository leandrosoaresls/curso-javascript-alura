const botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    const form = document.querySelector("#form-adiciona");

    const paciente = obtemPacienteDoFormulario(form);

    const pacienteTr = criaTr(paciente);  

    const erros = validaPaciente(paciente);
    console.log(erros);
    
    if(erros.length > 0) {
        exibeMensagemDeErro(erros);
        return;
    }
    

    const tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    const ul = document.querySelector(".mensagens-erro");

    ul.innerHTML = "";

    form.reset();
});

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

    console.log(paciente.nome.length);

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