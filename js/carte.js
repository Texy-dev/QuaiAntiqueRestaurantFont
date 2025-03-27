const inputNamePlat = document.getElementById("NamePlatInput");
const inputPrix = document.getElementById("PrixInput");
const btnValidation = document.getElementById("btn-validation-plat");

inputNamePlat.addEventListener("keyup", validateFormCarte);
inputPrix.addEventListener("keyup", validateFormCarte);

function validateFormCarte(){
    const namePlatOk = validateRequired(inputNamePlat);
    const prixOk = validateRequired(inputPrix);

    if(namePlatOk && prixOk){
        btnValidation.disabled = false;
    }
    else{
        btnValidation.disabled = true;
    }

}

function validateRequired(input){
    if(input.value != ''){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    }
    else{
        
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}