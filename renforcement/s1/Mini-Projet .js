let utilisateurs = [
{
id: 1,
pseudo: "Amine",
email: "amine@mail.com",
role: "vendeur",
note: 4.5,
solde: 500
},
{
id: 2,
pseudo: "Yassine",
email: "yassine@mail.com",
role: "acheteur",
note: 0,
solde: 300
},
{
id: 3,
pseudo: "Sara",
email: "sara@mail.com",
role: "vendeur",
note: 4.8,
solde: 800
},
{
id: 4,
pseudo: "Omar",
email: "omar@mail.com",
role: "acheteur",
note: 0,
solde: 200
},
{
id: 5,
pseudo: "Lina",
email: "lina@mail.com",
role: "vendeur",
note: 4.2,
solde: 600
}
]

let annonces = []

function publierAnnonce(venderId, titre, description, prix, categorie, etat){
    let vendeur = utilisateurs.find(user => user.id === venderId)
    if(vendeur.role !== "vendeur"){
        console.log("seul un vendeur peut publier");
        return
    }
    let annonce = {
        id: annonces.length + 1,
        vendeur_id: vendeurId,
        titre: titre, 
        description: description,
        categorie: categorie,
        etat: etat,
        statut: "disponible", 
        date_publication: new Date()
    }

    annonces.push(annonce)
    console.log("Annonce publiee")
    console.log(annonces)
}

function modifierPrix(annonceId, nouveauPrix){
    let annonce = annonces.find(a => a.id == annonceId)

    if(!annonce){
        console.log('annoce introuvable');
    }
    annonce.prix = nouveauPrix

    console.log("Prix modfiee")
}

function retirerAnnonce(annonceId){
    let annonce = annonce.find(a => a.id == annonceId)
    if(!annonce){
        console.log('annonce retire');
    }
    annonce.statut = "retire"
    console.log("annonce retire");
    
}

// test 
publierAnnonce(
1,
"Iphone 11",
"Très bon état",
450,
"Électronique",
"très bon"
)

publierAnnonce(
3,
"Canapé",
"Bon état",
200,
"Meuble",
"bon"
)

publierAnnonce(
5,
"Vélo",
"Neuf",
300,
"Sport",
"neuf"
)

console.log(annonces)

function rechercher(mot){
    let resultat = annonces.filter(a => a.titre.includes(mot) || a.description.includes(mot))
    console.log(resultat)
}

let transactions = []

function acheter(acheteurId, annonceId){
    let acheteur = utilisateurs.find(u => u.id === acheteurId)
    let annonce = annonces.find(a => a.id === annonceId)

    if(annonce.statut !== "disponible"){
        console.log("indisponible")
        return
    }
    if(acheteur.solde < annonce.prix){
        console.log("pas assez d'argent");
        return
    }
    let vendeur = utilisateurs.find(
        u => u.id === annonce.vendeurId
    )
    let commission = annonce.prix * 0.05
    acheteur.solde -= annonce.prix
    vendeur.solde +=annonce.prix - commission

    annonce.statut = "vendu"

    transactions.push({
        acheteurId, 
        venderId: vendeur.id,
        prix: annonce.prix
    })
}


let avis = []

function noter(vendeurId, note){
    avis.push({
        vendeurId, note
    })
    let avisVendeur = avis.filter(a => a.venderId === vendeurId)

    let total = 0
    avisVendeur.forEach(a => {
        total+= a.note
    })
    let moyenne = total / avisVendeur.length
    let vendeur = utilisateurs.find(
        u => u.id === vendeurId
    )
    vendeur.note = moyenne
    let ventes = transactions.filter(
        t => t.vendeur === vendeurId
    )
    console.log(

    );
    vendeur.pseudo,
    vendeur.note,
    avisVendeur,
    ventes.length
}

function statsAnnonces(){
    let stats = {}
    annonces.forEach(a => {
        if(!stats[a.statut]){
            stats[a.statut] = 0
        }
        stats[a.statut]++
    })
    console.log(stats)
}

function chiffreAffaires(){
    let total = 0
    transactions.forEach(t => {
        total += t.montant
    })
    return total
}

function commissionTotale(){
    let total = 0
    transactions.forEach(t => {
        total += t.commission
    })
    return total
}

