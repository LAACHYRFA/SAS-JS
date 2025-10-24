let fruits = ["pomme", "banane", "cerise"];
console.log("Tableau initial :", fruits);

fruits.push("orange");
console.log("Après push :", fruits);

fruits.pop();
console.log("Après pop :", fruits);

fruits[1] = "kiwi";
console.log("Après modification :", fruits);

fruits.unshift("fraise");
console.log("Après unshift :", fruits);

fruits.shift();
console.log("Après shift :", fruits);

fruits.splice(1, 0, "ananas");
console.log("Après splice :", fruits);

console.log("Boucle for :");
for (let i = 0; i < fruits.length; i++) {
  console.log(i, fruits[i]);
}

let produits = [
  { nom: "Stylo", prix: 5 },
  { nom: "Cahier", prix: 15 },
  { nom: "Crayon", prix: 3 },
];

console.log("Liste des produits :");
produits.forEach((p) => console.log(`${p.nom} → ${p.prix} DH`));
