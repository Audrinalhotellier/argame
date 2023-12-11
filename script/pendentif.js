
document.addEventListener("DOMContentLoaded", function () {
  const lavoirpendentif = document.querySelector(".btn");
  const lavoirpaspendentif = document.querySelector(".btn2");
  const test = document.querySelector(".test");

  lavoirpendentif.addEventListener("click", () => {
    localStorage.setItem("lavoir", "pendentif");
    updateTestText();
  });

  lavoirpaspendentif.addEventListener("click", () => {
    localStorage.setItem("lavoir", "paspendentif");
    updateTestText();
  });

  // Fonction pour mettre à jour le texte dans la classe "test"
  function updateTestText() {
    if (localStorage.getItem("lavoir") === "pendentif") {
      test.innerHTML = "Va au lavoir à la fontaine du cours";
    } else {
      test.innerHTML = "Va au lavoir à la fontaine du czours";
    }

    // Afficher le texte une fois qu'il est mis à jour
    test.style.display = "block";
  }
});
