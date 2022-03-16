/* === Exo6 ===
 *
 * Le jeu du plus petit ou plus grand est déjà mis en place (dans js/exo6/game.js), pas besoin de le coder !
 * Par contre, on veut coder un script qui va trouver la bonne réponse au jeu !
 * 
 * Avant de commencer à coder, on peut essayer de gagner une partie manuellement ! Le jeu met à notre disposition une
 * méthode `game.guess()` qui permet de proposer une réponse. 
 * Essaie donc de l'utiliser dans la console pour voir ce que le jeu répond. Commence par exemple par `game.guess(1)` pour essayer de voir 
 * si "1" est la bonne réponse ;) 
 * 
 * Maintenant que tu sais comment proposer une réponse, on peut coder un script qui va gagner à tous les coups :  il va proposer toutes les réponses possibles !
 * Le nombre à deviner est toujours situé entre 1 et 20, ça fait 20 propositions à faire. 
 * Il y a peut-être un moyen d'effectuer 20 fois la même action, non ?
 * 
 * 
 * Rappel du jeu "plus petit ou plus grand"
 *   - le "maître du jeu" choisit un nombre aléatoire dans un intervalle donné (par exemple entre 1 et 20)
 *   - ensuite, c'est au joueur d'essayer de deviner, il donne alors un nombre
 *   - le "maître du jeu" répond à la proposition par "tu as gagné", "c'est plus" ou "c'est moins"
 *   - le joueur faire alors une autre proposition
 *   - et ainsi de suite jusqu'à ce que le joueur trouve le bon nombre
 *   - dans cet exo, le script à coder est le joueur, et le "Philippe Risoli" est js/exo6/game.js
 * 
 * Bonus, essayer d'utiliser "break" pour ne pas continuer de proposer des nombres après avoir trouvé
 *    - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/break
 */

// Attention, ici, le nom du module est "exo6" (et pas app, comme d'habitude, car c'est déjà pris ;))
const exo6 = {
  init: function() {
    console.log('exo6.init');

    // On lance le jeu
    game.init();
    exo6.findSecretNumber();

    // TODO
  },

  // je crée une fonction qui va tester toutes les réponses en proposant des nombres de 1 à 20, jusqu'à trouver la bonne réponse
  findSecretNumber: function() {
      // je crée une boucle partant de 0, qui va tester les réponses tant qu'il est inférieur au nombre secret. Dès qu'il trouve le nombre secret, la boucle s'arrête.
      let firstTry = 0;
      while(firstTry < game.secret) {
        firstTry++;
        game.guess(firstTry);
      }
  }
}
// exo6.getRandomInt();
document.addEventListener('DOMContentLoaded', exo6.init);


