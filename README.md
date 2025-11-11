# 🎄 Calendrier de l'Avent 2025

Un calendrier de l'Avent interactif créé avec HTML, CSS et JavaScript vanilla.

## ✨ Fonctionnalités

- **24 cases** : Une case pour chaque jour de décembre jusqu'à Noël
- **Déverrouillage automatique** : Chaque case ne peut être ouverte que le jour correspondant à 8h du matin
- **Compte à rebours précis** : Affichage en temps réel (heures, minutes, secondes) du temps restant avant l'ouverture de la prochaine case
- **Modal élégante** : Affichage du contenu dans une modal moderne et responsive
- **Animations** : Effets visuels et animations pour une expérience immersive
- **Effet de neige** : Flocons de neige animés en arrière-plan
- **Sauvegarde locale** : Les cases ouvertes sont mémorisées dans le localStorage
- **Responsive** : Compatible mobile, tablette et desktop

## 🚀 Déploiement sur Vercel

1. Créez un compte sur [Vercel](https://vercel.com) si ce n'est pas déjà fait
2. Installez la CLI Vercel :
   ```bash
   npm install -g vercel
   ```
3. Dans le dossier du projet, exécutez :
   ```bash
   vercel
   ```
4. Suivez les instructions pour déployer votre calendrier

Ou directement depuis l'interface Vercel en important votre repository Git.

## 🎨 Personnalisation

### Modifier le contenu des cases

Éditez le tableau `dayContents` dans `script.js` pour personnaliser le contenu de chaque jour :

```javascript
const dayContents = [
    {
        title: "Jour 1 - Mon titre",
        content: `
            <h3>Titre de la section</h3>
            <p>Votre contenu HTML ici</p>
            <img src="votre-image.jpg" alt="Description">
        `
    },
    // ... autres jours
];
```

### Modifier les dates et l'heure de déverrouillage

Ajustez les dates et l'heure dans `script.js` :

```javascript
const CALENDAR_START_DATE = new Date('2025-12-01T08:00:00');
const CALENDAR_END_DATE = new Date('2025-12-24T23:59:59');
const UNLOCK_HOUR = 8; // Heure de déverrouillage quotidienne (8h du matin)
```

### Changer les couleurs et le style

Modifiez les variables CSS dans `style.css` pour adapter les couleurs à votre thème.

## 📱 Compatibilité

- ✅ Chrome, Firefox, Safari, Edge (dernières versions)
- ✅ Mobile iOS et Android
- ✅ Tablettes
- ✅ Desktop

## 🎁 Contenu suggéré pour les cases

- Messages personnels
- Photos de famille ou de souvenirs
- Énigmes et devinettes
- Recettes de Noël
- Citations inspirantes
- Défis du jour
- Indices pour une chasse au trésor
- Playlist de Noël
- Vidéos surprises
- Codes promo ou bons cadeaux

## 📝 Licence

Projet libre - Utilisez-le et modifiez-le comme bon vous semble !

---

Créé avec ❤️ pour les fêtes de Noël

