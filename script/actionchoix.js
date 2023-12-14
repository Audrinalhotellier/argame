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

document.addEventListener("DOMContentLoaded", function () {

    // localStorage.clear();

  //////////////////////////////////////////////////////////////////////////////
  try {
    const QRM3choix1 = document.getElementById('QR3Mchoix1');
    const QRM3choix2 = document.getElementById('QR3Mchoix2'); 
    
    QRM3choix1.addEventListener("click", () => {
      const tab = {"a_pendentif":true};
      localStorage.setItem("QRM3", JSON.stringify(tab)); // Enregistre le choix 1 dans le localStorage
      showConfirmationMessage("Vous avez choisi le Choix 1. Le message associé est : Tu as choisi de prendre le pendentif");
    });

    QRM3choix2.addEventListener("click", () => {
      const tab = {"a_pendentif":false};

      localStorage.setItem("QRM3", JSON.stringify(tab)); // Enregistre le choix 1 dans le localStorage
      showConfirmationMessage("Vous avez choisi le Choix 2. Le message associé est : Tu as choisi de prendre le pendentif");
    });

  } catch (error) {
    console.log('error: QRM3 not loaded');
  }
  
  //////////////////////////////////////////////////////////////////////////////
  try {
    var QRM4choix1 = document.getElementById('QR4Mchoix1');
    var QRM4choix2 = document.getElementById('QR4Mchoix2');

    QRM4choix1.addEventListener("click", () => {
        const tab = {"personnage":"a_fata",
                    "est_maudit":false};
        localStorage.setItem("QRM4", JSON.stringify(tab)); // Enregistre le choix 1 dans le localStorage
        showConfirmationMessage("Vous avez choisi le Choix 1. Le message associé est : Tu as choisi de prendre le pendentif");
      });

    QRM4choix2.addEventListener("click", () => {
      const tab = {"personnage":"a_sciaquaghjola",
      "est_maudit":true};
    
      localStorage.setItem("QRM4", JSON.stringify(tab)); // Enregistre le choix 1 dans le localStorage
      showConfirmationMessage("Vous avez choisi le Choix 2. Le message associé est : Tu as choisi de prendre le pendentif");
    });

  } catch (error) {
    console.log('error:  QRM4 not loaded');
  }

  //////////////////////////////////////////////////////////////////////////////
  try {
    var QRM5choix1 = document.getElementById('QR5Mchoix1');
    var QRM5choix2 = document.getElementById('QR5Mchoix2');
    
    QRM5choix1.addEventListener("click", () => {
      const tab = {"marcher":false};
      localStorage.setItem("QRM5", JSON.stringify(tab)); // Enregistre le choix 1 dans le localStorage
      showConfirmationMessage("Vous avez choisi le Choix 1. Le message associé est : Tu as choisi de prendre le pendentif");
    });

    QRM5choix2.addEventListener("click", () => {
      const tab = {"marcher":true};
      localStorage.setItem("QRM5", JSON.stringify(tab)); // Enregistre le choix 1 dans le localStorage
      showConfirmationMessage("Vous avez choisi le Choix 2. Le message associé est : Tu as choisi de prendre le pendentif");
    });

  } catch (error) {
    console.log('error:  QRM5 not loaded');
  }

  //////////////////////////////////////////////////////////////////////////////
  try {
    var QRM6choix1 = document.getElementById('QR6Mchoix1');
    var QRM6choix2 = document.getElementById('QR6Mchoix2');

    QRM6choix1.addEventListener("click", () => {
      const tab = {"a_bougie":false};
      
      localStorage.setItem("QRM6", JSON.stringify(tab)); // Enregistre le choix 1 dans le localStorage
      showConfirmationMessage("Vous avez choisi le Choix 1. Le message associé est : Tu as choisi de prendre le pendentif");
    });

    QRM6choix2.addEventListener("click", () => {
      const tab = {"a_bougie":true};
   
      localStorage.setItem("QRM6", JSON.stringify(tab)); // Enregistre le choix 1 dans le localStorage
      showConfirmationMessage("Vous avez choisi le Choix 2. Le message associé est : Tu as choisi de prendre le pendentif");
    });
  } catch (error) {
    console.log('error: QRM6 not loaded');
  }

  //////////////////////////////////////////////////////////////////////////////
  try {
    var QRM8choix1 = document.getElementById('QR8Mchoix1');
    var QRM8choix2 = document.getElementById('QR8Mchoix2');

    QRM8choix1.addEventListener("click", () => {
      const tab = {"croire":false};
  
      localStorage.setItem("QRM8", JSON.stringify(tab)); // Enregistre le choix 1 dans le localStorage
    
      showConfirmationMessage("Vous avez choisi le Choix 1. Le message associé est : Tu as choisi de prendre le pendentif");
    });
  
    QRM8choix2.addEventListener("click", () => {
      const tab = {"croire":true};
      
      localStorage.setItem("QRM8", JSON.stringify(tab)); // Enregistre le choix 1 dans le localStorage
      
      const a = JSON.parse(localStorage.getItem('QRM3'));
      const b = JSON.parse(localStorage.getItem('QRM4'));

      // condition
      if (a['a_pendentif'] && b['est_maudit']) {
        showConfirmationMessage("Vous avez choisi le Choix 2. Le message associé est : Tu as choisi de prendre le pendentif");
        window.location.href = '../html-Mazzeru/QR3M.html'; 
      }else{
        showConfirmationMessage("Vous avez choisi le Choix 2. Le message associé est : Tu as choisi de prendre le pendentif");
      }
    });

   } catch (error) {
    console.log('error: QRM8 not loaded');
  }
  
});