var QRM3choix1 = document.getElementById('QRM3choix1');
var QRM3choix2 = document.getElementById('QRM3choix2');

var QRM4choix1 = document.getElementById('QRM4choix1');
var QRM4choix2 = document.getElementById('QRM4choix2');

var QRM5choix1 = document.getElementById('QRM5choix1');
var QRM5choix2 = document.getElementById('QRM5choix2');

var QRM7choix1 = document.getElementById('QRM7choix1');
var QRM7choix2 = document.getElementById('QRM7choix2');

var QRM8choix1 = document.getElementById('QRM8choix1');
var QRM8choix2 = document.getElementById('QRM8choix2');

QRM3choix1.addEventListener("click", () => {
  var tab = new Map();
  tab.set("a_pendentif",true);
  localStorage.setItem("QRM3", tab); // Enregistre le choix 1 dans le localStorage
  showConfirmationMessage("Vous avez choisi le Choix 1. Le message associé est : Tu as choisi de prendre le pendentif");
});

QRM3choix2.addEventListener("click", () => {
  var tab = new Map();
  tab.set("a_pendentif",false);
  localStorage.setItem("QRM3", tab); // Enregistre le choix 1 dans le localStorage
  showConfirmationMessage("Vous avez choisi le Choix 2. Le message associé est : Tu as choisi de prendre le pendentif");
});

QRM4choix1.addEventListener("click", () => {
  var tab = new Map();
  tab.set("personnage","a_fata");
  tab.set("est_maudit",false);
  localStorage.setItem("QRM4", tab); // Enregistre le choix 1 dans le localStorage
  showConfirmationMessage("Vous avez choisi le Choix 1. Le message associé est : Tu as choisi de prendre le pendentif");
});

QRM4choix2.addEventListener("click", () => {
  var tab = new Map();
  tab.set("personnage","a_sciaquaghjola");
  tab.set("est_maudit",true);
  localStorage.setItem("QRM4", tab); // Enregistre le choix 1 dans le localStorage
  showConfirmationMessage("Vous avez choisi le Choix 2. Le message associé est : Tu as choisi de prendre le pendentif");
});


QRM5choix1.addEventListener("click", () => {
  var tab = new Map();
  tab.set("marcher",false);
  localStorage.setItem("QRM5", tab); // Enregistre le choix 1 dans le localStorage
  showConfirmationMessage("Vous avez choisi le Choix 1. Le message associé est : Tu as choisi de prendre le pendentif");
});

QRM5choix2.addEventListener("click", () => {
  var tab = new Map();
  tab.set("marcher",true);
  localStorage.setItem("QRM5", tab); // Enregistre le choix 1 dans le localStorage
  showConfirmationMessage("Vous avez choisi le Choix 2. Le message associé est : Tu as choisi de prendre le pendentif");
});

QRM7choix1.addEventListener("click", () => {
  var tab = new Map();
  tab.set("a_bougie",false);
  localStorage.setItem("QRM7", tab); // Enregistre le choix 1 dans le localStorage
  showConfirmationMessage("Vous avez choisi le Choix 1. Le message associé est : Tu as choisi de prendre le pendentif");
});

QRM7choix2.addEventListener("click", () => {
  var tab = new Map();
  tab.set("a_bougie",true);
  localStorage.setItem("QRM7", tab); // Enregistre le choix 1 dans le localStorage
  showConfirmationMessage("Vous avez choisi le Choix 2. Le message associé est : Tu as choisi de prendre le pendentif");
});

QRM8choix1.addEventListener("click", () => {
  var tab = new Map();
  tab.set("croire",false);
  localStorage.setItem("QRM8", tab); // Enregistre le choix 1 dans le localStorage
 
  showConfirmationMessage("Vous avez choisi le Choix 1. Le message associé est : Tu as choisi de prendre le pendentif");
});

QRM8choix2.addEventListener("click", () => {
  var tab = new Map();
  tab.set("croire",true); 
  localStorage.setItem("QRM8", tab); // Enregistre le choix 1 dans le localStorage
  if (localStorage.getItem('QR3M').get('a_pendentif') && localStorage.getItem('QR4M').get('est_maudit')) {
    showConfirmationMessage("Vous avez choisi le Choix 2. Le message associé est : Tu as choisi de prendre le pendentif");
    window.location.href = '../html-Mazzeru/QR3M.html';
  }else{
    showConfirmationMessage("Vous avez choisi le Choix 2. Le message associé est : Tu as choisi de prendre le pendentif");
  }
  
});

