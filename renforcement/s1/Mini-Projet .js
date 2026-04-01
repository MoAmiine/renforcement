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