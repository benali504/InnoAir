# InnoAir - Frontend

## Description
Application web Frontend d'InnoAir développée avec React et Vite. Cette application permet aux utilisateurs de suivre en temps réel la localisation des bus et de recevoir des notifications sur leur statut.

## Technologies utilisées
- React.js
- Vite
- Redux Toolkit
- Tailwind CSS
- Firebase (notifications)

## Installation

1. Cloner le repository
```bash
git clone [URL_DU_REPO]
```

2. Installer les dépendances
```bash
cd Front-end
npm install
```

3. Lancer l'application en mode développement
```bash
npm run dev
```

## Structure du projet
- `src/features/` - Configuration Redux et API
- `src/layouts/` - Composants de mise en page
- `src/middleware/` - Gestion des routes protégées
- `src/zoneAuth/` - Composants d'authentification
- `src/zoneClient/` - Interface utilisateur principale
- `src/zonePublic/` - Pages publiques

## Fonctionnalités
- Authentification utilisateur
- Tableau de bord en temps réel
- Suivi de la localisation des bus
- Notifications push
- Interface responsive

## Auteur
Mariem Ben Ali
