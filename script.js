function validerFormulaire() {
    // Récupérer les valeurs des champs
    const firstName = document.getElementById('prenom').value.trim();
    const lastName = document.getElementById('nom').value.trim();
    const subject = document.querySelector('input[placeholder="Veuillez mettre ici votre sujet"]').value.trim();
    const message = document.querySelector('textarea').value.trim();


  // Réinitialiser les messages d'erreur
    document.getElementById('prenomError').textContent = '';
    document.getElementById('nomError').textContent = '';
    document.getElementById('sujetError').textContent = '';
    document.getElementById('messageError').textContent = '';

    let isValid = true;

    // Vérification pour le prénom (uniquement des lettres)
    if (!/^[a-zA-Z]+$/.test(firstName)) {
        document.getElementById('prenomError').textContent = 'Veuillez entrer uniquement des lettres !';
        isValid = false;
    }

    // Vérification pour le nom (uniquement des lettres)
    if (!/^[a-zA-Z]+$/.test(lastName)) {
        document.getElementById('nomError').textContent = 'Veuillez entrer uniquement des lettres !';
        isValid = false;
    }

    // Vérification pour le sujet (uniquement des lettres)
    if (!/^[a-zA-Z]+$/.test(subject)) {
        document.getElementById('sujetError').textContent = 'Veuillez entrer uniquement des lettres !';
        isValid = false;
    }

    
    // Vérifier si les champs sont remplis
    if (!firstName || !lastName || !subject || !message) {
        alert("Veuillez remplir tous les champs.");
        return false; // Empêche l'envoi du formulaire
    }

    // Vérification de la longueur minimale du message
    if (message.length < 10) {
        alert("Le message doit contenir au moins 10 caractères.");
        return false;
    }

    // Si tout est valide, afficher un message de succès
    alert("Message envoyé avec succès !");
    return true; // Permet l'envoi du formulaire
}
// Effet de survol sur les cartes de projet
function agrandirCarte(carte) {
    carte.style.transform = "scale(1.05)";
    carte.style.transition = "transform 0.3s ease";
}

function reduireCarte(carte) {
    carte.style.transform = "scale(1)";
}
