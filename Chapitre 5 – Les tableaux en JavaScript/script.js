let livres=[
    {titre: "Candide",auteur: "Voltaire",prix:150},
    {titre: "Eloquent JavaScript",auteur: "Marijn Haverbeke",prix:200},
    {titre: "Le Petit Prince",auteur: "Antoine de Saint-Exupéry",prix:90},
    {titre: "You Don’t Know JS",auteur: "Kyle Simpson",prix:120},

];
livres.forEach((livre)=> console.log(livre.titre +" "+ livre.auteur));

let total=0;
livres.forEach((livre)=> total+= livre.prix);
console.log("le total:"+ total);
livres.forEach((livre)=> {if(livre.prix>=100){console.log(livre.titre);}});
livres.push({ titre: "Le Comte de Monte-Cristo", auteur: "Alexandre Dumas", prix: 180 });
console.log("livres" ,livres);


