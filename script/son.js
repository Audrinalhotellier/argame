
    var ambianceAudio = document.getElementById("ambianceAudio");

    // Fonction pour activer ou désactiver le son
    function toggleAudio() {
      // Vérifier si le son est en pause
      if (ambianceAudio.paused) {
        ambianceAudio.play(); // Si en pause, le démarrer
      } else {
        ambianceAudio.pause(); // Sinon, le mettre en pause
      }
    }

    // Mise à jour : Arrêter le son lorsque la page est fermée
    window.onbeforeunload = function () {
      ambianceAudio.pause();
      ambianceAudio.currentTime = 0;
    };
