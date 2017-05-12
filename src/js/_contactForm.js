// const fHandleContactModal = function(oEvent) {
//     oEvent.preventDefault();
//     document.querySelector("body").innerHTML += "<section class='contact modal'><h2 class='hidden'>Obtenir un catalogue</h2><form action='#'><div class='btn-exit'></div><fieldset><legend>Obtenir un catalogue</legend><div id='form-group-name'><label for='name'>Votre nom</label><input type='text' name='name' id='name'></div><div id='form-group-email'><label for='email'>Votre email</label><input type='email' name='email' id='email'></div><div id='form-group-address'><label for='address'>Votre adresse</label><input type='text' name='address' id='address'></div><div id='submit-line'><div><label for='count'>Nombre de catalogue souhaité</label><input type='number' value='1' name='count' id='count'></div><input type='submit' value='Envoyer'></div></fieldset></form></section>";
//     fDisableSubmitButton();

//     document.getElementById('name').addEventListener("blur", fHandleNameInput);
//     document.getElementById('email').addEventListener("blur", fHandleEmailInput);
//     document.getElementById('address').addEventListener("blur", fHandleAddressInput);
//     document.getElementById('count').addEventListener("blur", fHandleCountInput);

//     const fRemoveModal = function() {
//         document.querySelector("body").removeChild(document.querySelector(".modal"));
//         document.getElementById("linkToModal").addEventListener("click", fHandleContactModal);
//     };
//     document.querySelector(".btn-exit").addEventListener("click", fRemoveModal);
//     document.onkeydown = function(evt) {
//         evt = evt || window.event;
//         if (evt.keyCode == 27) {
//             fRemoveModal();
//         }
//     };
// };

const fHandleContactModal = function(oEvent) {
    oEvent.preventDefault();
    fDisableSubmitButton();
    document.querySelector(".contact").style.height = "auto";
    document.querySelector(".contact").style.opacity = "1";
}