const contacts = [
{
nom: "Mohamed Amine",
entreprise: "TechCorp",
email: "amine@gmail.com",
telephone: "0600000001",
ville: "Casablanca",
adresse: {
rue: "Bd Zerktouni",
code_postal: "20000",
ville: "Casablanca",
pays: "Maroc"
}
},
{
nom: "Sara Karim",
entreprise: "WebSolutions",
email: "sara@gmail.com",
telephone: "0600000002",
ville: "Rabat",
adresse: {
rue: "Agdal",
code_postal: "10000",
ville: "Rabat",
pays: "Maroc"
}
},
{
nom: "Youssef Ali",
entreprise: "TechCorp",
email: "youssef@gmail.com",
telephone: "0600000003",
ville: "Casablanca",
adresse: {
rue: "Maarif",
code_postal: "20050",
ville: "Casablanca",
pays: "Maroc"
}
},
{
nom: "Nadia Ben",
entreprise: "DigitalPro",
email: "nadia@gmail.com",
telephone: "0600000004",
ville: "Marrakech",
adresse: {
rue: "Guéliz",
code_postal: "40000",
ville: "Marrakech",
pays: "Maroc"
}
},
{
nom: "Karim Said",
entreprise: "WebSolutions",
email: "karim@gmail.com",
telephone: "0600000005",
ville: "Rabat",
adresse: {
rue: "Hay Riad",
code_postal: "10100",
ville: "Rabat",
pays: "Maroc"
}
},
{
nom: "Salma Idrissi",
entreprise: "DigitalPro",
email: "salma@gmail.com",
telephone: "0600000006",
ville: "Tanger",
adresse: {
rue: "Malabata",
code_postal: "90000",
ville: "Tanger",
pays: "Maroc"
}
}
];
// 
contacts.forEach(contact => {
console.log(contact.nom, "-", contact.ville);
});
// 
const entreprise = "TechCorp";

const contactsEntreprise = contacts.filter(
contact => contact.entreprise === entreprise
);

console.log(contactsEntreprise);

// 
const contactModifier = contacts.find(
contact => contact.nom === "Mohamed Amine"
);
contactModifier.adresse = {
rue: "Nouvelle Adresse",
code_postal: "20200",
ville: "Casablanca",
pays: "Maroc"
};
contacts.forEach(contact => {
contact.dernierContact = new Date();
});

console.log(contacts);
// 
const aujourdHui = new Date();

const nonContactes = contacts.filter(contact => {
const diff = aujourdHui - new Date(contact.dernierContact);
const jours = diff / (1000 * 60 * 60 * 24);

return jours > 30;
});

console.log(nonContactes);

// 
