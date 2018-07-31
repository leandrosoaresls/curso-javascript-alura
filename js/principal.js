const pacientes = document.querySelectorAll(".paciente");

for(i = 0; i < pacientes.length; i++) {
    let paciente  = pacientes[i];
    const peso = paciente.querySelector(".info-peso").textContent;
    const altura = paciente.querySelector(".info-altura").textContent;
    const imc = peso / (altura * altura);
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
        tdImc.textContent = imc.toFixed(2);
    }
}

var inputFrase = document.querySelector('.frase');
var botao = document.querySelector('.botao');
var copia = document.querySelector('.copia');

function botaoHandler() {

    copia.textContent = inputFrase.value;
    inputFrase.value = "";
}

//botao.addEventListener('click', botaoHandler);

botao.addEventListener("click", function(event){
    //event.preventDefault();

    console.log(event);
    //Código para adicionar na lista de tarefas
});