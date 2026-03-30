const ingredients = [
{ nom: "Tomates", quantite: 5, unite: "kg", prix_unitaire: 3, seuil_alerte: 8, categorie: "légume" },
{ nom: "Oignons", quantite: 10, unite: "kg", prix_unitaire: 2, seuil_alerte: 5, categorie: "légume" },
{ nom: "Carottes", quantite: 4, unite: "kg", prix_unitaire: 2.5, seuil_alerte: 6, categorie: "légume" },

{ nom: "Poulet", quantite: 7, unite: "kg", prix_unitaire: 8, seuil_alerte: 5, categorie: "viande" },
{ nom: "Boeuf", quantite: 3, unite: "kg", prix_unitaire: 12, seuil_alerte: 4, categorie: "viande" },
{ nom: "Poisson", quantite: 6, unite: "kg", prix_unitaire: 10, seuil_alerte: 5, categorie: "viande" },

{ nom: "Sel", quantite: 2, unite: "kg", prix_unitaire: 1, seuil_alerte: 3, categorie: "épice" },
{ nom: "Poivre", quantite: 1, unite: "kg", prix_unitaire: 4, seuil_alerte: 2, categorie: "épice" },
{ nom: "Paprika", quantite: 3, unite: "kg", prix_unitaire: 5, seuil_alerte: 2, categorie: "épice" },

{ nom: "Eau", quantite: 20, unite: "litres", prix_unitaire: 0.5, seuil_alerte: 10, categorie: "boisson" },
{ nom: "Jus", quantite: 8, unite: "litres", prix_unitaire: 2, seuil_alerte: 10, categorie: "boisson" },
{ nom: "Soda", quantite: 15, unite: "litres", prix_unitaire: 1.5, seuil_alerte: 8, categorie: "boisson" }
];

const stockBas = ingredients.filter(
ing => ing.quantite < ing.seuil_alerte
);

console.log("Stock bas :", stockBas);

// 

const valeurTotale = ingredients.reduce((total, ing) => {
return total + (ing.quantite * ing.prix_unitaire);
}, 0);

console.log("Valeur totale du stock :", valeurTotale, "€");
// 
const valeurParCategorie = ingredients.reduce((acc, ing) => {

if(!acc[ing.categorie]){
acc[ing.categorie] = 0;
}

acc[ing.categorie] += ing.quantite * ing.prix_unitaire;

return acc;

}, {});

console.log("Valeur par catégorie :", valeurParCategorie);

// 

const commande = [
{ nom: "Poulet", quantite: 2 },
{ nom: "Tomates", quantite: 3 },
{ nom: "Oignons", quantite: 2 }
];

let disponible = true;
let manquants = [];

commande.forEach(item => {

const ingredient = ingredients.find(
ing => ing.nom === item.nom
);

if(!ingredient || ingredient.quantite < item.quantite){
disponible = false;
manquants.push(item.nom);
}

});

if(disponible){

commande.forEach(item => {
const ingredient = ingredients.find(
ing => ing.nom === item.nom
);

ingredient.quantite -= item.quantite;
});

console.log("Commande validée, stock mis à jour");

}else{

console.log("Commande impossible, manque :", manquants);

}

// 

const listeCourses = ingredients
.filter(ing => ing.quantite < ing.seuil_alerte)
.map(ing => {

const quantiteCommande = (ing.seuil_alerte * 2) - ing.quantite;

return {
nom: ing.nom,
quantiteACommander: quantiteCommande,
unite: ing.unite
};

});

console.log("Liste de courses :", listeCourses);
