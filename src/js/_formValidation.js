const reName = /^[a-zA-Z ]+$/,
    reEmail = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
    rePhone = /^[0-9]+$/,
    reAddress = /^[a-zA-Z0-9 ]+$/,
    reCount = /^[0-9]+$/;

const fHandleNameInput = function(oEvent) {
    oEvent.currentTarget.classList.remove("input-error");
    let bTest = reName.test(oEvent.currentTarget.value),
        $error = document.querySelector("#form-group-name .error");
    if (oEvent.currentTarget.parentNode.querySelector(".error")) {
        oEvent.currentTarget.parentNode.removeChild($error);
        oEvent.currentTarget.parentNode.classList.remove("error");
    }
    if (!bTest) {
        oEvent.currentTarget.parentNode.classList.add("error");
        fDisableSubmitButton();
        if (oEvent.currentTarget.value == "") {
            oEvent.currentTarget.parentNode.insertAdjacentHTML('beforeend', '<small class="error">Veuillez remplir ce champ.</small>');
        } else {
            oEvent.currentTarget.parentNode.insertAdjacentHTML('beforeend', '<small class="error">Veuillez entrer un nom valide composé uniquement de lettre.</small>');
        }
    }
    fEnableSubmitButton();
};

const fHandleEmailInput = function(oEvent) {
    oEvent.currentTarget.classList.remove("input-error");
    let bTest = reEmail.test(oEvent.currentTarget.value),
        $error = document.querySelector("#form-group-email .error");
    if (oEvent.currentTarget.parentNode.querySelector(".error")) {
        oEvent.currentTarget.parentNode.removeChild($error);
        oEvent.currentTarget.parentNode.classList.remove("error");
    }
    if (!bTest) {
        oEvent.currentTarget.parentNode.classList.add("error");
        fDisableSubmitButton();
        if (oEvent.currentTarget.value == "") {
            oEvent.currentTarget.parentNode.insertAdjacentHTML('beforeend', '<small class="error">Veuillez remplir ce champ.</small>');
        } else {
            oEvent.currentTarget.parentNode.insertAdjacentHTML('beforeend', '<small class="error">Veuillez entrer une adresse email valide.</small>');
        }
    }
    fEnableSubmitButton();
};

const fHandleAddressInput = function(oEvent) {
    oEvent.currentTarget.classList.remove("input-error");
    let bTest = reAddress.test(oEvent.currentTarget.value),
        $error = document.querySelector("#form-group-address .error");
    if (oEvent.currentTarget.parentNode.querySelector(".error")) {
        oEvent.currentTarget.parentNode.removeChild($error);
        oEvent.currentTarget.parentNode.classList.remove("error");
    }
    if (!bTest) {
        oEvent.currentTarget.parentNode.classList.add("error");
        fDisableSubmitButton();
        if (oEvent.currentTarget.value == "") {
            oEvent.currentTarget.parentNode.insertAdjacentHTML('beforeend', '<small class="error">Veuillez remplir ce champ.</small>');
        } else {
            oEvent.currentTarget.parentNode.insertAdjacentHTML('beforeend', '<small class="error">Veuillez entrer une adresse valide.</small>');
        }
    }
    fEnableSubmitButton();
};

const fHandleCountInput = function(oEvent) {
    oEvent.currentTarget.classList.remove("input-error");
    let bTest = reCount.test(oEvent.currentTarget.value),
        $error = document.querySelector("#submit-line .error");
    if (oEvent.currentTarget.parentNode.querySelector(".error")) {
        oEvent.currentTarget.parentNode.removeChild($error);
        oEvent.currentTarget.parentNode.classList.remove("error");
    }
    if (!bTest) {
        oEvent.currentTarget.parentNode.classList.add("error");
        fDisableSubmitButton();
        if (oEvent.currentTarget.value == "") {
            oEvent.currentTarget.parentNode.insertAdjacentHTML('beforeend', '<small class="error">Veuillez remplir ce champ.</small>');
        } else {
            oEvent.currentTarget.parentNode.insertAdjacentHTML('beforeend', '<small class="error">Veuillez entrer une quantité de catalogue valide.</small>');
        }
    }
};

const fValidateForm = function() {
    document.querySelector("body").removeChild(document.querySelector(".contact"));
    let linkToForm = document.querySelector("#linkToForm");
    linkToForm.textContent = "Formulaire envoyé avec succès";
    linkToForm.parentNode.classList.add("success");
}

const fDisableSubmitButton = function(oEvent) {
    let $submitBtn = document.querySelector('[type="submit"]');
    $submitBtn.setAttribute("disabled", true);
fEnableSubmitButton();
}
const fEnableSubmitButton = function(oEvent) {
    if(document.querySelector(".error") || document.querySelector("#name").value === "" || document.querySelector("#email").value === "" || document.querySelector("#address").value === "") {
        return;
    }
    let $submitBtn = document.querySelector('[type="submit"]');
    $submitBtn.removeAttribute("disabled");
    $submitBtn.addEventListener("click", fValidateForm);
}