// I. Récupérer les données de la liste à partir du fichier json
var liste = listeEleves;
// console.log(liste);

// II. parcourir et manipuler les données
//on crée une liste
var ul = document.createElement("ul");
//on déclare la fonction showMessage
function showProfile(event){
	console.log(event.target.textContent);
	console.log(event.target.id);
	window.location.href = './profil.html?id=' + event.target.id;
}
// on itère dans une table jusqu'au dernier élément
liste.forEach(function(element, index){
	console.log(element);
	var li = document.createElement("li");
	li.innerHTML = element.nom.toUpperCase() + ' ' + element.prenom;
	li.setAttribute("id", index);
	li.setAttribute("truc", 'eg');
	// li.setAttribute("mabalise", element.nom.toUpperCase() + ' ' + element.prenom);
	li.addEventListener("click", showProfile, false);
	//on met les élèves dans ul
	ul.appendChild(li);
});
// III. Modification du DOM
// cibler un élément dans le DOM et insère le nouvel element
document.getElementById("container").appendChild(ul);