// Configuration du calendrier
const CALENDAR_START_DATE = new Date('2025-12-01T08:00:00');
const CALENDAR_END_DATE = new Date('2025-12-24T23:59:59');
const TOTAL_DAYS = 24;
const UNLOCK_HOUR = 8; // Heure de déverrouillage quotidienne

// Icônes pour chaque jour (désactivées)
const dayIcons = [];

// Contenu pour chaque jour
const dayContents = [
    {
        title: "Lundi 1er décembre",
        content: `
            <h3>Bienvenue dans le calendrier de l'avent spécial Agathe 😎</h3>
            <p>On est partis pour 25 jours de plaisir... En commençant par une photo de la belle baroudeuse que tu es</p>
            <img src="agathe1.jpeg" alt="agathe" style="max-width: 100%; border-radius: 10px; margin: 20px 0;">
            <p>On se fera également un gros bisou pour fêter la date de notre premier bisou 😇</p>
            <p><strong>Joyeux début d'Avent mon ange</strong></p>
        `
    },
    {
        title: "Mardi 2 décembre",
        content: `
            <h3>Voici l'une de mes photos préférées de nous pour bien commencer cette journée de télétravail 😊</h3>
            <img src="nous2.JPG" alt="nous" style="max-width: 100%; border-radius: 10px; margin: 20px 0;">
            <p>Elle me rappelle tout ce que je ressens pour toi... Une fois que tu l'auras ouverte, tu pourras venir m'en demander plus 😘</p>
        `
    },
    {
        title: "Mercredi 3 décembre",
        content: `
            <h3>Une musique pour toi</h3>
            <audio controls style="width: 100%; margin: 20px 0;">
                <source src="christmas.mp3" type="audio/mpeg">
                Votre navigateur ne supporte pas l'élément audio.
            </audio>
            <p>Je t'aurais bien proposé de faire la chorée ensemble, mais c'est pas la plus intéressante... Un peu de patience pour une meilleure chorée 😇</p>
        `
    },
    {
        title: "Jeudi 4 décembre",
        content: `
            <h3>Joyeux anniversaire d'emménagement !</h3>
            <p>Ça fait officiellement 1 an et 2 mois qu'on a emmenagés ensemble</p>
            <div style="text-align: center; margin: 20px 0;">
                <img src="home.jpg" alt="home" style="border-radius: 10px;">
            </div>
            <p>À cette occasion, voici un petit poème de ma conception pour toi :</p>
            <p>
                Bientôt 3 années passées ensemble, dont plus d'une dans notre chez nous<br>
                Merci de garder les pieds sur terre, lorsque les miens sont dans le flou<br>
                Ta présence me rassure, et me donne toute l'énergie<br>
                De continuer à me dépasser, d'y voir une éclaircie<br>
                Toi et moi, on vise la lune<br>
                Dans la fortune, comme l'infortune<br>
                Un simple couple, on est plus que ça<br>
                Un couple qui peut tout, et même au-delà
            </p>
        `
    },
    {
        title: "Vendredi 5 décembre",
        content: `
            <h3>Tu as gagné un bon pour un restaurant de ton choix !</h3>
            <p>Là où ton ventre te guidera, nous nous rendrons</p>
        `
    },
    {
        title: "Samedi 6 décembre",
        content: `
            <h3>Voici quelques raisons pour lesquelles décembre est plus beau avec toi</h3>
            <ul style="list-style: none; padding: 0;">
                <li style="padding: 10px; margin: 5px 0; background: rgba(255, 255, 255, 0.1); border-radius: 5px;">Les matchings manteaux de beaux-gosses</li>
                <li style="padding: 10px; margin: 5px 0; background: rgba(255, 255, 255, 0.1); border-radius: 5px;">Les films de Noël ensemble sous ton gros plaid</li>
                <li style="padding: 10px; margin: 5px 0; background: rgba(255, 255, 255, 0.1); border-radius: 5px;">Tes pieds tous froids que je dois réchauffer</li>
                <li style="padding: 10px; margin: 5px 0; background: rgba(255, 255, 255, 0.1); border-radius: 5px;">Les couches de vêtements supplémentaires que je dois t'enlever...</li>
                <li style="padding: 10px; margin: 5px 0; background: rgba(255, 255, 255, 0.1); border-radius: 5px;">L'attention qu'on porte à la santé de l'autre</li>
                <li style="padding: 10px; margin: 5px 0; background: rgba(255, 255, 255, 0.1); border-radius: 5px;">La meilleure fête de l'année qu'on passe ensemble, et en famille 😊 Et pour ça, je t'en suis infiniment reconnaissant...</li>
            </ul>
        `
    },
    {
        title: "Dimanche 7 décembre",
        content: `
            <h3>Challenge spécial</h3>
            <p>Aujourd'hui, on va devoir réaliser une bonne action : donner à un SDF ou aider quelqu'un de manière générale, complimenter un inconnu ou appeler quelqu'un qu'on doit appeler depuis longtemps</p>
        `
    },
    {
        title: "Lundi 8 décembre",
        content: `
            <h3>Voici une recette végétarienne à cuisiner seul (moi) ou ensemble</h3>
            <p><strong>Curry de légumes aux épices</strong></p>
            <p><strong>Ingrédients :</strong></p>
            <ul>
                <li>3 courgettes</li>
                <li>6 carottes</li>
                <li>2 pommes de terre</li>
                <li>10 cl de lait de coco</li>
                <li>3 échalotes</li>
                <li>2 gousses d'ail</li>
                <li>1 oignon</li>
                <li>2 cuillères à soupe de sauce au curry</li>
                <li>1 cuillère à café de coriandre en poudre</li>
                <li>1 cuillère à café de gingembre</li>
                <li>1 cuillère à soupe d'huile d'olive</li>
                <li>Sel et poivre du moulin</li>
            </ul>
            <br>
            <p><strong>Préparation :</strong></p>
            <ol>
                <li>Émincez les échalotes et l'oignon, écrasez l'ail. Faites-les revenir dans l'huile chaude avec les épices. Remuez souvent.</li>
                <li>Ajoutez le curry puis le lait de coco. Remuez et réservez.</li>
                <li>Épluchez les pommes de terre et les carottes. Coupez tous les légumes en morceaux. Faites cuire les pommes de terre 10 min à la vapeur puis ajoutez les carottes et les courgettes. Poursuivez la cuisson 10 min. Les légumes doivent être cuits mais légèrement croquants.</li>
                <li>Mélangez à la sauce, laisser sur feu doux 10 min. Servez chaud.</li>
            </ol>
            <p>Prête à mettre les mains dans le cambouis ?</p>
        `
    },
    {
        title: "Mardi 9 décembre",
        content: `
            <h3>Tu l'auras peut-être deviné le 3 décembre, mais voilà ce que je te propose aujourd'hui...</h3>
            <img src="bed.gif" alt="are are" style="max-width: 100%; border-radius: 10px; margin: 20px 0;">
            <p>On va travailler cette chorée incroyable ensemble 😎</p>
        `
    },
    {
        title: "Mercredi 10 décembre",
        content: `
            <h3>LE SAPIN DE NOËL !!!</h3>
            <p>Et si on le décorait aujourd'hui ?!</p>
        `
    },
    {
        title: "Jeudi 11 décembre",
        content: `
            <h3>Tu as gagné un bon pour le plaisir de ton choix !</h3>
            <p>Un lieu, un espace, un moment, une action, laisse libre court à ton imagination et demande-moi absolument tout ce que tu veux : je suis à toi...</p>
            <p>Voici une petite liste de propositions pour t'aider à faire ton choix :</p>
            <ul>
                <li>Un massage normal de prime abord, mais qui se révèlera plus sensuel qu'il n'y paraît...</li>
                <li>Une utilisation originale de mes talents... linguistiques : où tu veux, quand tu veux</li>
                <li>Une nouvelle position</li>
                <li>Un date torride en dehors de la maison : pas de sous-vêtements, un toucher discret régulier, un bon verre de vin avant de rentrer à la maison</li>
            </ul>
        `
    },
    {
        title: "Vendredi 12 décembre",
        content: `
            <h3>Tu as gagné un bon pour une sortie à la patinoire !</h3>
            <p>Prépare-toi à glisser parce qu'on va tenter des trucs sympas 😎</p>
            <p>Mais... Dans le cas où nous ne nous senterions pas assez en forme, voici une liste de restaurants que je te propose, en remettant la patinoire à la prochaine occasion :</p>
            <ul>
                <li>Le Potager de Charlotte (tu connais déjà il me semble 😝)</li>
                <li>Qasti Bistrot, un restaurant libanais entièrement végétarien</li>
                <li>Tekés, "une ode au végétal et aux cuissons ancestrales de Jérusalem"</li>
                <li>Mannie, de la street-food végétarienne, des burgers de qualité à manger sur place ou à emporter</li>
                <li>Breathe, un restaurant de sushis végans</li>
            </ul>
            <p>Alors, tu as un coup de foudre ? Sinon, je réserve pour nous et je te fais la surprise 😊</p>
        `
    },
    {
        title: "Samedi 13 décembre",
        content: `
            <h3>Quiz : Est-ce que tu me connais si bien que ça ? Tu as tout ton temps...</h3>
            <div style="text-align: left;">
                <p><strong>Question 1 : </strong>Qu'est-ce ou qui est-ce que j'aime le plus au monde ?</p>
                <p><strong>Question 2 : </strong>Quel est le meilleur animé du monde ?</p>
                <p><strong>Question 3 : </strong>Quel est mon personnage favori dans League of Legends ?</p>
                <p><strong>Question 4 : </strong>Quel est mon plus grand talent ?</p>
            </div>
            <p style="margin-top: 20px;">Maintenant on va compter les points 😈</p>
        `
    },
    {
        title: "Dimanche 14 décembre",
        content: `
            <h3>Le mystère des trois points</h3>
            <p>Voici une carte avec 3 lieux parisiens emblématiques. Mais ce n'est pas un hasard...</p>
            <div id="restaurant-map" style="width: 100%; height: 400px; margin: 20px 0; border-radius: 10px; overflow: hidden; border: 2px solid rgba(255, 255, 255, 0.3);"></div>
            <p><em>Qui sait ce qui se cache derrière cette énigme...</em></p>
        `
    },
    {
        title: "Lundi 15 décembre",
        content: `
            <h3>Pour un début de semaine plus agréable</h3>
            <p>Je ne serai pas là pour t'encourager physiquement, mais je penserai très fort à toi, et on se retrouve très vite ce soir 😊</p>
        `
    },
    {
        title: "Mardi 16 décembre",
        content: `
            <h3>Voici plusieurs charades menant à des vérités absolues sur toi 🫢</h3>
            <div style="padding: 20px; background: rgba(255, 255, 255, 0.1); border-radius: 10px;">
                <p><strong>Mon premier est fêté en début d'année</strong></p>
                <p><strong>Mon second est un pronom personnel</strong></p>
                <p style="margin-top: 20px; font-size: 1.3rem; text-align: center; color: #ffd700;">
                    <strong>Mon tout n'est pas visible à l'œil nu</strong>
                </p>
            </div>

            <div style="padding: 20px; background: rgba(255, 255, 255, 0.1); border-radius: 10px;">
                <p><strong>Mon premier est une conjugaison en deux lettres du verbe savoir en espagnol</strong></p>
                <p><strong>Mon second est un anagramme de "ski"</strong></p>
                <p style="margin-top: 20px; font-size: 1.3rem; text-align: center; color: #ffd700;">
                    <strong>Mon tout te représente dans 99% des situations</strong>
                </p>
            </div>
        `
    },
    {
        title: "Mercredi 17 décembre",
        content: `
            <h3>📅 Timeline de notre histoire</h3>
            <div style="position: relative; padding: 20px 0;">
                <div style="border-left: 3px solid #ffd700; padding-left: 20px; margin-bottom: 30px;">
                    <h4 style="color: #ffd700;">Premier contact</h4>
                    <p><em>Le 27 janvier 2023, un jour de fête qui n'a pas eu la tournure attendue, et puis nous avons échangé nos premiers messages, pendant que je partageais ton profil à Matteo et Céline</em></p>
                </div>
                <div style="border-left: 3px solid #ffd700; padding-left: 20px; margin-bottom: 30px;">
                    <h4 style="color: #ffd700;">Premier rendez-vous</h4>
                    <p><em>Le 1er février 2023, on a mis seulement 5 jours à se rencontrer, en pleine semaine, je l'ai déjà dit 100 fois mais je me suis vraiment dit "wow" en te voyant arriver...</em></p>
                </div>
                <div style="border-left: 3px solid #ffd700; padding-left: 20px; margin-bottom: 30px;">
                    <h4 style="color: #ffd700;">Premier baiser</h4>
                    <p><em>Le 12 février 2023, jour de fête pour un autre petit individu, nous avons dépassé la timidité et pu échanger notre premier baiser dans un endroit très romantique 🫢</em></p>
                </div>
                <div style="border-left: 3px solid #ffd700; padding-left: 20px; margin-bottom: 30px;">
                    <h4 style="color: #ffd700;">Emménagement ensemble</h4>
                    <p><em>Le 4 octobre 2024, un jour particulièrement spécial car il représente un foyer commun et un nouveau chapitre de notre couple</em></p>
                </div>
                <div style="border-left: 3px solid #ffd700; padding-left: 20px;">
                    <h4 style="color: #ffd700;">Bientôt</h4>
                    <p><em>Et bien plus encore... 😇</em></p>
                </div>
            </div>
        `
    },
    {
        title: "Jeudi 18 décembre",
        content: `
            <h3>Tu as gagné un bon pour un bain relaxant</h3>
            <p>Bougies, musique douce, bulles... Je m'occupe de tout pour que tu puisses te détendre</p>
            <p>Voici un aperçu de ce qui t'attend :</p>
            <i>The girl in the whirlwind</i><br>
            <i>Laissez-vous emporter dans un tourbillon absolu de vanille sucrée, de sel marin adoucissant et de folklore bulgare. Avec un peu de courage et un cœur chaleureux, le printemps reviendra.</i><br>
            <p>N'hésite pas à venir réclamer ton bien</p>
        `
    },
    {
        title: "Vendredi 19 décembre",
        content: `
            <h3>Une session d'essayage... Mais pourquoi ?</h3>
            <p style="font-size: 1.1rem; padding: 20px; background: rgba(255, 255, 255, 0.1); border-radius: 10px;">
                <strong>Avant d'aller au marché de Noël...</strong><br>
                On va choisir ensemble notre plus belle tenue ensemble !
            </p>
        `
    },
    {
        title: "Samedi 20 décembre",
        content: `
            <h3>Une case à rouvrir pour avoir le sourire</h3>
            <img src="moi.jpeg" alt="moi" style="max-width: 100%; border-radius: 10px; margin: 20px 0;">
        `
    },
    {
        title: "Dimanche 21 décembre",
        content: `
            <h3>Tu as gagné un bon pour un massage</h3>
            <p>Un moment de détente rien que pour toi : bougies, musique et huile de massage à profusion</p>
        `
    },
    {
        title: "Lundi 22 décembre",
        content: `
            <h3>Noël approche !!</h3>
            <div id="countdown-noel" style="text-align: center; padding: 30px; background: rgba(255, 215, 0, 0.2); border-radius: 10px; margin: 20px 0;">
                <p style="font-size: 1.5rem; margin-bottom: 10px;"><strong>Plus que</strong></p>
                <p style="font-size: 2.5rem; font-weight: bold; color: #ffd700;" id="days-left">...</p>
                <p style="font-size: 1.5rem;"><strong>jours avant Noël !</strong></p>
            </div>
            <p>Ça va être une super fin d'année 😍</p>
        `
    },
    {
        title: "Mardi 23 décembre",
        content: `
            <h3>Imagine Yoko comme ça ?</h3>
            <img src="cat.gif" alt="Chat de Noël" style="max-width: 100%; border-radius: 10px; margin: 20px 0;">
            <p>Ça n'arrivera jamais, mais imagine...</p>
        `
    },
    {
        title: "Mercredi 24 décembre",
        content: `
            <h3>Joyeux réveillon mon amour</h3>
            <p style="font-size: 1.3rem; padding: 30px; background: linear-gradient(135deg, rgba(255, 215, 0, 0.3), rgba(255, 140, 0, 0.3)); border-radius: 10px; text-align: center; line-height: 1.8;">
                <strong>J'ai de la chance de toujours t'avoir à mes côtés</strong><br><br>
                Je t'aime plus que tout ce que tu peux imaginer, et que tout ce que je pourrais essayer de décrire
            </p>
        `
    }
];

// État du calendrier (sauvegardé dans localStorage)
let openedDays = JSON.parse(localStorage.getItem('openedDays')) || [];

// Contenu de la boîte à reports
const bonusContent = {
    title: "📦 Boîte à reports",
    content: `
        <p style="margin-bottom: 25px; font-style: italic; opacity: 0.9;">Ici se trouvent les défis /actions / bons ou autre qui n'ont pas encore été faits / utilisés à la date prévue - à faire / utiliser quand tu veux !</p>

        <div style="background: rgba(255, 255, 255, 0.1); padding: 20px; border-radius: 10px; border-left: 4px solid #ffd700; margin-bottom: 15px;">
            <h4 style="color: #ffd700; margin-bottom: 10px;">Challenge spécial</h4>
            <p style="opacity: 0.8; font-size: 0.9rem; margin-bottom: 10px;"><em>Initialement prévu pour le 7 décembre</em></p>
            <p>Aujourd'hui, on va devoir réaliser une bonne action : donner à un SDF ou aider quelqu'un de manière générale, complimenter un inconnu ou appeler quelqu'un qu'on doit appeler depuis longtemps</p>
        </div>

        <div style="background: rgba(255, 255, 255, 0.1); padding: 20px; border-radius: 10px; border-left: 4px solid #ffd700; margin-bottom: 15px;">
            <h4 style="color: #ffd700; margin-bottom: 10px;">Recette de cuisine</h4>
            <p style="opacity: 0.8; font-size: 0.9rem; margin-bottom: 10px;"><em>Initialement prévu pour le 8 décembre</em></p>
            <p>À réaliser seul ou à deux</p>
        </div>

        <div style="background: rgba(255, 255, 255, 0.1); padding: 20px; border-radius: 10px; border-left: 4px solid #ffd700; margin-bottom: 15px;">
            <h4 style="color: #ffd700; margin-bottom: 10px;">Tu as gagné un bon pour le plaisir de ton choix !</h4>
            <p style="opacity: 0.8; font-size: 0.9rem; margin-bottom: 10px;"><em>Initialement prévu pour le 11 décembre</em></p>
            <p>Un lieu, un espace, un moment, une action, laisse libre court à ton imagination et demande-moi absolument tout ce que tu veux : je suis à toi...</p>
        </div>
        
        <div style="background: rgba(255, 255, 255, 0.1); padding: 20px; border-radius: 10px; border-left: 4px solid #ffd700; margin-bottom: 15px;">
            <h4 style="color: #ffd700; margin-bottom: 10px;">Tu as gagné un bon pour une sortie à la patinoire !</h4>
            <p style="opacity: 0.8; font-size: 0.9rem; margin-bottom: 10px;"><em>Initialement prévu pour le 12 décembre</em></p>
            <p>Prépare-toi à glisser parce qu'on va tenter des trucs sympas 😎</p>
        </div>

        <div style="background: rgba(255, 255, 255, 0.1); padding: 20px; border-radius: 10px; border-left: 4px solid #ffd700; margin-bottom: 15px;">
            <h4 style="color: #ffd700; margin-bottom: 10px;">Tu as gagné un bon pour un bain relaxant !</h4>
            <p style="opacity: 0.8; font-size: 0.9rem; margin-bottom: 10px;"><em>Initialement prévu pour le 12 décembre</em></p>
            <p>Bougies, musique douce, bulles... Je m'occupe de tout pour que tu puisses te détendre</p>
        </div>

        <div style="background: rgba(255, 255, 255, 0.1); padding: 20px; border-radius: 10px; border-left: 4px solid #ffd700; margin-bottom: 15px;">
            <h4 style="color: #ffd700; margin-bottom: 10px;">Tu as gagné un bon pour un massage !</h4>
            <p style="opacity: 0.8; font-size: 0.9rem; margin-bottom: 10px;"><em>Initialement prévu pour le 12 décembre</em></p>
            <p>Un moment de détente rien que pour toi : bougies, musique et huile de massage à profusion</p>
        </div>
    `
};

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    createCalendar();
    updateCountdown();
    setInterval(updateCountdown, 1000);
    createSnowfall();
    setupModal();
    setupBonusDay();
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
    
    // Initialiser la carte Leaflet si c'est le jour 14
    if (day === 14) {
        setTimeout(() => {
            initRestaurantMap();
        }, 100);
    }
    
    // Initialiser le compte à rebours du jour 22
    if (day === 22) {
        setTimeout(() => {
            const now = new Date();
            const christmas = new Date(now.getFullYear(), 11, 25);
            const diff = christmas - now;
            const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
            const el = document.getElementById('days-left');
            if (el) el.textContent = days > 0 ? days : 0;
        }, 100);
    }
    
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

// Initialiser la carte des restaurants (Jour 14)
function initRestaurantMap() {
    const mapDiv = document.getElementById('restaurant-map');
    if (!mapDiv || mapDiv.dataset.initialized === 'true') {
        return;
    }
    
    // Détruire la carte précédente si elle existe
    if (window.restaurantMap) {
        window.restaurantMap.remove();
    }
    
    mapDiv.dataset.initialized = 'true';
    
    // Trois points formant un triangle autour du Palais des Congrès (2 Pl de la Porte Maillot)
    // En traçant une ligne droite de chaque point vers le centre du triangle, on trouve le Palais des Congrès !
    // Format: [latitude, longitude]
    const restaurants = [
        { name: "Arc de Triomphe 🏛️", coords: [48.8738, 2.2950] }, // Point 1 : Sud-Est
        { name: "Parc Monceau 🌳", coords: [48.8799, 2.3089] },      // Point 2 : Nord-Est
        { name: "Bois de Boulogne 🌲", coords: [48.8700, 2.2700] }   // Point 3 : Sud-Ouest
    ];
    
    // Créer la carte centrée sur le premier restaurant
    window.restaurantMap = L.map('restaurant-map').setView(restaurants[0].coords, 13);
    
    // Ajouter la couche de tuiles OpenStreetMap avec un style plus joli
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19
    }).addTo(window.restaurantMap);
    
    // Ajouter les marqueurs pour chaque restaurant avec des icônes personnalisées
    const restaurantIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });
    
    const markers = [];
    restaurants.forEach(function(restaurant) {
        const marker = L.marker(restaurant.coords, { icon: restaurantIcon })
            .addTo(window.restaurantMap)
            .bindPopup('<strong style="color: #ffd700;">🍽️ ' + restaurant.name + '</strong>');
        markers.push(marker);
    });
    
    // Ajuster la vue pour montrer tous les restaurants
    if (markers.length > 0) {
        const group = new L.featureGroup(markers);
        window.restaurantMap.fitBounds(group.getBounds().pad(0.2));
    }
}

// Configuration de la modal
function setupModal() {
    const modal = document.getElementById('modal');
    const closeButton = document.getElementById('closeButton');
    
    const closeModal = () => {
        modal.classList.remove('show');
        // Nettoyer la carte Leaflet si elle existe
        if (window.restaurantMap) {
            window.restaurantMap.remove();
            window.restaurantMap = null;
            const mapDiv = document.getElementById('restaurant-map');
            if (mapDiv) {
                mapDiv.dataset.initialized = 'false';
            }
        }
    };
    
    closeButton.addEventListener('click', closeModal);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeModal();
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

// Configuration de la case bonus
function setupBonusDay() {
    const bonusDay = document.getElementById('bonusDay');
    bonusDay.addEventListener('click', openBonusDay);
}

// Ouvrir la boîte à reports
function openBonusDay() {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    modalTitle.textContent = bonusContent.title;
    modalBody.innerHTML = bonusContent.content;
    modal.classList.add('show');
}

