/* === Exo5 ===
 *
 * 1. Créer une fonction appelée "calculateMedian"
 * 2. Cette fonction doit recevoir deux nombres en argument et renvoyer leur médiane
 * 3. BONUS : Avant de faire le calcul, vérifier que les nombres reçus en paramètre sont bien des nombres. Si non : renvoyer false
 */

// TODO

// je crée une fonction avec 2 nombres en paramètre
function calculateMedian(firstNumber, secondNumber) {

    // je crée une condition qui vérifie si les deux nombres sont bien des entiers
    if(Number.isInteger(firstNumber) && Number.isInteger(secondNumber)) {
        // je crée une variable qui va contenir le calcul (addition des deux nombres puis division par deux)
        const medianNumber = (firstNumber + secondNumber)/2;
        return medianNumber;
    }
    // sinon je retourne "false"
    else {
        return false;
    }    
}

// Décommenter la ligne ci-dessous pour tester. On devrait avoir "15" dans la console
console.log(calculateMedian(10, 20));