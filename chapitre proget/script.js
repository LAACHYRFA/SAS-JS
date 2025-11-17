let bibliotheque = JSON.parse(localStorage.getItem("bibliotheque")) || [
  { code: 12, titre: "Clean Code", auteur: "Robert C. Martin", annee: 2008, disponible: true, prix: 150 },
  { code: 45, titre: "Eloquent JavaScript", auteur: "Marijn Haverbeke", annee: 2018, disponible: true, prix: 200 },
];

function sauvegarderBibliotheque() {
  localStorage.setItem("bibliotheque", JSON.stringify(bibliotheque));
}

function afficherStats() {
  const total = bibliotheque.length;
  const disponibles = bibliotheque.filter(livre => livre.disponible).length;
  let maxPriceBook = bibliotheque[0];
  for (let i = 1; i < bibliotheque.length; i++) {
    if (bibliotheque[i].prix > maxPriceBook.prix) {
      maxPriceBook = bibliotheque[i];
    }
  }
  

  const stats = document.getElementById("stats");
  stats.innerHTML = `
     Total de livres : ${total} <br>
     Livres disponibles : ${disponibles} <br>
     Livre le plus cher : ${maxPriceBook.titre} (${maxPriceBook.prix} DH)
  `;
}

function checkbook(bookcode) {
  let found = false;
  for (let i = 0; i < bibliotheque.length; i++) {
    if (bibliotheque[i].code === bookcode) {
      const livre = bibliotheque[i];

      let card = document.createElement("div");
      card.classList.add("book-card");
      card.style.border = "1px solid gray";
      card.style.margin = "10px";
      card.style.padding = "10px";
      card.style.borderRadius = "8px";

      let title = document.createElement("h3");
      title.textContent = livre.titre;

      let auteur = document.createElement("p");
      auteur.textContent = "Auteur : " + livre.auteur;

      let annee = document.createElement("p");
      annee.textContent = "Année : " + livre.annee;

      let prix = document.createElement("p");
      prix.textContent = "Prix : " + livre.prix + " DH";

      let disponible = document.createElement("p");
      disponible.textContent = livre.disponible ? "Disponible" : "Non disponible";

      let reserverBtn = document.createElement("button");
      reserverBtn.textContent = "Réserver";
      reserverBtn.style.marginRight = "10px";

      let supprimerBtn = document.createElement("button");
      supprimerBtn.textContent = "Supprimer";

      supprimerBtn.addEventListener("click", function () {
        bibliotheque.splice(i, 1);
        sauvegarderBibliotheque();
        card.remove();
        afficherStats();
      });

      reserverBtn.addEventListener("click", function () {
        livre.disponible = false;
        sauvegarderBibliotheque();
        disponible.textContent = "Non disponible";
        reserverBtn.disabled = true;
        afficherStats();
      });

      if (!livre.disponible) {
        reserverBtn.disabled = true;
      }

      card.appendChild(title);
      card.appendChild(auteur);
      card.appendChild(annee);
      card.appendChild(prix);
      card.appendChild(disponible);
      card.appendChild(reserverBtn);
      card.appendChild(supprimerBtn);

      document.getElementById("catalogue").appendChild(card);

      found = true;
      break;
    }
  }

  if (!found) {
    alert("Livre introuvable !");
  }
}

function ajouterLivre() {
  const code = Number(document.getElementById("code").value);
  const titre = document.getElementById("titre").value.trim();
  const auteur = document.getElementById("auteur").value.trim();
  const annee = Number(document.getElementById("annee").value);
  const prix = Number(document.getElementById("prix").value);
  const disponible = document.getElementById("disponible").value === "true";

  if (!code || !titre || !auteur || !annee || !prix) {
    alert("enter all infos !");
    return;
  }

  bibliotheque.push({ code, titre, auteur, annee, disponible, prix });
  sauvegarderBibliotheque();
  alert("Livre ajouté avec succès !");
  document.getElementById("formLivre").reset();
}

function creerCatalogue() {
  const body = document.body;

  const titreH1 = document.createElement("h1");
  titreH1.textContent = "Catalogue de la bibliothèque";
  body.appendChild(titreH1);

 
  const searchContainer = document.createElement("div");
  searchContainer.style.margin = "20px 0";

  const searchInput = document.createElement("input");
  searchInput.type = "number";
  searchInput.placeholder = "enter the code plz";
  searchInput.style.marginRight = "10px";

  const searchButton = document.createElement("button");
  searchButton.textContent = "tap code ";
  searchButton.onclick = function () {
    const code = Number(searchInput.value);
    const catalogue = document.getElementById("catalogue");
    catalogue.innerHTML = "";
    if (code) {
      checkbook(code);
    } else {
      alert("u have to enter the code !");
    }
  };

  searchContainer.appendChild(searchInput);
  searchContainer.appendChild(searchButton);
  body.appendChild(searchContainer);

  
  const searchTitleContainer = document.createElement("div");
  searchTitleContainer.style.margin = "10px 0";

  const searchTitleInput = document.createElement("input");
  searchTitleInput.type = "text";
  searchTitleInput.placeholder = "Rechercher par titre...";
  searchTitleInput.style.marginRight = "10px";

  const searchTitleButton = document.createElement("button");
  searchTitleButton.textContent = "Rechercher par titre";
  searchTitleButton.onclick = function () {
    const titreRecherche = searchTitleInput.value.trim().toLowerCase();
    const catalogue = document.getElementById("catalogue");
    catalogue.innerHTML = "";
    const livresTrouves = bibliotheque.filter(l => l.titre.toLowerCase().includes(titreRecherche));
    if (livresTrouves.length > 0) {
      livresTrouves.forEach(l => checkbook(l.code));
    } else {
      alert("Aucun livre trouvé avec ce titre !");
    }
  };

  searchTitleContainer.appendChild(searchTitleInput);
  searchTitleContainer.appendChild(searchTitleButton);
  body.appendChild(searchTitleContainer);

  
  const sortButton = document.createElement("button");
  sortButton.textContent = "Trier par titre (A→Z)";
  let asc = true;
  sortButton.style.marginBottom = "20px";
  sortButton.onclick = function () {
    bibliotheque.sort((a, b) => {
      if (a.titre.toLowerCase() < b.titre.toLowerCase()) return asc ? -1 : 1;
      if (a.titre.toLowerCase() > b.titre.toLowerCase()) return asc ? 1 : -1;
      return 0;
    });
    asc = !asc;
    sortButton.textContent = asc ? "Trier par titre (A→Z)" : "Trier par titre (Z→A)";
    const catalogue = document.getElementById("catalogue");
    catalogue.innerHTML = "";
    bibliotheque.forEach(l => checkbook(l.code));
  };
  body.appendChild(sortButton);

  const container = document.createElement("div");
  container.id = "catalogue";
  body.appendChild(container);

  
  const stats = document.createElement("p");
  stats.id = "stats";
  body.appendChild(stats);

  const bouton = document.createElement("button");
  bouton.textContent = "Ajouter un livre";
  bouton.onclick = () => window.location.href = "ajouter-livre.html";
  body.appendChild(bouton);


  bibliotheque.forEach(l => checkbook(l.code));
  afficherStats();
}

function creerFormulaire() {
  const body = document.body;

  const titre = document.createElement("h1");
  titre.textContent = "Ajouter un nouveau livre";
  body.appendChild(titre);

  const form = document.createElement("form");
  form.id = "formLivre";
  form.innerHTML = `
    Code : <input type="number" id="code"><br><br>
    Titre : <input type="text" id="titre"><br><br>
    Auteur : <input type="text" id="auteur"><br><br>
    Année : <input type="number" id="annee"><br><br>
    Prix : <input type="number" id="prix"><br><br>
    Disponible :
    <select id="disponible">
      <option value="true">Oui</option>
      <option value="false">Non</option>
    </select><br><br>
    <button type="button" onclick="ajouterLivre()">Ajouter</button>
  `;
  body.appendChild(form);

  const bouton = document.createElement("button");
  bouton.textContent = "Voir le catalogue";
  bouton.onclick = () => window.location.href = "catalogue.html";
  body.appendChild(bouton);
}

document.addEventListener("DOMContentLoaded", () => {
  if (document.title === "Catalogue") {
    creerCatalogue();
  } else if (document.title === "Ajouter un livre") {
    creerFormulaire();
  }
});
