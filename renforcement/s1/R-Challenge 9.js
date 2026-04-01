let taux = {
USD: 1.08,
GBP: 0.86,
MAD: 10.85,
JPY: 162.5,
CAD: 1.47,
EUR: 1
}

let historique = []

function convertir(montant, deviseSource, deviseCible){
    let montantEuro = montant / taux[deviseSource]
    let resultat = montantEuro * taux[deviseCible]

    historique.push({
        date: new Date(),
        montant: montant,
        deviseSource: deviseSource, 
        deviseCible: deviseCible,
        resultat: resultat
    })

    return resultat
}
convertir(10, 'EUR', 'JPY')
console.log(historique)



