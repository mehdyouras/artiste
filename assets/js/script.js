;(function(){"use strict";var fHandleNavbar=function fHandleNavbar(){document.querySelector("header nav ul").classList.toggle("hidden");};var fShowLightbox=function fShowLightbox(oEvent){var sCaption=void 0,$img=void 0,sImgSrc=void 0,sLightboxSrc=void 0,$lightbox=void 0;oEvent.preventDefault();$img=oEvent.currentTarget;sImgSrc=$img.getAttribute("src");sLightboxSrc=sImgSrc.substring(0,sImgSrc.indexOf("."))+"-full.jpg";sCaption=$img.parentNode.parentNode.childNodes[1].textContent;document.querySelector("body").innerHTML+="<div class='lightbox'><figure><img src="+sLightboxSrc+"></img><figcaption>"+sCaption+"</figcaption></figure></div>";$lightbox=document.querySelector(".lightbox");$lightbox.addEventListener("click",function(oEvent){var $lightbox=oEvent.currentTarget;$lightbox.parentNode.removeChild($lightbox);Array.from(document.querySelectorAll("figure img")).forEach(function($elt){$elt.addEventListener("click",fShowLightbox);});});};var fPageIsLoaded=function fPageIsLoaded(){document.getElementById("btn-nav").addEventListener("click",fHandleNavbar);Array.from(document.querySelectorAll("figure img")).forEach(function($elt){$elt.addEventListener("click",fShowLightbox);});};window.addEventListener("load",fPageIsLoaded);})();