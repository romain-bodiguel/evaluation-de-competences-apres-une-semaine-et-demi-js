/* === Exo1 ===
 *
 * 1. 2 nombres ont été générés automatiquement (firstNumber & secondNumber)
 * 2. Calculer la médiane de ces 2 nombres
 * 3. Quand il n'y a que 2 nombres, la médiane s'obtient en divisant par 2 la somme des 2 nombres
 * 4. Stocker le résultat dans une variable "median"
 */

 // 2 nombres ont été générés automatiquement (firstNumber & secondNumber)
const firstNumber = helper.randomInt(0, 1000);
console.log(firstNumber);
const secondNumber = helper.randomInt(0, 1000);
console.log(secondNumber);


// j'additionne ces deux nombres. Je crée une variable median qui va recceuillir ce réslutat. Puis je divise par 2 (ou par le nombre de variables additionnées)
const median = (firstNumber + secondNumber)/2;
console.log(median);
