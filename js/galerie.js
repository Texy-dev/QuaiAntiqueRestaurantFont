const inputNameImage = document.getElementById("NamePhotoInput");
const inputImage = document.getElementById("ImageInput");
const btnEnregistrerPhoto = document.getElementById("btn-validation-photo");

inputNameImage.addEventListener("keyup", validateFormImage);

function validateFormImage(){
    const nameImageOk = validateRequired(inputNameImage);

    if(nameImageOk){
        btnEnregistrerPhoto.disabled = false;
    }
    else{
        btnEnregistrerPhoto.disabled = true;
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