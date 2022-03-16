/* === Exo4 ===
 *
 * Voici un formulaire avec un unique champ input. Au chargement de la page, ce champ est automatiquement rempli.
 * On veut récupérer ici le prénom inséré dans le champ et l'ajouter dans la fiche personnage sous le champ. Le tout en JavaScript !
 *
 * 1. Récupérer la valeur de cet input et la stocker dans une variable  appelée "inputContent"
 * 2. En JS, créer un nouvel élément <span> et remplir son contenu avec la valeur contenue dans "inputContent"
 * 3. Ajouter la classe "valeur-fiche" au nouvel élément <span> créé
 * 4. Ajouter l'élément <span> en tant qu'enfant de l'élément ayant l'ID "prenom" de la fiche personnage
 */

// TODO
// je sélectionne le input contenant le nom généré aléatoirement
const inputSelect = document.querySelector('#gardons-la-form > input');

// je récupère la valeur de ce input que je stocke dans la variable inputContent
const inputContent = inputSelect.value;

// je sélectionne ensuite l'endroit où je vais insérer le nom du personnage
const prenomDivElement = document.querySelector('#prenom');

// je crée une span pour y placer la value récupérée
const prenomSpanElement = document.createElement('span');

// je lui applique la même classe que les autres valeurs
prenomSpanElement.classList.add('valeur-fiche');

// je lui donne le contenu texte de la value récupérée plus
prenomSpanElement.textContent = inputContent;

// je mets la span à la fin de la div sélectionnée plus haut
prenomDivElement.append(prenomSpanElement);