const chansons = [
  { titre: "Song 1", artiste: "Artist A", duree: 210, genre: "Rock" },
  { titre: "Song 2", artiste: "Artist B", duree: 180, genre: "Pop" },
  { titre: "Song 3", artiste: "Artist C", duree: 320, genre: "Jazz" },
  { titre: "Song 4", artiste: "Artist D", duree: 150, genre: "Rock" },
  { titre: "Song 5", artiste: "Artist E", duree: 400, genre: "Hip-Hop" },
  { titre: "Song 6", artiste: "Artist F", duree: 275, genre: "Rock" },
  { titre: "Song 7", artiste: "Artist G", duree: 190, genre: "Pop" },
  { titre: "Song 8", artiste: "Artist H", duree: 305, genre: "Jazz" },
  { titre: "Song 9", artiste: "Artist I", duree: 260, genre: "Rock" },
  { titre: "Song 10", artiste: "Artist J", duree: 220, genre: "Pop" }
];

chansons.forEach(chanson => {
  console.log(chanson.titre);
});

const rockSongs = chansons.filter(chanson => chanson.genre === "Rock");

console.log(rockSongs);

const formatDuree = chansons.map(chanson => {
  const minutes = Math.floor(chanson.duree / 60);
  const secondes = chanson.duree % 60;

  return {
    ...chanson,
    dureeFormat: `${minutes}:${secondes.toString().padStart(2,'0')}`
  };
});

console.log(formatDuree);

const totalSecondes = chansons.reduce((total, chanson) => {
  return total + chanson.duree;
}, 0);

const minutes = Math.floor(totalSecondes / 60);
const secondes = totalSecondes % 60;

console.log(`Durée totale : ${minutes}:${secondes}`);

const plusLongue = chansons.reduce((max, chanson) => {
  return chanson.duree > max.duree ? chanson : max;
});

console.log("Chanson la plus longue :", plusLongue);

const toutesMoins6 = chansons.every(chanson => chanson.duree < 360);

console.log(toutesMoins6);

const auMoinsJazz = chansons.some(chanson => chanson.genre === "Jazz");

console.log(auMoinsJazz);

const trie = [...chansons].sort((a, b) => a.duree - b.duree);

console.log(trie);