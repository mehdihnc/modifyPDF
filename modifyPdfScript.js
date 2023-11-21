// Importation des bibliothèques nécessaires : 'pdf-lib' pour la modification du PDF et 'fs' pour la gestion des fichiers.
const fs = require('fs');
const { PDFDocument, rgb } = require('pdf-lib');

// Fonction asynchrone pour modifier un document PDF existant.
async function modifyPdf() {
    // Chargement du document PDF existant depuis le système de fichiers.
    const existingPdfBytes = fs.readFileSync('chemin/vers/complexDocument.pdf');
    const pdfDoc = await PDFDocument.load(existingPdfBytes);

    // Ajout de texte sur la première page du document PDF.
    const pages = pdfDoc.getPages();
    const firstPage = pages[0];
    firstPage.drawText('Texte ajouté au PDF existant', {
        x: 50,
        y: 700,
        size: 15,
        color: rgb(0.95, 0.1, 0.1),
    });

    // Optionnel : Ajout d'une nouvelle page avec du texte.
    const newPage = pdfDoc.addPage();
    newPage.drawText('Ceci est une nouvelle page', {
        x: 50,
        y: 700,
        size: 15,
        color: rgb(0, 0, 0),
    });

    // Enregistrement du PDF modifié dans un nouveau fichier.
    const pdfBytes = await pdfDoc.save();
    fs.writeFileSync('chemin/vers/modifiedDocument.pdf', pdfBytes);
}

// Gestion des erreurs potentielles lors de l'exécution de la fonction.
modifyPdf().catch(err => {
    console.error('Une erreur est survenue :', err);
});
