// Effet du scroll sur l'appui du boutton
const scrollbtns = document.querySelectorAll('.arrow');

scrollbtns.forEach(btn => {
    btn.addEventListener('click', () => {
    const target = document.querySelector(btn.dataset.target);
    if (target !== null) {
    target.scrollIntoView({
    behavior: 'smooth'});
    }
    });
    });

// Animation du scroll
const animations = document.querySelectorAll(".section-content");

function checkScroll() {
animations.forEach(animation => {
const position = animation.getBoundingClientRect().top;
const screenPosition = window.innerHeight / 1.5;

if (position < screenPosition) {
animation.classList.add("section-content");
}
});
}

window.addEventListener("scroll", checkScroll);

// définir une variable pour le nombre de pages
const nombrepages = 15;

// définir une variable pour la page active
let pageactive = 1;

//­ fonction pour changer le texte du bouton en fonction de la page active
function changerTexteBouton(page) {
const bouton = document.getElementById("boutonSuivant");

if (page === 1) {
bouton.textContent = "Commencer";
} else if (page < nombrepages) {
bouton.textContent = "Question suivante";
} else {
bouton.textContent = "VOir mon rÉsultat";
}}

// Fonction pour afficher la page active et mettre à jour le numéro de la page
function afficherPageActive(){
    // Cacher toutes les pages
    for (let i = 1; i <= nombrepages; i++) {
    document.getElementById("page" + i).style.display = "none";
    }
    // Afficher la page active
    document.getElementById("page" + pageactive).style.display = "block";
    // Mettre à jour le numéro de la page dans l'en-tête
    document.querySelector("#jeux").textContent = pageactive + " / " + nombrepages;
    }

// événement clic sur le bouton suivant
const boutonSuivant = document.getElementById("boutonSuivant");
if (boutonSuivant) {
boutonSuivant.addEventListener("click", function() {
// passer à la page suivante
if (pageactive < nombrepages) {
pageactive++;
} else {
pageactive = 1;
}
afficherPageActive();
// changer le texte du bouton en fonction de la page active
changerTexteBouton(pageactive)
});
}

// animation

  function fadeInOnScroll() {
    var elements = document.querySelectorAll('img, p');
    var windowHeight = window.innerHeight;
    var scrollPosition = window.pageYOffset;
  
    elements.forEach(function(element) {
      var position = element.offsetTop;
      
      if (scrollPosition > position - windowHeight + 100) {
        element.style.opacity = 1;
      }
    });
  }
  
  function fadeLeftOnScroll() {
    var elements = document.querySelectorAll('.section-title');
    var windowHeight = window.innerHeight;
    var scrollPosition = window.pageYOffset;
  
    elements.forEach(function(element) {
      var position = element.offsetTop;
      
      if (scrollPosition > position - windowHeight + 100) {
        element.style.opacity = 1;
        element.style.transform = 'translateX(0)';
      }
    });
  }
  
  window.addEventListener('scroll', fadeInOnScroll);
  window.addEventListener('scroll', fadeLeftOnScroll);
  
   // Appel du popup

// Récupération des éléments HTML
const form = document.querySelector('form');
const envoyer = document.querySelector('#envoyer');
const popup = document.querySelector('#popup');
const revenir = document.querySelector('#revenir');

// affiche le popup
function afficherPopup() {
popup.style.display = 'block';
}

// ferme le popup
function fermerPopup() {
popup.style.display = 'none';
}

// verifie les formulaires
function showPopup(event) {
  event.preventDefault();
  var mail = document.getElementById("mail").value;
  var msg = document.getElementById("msg").value;
  var coche = document.getElementById("coche").value;
  var email = document.getElementById("email").value;
  if (msg !== "" && mail !== "" && coche !== "" && email !== "") {
  var popup = document.getElementById("popup");
  popup.style.display = "flex";
}
  else {
    alert('Il faut remplir les formulaires avant de continuer');
    }
  }

// clic sur le bouton "revenir"
revenir.addEventListener('click', () => {
fermerPopup();
});