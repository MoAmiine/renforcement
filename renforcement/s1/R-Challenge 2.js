const ventes = [
  { mois: "Janvier", chiffre_affaires: 48000, nb_clients: 120, ville: "Paris" },
  { mois: "Février", chiffre_affaires: 52000, nb_clients: 130, ville: "Lyon" },
  { mois: "Mars", chiffre_affaires: 61000, nb_clients: 140, ville: "Paris" },
  { mois: "Avril", chiffre_affaires: 47000, nb_clients: 115, ville: "Lyon" },
  { mois: "Mai", chiffre_affaires: 58000, nb_clients: 150, ville: "Paris" },
  { mois: "Juin", chiffre_affaires: 60000, nb_clients: 155, ville: "Marseille" },
  { mois: "Juillet", chiffre_affaires: 49000, nb_clients: 125, ville: "Paris" },
  { mois: "Août", chiffre_affaires: 53000, nb_clients: 135, ville: "Lyon" },
  { mois: "Septembre", chiffre_affaires: 62000, nb_clients: 160, ville: "Marseille" },
  { mois: "Octobre", chiffre_affaires: 55000, nb_clients: 145, ville: "Paris" },
  { mois: "Novembre", chiffre_affaires: 48000, nb_clients: 120, ville: "Lyon" },
  { mois: "Décembre", chiffre_affaires: 65000, nb_clients: 170, ville: "Marseille" }
];

const totalCA = ventes.reduce((total, v) => total + v.chiffre_affaires, 0);
console.log("Chiffre d'affaires total :", totalCA, "€");

const caMoyen = totalCA / ventes.length;
console.log("Chiffre d'affaires moyen par mois :", caMoyen.toFixed(2), "€");

const meilleurMois = ventes.reduce((max, v) => v.chiffre_affaires > max.chiffre_affaires ? v : max);
console.log("Mois avec le meilleur CA :", meilleurMois.mois, "-", meilleurMois.chiffre_affaires, "€");

const moinsClients = ventes.reduce((min, v) => v.nb_clients < min.nb_clients ? v : min);
console.log("Mois avec le moins de clients :", moinsClients.mois, "-", moinsClients.nb_clients, "clients");

const caSup50k = ventes.filter(v => v.chiffre_affaires > 50000);
console.log("Mois avec CA > 50 000 € :", caSup50k.map(v => v.mois));

const resumeVilles = ventes.reduce((acc, v) => {
  if (!acc[v.ville]) {
    acc[v.ville] = { totalCA: 0, totalClients: 0 };
  }
  acc[v.ville].totalCA += v.chiffre_affaires;
  acc[v.ville].totalClients += v.nb_clients;
  return acc;
}, {});

console.log("Résumé par ville :", resumeVilles);

const triCA = [...ventes].sort((a, b) => b.chiffre_affaires - a.chiffre_affaires);
console.log("Mois triés par CA décroissant :", triCA.map(v => v.mois));

const croissance = ventes.map((v, index, arr) => {
  if (index === 0) return { mois: v.mois, croissance: 0 };
  return { mois: v.mois, croissance: v.chiffre_affaires - arr[index - 1].chiffre_affaires };
});

console.log("Croissance mensuelle :", croissance);
