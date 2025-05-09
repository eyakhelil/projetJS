// Fonction appelée quand on clique sur "Lancer le tirage"
function tirerAuSort() {
  // On récupère la zone de texte
  let champ = document.getElementById("noms");
  
  // On divise le texte en plusieurs noms avec la virgule, on nettoie les espaces
  let listeNoms = champ.value.split(",").map(nom => nom.trim()).filter(nom => nom !== "");

  if (listeNoms.length === 0) {
    alert("Entrez au moins un nom !");
    return;
  }

  // Tirage aléatoire d’un nom
  let index = Math.floor(Math.random() * listeNoms.length);
  let gagnant = listeNoms[index];

  // On affiche le gagnant
  document.getElementById("gagnant").textContent = "Qui a tiré : " + gagnant;

  // On ajoute le nom tiré à l’historique affiché
  ajouterAHistorique(gagnant);

  // On enregistre dans le stockage local
  sauvegarderHistorique();
}

// Ajouter un nom à la liste affichée
function ajouterAHistorique(nom) {
  let li = document.createElement("li");
  li.textContent = nom;
  document.getElementById("historique").appendChild(li);
}

// Sauvegarder l’historique dans localStorage
function sauvegarderHistorique() {
  let items = document.querySelectorAll("#historique li");
  let noms = Array.from(items).map(item => item.textContent);
  localStorage.setItem("historique", JSON.stringify(noms));
}

// Charger l’historique quand la page s’ouvre
function chargerHistorique() {
  let data = localStorage.getItem("historique");
  if (!data) return;

  let noms = JSON.parse(data);
  noms.forEach(nom => ajouterAHistorique(nom));
}

// Vider l’historique
function viderHistorique() {
  document.getElementById("historique").innerHTML = "";
  localStorage.removeItem("historique");
}

// Charger automatiquement quand la page s’ouvre
chargerHistorique();
 