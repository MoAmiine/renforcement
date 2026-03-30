const produits = [
{ id: 1, nom: "Laptop", prix: 800, stock_disponible: 5 },
{ id: 2, nom: "Souris", prix: 20, stock_disponible: 20 },
{ id: 3, nom: "Clavier", prix: 50, stock_disponible: 10 },
{ id: 4, nom: "Casque", prix: 70, stock_disponible: 8 },
{ id: 5, nom: "Ecran", prix: 200, stock_disponible: 6 }
];
let panier = [];
let codePromo = null;

function ajouterProduit(produit, quantite = 1){
    const articleExistant = panier.find(
        item => item.produit.id === produit.id
    )   

    if (articleExistant){
        const nouvelleQuantite = articleExistant.quantite + quantite

        if (nouvelleQuantite > produit.stock_disponible){
            console.log('stock insuffisant')
            return;
        }
        articleExistant.quantite = nouvelleQuantite
    }
    else {
        if(quantite > produit.stock_disponible){
            console.log('stock insuffisant')
            return;
        }
        panier.push({
            produit: produit,
            quantite: quantite
        });
    }
    console.log("Panier mis a jour : ", panier )

}

function modifierQuantite(id, quantite){
    const article = panier.find(p => p.produit.id === id)

    if(!article) return
    if(quantite > article.produit.stock_disponible){
        console.log('stock insuffisant');
        return
    }

    article.quantite = quantite
}

function supprimerArticle(id){
    panier = panier.filter(p => p.produit.id !== id)
}

function totalPanier(){

let total = 0;

panier.forEach(article => {

const sousTotal = article.produit.prix * article.quantite;

total += sousTotal;

});

return total;

}


function appliquerCodePromo(code){

if(code === "BIENVENUE"){
codePromo = "BIENVENUE"
}
else if(code === "NOEL2025"){
codePromo = "NOEL2025"
}
else if(code === "LIVGRATUITE"){
codePromo = "LIVGRATUITE"
}
else{
console.log("Code invalide")
return
}

console.log("Code appliqué :", codePromo)

}

function recaputilatifPanier(){
    let total = 0

    console.log("===== PANIER =====")
    panier.forEach(article => {
        let nom = article.produit.nom
        let prix = article.produit.prix
        let quantite = article.quantite

        let sousTotal = prix * quantite
        total = total + sousTotal

        console.log(nom + " x" + quantite + " = " + sousTotal + "$");
        
    })

    console.log("------------------")
    console.log("Sous total :", total,"€")

    let remise  = 0
    if(codePromo === "BIENCENUE"){
        remise = total * 0.15
    }
    if(codePromo === "NOEL2025" && total > 50){
        remise = 10
    }
    total = total - remise
    console.log("remise : ", remise, "$");

    let livraison = 7
    if(total > 100){
        livraison = 0
    }
    if(codePromo === "LIVRGRATUITE"){
        livraiseon = 0
    }
    console.log("Livraison :", livraison, "$");
    
    let tva = total * 0.20
    console.log("TVA (20%):", tva, "$");
    
    let totalTTC = total + tva + livraison

    console.log("----------------------------");
    console.log("TOTAL TTC :", totalTTC, "$");
}