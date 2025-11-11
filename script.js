// Configuration du calendrier
const CALENDAR_START_DATE = new Date('2025-12-01T08:00:00');
const CALENDAR_END_DATE = new Date('2025-12-24T23:59:59');
const TOTAL_DAYS = 24;
const UNLOCK_HOUR = 8; // Heure de déverrouillage quotidienne

// Icônes pour chaque jour
const dayIcons = ['🎁', '⛄', '🎄', '🔔', '🕯️', '🎅', '🦌', '⭐', '🎪', '🍪', '🥛', '🎵', '❄️', '🎀', '🧦', '🎺', '🍬', '🎂', '🎊', '🌟', '🎉', '🎯', '🎭', '🎨'];

// Contenu pour chaque jour
const dayContents = [
    {
        title: "Jour 1 - Bienvenue !",
        content: `
            <h3>🎄 Bienvenue dans votre calendrier de l'Avent ! 🎄</h3>
            <p>Chaque jour de décembre jusqu'à Noël, une nouvelle case s'ouvrira avec une surprise spéciale !</p>
            <p>Revenez chaque jour pour découvrir des messages, des photos, des énigmes et bien plus encore...</p>
            <p><strong>Joyeux début d'Avent ! 🎅</strong></p>
        `
    },
    {
        title: "Jour 2 - Citation du jour",
        content: `
            <h3>💭 Citation inspirante</h3>
            <p><em>"Noël n'est pas un jour ni une saison, c'est un état d'esprit."</em></p>
            <p>- Calvin Coolidge</p>
            <p>Prenez le temps aujourd'hui de répandre un peu de magie de Noël autour de vous ! ✨</p>
        `
    },
    {
        title: "Jour 3 - Énigme",
        content: `
            <h3>🎯 Énigme de Noël</h3>
            <p><strong>Qui suis-je ?</strong></p>
            <p>Je suis rouge et blanc, j'ai une longue barbe blanche, je voyage dans le ciel avec mes rennes, et j'apporte des cadeaux aux enfants sages.</p>
            <p><em>Réponse : Le Père Noël ! 🎅</em></p>
        `
    },
    {
        title: "Jour 4 - Recette",
        content: `
            <h3>🍪 Recette : Biscuits de Noël</h3>
            <p><strong>Ingrédients :</strong></p>
            <ul>
                <li>250g de farine</li>
                <li>125g de beurre</li>
                <li>100g de sucre</li>
                <li>1 œuf</li>
                <li>1 cuillère à café de cannelle</li>
            </ul>
            <p>Mélangez, découpez et cuisez à 180°C pendant 12 minutes. Décorez avec amour ! ❤️</p>
        `
    },
    {
        title: "Jour 5 - Défi du jour",
        content: `
            <h3>🎯 Défi de Noël</h3>
            <p><strong>Aujourd'hui, votre mission :</strong></p>
            <p>Envoyez un message de Noël à trois personnes que vous n'avez pas vues depuis longtemps !</p>
            <p>Reconnectez-vous et répandez la joie de Noël ! 🎄✨</p>
        `
    },
    // Ajoutez du contenu pour les jours 6 à 24
    ...Array.from({ length: 19 }, (_, i) => ({
        title: `Jour ${i + 6}`,
        content: `
            <h3>🎄 Jour ${i + 6} de l'Avent</h3>
            <p>Voici votre surprise du jour ${i + 6} !</p>
            <p>Personnalisez ce contenu avec vos propres messages, photos, énigmes ou indices spéciaux.</p>
            <p><strong>Profitez de cette journée magique ! ✨</strong></p>
        `
    }))
];

// État du calendrier (sauvegardé dans localStorage)
let openedDays = JSON.parse(localStorage.getItem('openedDays')) || [];

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    createCalendar();
    updateCountdown();
    setInterval(updateCountdown, 1000);
    createSnowfall();
    setupModal();
});

// Créer le calendrier
function createCalendar() {
    const calendarGrid = document.getElementById('calendarGrid');
    
    for (let day = 1; day <= TOTAL_DAYS; day++) {
        const dayElement = createDayElement(day);
        calendarGrid.appendChild(dayElement);
    }
}

// Créer un élément de jour
function createDayElement(day) {
    const dayDiv = document.createElement('div');
    dayDiv.className = 'calendar-day';
    dayDiv.dataset.day = day;
    
    const isUnlocked = isDayUnlocked(day);
    const isOpened = openedDays.includes(day);
    
    if (isOpened) {
        dayDiv.classList.add('opened');
    } else if (isUnlocked) {
        dayDiv.classList.add('unlocked');
    } else {
        dayDiv.classList.add('locked');
    }
    
    const iconDiv = document.createElement('div');
    iconDiv.className = 'day-icon';
    iconDiv.textContent = dayIcons[day - 1];
    
    const numberDiv = document.createElement('div');
    numberDiv.className = 'day-number';
    numberDiv.textContent = day;
    
    const statusDiv = document.createElement('div');
    statusDiv.className = 'day-status';
    if (isOpened) {
        statusDiv.textContent = 'Ouvert';
    } else if (isUnlocked) {
        statusDiv.textContent = 'Disponible';
    } else {
        statusDiv.textContent = 'Verrouillé';
    }
    
    dayDiv.appendChild(iconDiv);
    dayDiv.appendChild(numberDiv);
    dayDiv.appendChild(statusDiv);
    
    if (isUnlocked) {
        dayDiv.addEventListener('click', () => openDay(day));
    }
    
    return dayDiv;
}

// Vérifier si un jour est déverrouillé
function isDayUnlocked(day) {
    const now = new Date();
    const dayDate = new Date(CALENDAR_START_DATE);
    dayDate.setDate(dayDate.getDate() + (day - 1));
    dayDate.setHours(UNLOCK_HOUR, 0, 0, 0); // Définir l'heure à 8h00:00
    
    return now >= dayDate && now <= CALENDAR_END_DATE;
}

// Ouvrir un jour
function openDay(day) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    modalTitle.textContent = dayContents[day - 1].title;
    modalBody.innerHTML = dayContents[day - 1].content;
    
    modal.classList.add('show');
    
    // Marquer comme ouvert
    if (!openedDays.includes(day)) {
        openedDays.push(day);
        localStorage.setItem('openedDays', JSON.stringify(openedDays));
        
        // Mettre à jour l'affichage de la case
        const dayElement = document.querySelector(`[data-day="${day}"]`);
        dayElement.classList.remove('unlocked');
        dayElement.classList.add('opened');
        dayElement.querySelector('.day-status').textContent = 'Ouvert';
    }
}

// Configuration de la modal
function setupModal() {
    const modal = document.getElementById('modal');
    const closeButton = document.getElementById('closeButton');
    
    closeButton.addEventListener('click', () => {
        modal.classList.remove('show');
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            modal.classList.remove('show');
        }
    });
}

// Mettre à jour le compte à rebours
function updateCountdown() {
    const now = new Date();
    
    // Trouver le prochain jour à déverrouiller
    let nextDay = null;
    for (let day = 1; day <= TOTAL_DAYS; day++) {
        if (!isDayUnlocked(day)) {
            nextDay = day;
            break;
        }
    }
    
    if (!nextDay) {
        document.getElementById('countdown').innerHTML = '<p>🎄 Tous les jours sont déverrouillés ! Joyeux Noël ! 🎄</p>';
        return;
    }
    
    const nextDate = new Date(CALENDAR_START_DATE);
    nextDate.setDate(nextDate.getDate() + (nextDay - 1));
    nextDate.setHours(UNLOCK_HOUR, 0, 0, 0); // Définir l'heure à 8h00:00
    
    const diff = nextDate - now;
    
    if (diff <= 0) {
        // Rafraîchir le calendrier si un nouveau jour est disponible
        document.getElementById('calendarGrid').innerHTML = '';
        createCalendar();
        return;
    }
    
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// Créer l'effet de neige
function createSnowfall() {
    const snowContainer = document.getElementById('snowContainer');
    const snowflakeCount = 50;
    
    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.textContent = '❄';
        snowflake.style.left = Math.random() * 100 + '%';
        snowflake.style.animationDuration = (Math.random() * 3 + 2) + 's';
        snowflake.style.animationDelay = Math.random() * 5 + 's';
        snowflake.style.fontSize = (Math.random() * 10 + 10) + 'px';
        snowflake.style.opacity = Math.random() * 0.6 + 0.4;
        
        snowContainer.appendChild(snowflake);
    }
}

