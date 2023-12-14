document.addEventListener("DOMContentLoaded", function () {
  const lavoirpendentif = document.querySelector(".choix");
  const lavoirpaspendentif = document.querySelector(".choix2");

  lavoirpendentif.addEventListener("click", () => {
    localStorage.setItem("choix", "pendentif"); // Enregistre le choix 1 dans le localStorage
    showConfirmationMessage("Vous avez choisi le Choix 1. Le message associé est : Tu as choisi de prendre le pendentif");
  });

  lavoirpaspendentif.addEventListener("click", () => {
    localStorage.setItem("choix", "paspendentif"); // Enregistre le choix 2 dans le localStorage
    showConfirmationMessage("Vous avez choisi le Choix 2. Le message associé est : Tu as choisi de ne pas prendre le pendentif");
  });

  function showConfirmationMessage(message) {
    // Créer un élément de message
    const confirmationMessage = document.createElement("p");
    confirmationMessage.innerHTML = message;

    // Ajouter le style au message (vous pouvez personnaliser le style selon vos préférences)
    confirmationMessage.style.backgroundColor = "#4CAF50";
    confirmationMessage.style.color = "#ffffff";
    confirmationMessage.style.padding = "10px";
    confirmationMessage.style.borderRadius = "5px";
    confirmationMessage.style.textAlign = "center";
    confirmationMessage.style.marginTop = "10px";

    // Ajouter le message à la page
    document.body.appendChild(confirmationMessage);

    // Disparition du message après quelques secondes (vous pouvez ajuster le délai)
    setTimeout(() => {
      confirmationMessage.remove();
    }, 3000);
  }
});
