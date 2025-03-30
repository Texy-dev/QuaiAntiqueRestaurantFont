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

const galerieImage = document.getElementById("allImages");
let titre = "Produits frais";
let imgSource = "../Images/produitfrais.jpg";
let monImage = getImage(titre, imgSource);

galerieImage.innerHTML = monImage;

function getImage(titre, urlImage){
    titre = sanitizeHtml(titre);
    urlImage = sanitizeHtml(urlImage);
    return  ` <div class="col p-3">
                    <div class="image-card text-white">
                        <img src="${urlImage}" class="rounded w-100" alt="Des produits frais"/>
                        <p class="titre-image">${titre}</p>
                        <div class="action-image-buttons" data-show="admin">
                            <button type="button" class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#EditionPhotoModal"><i class="bi bi-pencil-square"></i></button>
                            <button type="button" class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#DeletePhotoModal"><i class="bi bi-trash"></i></button>
                        </div>
                    </div>
                </div>`;
}