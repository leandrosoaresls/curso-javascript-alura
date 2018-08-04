const campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    const pacientes = document.querySelectorAll(".paciente");
    
    if(this.value.length > 0) {
        for(let i = 0; i < pacientes.length; i++) {
            const paciente = pacientes[i];
            const nome = paciente.querySelector(".info-nome").textContent;

            const expressao = new RegExp(this.value, "i");

            if(expressao.test(nome)) {
                paciente.classList.remove("invisivel");
            } else {
                paciente.classList.add("invisivel");
            }
                        
        }
    } else {
        for(let i = 0; i < pacientes.length; i++) {
            const paciente = pacientes[i];           
            paciente.classList.remove("invisivel");    
        }
    }
 
    
})