const fPageIsLoaded = function() {
    document.getElementById("btn-nav").addEventListener("click", fHandleNavbar);

    Array.from(document.querySelectorAll("figure")).forEach(function($elt) {
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