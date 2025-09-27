// Exercice 9
// Écrivez votre code ici
let maison = 60000000;
let terrains = 40000000;
let liquidites = 20000000;
let patrimoine = maison + terrains + liquidites;

let categorie1 = (75 / 100) * patrimoine;
let enfantPaul = categorie1 / 3;
let enfantMarie= categorie1 / 3;
let enfantAlain= categorie1 / 3;
let petitsEnfants = enfantAlain / 2;
let eric = petitsEnfants;
let clair = petitsEnfants;

let categorie2 = (25 / 100) * patrimoine;
let epouse = categorie2 / 3 ;
let frereJoseph = categorie2 / 3 ;
let frereDaniel = categorie2 / 3 ;
let nieceSarah = frereDaniel;

console.log("Paul = "+enfantPaul+" ; Marie ="+enfantMarie+" ; Eric ="+eric+" ; Claire ="+clair+ " ; Madame MUKUNA ="+epouse+" ; Joseph = "+frereJoseph+" ; Sarah = "+nieceSarah);
