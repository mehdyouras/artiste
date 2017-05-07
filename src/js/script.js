const gallery1 = {
    "name": "gallery1",
    "figures": [
        ["assets/img/galerie1-full.jpg", "assets/img/galerie1.jpg", "First-aid station. Mutter Ridge, Nui Cay Tri", "First-aid station. Mutter Ridge, Nui Cay Tri"],
        ["assets/img/galerie2-full.jpg", "assets/img/galerie2.jpg", "Helicopter evacuation of the wounded, near hill 400", "Helicopter evacuation of the wounded, near hill 400"],
        ["assets/img/galerie3-full.jpg", "assets/img/galerie3.jpg", "a mortar-equipped marine wades through another of the rivers", "Within feet of the DMZ and at constant risk of ambush, a mortar-equipped marine wades through another of the rivers and steams that combined with the hot, jungled and mountainous terrain to make maneuvering on this operation such tough going"],
        ["assets/img/galerie4-full.jpg", "assets/img/galerie4.jpg", "At First-Aid Center During Operation Prairie", "At First-Aid Center During Operation Prairie"],
        ["assets/img/galerie5-full.jpg", "assets/img/galerie5.jpg", "Casualty of the ultimately successful assault on Hill 484", "Casualty of the ultimately successful assault on Hill 484"],
        ["assets/img/galerie6-full.jpg", "assets/img/galerie6.jpg", "Ammunition airlift during the relief of Khe Sanh", "Ammunition airlift during the relief of Khe Sanh"],
        ["assets/img/galerie7-full.jpg", "assets/img/galerie7.jpg", "Lance Cpl. James C. Farley manning helicopter machine gun of Yankee Papa 13", "Crew chief Lance Cpl. James C. Farley manning helicopter machine gun of Yankee Papa 13"],
        ["assets/img/galerie8-full.jpg", "assets/img/galerie8.jpg", "Helicopter crew chief shouting to crew as wounded pilot lay dying, Vietnam", "Helicopter crew chief James C. Farley shouting to crew as wounded pilot Lt. James E. Magel and Billy Owens lay dying, Vietnam"],
        ["assets/img/galerie9-full.jpg", "assets/img/galerie9.jpg", "James Farley checking on a wounded crewmate while pilot lies dying at his feet", "Helicopter crew chief James C. Farley (R) checking on a wounded crewmate while wounded pilot, Lt. James E. Magel, lies dying at his feet"],
        ["assets/img/galerie10-full.jpg", "assets/img/galerie10.jpg", "Lance Cpl. James Farley putting on helmet aboard Yankee Papa 13", "Lance Cpl. James Farley, helicopter crew chief, putting on helmet aboard Yankee Papa 13"],
        ["assets/img/galerie11-full.jpg", "assets/img/galerie11.jpg", "Wayne Holien (PFC - Marine copter gunner in Vietnam)", "Wayne Holien (PFC - Marine copter gunner in Vietnam)"]
    ]
};


const reName = /^[a-zA-Z ]+$/,
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
    sLightboxSrc = sImgSrc.substring(0, sImgSrc.indexOf(".")) + "-full.jpg";
    sCaption = $img.parentNode.parentNode.childNodes[1].textContent;
    document.querySelector("body").innerHTML += "<div class='lightbox'><figure><img src=" + sLightboxSrc + "><div class='loader'></div><figcaption>" + sCaption + "</figcaption></figure></div>";

    $lightbox = document.querySelector(".lightbox");
    document.querySelector(".lightbox img").addEventListener("load", function() {
        document.querySelector(".lightbox figure").removeChild(document.querySelector("div.loader"));
    });

    const fRemoveLightBox = function() {
        $lightbox.parentNode.removeChild($lightbox);
        Array.from(document.querySelectorAll("figure img")).forEach(function($elt) {
            $elt.addEventListener("click", fHandleLightbox);
        });
    }
    $lightbox.addEventListener("click", fRemoveLightBox);
    document.onkeydown = function(evt) {
        evt = evt || window.event;
        if (evt.keyCode == 27) {
            fRemoveLightBox();
        }
    };
};

const fHandleFigureLinks = function(oEvent) {
    oEvent.preventDefault();
    Array.from(document.querySelectorAll("figure a")).forEach(function($elt) {
        $elt.addEventListener("click", fHandleFigureLinks);
    });
}


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

const fHandleContactModal = function(oEvent) {
    oEvent.preventDefault();
    document.querySelector("body").innerHTML += "<section class='contact modal'><h2 class='hidden'>Obtenir un catalogue</h2><form action='#'><div class='btn-exit'></div><fieldset><legend>Obtenir un catalogue</legend><div id='form-group-name'><label for='name'>Votre nom</label><input type='text' name='name' id='name'></div><div id='form-group-email'><label for='email'>Votre email</label><input type='email' name='email' id='email'></div><div id='form-group-address'><label for='description'>Votre adresse</label><input type='text' name='address' id='address'></div><div id='submit-line'><div><label for='count'>Nombre de catalogue souhaité</label><input type='number' value='1' name='count' id='count'></div><input type='submit' value='Envoyer'></div></fieldset></form></section>";
    fDisableSubmitButton();

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

const fHandleGalleryTab = function(oEvent) {
    oEvent.preventDefault();
    let $elt = oEvent.currentTarget,
        $jsonFile,
        $data;


    if ($elt.classList.contains("active-top")) {
        return;
    }

    document.querySelector(".galerie .active-top").classList.remove("active-top");
    $elt.classList.add("active-top");
    document.querySelector("div ul").innerHTML = "";

    $jsonFile = $elt.getAttribute("id");
    gallery1.figures.forEach(function(figure) { document.querySelector("div ul").innerHTML += '<li><figure><a href="' + figure[0] + '" title="voir l\'image dans sa résolution originale"><img src="' + figure[1] + '" alt="' + figure[2] + '"></a><figcaption>' + figure[3] + '</figcaption></figure></li>' })

    Array.from(document.querySelectorAll(".galerie nav a")).forEach(function($element) {
        $element.addEventListener("click", fHandleGalleryTab);
    });
}

const fPageIsLoaded = function() {
    document.getElementById("btn-nav").addEventListener("click", fHandleNavbar);

    Array.from(document.querySelectorAll("figure img")).forEach(function($elt) {
        $elt.addEventListener("click", fHandleLightbox);
    });
    Array.from(document.querySelectorAll("figure a")).forEach(function($elt) {
        $elt.addEventListener("click", fHandleFigureLinks);
    });

    if (document.getElementById("linkToModal")) {
        document.getElementById("linkToModal").addEventListener("click", fHandleContactModal);
    }
    if (document.querySelector(".contact")) {
        document.getElementById('name').addEventListener("blur", fHandleNameInput);
        document.getElementById('email').addEventListener("blur", fHandleEmailInput);
        document.getElementById('address').addEventListener("blur", fHandleAddressInput);
        document.getElementById('count').addEventListener("blur", fHandleCountInput);
    }
    Array.from(document.querySelectorAll(".galerie nav a")).forEach(function($elt) {
        $elt.addEventListener("click", fHandleGalleryTab);
    });
};

window.addEventListener("load", fPageIsLoaded);