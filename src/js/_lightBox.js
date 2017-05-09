const fHandleLightbox = function(oEvent) {
    let sCaption, $img, sImgSrc, sLightboxSrc, $lightbox;
    oEvent.preventDefault();
    $img = oEvent.currentTarget.firstChild;
    console.log($img);

    sImgSrc = $img.getAttribute("href");
    //sLightboxSrc = sImgSrc.substring(0, sImgSrc.indexOf(".")) + "-full.jpg";
    sCaption = oEvent.currentTarget.lastChild.textContent;
    document.querySelector("body").innerHTML += "<div class='lightbox'><figure><img src=" + sImgSrc + "><div class='loader'></div><figcaption>" + sCaption + "</figcaption></figure></div>";

    $lightbox = document.querySelector(".lightbox");
    document.querySelector(".lightbox img").addEventListener("load", function() {
        document.querySelector(".lightbox figure").removeChild(document.querySelector("div.loader"));
    });

    const fRemoveLightBox = function() {
        $lightbox.parentNode.removeChild($lightbox);
        Array.from(document.querySelectorAll("figure")).forEach(function($elt) {
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