const pacientes = document.querySelectorAll(".paciente");

for(i = 0; i < pacientes.length; i++) {
    let paciente  = pacientes[i];
    const peso = paciente.querySelector(".info-peso").textContent;
    const altura = paciente.querySelector(".info-altura").textContent;
    
    let tdImc = paciente.querySelector(".info-imc");

    pesoEhInvalido = true;
    alturaEhInvalida = true;

    if (peso <= 0 || peso >= 100) {
        pesoEhInvalido = false;
        tdImc.textContent = "O peso é ínválido!";
        paciente.classList.add("paciente-invalido");
    } else if (altura <= 0 || altura >= 3.00) {
        alturaEhInvalida = false;
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



