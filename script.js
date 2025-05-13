function tirer() {
  let texte = document.getElementById("noms").value;
  let noms = texte.split(",");
  let liste = [];

  for (let i = 0; i < noms.length; i++) {
    let nom = noms[i].trim();
    if (nom !== "") {
      liste.push(nom);
    }
  }

  if (liste.length === 0) {
    alert("Entrez au moins un nom.");
    return;
  }

  let index = Math.floor(Math.random() * liste.length);
  let gagnant = liste[index];

  document.getElementById("gagnant").textContent = "Qui a tiré : " + gagnant;

  let li = document.createElement("li");
  li.textContent = gagnant;
  document.getElementById("historique").appendChild(li);

  localStorage.setItem("historique", document.getElementById("historique").innerHTML);
}

window.onload = function () {
  let old = localStorage.getItem("historique");
  if (old) {
    document.getElementById("historique").innerHTML = old;
  }
};
