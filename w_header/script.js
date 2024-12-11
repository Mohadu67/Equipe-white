
// Sélectionner le bouton d'appel à l'action
const ctaButton = document.querySelector('.cta');

// Ajouter un écouteur d'événements pour afficher une alerte lorsqu'on clique sur le bouton
ctaButton.addEventListener('click', () => {
    alert('Merci de votre intérêt ! Vous pouvez me contacter via le formulaire.');
});

// Optionnel : Ajouter une fonctionnalité pour activer un effet de surbrillance dans la navigation
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = '#007BFF'; // Couleur survolée
    });

    link.addEventListener('mouseout', () => {
        link.style.color = 'white'; // Couleur normale
    });
});
