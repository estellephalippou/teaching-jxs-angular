# Pokedemo

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.3.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


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