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