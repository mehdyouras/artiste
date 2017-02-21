const fHandleNavbar = function() {
    console.log("test");
    document.querySelector("header nav ul").classList.toggle("hidden");
};


const fPageIsLoaded = function() {
    document.getElementById("btn-nav").addEventListener("click",fHandleNavbar);
};

window.addEventListener( "load", fPageIsLoaded );