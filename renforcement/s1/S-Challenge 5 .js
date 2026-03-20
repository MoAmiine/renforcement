const etudiants = [
  { nom: "Dupont", prenom: "Jean", age: 20, moyenne: 14 },
  { nom: "Martin", prenom: "Sophie", age: 22, moyenne: 10 },
  { nom: "Durand", prenom: "Ali", age: 19, moyenne: 12 },
  { nom: "Bernard", prenom: "Sara", age: 21, moyenne: 15 },
  { nom: "Moreau", prenom: "Yassine", age: 23, moyenne: 9 },
  { nom: "Petit", prenom: "Lina", age: 18, moyenne: 13 }
];

const admis = etudiants.filter(e => e.moyenne >= 12);
admis.forEach(e => console.log(e.prenom, e.nom, e.moyenne));

const parAge  = etudiants.sort((a,b) => a.age - b.age);
parAge.forEach(e => console.log(e.age, e.prenom, e.nom));

function chercherEtudiant(nom) {
  const trouve = etudiants.find(
    e => e.nom.toLowerCase() === nom.toLowerCase()
  )
  if (trouve) {
    console.log(trouve);
  } else {
    console.log("not found");
  }
}