## Compte rendu du projet

Ce TP Angular vise à construire une application « Pokedemo » afin de manipuler
l’Angular CLI et l’architecture modulaire du framework.

1. **Installation de l’environnement**
   - Vérifier Node.js ≥ 20 (`node -v`) et npm ≥ 10 (`npm -v`) je n'avais pas la bonne version et cela nous a mis du temps avant de comprendre le problème.
   - Cloner le dépôt puis installer les dépendances :
     ```bash
     git clone https://github.com/estellephalippou/teaching-jxs-angular
     cd pokedemo
     npm install
     ```

2. **Lancement des TPs**
   - Démarrer le serveur de développement : `npm start` (ou `ng serve` qui est l'option qui marche le plus).
   - Ouvrir `http://localhost:4200/`. Les modifications dans `src/` sont rechargées automatiquement.

3. **Travail réalisé**
   - Génération des composants/pages avec `ng generate component ...`.
   - Création des services métiers (`ng generate service services/pokemon`) et consommation d’API.
   - Mise en forme et tests manuels dans le navigateur pour valider les fonctionnalités.

4. **Retour d’expérience**
   - L’Angular CLI simplifie la création des structures nécessaires au TP.
   - La séparation composants/services facilite la maintenance et le partage des données.