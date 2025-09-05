# InnoAir 🚍💨

## 📌 Description du projet
**InnoAir** est une plateforme intelligente qui permet :
- Le suivi en temps réel de la localisation des bus.  
- La gestion des notifications utilisateurs.  
- La visualisation et le suivi de la qualité de l’air grâce à une intégration IoT.  

Ce projet est composé de deux principales parties :
- **Backend** : API REST développée avec Node.js, Express et MongoDB.  
- **Frontend** : Application web développée avec React (Vite) et Tailwind CSS.  

---

## 🛠️ Technologies principales
### Backend
- Node.js  
- Express.js  
- MongoDB  
- Firebase (notifications)  

### Frontend
- React.js (Vite)  
- Redux Toolkit  
- Tailwind CSS  
- Firebase (notifications)  

---

## ⚙️ Installation

### 🔹 Backend
1. Cloner le repository
   ```bash
   git clone https://github.com/benali504/InnoAir.git
   cd InnoAir/Back-end
   ```
2. Installer les dépendances
   ```bash
   npm install
   ```
3. Configurer les variables d'environnement : créer un fichier `.env` à la racine :
   ```env
   PORT=5000
   MONGODB_URI=votre_uri_mongodb
   JWT_SECRET=votre_secret
   ```
4. Lancer le serveur :
   ```bash
   npm start
   ```

### 🔹 Frontend
1. Cloner le repository
   ```bash
   git clone https://github.com/benali504/InnoAir.git
   cd InnoAir/Front-end
   ```
2. Installer les dépendances
   ```bash
   npm install
   ```
3. Lancer l'application en mode développement
   ```bash
   npm run dev
   ```

---

## 📂 Structure du projet

### Backend
- `config/` → Configuration (base de données, Firebase)  
- `controllers/` → Logique métier  
- `middleware/` → Middlewares d'authentification  
- `models/` → Modèles de données (MongoDB)  
- `routes/` → Routes API  
- `uploads/` → Stockage des fichiers  

### Frontend
- `src/features/` → Redux + API  
- `src/layouts/` → Composants de mise en page  
- `src/middleware/` → Gestion des routes protégées  
- `src/zoneAuth/` → Authentification  
- `src/zoneClient/` → Interface utilisateur principale  
- `src/zonePublic/` → Pages publiques  

---

## 🔗 API Endpoints (Backend)
- `POST /api/auth/register` → Inscription utilisateur  
- `POST /api/auth/login` → Connexion utilisateur  
- `GET /api/profile` → Obtenir le profil utilisateur  

---

## 🌟 Fonctionnalités principales
- Authentification utilisateur sécurisée  
- Tableau de bord en temps réel  
- Suivi de la localisation des bus  
- Notifications push (Firebase)  
- Interface responsive et moderne  

---

## 🧑‍💻 Auteur & Contributeurs
- **Mariem Ben Ali**

---

## 🏆 Contexte académique
Ce projet est lié au **projet INNO_AIR : Système intelligent de filtration et de désinfection (2024)**.  
- Participation à la conception d’un système compact de surveillance de la qualité de l’air basé sur l’IoT.  
- Développement d’un **circuit imprimé (PCB)** avec capteurs pour : COV, température, humidité, pression.  
- Intégration de **filtres à charbon actif** et **LED UV-C** pour la désinfection de l’air.  
- Création d’une **plateforme web responsive** pour afficher les données de qualité de l’air et niveaux de pollution.  
- 🥇 Projet présenté au **SSCS IEEE – TSYP12 Challenge**, classé **1ʳᵉ place**.  
