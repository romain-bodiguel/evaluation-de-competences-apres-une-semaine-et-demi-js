/* === Exo3 ===
 *
 * 1. 2 nombres ont été générés automatiquement (firstNumber & secondNumber)
 * 2. Comparer les 2 nombres afin de déterminer si le premier est plus grand, plus petit ou égal au deuxième
 * 3. Stocker le résultat dans une variable "result", avec les valeurs "plus", "minus" ou "equal"
 * 4. Rafraichir la page plusieurs fois afin d'avoir un YEAH pour chacun des 3 cas
 */

// 2 nombres ont été générés automatiquement (firstNumber & secondNumber)
const firstNumber = helper.randomInt(1, 8);
console.log(firstNumber);
const secondNumber = helper.randomInt(2, 7);
console.log(secondNumber);

// je crée une fonction qui va accueillir une condition pour comparer mes nombres, avec 2 paramètres (firstNumber et secondNumber)
// je crée une condition qui va comparer les 3 cas possibles et retourner une résultat:
// si firstNumber est plus grand que secondNumber, afficher plus
let result;
if (firstNumber > secondNumber) {
    result = 'plus';
}
// si firstNumber est plus petit que secondNumber, afficher minus
else if (firstNumber < secondNumber) {
    result = 'minus';
}
// si firstNumber est égal à secondNumber, afficher equal
else {
    result = 'equal';
}

// l'exercice fonctionne bien mais le bandeau reste rouge
numberCompare(firstNumber, secondNumber);

