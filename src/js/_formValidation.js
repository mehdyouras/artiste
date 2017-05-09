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
        fEnableSubmitButton();
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
};

const fHandleEmailInput = function(oEvent) {
    oEvent.currentTarget.classList.remove("input-error");
    let bTest = reEmail.test(oEvent.currentTarget.value),
        $error = document.querySelector("#form-group-email .error");
    if (oEvent.currentTarget.parentNode.querySelector(".error")) {
        fEnableSubmitButton();
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
};

const fHandleAddressInput = function(oEvent) {
    oEvent.currentTarget.classList.remove("input-error");
    let bTest = reAddress.test(oEvent.currentTarget.value),
        $error = document.querySelector("#form-group-address .error");
    if (oEvent.currentTarget.parentNode.querySelector(".error")) {
        fEnableSubmitButton();
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
};

const fHandleCountInput = function(oEvent) {
    oEvent.currentTarget.classList.remove("input-error");
    let bTest = reCount.test(oEvent.currentTarget.value),
        $error = document.querySelector("#submit-line .error");
    if (oEvent.currentTarget.parentNode.querySelector(".error")) {
        fEnableSubmitButton();
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

const fDisableSubmitButton = function(oEvent) {
    let $submitBtn = document.querySelector('[type="submit"]');
    $submitBtn.setAttribute("disabled", true);
}
const fEnableSubmitButton = function(oEvent) {
    let $submitBtn = document.querySelector('[type="submit"]');
    $submitBtn.removeAttribute("disabled");
}