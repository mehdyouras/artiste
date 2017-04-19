const   reName = /^[a-zA-Z ]+$/,
        reEmail = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
        rePhone = /^[0-9]+$/,
        reAddress = /^[a-zA-Z0-9 ]+$/,
        reCount = /^[0-9]+$/;

const fHandleNavbar = function() {
    document.querySelector("header nav ul").classList.toggle("hidden");
};

const fHandleLightbox = function(oEvent) {
    let sCaption, $img, sImgSrc, sLightboxSrc, $lightbox;
    oEvent.preventDefault();
    $img = oEvent.currentTarget;

    sImgSrc = $img.getAttribute("src");
    sLightboxSrc = sImgSrc.substring(0, sImgSrc.indexOf("."))+ "-full.jpg";
    sCaption = $img.parentNode.parentNode.childNodes[1].textContent;  
    document.querySelector("body").innerHTML += "<div class='lightbox'><figure><img src="+sLightboxSrc+"><div class='loader'></div><figcaption>"+sCaption+"</figcaption></figure></div>";
    
    $lightbox = document.querySelector(".lightbox");
    document.querySelector(".lightbox img").addEventListener("load", function() {
        document.querySelector(".lightbox figure").removeChild(document.querySelector("div.loader"));
    });

    const fRemoveLightBox = function() {
        $lightbox.parentNode.removeChild($lightbox);
        Array.from( document.querySelectorAll( "figure img" ) ).forEach( function( $elt ) {
            $elt.addEventListener( "click", fHandleLightbox );
        } );
    }
    $lightbox.addEventListener("click", fRemoveLightBox);
    document.onkeydown = function(evt) {
        evt = evt || window.event;
        if (evt.keyCode == 27) {
            fRemoveLightBox();
        }
    };
};


const fHandleNameInput = function(oEvent) {
        oEvent.currentTarget.classList.remove("input-error");
        let bTest = reName.test(oEvent.currentTarget.value),
            $error = document.querySelector("#form-group-name .error");
        if (oEvent.currentTarget.parentNode.querySelector(".error")){
            oEvent.currentTarget.parentNode.removeChild($error);
            oEvent.currentTarget.parentNode.classList.remove("error");
        }
        if (!bTest) {
            oEvent.currentTarget.parentNode.classList.add("error");
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
        if (oEvent.currentTarget.parentNode.querySelector(".error")){
            oEvent.currentTarget.parentNode.removeChild($error);
            oEvent.currentTarget.parentNode.classList.remove("error");
        }
        if (!bTest) {
            oEvent.currentTarget.parentNode.classList.add("error");
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
        if (oEvent.currentTarget.parentNode.querySelector(".error")){
            oEvent.currentTarget.parentNode.removeChild($error);
            oEvent.currentTarget.parentNode.classList.remove("error");
        }
        if (!bTest) {
            oEvent.currentTarget.parentNode.classList.add("error");
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
            $error = document.querySelector("#form-group-count .error");
        if (oEvent.currentTarget.parentNode.querySelector(".error")){
            oEvent.currentTarget.parentNode.removeChild($error);
            oEvent.currentTarget.parentNode.classList.remove("error");
        }
        if (!bTest) {
            oEvent.currentTarget.parentNode.classList.add("error");
            if (oEvent.currentTarget.value == "") {
                oEvent.currentTarget.parentNode.insertAdjacentHTML('beforeend', '<small class="error">Veuillez remplir ce champ.</small>');  
            } else {
                oEvent.currentTarget.parentNode.insertAdjacentHTML('beforeend', '<small class="error">Veuillez entrer une quantité de catalogue valide.</small>');
            }
        }
};

const fHandleContactModal = function(oEvent) {
    oEvent.preventDefault();
    document.querySelector("body").innerHTML += "<section class='contact modal'><h2 class='hidden'>Obtenir un catalogue</h2><form action='#'><div class='btn-exit'></div><fieldset><legend>Obtenir un catalogue</legend><div id='form-group-name'><label for='name'>Votre nom</label><input type='text' name='name' id='name'></div><div id='form-group-email'><label for='email'>Votre email</label><input type='email' name='email' id='email'></div><div id='form-group-address'><label for='description'>Votre adresse</label><input type='text' name='address' id='address'></div><div id='submit-line'><div><label for='count'>Nombre de catalogue souhaité</label><input type='number' value='1' name='count' id='count'></div><input type='submit' value='Envoyer'></div></fieldset></form></section>";
    
    document.getElementById('name').addEventListener("blur", fHandleNameInput);
    document.getElementById('email').addEventListener("blur", fHandleEmailInput);
    document.getElementById('address').addEventListener("blur", fHandleAddressInput);
    document.getElementById('count').addEventListener("blur", fHandleCountInput);

    const fRemoveModal = function() {
        document.querySelector("body").removeChild(document.querySelector(".modal"));
        document.getElementById("linkToModal").addEventListener("click", fHandleContactModal);
    };
    document.querySelector(".btn-exit").addEventListener("click", fRemoveModal);
    document.onkeydown = function(evt) {
        evt = evt || window.event;
        if (evt.keyCode == 27) {
            fRemoveModal();
        }
    };
};


const fPageIsLoaded = function() {
    document.getElementById("btn-nav").addEventListener("click",fHandleNavbar);

    Array.from( document.querySelectorAll( "figure img" ) ).forEach( function( $elt ) {
        $elt.addEventListener( "click", fHandleLightbox );
    } );

    if(document.getElementById("linkToModal")) {
        document.getElementById("linkToModal").addEventListener("click", fHandleContactModal);
    }
    if(document.querySelector(".contact")) {
        document.getElementById('name').addEventListener("blur", fHandleNameInput);
        document.getElementById('email').addEventListener("blur", fHandleEmailInput);
        document.getElementById('address').addEventListener("blur", fHandleAddressInput);
        document.getElementById('count').addEventListener("blur", fHandleCountInput);
    }
};

window.addEventListener( "load", fPageIsLoaded );