
# TP de Modification de PDF avec pdf-lib en NodeJS

## Objectif du TP
L'objectif de ce TP est d'utiliser NodeJS et la bibliothèque pdf-lib pour modifier un document PDF existant.

## Prérequis
- Node.js installé sur votre machine.
- Le package pdf-lib installé dans votre projet NodeJS.

## Description du Script de Modification de PDF

Le script `modifyPdfScript.js` utilise `pdf-lib` pour modifier un PDF existant. Il se compose de plusieurs parties :

1. **Importation des Modules Nécessaires** :
   - `pdf-lib` pour la manipulation du PDF.
   - `fs` (File System) pour lire et écrire des fichiers.

2. **Chargement et Modification du Document PDF** :
   - Lecture du fichier PDF existant.
   - Ajout de texte et/ou d'images.
   - Ajout de nouvelles pages.

3. **Enregistrement du PDF Modifié** :
   - Sauvegarde des modifications dans un nouveau fichier PDF.

## Instructions d'Utilisation

1. Placez le fichier PDF original dans le même répertoire que le script ou modifiez le chemin dans le script.
2. Exécutez `npm install pdf-lib` pour installer la dépendance nécessaire.
3. Exécutez le script avec `node modifyPdfScript.js`.
4. Vérifiez le fichier PDF modifié pour s'assurer que les modifications sont appliquées.

## Tests et Validation

- Testez le document PDF modifié pour vérifier les modifications.
- Ouvrez le PDF modifié dans différents lecteurs pour assurer la compatibilité.

## Documentation

Documentez chaque étape de votre processus, y compris les choix et les défis rencontrés.
