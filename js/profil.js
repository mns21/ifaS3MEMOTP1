console.log("je suis dans le profil");
var url = window.location.href;

var params = (new URL(document.location)).searchParams;

var info = params.get("id"); // is the string "Jonathan"

console.log(listeEleves[info]);

var  goodEleve = listeEleves[info];

var nom = document.createElement("h3");
nom.innerHTML = goodEleve.nom + ' ' + goodEleve.prenom;
var cont = document.getElementById("container");
cont.appendChild(nom);

