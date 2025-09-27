// Exercice 8
// Écrivez votre code ici
let salaireMensuel = 500;
let loyer = (30 / 100) * salaireMensuel;
let nourriture = (20 / 100) * salaireMensuel;
let transport = (10 / 100) * salaireMensuel;
let autresDepenses = 25;
autresDepenses = autresDepenses + 50;
let totaldepenses = loyer + nourriture + transport + autresDepenses ;
let reste = salaireMensuel - totaldepenses;

console.log("Le salaire est de "+ salaireMensuel+ "Le loyer est "+ loyer + "La nourriture est de "+ nourriture+"Le transport"+transport+"Les autres dédepenses sont à " +autresDepenses+" le total dépenses est de "+totaldepenses+
    "le reste est "+reste
);
