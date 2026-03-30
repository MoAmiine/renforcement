const MAX_PLACES = 30;

let reservations = [];
let idCounter = 1;

function ajouterReservation(
nom_client,
nombre_personnes,
date,
heure,
telephone
){

const totalPlaces = reservations
.filter(r => 
r.date === date && 
r.heure === heure && 
r.statut === "confirmée"
)
.reduce((sum, r) => sum + r.nombre_personnes, 0);

let statut = "confirmée";

if(totalPlaces + nombre_personnes > MAX_PLACES){
statut = "en attente";
}

const reservation = {
id: idCounter++,
nom_client,
nombre_personnes,
date,
heure,
statut,
telephone
};

reservations.push(reservation);

console.log("Réservation ajoutée :", reservation);
}
// 

function annulerReservation(id){

const reservation = reservations.find(r => r.id === id);

if(!reservation){
console.log("Réservation introuvable");
return;
}
// 

reservation.statut = "annulée";

console.log("Réservation annulée :", reservation);

const attente = reservations
.filter(r => 
r.date === reservation.date &&
r.heure === reservation.heure &&
r.statut === "en attente"
);

attente.forEach(r => {

const totalPlaces = reservations
.filter(res =>
res.date === r.date &&
res.heure === r.heure &&
res.statut === "confirmée"
)
.reduce((sum, res) => sum + res.nombre_personnes, 0);

if(totalPlaces + r.nombre_personnes <= MAX_PLACES){
r.statut = "confirmée";
console.log("Réservation confirmée depuis attente :", r);
}

});

}

// 
function listerParDate(date){

const resultat = reservations
.filter(r => r.date === date)
.sort((a,b) => a.heure.localeCompare(b.heure));

console.log("Réservations du", date);
console.table(resultat);

}

// 
function tauxOccupation(date){

const creneaux = {};

reservations
.filter(r => r.date === date && r.statut === "confirmée")
.forEach(r => {

if(!creneaux[r.heure]){
creneaux[r.heure] = 0;
}

creneaux[r.heure] += r.nombre_personnes;

});

Object.keys(creneaux).forEach(heure => {

const taux = ((creneaux[heure] / MAX_PLACES) * 100).toFixed(1);

console.log(
`${heure} → ${creneaux[heure]}/${MAX_PLACES} (${taux}%)`
);

});

}

// 
ajouterReservation("Amine", 10, "2026-04-01", "20:00", "0600000001");
ajouterReservation("Sara", 8, "2026-04-01", "20:00", "0600000002");
ajouterReservation("Youssef", 7, "2026-04-01", "20:00", "0600000003");
ajouterReservation("Nadia", 6, "2026-04-01", "20:00", "0600000004");

ajouterReservation("Karim", 4, "2026-04-01", "19:00", "0600000005");
ajouterReservation("Salma", 5, "2026-04-01", "19:00", "0600000006");

ajouterReservation("Omar", 15, "2026-04-01", "21:00", "0600000007");
ajouterReservation("Lina", 20, "2026-04-01", "21:00", "0600000008");
// 
annulerReservation(1);
// 
listerParDate("2026-04-01");
// 
tauxOccupation("2026-04-01");
