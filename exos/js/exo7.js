/* === Exo7 ===
 *
 * 1. 2 nombres ont été générés automatiquement (dans les propriétés firstNumber & secondNumber)
 * 2. Afficher ces 2 nombres dans les span correspondants dans la page
 * 3. Dans le formulaire, on demande à l'internaute de nous donner son calcul de la médiane arrondie à l'entier le plus proche
 * 4. Une fois le formulaire soumis,
 *   - on calcule en JavaScript la médiane arrondie à l'entier le plus proche
 *   - on affiche dans la <div id="result"> le résultat calculé en JavaScript
 *   - on récupère la valeur saisie (attention au type)
 *   - on compare la valeur saisie avec le résultat calculé en JS
 *      - si c'est égal 
 *          - ajouter dans <div id="result"> le texte "Génial, Bravo !"
 *          - ajouter la classe "success" sur la <section id="test">
 *      - si l'écart est de 1 
 *          - ajouter dans <div id="result"> le texte "arf, tu y étais presque..."
 *          - ajouter la classe "notice" sur la <section id="test">
 *      - si l'écart est de 2 ou 3
 *          - ajouter dans <div id="result"> le texte "va falloir retravailler tout ça"
 *          - ajouter la classe "warning" sur la <section id="test">
 *      - si l'écart est de 4 ou plus
 *          - ajouter dans <div id="result"> le texte "t'es sérieux là !?"
 *          - ajouter la classe "error" sur la <section id="test">
 */

// Attention, ici, le nom du module est "exo7" (et pas app, comme d'habitude, car c'est déjà pris ;))
const exo7 = {
  // 2 nombres ont été générés automatiquement (dans les propriétés firstNumber & secondNumber)
  firstNumber: helper.randomInt(1, 100),
  secondNumber: helper.randomInt(1, 100),
  init: function() {
    console.log('exo7.init');
    console.log(exo7.firstNumber);
    console.log(exo7.secondNumber);

    // j'ajoute un écouteur d'évènement sur le bouton du formulaire
    let clickFormButton = document.querySelector('#rounded-median-form > button');
    clickFormButton.addEventListener('click', exo7.checkForm);

    exo7.placeNumber();
    exo7.checkForm();

    // TODO
  },

  // je crée une fonction qui récupère la place de firstNumber et secondNumber et les y insère
  placeNumber: function() {
    // je sélectionne mes spans
    const placeFirstNumber = document.querySelector('#number1');
    const placeSecondNumber = document.querySelector('#number2');

    // je leur donne comme contenu texte le contenu de firstNumber et secondNumber
    placeFirstNumber.textContent = exo7.firstNumber;
    placeSecondNumber.textContent = exo7.secondNumber;
  },

  // je crée une fonction qui va regrouper toutes les étapes de vérifications, découpées en plusieurs fonctions
  checkForm: function(event) {
    // j'empèche le rechargement de la page, notamment quand l'utilisateur saisit sa valeur
    event.preventDefault();

    // j'appelle ma fonction qui fait la calcul de médiane
    exo7.calcJSMedian(exo7.firstNumber, exo7.secondNumber);

    // je récupère la valeur saisie par l'utilisateur
    const userNumber = document.querySelector('#rounded-median-form > input').value;
    
    exo7.checkValue(userNumber);

    // je récupère la valeur de la médiane calculée en js
    const medianCalcText = document.querySelector('#result').innerText;
    // je transforme cette valeur en integer
    const medianCalc = parseInt(medianCalcText);
    // je sélectionne la div et la section qui vont être modifiées avec la conidition
    const divElement = document.querySelector('#result');
    const sectionElement = document.querySelector('#test');
    sectionElement.classList.remove('success', 'notice', 'warning', 'error');

    // je compare le résultat de l'utilisateur avec une condition    
    if(userNumber == medianCalc) {
      divElement.textContent = "Génial, bravo !";
      sectionElement.classList.add('success');
    } else if ((medianCalc-1) <= userNumber && userNumber <= (medianCalc+1)) {
      divElement.textContent = "Arf, tu y étais presque...";
      sectionElement.classList.add('notice');
    } else if ((medianCalc-2) <= userNumber && userNumber <= (medianCalc+2)) {
      divElement.textContent = "Va falloir retravailler tout ça";
      sectionElement.classList.add('warning');
    } else {
      divElement.textContent = "T'es sérieux là !?";
      sectionElement.classList.add('error');
    }
  },

  // je crée une fonction qui va calculer la mediane de firstNumber et secondNumber
  calcJSMedian: function(firstNumber, secondNumber) {
    // je crée une variable qui va additionner les deux nombres puis les diviser par deux
    const medianCalc = (firstNumber + secondNumber)/2;
    document.querySelector('#result').textContent = medianCalc;
  },

  checkValue: function(value) {
    // je vérifie que la valeur saisie est bien un nombre
    const intUser = parseInt(value);
    if(isNaN(intUser)) {
      console.log('Votre saisie est incorrecte');
      return false;
    }
  }
}

document.addEventListener('DOMContentLoaded', exo7.init);


