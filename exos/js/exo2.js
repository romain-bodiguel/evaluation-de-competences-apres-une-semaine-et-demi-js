/* === Exo2 ===
 *
 * 1. 1 nombre à virgule aléatoire a été généré automatiquement (floatNumber)
 * 2. Arrondir ce nombre à l'entier le plus proche
 * 3. Stocker l'arrondi dans une variable "roundedInt"
 */

// 1 nombre à virgule aléatoire a été généré automatiquement (floatNumber)
const floatNumber = helper.randomInt(1001, 1000000) / 1000;
console.log(floatNumber);

// je crée une variable roundedInt qui va sortir un nombre arrondi à l'entier le plus proche, grâce à la fonction Math.round, qui va arrondir floatNumber
const roundedInt = Math.round(floatNumber);
console.log(roundedInt);


