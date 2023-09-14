// JavaScript-Code in script.js
var password = "IhrPasswort"; // Setzen Sie hier Ihr Passwort ein

function checkPassword() {
    var enteredPassword = document.getElementById("password").value;
    var textContainer = document.getElementById("text-container");

    if (enteredPassword === password) {
        var newText = prompt("Neuer Text eingeben:");
        textContainer.textContent = newText;
    } else {
        alert("Falsches Passwort. Bitte versuchen Sie es erneut.");
    }
}
