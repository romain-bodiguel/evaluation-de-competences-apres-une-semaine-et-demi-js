/* === Bonus ===
 *
 * 1. Le jeu du plus petit ou plus grand est déjà mis en place (dans js/bonus/game.js)
 * 2. Il va falloir coder le script qui va deviner le nombre aléatoire généré par le jeu
 * 3. Ecrire un script qui va trouver le nombre (comme dans l'exo6), mais avec le moins d'essais possibles (faut dire qu'il y a 2000 possibilités...)
 *    - pour cela on va chercher à restreindre progressivement le nombre de possibilités
 *    - on commence obligatoirement par 2000 possibilités
 *    - on propose alors la médiane => 1000 ou 1001
 *    - si c'est plus
 *      - alors on n'a plus que 999 possibilités (de 1001 à 2000)
 *    - si c'est moins
 *      - alors on n'a plus que 999 possibilités (de 1 à 999)
 *    - si c'est égal
 *      - alors (on a beaucoup de chance) on a trouvé !
 *    - une fois restreint à 999 possibilités
 *      - on recommence et on propose à nouveau la médiane
 *      - on n'aura plus alors que 499 possibilités
 *    - et ainsi de suite jusqu'à tomber sur la bonne valeur
 *    - Habile non ?
 * 
 * Tu peux partir du code de l'exo6, mais on te suggère de repartir de 0 ;)
 * Tu l'auras constaté, c'est pas facile. C'est de l'algo. Mais en même temps, c'est un bonus, c'est fait pour se casser la tête ^^
 */

// Attention, ici, le nom du module est "bonus" (et pas app, comme d'habitude, car c'est déjà pris ;))
const bonus = {
  init: function() {
    console.log('bonus.init');

    // On lance le jeu
    game.init();

    // Initialisation des variables min/max et trouvé
    let found = false;
    let currentMin = 1;
    let currentMax = 2000;

    // tant qu'on a pas trouvé
    while (found === false) {
      // On veut proposer la moitié de min/max
      const guess = Math.round((currentMax + currentMin) / 2);

      // On récupère le résultat de notre proposition
      const result = game.guess(guess);

      // On compare le résultat
      if (result === 'win') { // si trouvé
        found = true;
      } else if (result === 'plus') { // si plus, on change la valeur min
        currentMin = guess;
      } else if (result === 'minus') { // si moins, on change la veleur de max
        currentMax = guess;
      } else { // sinon, bah, mais, on ne devrait jamais arriver ici !!!
        console.log('WHAAATTT !');
      }
    }
  }
}


document.addEventListener('DOMContentLoaded', bonus.init);


