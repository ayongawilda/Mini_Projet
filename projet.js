///exercice28
///le code suivant crée un formulaire avec un champ de texte et un bouton "Ajouter".Lorsque l'utlisateur clique sur le bouton,la fonction 'ajoutertache()'est appelée.Cette fonction récupère la valeur da champ texte,créé un élément de liste ('<li>')avec cette valeur ,et l'ajoute a la liste de taches ('<ul>').Enfin,la fonction éfface le champ de texte pour permettre a l'utilisateur d'ajouter une nouvelle tache.
function ajoutertache(){
    var tacheinput = document.getElementById("tache");
    var tacheliste = document.getElementById("tacheliste");
    var tache = document.createElement("li");
    tache.innerHTML = tacheinput.value;
    tacheliste.appendChild(tache);
    tacheinput.value ="";
}
