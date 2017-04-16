const fHandleNavbar = function() {
    document.querySelector("header nav ul").classList.toggle("hidden");
};

const fRemoveLightbox = function(oEvent) {
    let $lightbox = oEvent.currentTarget;
    $lightbox.parentNode.removeChild($lightbox);
};

const fShowLightbox = function(oEvent) {
    let sCaption, $img, sImgSrc, sLightboxSrc, $lightbox;
    $img = oEvent.currentTarget;

    sImgSrc = $img.getAttribute("src");
    sLightboxSrc = sImgSrc.substring(0, sImgSrc.indexOf("."))+ "-full.jpg";
    //sCaption = $img.querySelector("figcaption").textContent;
    document.querySelector("body").innerHTML += "<div class='lightbox'><figure><img src="+sLightboxSrc+"></img><figcaption>"+sCaption+"</figcaption></figure></div>";
    $lightbox = document.querySelector(".lightbox");
    $lightbox.addEventListener("click", function(oEvent) {
        let $lightbox = oEvent.currentTarget;
        $lightbox.parentNode.removeChild($lightbox);
        Array.from( document.querySelectorAll( "figure img" ) ).forEach( function( $elt ) {
        $elt.addEventListener( "click", fShowLightbox );
    } );
    });
}


const fPageIsLoaded = function() {
    document.getElementById("btn-nav").addEventListener("click",fHandleNavbar);
    Array.from( document.querySelectorAll( "figure img" ) ).forEach( function( $elt ) {
        $elt.addEventListener( "click", fShowLightbox );
    } );
};

window.addEventListener( "load", fPageIsLoaded );