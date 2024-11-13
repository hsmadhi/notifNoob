// Sélectionne les boutons

const requestPermissionBtn = document.getElementById("requestPermissionBtn");
const denyPermissionBtn = document.getElementById("denyPermissionBtn");

// Fonction pour afficher une notification
function showNotification() {
    const options = {
        body: "Notification activée", // message de la notification
        icon: "https://via.placeholder.com/200", // Icône (ici une image placeholder)
    };
    const notification = new Notification("Notification", options);

    notification.onclick = function() {
        console.log("Notification clicked");
    };
}

// Fonction pour demander la permission

function requestPermission() {
    if (Notification.permission === "granted") {
        // si la permission est déjà accordée
        showNotification();
    } else {
        // Demander la permission si elle n'a pas encore été accordée ou refusée
        Notification.requestPermission().then(function(permission) {
        if (permission === "granted") {
            showNotification();
        }    else {
            alert("Les notifications ne sont pas activées");
        }
        });
    }
}

// Foncction pour gérer le refus de notification
function denyPermission () {
    alert("Les notifications ne sont pas activées.");
}

// Ajouter des écouteurs d'évènements pour les boutons

requestPermissionBtn.addEventListener('click', requestPermission);
denyPermissionBtn.addEventListener('click', denyPermission);