const articles = [
  { nom: "Lait", quantite: 2, prix: 1.50 },
  { nom: "Pain", quantite: 1, prix: 1.20 },
  { nom: "Fromage", quantite: 3, prix: 2.00 },
  { nom: "Jus", quantite: 2, prix: 2.50 },
  { nom: "Chocolat", quantite: 1, prix: 1.80 }
];

let sousTotal = 0;

articles.forEach(article => {
  const totalLigne = article.quantite * article.prix;
  sousTotal += totalLigne;

  console.log(`${article.nom} x${article.quantite} = ${totalLigne}€`);
});

const TVA = sousTotal * 0.20;
const totalTTC = sousTotal + TVA;

console.log("------------------");
console.log(`Sous-total : ${sousTotal}€`);
console.log(`TVA (20%) : ${TVA}€`);
console.log(`Total TTC : ${totalTTC}€`);