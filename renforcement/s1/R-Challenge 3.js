const avis = [
  { pseudo: "Alice", note: 5, commentaire: "Super recette, facile et rapide !", date: "2026-03-20" },
  { pseudo: "Bob", note: 4, commentaire: "Bon goût, un peu trop salé à mon goût.", date: "2026-03-18" },
  { pseudo: "Charlie", note: 3, commentaire: "Correct, mais j'ai déjà goûté mieux.", date: "2026-03-17" },
  { pseudo: "Diana", note: 2, commentaire: "Pas terrible, trop fade.", date: "2026-03-16" },
  { pseudo: "Eve", note: 1, commentaire: "Horrible, je ne recommande pas.", date: "2026-03-15" },
  { pseudo: "Frank", note: 5, commentaire: "Recette parfaite, toute la famille a adoré !", date: "2026-03-14" },
  { pseudo: "Grace", note: 4, commentaire: "Très bon, mais j'ai modifié un peu les ingrédients.", date: "2026-03-13" },
  { pseudo: "Hugo", note: 3, commentaire: "Moyen, rien de spécial.", date: "2026-03-12" },
  { pseudo: "Iris", note: 5, commentaire: "Délicieux, je referai.", date: "2026-03-11" },
  { pseudo: "Jack", note: 2, commentaire: "Pas à mon goût, trop sucré.", date: "2026-03-10" },
  { pseudo: "Karen", note: 4, commentaire: "Bon mais simple.", date: "2026-03-09" },
  { pseudo: "Leo", note: 3, commentaire: "C'était correct.", date: "2026-03-08" },
  { pseudo: "Mia", note: 5, commentaire: "Excellente recette !", date: "2026-03-07" },
  { pseudo: "Nina", note: 1, commentaire: "Je n'ai pas aimé.", date: "2026-03-06" },
  { pseudo: "Oscar", note: 4, commentaire: "Très bon, facile à préparer.", date: "2026-03-05" }
];

const compteNotes = avis.reduce((acc, a) => {
  acc[a.note] = (acc[a.note] || 0) + 1;
  return acc;
}, {});

console.log("Nombre d'avis par note :", compteNotes);

const positifs = avis.filter(a => a.note >= 4);
const negatifs = avis.filter(a => a.note <= 2);

console.log("Avis positifs :", positifs.map(a => a.pseudo));
console.log("Avis négatifs :", negatifs.map(a => a.pseudo));
const triRecent = [...avis].sort((a, b) => new Date(b.date) - new Date(a.date));
console.log("Avis triés par date :", triRecent.map(a => `${a.pseudo} (${a.date})`));        

const avisPlusLong = avis.reduce((max, a) => a.commentaire.length > max.commentaire.length ? a : max);
console.log("Avis le plus long :", avisPlusLong.pseudo, "-", avisPlusLong.commentaire);

const nbPositifs = positifs.length;
const nbNegatifs = negatifs.length;
const nbNeutres = avis.length - nbPositifs - nbNegatifs;

const resume = `${moyenne.toFixed(1)}/5 basé sur ${avis.length} avis — ${nbPositifs} positifs, ${nbNegatifs} négatifs, ${nbNeutres} neutres`;

console.log(resume);