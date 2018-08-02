// I. chercher des données / accéder à la liste :
var mesFruits = listeFruits;
console.log(mesFruits);
// afficher un éléments précis du tableau par son index (ici le 3e)
console.log(mesFruits[2]);
// récupérer table d'objets
var mesAnimaux = listeAnimaux
console.log(mesAnimaux);
// afficher une clé (type et nom) du premier animal de la liste
var monAnimal = mesAnimaux[0];
console.log(monAnimal);
console.log("mon premier animal s'appelle " + monAnimal.nom + ", c'est un " + monAnimal.type + " de " + monAnimal.age + ' ans');


// II. parcourir et manipuler les données

// les boucles
var i = 0;

for (i == 0; i < mesAnimaux.length; i++) {
    console.log(i);
    console.log(mesAnimaux[i]);
}

// on itère dans une table jusqu'au dernier élément
mesAnimaux.forEach(function(item) {
    console.log(item);
    // on effectue un traitement sur la propriété nom  de l'objet element
    console.log(item.nom.toUpperCase());
});


// III. Modification du DOM

// _ cibler un élément dans le DOM
var titre = window.document.getElementById("monTitre");

console.log(titre);

// _modifier un élément du DOM

var newTexte = "bonjour je suis le nouveau titre";
var ancienTexte = titre.innerHTML;
// remplacer contenu html
titre.innerHTML = newTexte;
console.log(ancienTexte);


// _créer un élément
// créer le nouvel element à insérer
var newPara = document.createElement("p");
// remplir le contenu de l'élément
newPara.innerHTML = "mon chien s'appelle " + mesAnimaux[0].nom.toUpperCase();
// récupérer le parent
var monContainer = document.getElementById("container");
// ajouter l'element complet à la liste
monContainer.appendChild(newPara);

// IV. Gestion de l'évènement clic
	// target element 
var t = document.getElementById("toClick");
	// ajouter écouteur de l'event click et rediriger une fois le clic détécté vers la fonction showMessage
t.addEventListener("click", function(){
	 alert('vous avez cliqué le paragraphe toCLick');
});


function showMessage() {
    alert('vous avez cliqué le paragraphe toCLick');
};

t.addEventListener("click", showMessage, false);

