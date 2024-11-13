// Sélectionne le bouton
const toggleNotificationBtn = document.getElementById("toggleNotificationBtn");

// Variable pour suivre l'état de la notification (activée ou désactivée)
let notificationsActive = false;

// Fonction pour afficher une notification
function showNotification() {
    const options = {
        body: "Notification activée", // message de la notification
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Crystal_clear_notification.png/120px-Crystal_clear_notification.png", // Icône fonctionnelle
    };
    const notification = new Notification("Notification", options);

    notification.onclick = function() {
        console.log("Notification clicked!");  // Ajout du log pour la console
        alert("Vous avez cliqué sur la notification!");
    };

    console.log("Notification envoyée !");  // Log pour confirmer l'envoi de la notification
}

// Fonction pour demander la permission et gérer l'activation/désactivation
function handlePermission() {
    if (!notificationsActive) {
        // Demande la permission et affiche la notification si autorisé
        if (Notification.permission === "granted") {
            console.log("hello");
            showNotification();
            notificationsActive = true;
            toggleNotificationBtn.textContent = "Désactiver les notifications";
        } else {
            Notification.requestPermission().then(function(permission) {
                if (permission === "granted") {
                    showNotification();
                    notificationsActive = true;
                    toggleNotificationBtn.textContent = "Désactiver les notifications";
                } else {
                    console.log("Notifications désactivées");
                    alert("Les notifications sont désactivées.");
                }
            });
        }
    } else {
        // Si les notifications sont déjà activées, les désactiver
        notificationsActive = false;
        toggleNotificationBtn.textContent = "Activer les notifications";
        alert("Les notifications ont été désactivées.");
    }
}

// Ajouter un écouteur d'événement sur le bouton
toggleNotificationBtn.addEventListener('click', handlePermission);

// Afficher un log dans la console pour tester l'interaction
console.log("App initialisée");
