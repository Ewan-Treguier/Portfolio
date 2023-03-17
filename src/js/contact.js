function copyEmail() {
    const email = "monemail@example.com";
    navigator.clipboard.writeText(email);
    alert("Adresse email copiée dans le presse-papiers : " + email);
}

function copyPhone() {
    const phone = "01 23 45 67 89";
    navigator.clipboard.writeText(phone);
    alert("Numéro de téléphone copié dans le presse-papiers : " + phone);
}


function displayMessage(message) {
    document.getElementById("message").innerHTML = message;
}

function clearMessage() {
    document.getElementById("message").innerHTML = "";
}


