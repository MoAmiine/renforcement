const equipes = [
{ nom: "PSG", points: 42, buts_pour: 38, buts_contre: 12, matchs_joues: 15 },
{ nom: "Real Madrid", points: 40, buts_pour: 35, buts_contre: 15, matchs_joues: 15 },
{ nom: "Barcelona", points: 38, buts_pour: 33, buts_contre: 18, matchs_joues: 15 },
{ nom: "Bayern", points: 36, buts_pour: 30, buts_contre: 20, matchs_joues: 15 },
{ nom: "Liverpool", points: 34, buts_pour: 28, buts_contre: 19, matchs_joues: 15 },
{ nom: "Man City", points: 41, buts_pour: 37, buts_contre: 16, matchs_joues: 15 },
{ nom: "Juventus", points: 32, buts_pour: 25, buts_contre: 21, matchs_joues: 15 },
{ nom: "AC Milan", points: 30, buts_pour: 22, buts_contre: 24, matchs_joues: 15 }
];

equipes.forEach(equipe => {
equipe.difference = equipe.buts_pour - equipe.buts_contre;
});
// 

function trierClassement() {

equipes.sort((a, b) => {

if(b.points === a.points){
return b.difference - a.difference;
}

return b.points - a.points;

});

}
// 
function afficherClassement(){

trierClassement();

console.log("===== CLASSEMENT =====");

equipes.forEach((equipe, index) => {

const diff = equipe.difference >= 0 
? `+${equipe.difference}` 
: equipe.difference;

console.log(
`${index + 1}. ${equipe.nom} — ${equipe.points} pts (diff: ${diff})`
);

});

}
// 

function simulerMatch(equipe1, equipe2){

const score1 = Math.floor(Math.random() * 5);
const score2 = Math.floor(Math.random() * 5);

console.log(`${equipe1.nom} ${score1} - ${score2} ${equipe2.nom}`);

equipe1.buts_pour += score1;
equipe1.buts_contre += score2;

equipe2.buts_pour += score2;
equipe2.buts_contre += score1;

equipe1.matchs_joues++;
equipe2.matchs_joues++;

if(score1 > score2){
equipe1.points += 3;
}
else if(score2 > score1){
equipe2.points += 3;
}
else{
equipe1.points += 1;
equipe2.points += 1;
}

equipe1.difference = equipe1.buts_pour - equipe1.buts_contre;
equipe2.difference = equipe2.buts_pour - equipe2.buts_contre;

}

// 
function simulerTour(){

for(let i = 0; i < 5; i++){

const equipe1 = equipes[Math.floor(Math.random() * equipes.length)];
let equipe2;

do{
equipe2 = equipes[Math.floor(Math.random() * equipes.length)];
}while(equipe1 === equipe2);

simulerMatch(equipe1, equipe2);

}

}
// 

console.log("CLASSEMENT INITIAL");
afficherClassement();

console.log("\nSimulation de 5 matchs\n");

simulerTour();

console.log("\nCLASSEMENT FINAL");
afficherClassement();