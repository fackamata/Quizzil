// Récupération des pièces depuis le fichier JSON
const reponse = 
await fetch("http://localhost:8081/pieces");
const pieces = 
await reponse.json();
 
// Transformation des pièces en JSON
const valeurPieces = JSON.stringify(pieces);

// Stockage des informations dans le localStorage
window.localStorage.setItem("pieces", valeurPieces);