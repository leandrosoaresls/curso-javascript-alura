const botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    const form = document.querySelector("#form-adiciona");

    const paciente = obtemPacienteDoFormulario(form);

    const pacienteTr = criaTr(paciente);  

    const tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

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