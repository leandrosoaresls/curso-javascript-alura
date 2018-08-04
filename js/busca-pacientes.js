const botaoBuscar = document.querySelector("#buscar-pacientes");

botaoBuscar.addEventListener("click", function () {
    const xhr = new XMLHttpRequest();
    
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function(){
        
        const erroAjax = document.querySelector("#erro-ajax");
        
        if(xhr.status == 200) {
            
            const resposta = xhr.responseText;
            const pacientes = JSON.parse(resposta);
    
            pacientes.forEach(function (paciente){
    
                adicionaPacienteNaTabela(paciente);
            });
        } else {

            erroAjax.classList.remove("invisivel");            
        }
        
    });

    xhr.send();

    
    
})