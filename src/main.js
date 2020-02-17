let valorProjetoInput = document.getElementById("valorTotalInput");
let tempoDiarioInput = document.getElementById("tempoDiarioInput");
let diasTrabalhandoInput = document.getElementById("diasTrabalhandoInput");
let diasFeriasInput = document.getElementById("diasFeriasInput");

let valueElement = document.querySelector(".value")


function calculateValue(event){
    event.preventDefault()

    valueElement.innerHTML = ''


    valorProjetoInput.classList.remove("form-input-error")
    tempoDiarioInput.classList.remove("form-input-error")
    diasTrabalhandoInput.classList.remove("form-input-error")
    diasFeriasInput.classList.remove("form-input-error")

    let valorProjeto = Number(valorProjetoInput.value.replace(/[^0-9\.-]+/g,""));
    let diasTrabalhando = Number(diasTrabalhandoInput.value);
    let tempoDiario = Number(tempoDiarioInput.value)
    let diasFerias = Number(diasFeriasInput.value)

    if(!Number(valorProjeto) || null){

        valorProjetoInput.placeholder = "O valor está incorreto"
        valorProjetoInput.classList.add("form-input-error")
        
        valorProjetoInput.value = ""
        
    }
    if(!Number(diasTrabalhando) || null){

        diasTrabalhandoInput.placeholder = "O valor está incorreto"
        diasTrabalhandoInput.classList.add("form-input-error")
        
        diasTrabalhandoInput.value = ""
    
    }
    if(!Number(tempoDiario) || null || tempoDiario > 24){

        tempoDiarioInput.placeholder = "O valor está incorreto"
        tempoDiarioInput.classList.add("form-input-error")
        
        tempoDiarioInput.value = ""
     
    }
    if(!Number(diasFerias)){

        diasFeriasInput.placeholder = "O valor está incorreto"
        diasFeriasInput.classList.add("form-input-error")
        
        diasFeriasInput.value = ""
       
    }

    let valorHora = valorProjeto / (diasTrabalhando * 4 * tempoDiario) + ( diasFerias * diasTrabalhando * tempoDiario)

    if(valorHora === Infinity || isNaN(valorHora)){
        return console.log("sim")
    }
    
    valueElement.appendChild(document.createTextNode(`R$ ${valorHora.toFixed(2)}`));

}