const personne = {
  nom: "Teljaoui",
  prenom: "Mohamed Amine",
  age: 19,
  ville: "Marrakech",
  email: "amine@example.com"
};

console.log(
  `je m'appelle ${personne.prenom} ${personne.nom}, j'ai ${personne.age} ans, j'habite à ${personne.ville} et mon email est ${personne.email}.`
);

personne.ville = "Casablanca";
personne.telephone = "0612345678";

for (let cle in personne){
  console.log(`${cle} : ${personne[cle]}`)
}