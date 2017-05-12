const fHandleLightbox = function(oEvent) {
    let sCaption, $img, sImgSrc, sLightboxSrc, $lightbox, sCurrentImg, sCurrentImgIndex, $figures, sNextImage, sNextImageCaption;
    oEvent.preventDefault();
    $img = oEvent.currentTarget.firstChild;
    $figures =  Array.from(document.querySelectorAll("figure"));

    sImgSrc = $img.getAttribute("href");

    sCaption = oEvent.currentTarget.lastChild.textContent;
    document.querySelector("body").innerHTML += "<div class='lightbox'><figure><img src=" + sImgSrc + "><div class='loader'></div><figcaption>" + sCaption + "</figcaption></figure></div>";

    $lightbox = document.querySelector(".lightbox");
    document.querySelector(".lightbox img").addEventListener("load", function() {
        document.querySelectorAll(".lightbox div.loader").forEach(function() {
            document.querySelector(".lightbox figure").removeChild(document.querySelector(".lightbox div.loader"));
        });
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
        if (evt.keyCode == 27) { // ESC key
            fRemoveLightBox();
        }
        if(evt.keyCode == 37) { // Left arrow key
            sCurrentImg = document.querySelector(".lightbox img").getAttribute("src");
            sCurrentImgIndex = sCurrentImg.match(/_[1-9]*[0-9]/);
            sCurrentImgIndex = sCurrentImgIndex[0].replace("_", "");
            if(parseInt(sCurrentImgIndex) === 1) {
                sNextImage = sCurrentImg.replace("_1", "_" + $figures.length);
                document.querySelector(".lightbox img").setAttribute("src", sNextImage)
                document.querySelector(".lightbox figure").innerHTML += "<div class='loader'></div>";
                sNextImageCaption = document.querySelector('img[src="'+ sNextImage.replace("-full", "") + '"]').parentNode.parentNode.childNodes[1].textContent;
                document.querySelector(".lightbox figcaption").innerHTML = sNextImageCaption;
            } else {
                sNextImage = sCurrentImg.replace("_" + sCurrentImgIndex, "_" + parseInt(sCurrentImgIndex - 1));
                document.querySelector(".lightbox img").setAttribute("src", sNextImage);
                document.querySelector(".lightbox figure").innerHTML += "<div class='loader'></div>";
                sNextImageCaption = document.querySelector('img[src="'+ sNextImage.replace("-full", "") + '"]').parentNode.parentNode.childNodes[1].textContent;
                document.querySelector(".lightbox figcaption").innerHTML = sNextImageCaption;
            }
        }
        if(evt.keyCode == 39) { // right arrow key
            sCurrentImg = document.querySelector(".lightbox img").getAttribute("src");
            sCurrentImgIndex = sCurrentImg.match(/_[1-9]*[0-9]/);
            sCurrentImgIndex = sCurrentImgIndex[0].replace("_", "");
            if(parseInt(sCurrentImgIndex) === $figures.length) {
                sNextImage = sCurrentImg.replace("_" + $figures.length, "_1");
                document.querySelector(".lightbox img").setAttribute("src", sNextImage)
                document.querySelector(".lightbox figure").innerHTML += "<div class='loader'></div>";
                sNextImageCaption = document.querySelector('img[src="'+ sNextImage.replace("-full", "") + '"]').parentNode.parentNode.childNodes[1].textContent;
                document.querySelector(".lightbox figcaption").innerHTML = sNextImageCaption;
            } else {
                sNextImage = sCurrentImg.replace("_" + sCurrentImgIndex, "_" + (parseInt(sCurrentImgIndex) + 1));
                document.querySelector(".lightbox img").setAttribute("src", sNextImage);
                document.querySelector(".lightbox figure").innerHTML += "<div class='loader'></div>";
                sNextImageCaption = document.querySelector('img[src="'+ sNextImage.replace("-full", "") + '"]').parentNode.parentNode.childNodes[1].textContent;
                document.querySelector(".lightbox figcaption").innerHTML = sNextImageCaption;
            }
        }
        if(document.querySelector(".lightbox div.loader")) {
            document.querySelector(".lightbox img").addEventListener("load", function() {
                document.querySelectorAll(".lightbox div.loader").forEach(function() {
                    document.querySelector(".lightbox figure").removeChild(document.querySelector(".lightbox div.loader"));
                });
            });
        }
    };
};

const fHandleFigureLinks = function(oEvent) {
    oEvent.preventDefault();
    Array.from(document.querySelectorAll("figure a")).forEach(function($elt) {
        $elt.addEventListener("click", fHandleFigureLinks);
    });
}