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
    document.querySelector("body").innerHTML += "<div class='lightbox'><figure><img src="+sLightboxSrc+"></img><figcaption>"+sCaption+"</figcaption></figure></div>";
    
    $lightbox = document.querySelector(".lightbox");
    $lightbox.addEventListener("click", function() {
        $lightbox.parentNode.removeChild($lightbox);
        Array.from( document.querySelectorAll( "figure img" ) ).forEach( function( $elt ) {
            $elt.addEventListener( "click", fShowLightbox );
        } );
    });
}


const fPageIsLoaded = function() {
    document.getElementById("btn-nav").addEventListener("click",fHandleNavbar);
    Array.from( document.querySelectorAll( "figure img" ) ).forEach( function( $elt ) {
        $elt.addEventListener( "click", fHandleLightbox );
    } );
};

window.addEventListener( "load", fPageIsLoaded );