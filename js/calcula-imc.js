const pacientes = document.querySelectorAll(".paciente");

for(i = 0; i < pacientes.length; i++) {
    let paciente  = pacientes[i];
    const peso = paciente.querySelector(".info-peso").textContent;
    const altura = paciente.querySelector(".info-altura").textContent;
    
    let tdImc = paciente.querySelector(".info-imc");

    if (!validaPeso(peso)) {
        tdImc.textContent = "O peso é ínválido!";
        paciente.classList.add("paciente-invalido");
    } else if (!validaAltura(altura)) { 
        tdImc.textContent = "A altura é inválida";
        paciente.classList.add("paciente-invalido");
    } else {
        tdImc.textContent = calculaImc(peso, altura);
    }
}

function calculaImc (peso, altura) {
    
    let imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function validaPeso (peso) {

    if(peso > 0 && peso < 100) {

        return true;
    } else {

        return false;
    }
}

function validaAltura (altura) {

    if(altura > 0 && altura < 3.00) {

        return true;
    } else {

        return false;
    }
}