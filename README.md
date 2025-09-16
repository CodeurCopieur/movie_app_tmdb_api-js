# 🎬 Application de Films - TMDB API

Une application web moderne et responsive pour découvrir et explorer des films en utilisant l'API The Movie Database (TMDB).

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)

## ✨ Fonctionnalités

- 🔍 **Recherche de films** - Recherchez des films par titre
- 🏷️ **Filtrage par genres** - Filtrez les films par catégories (Action, Comédie, Drame, etc.)
- 📄 **Pagination** - Navigation facile entre les pages de résultats
- 🎭 **Détails des films** - Affichage détaillé avec informations complètes
- 🎥 **Bandes-annonces** - Intégration des vidéos YouTube
- 📱 **Design responsive** - Optimisé pour tous les appareils
- ⚡ **Interface moderne** - Animations fluides et design élégant

## 🚀 Démarrage rapide

### Prérequis
- Un navigateur web moderne
- Connexion internet

### Installation

1. **Cloner le repository**
   ```bash
   git clone https://github.com/votre-username/movie_app_tmdb_api-js.git
   cd movie_app_tmdb_api-js
   ```

2. **Ouvrir l'application**
   - Ouvrez simplement le fichier `index.html` dans votre navigateur
   - Ou utilisez un serveur local :
   ```bash
   # Avec Python
   python -m http.server 8000
   
   # Avec Node.js
   npx serve .
   ```

3. **Accéder à l'application**
   - Ouvrez votre navigateur et allez sur `http://localhost:8000`

## 🛠️ Technologies utilisées

- **Frontend** : HTML5, CSS3, JavaScript (ES6+)
- **Préprocesseur CSS** : SCSS
- **API** : The Movie Database (TMDB)
- **Design** : CSS Grid, Flexbox, Animations CSS

## 📁 Structure du projet

```
movie_app_tmdb_api-js/
├── index.html          # Page principale
├── index.js            # Logique JavaScript
├── index.css           # Styles compilés
├── index.scss          # Styles SCSS source
└── README.md           # Documentation
```

## 🎯 Fonctionnalités détaillées

### Recherche
- Barre de recherche en temps réel
- Affichage du nombre de résultats
- Recherche par titre de film

### Filtrage
- Tags de genres cliquables
- Filtrage multiple par genres
- Bouton "Clear" pour réinitialiser les filtres

### Affichage des films
- Grille responsive (1-3 colonnes selon l'écran)
- Cartes de films avec poster et backdrop
- Note colorée (vert/orange/rouge)
- Date de sortie et genres

### Détails des films
- Modal avec informations complètes
- Intégration des bandes-annonces YouTube
- Statistiques (popularité, revenus, votes)
- Lien vers la page officielle

### Pagination
- Navigation entre les pages
- Indicateur de page actuelle
- Boutons précédent/suivant

## 🎨 Design

L'application utilise un design moderne avec :
- Palette de couleurs élégante (#22254b, #373b69)
- Animations fluides et transitions
- Interface responsive
- Effets visuels (blur, drop-shadow)
- Modales avec animations

## 🔧 Configuration

L'application utilise une clé API TMDB intégrée. Pour utiliser votre propre clé :

1. Créez un compte sur [TMDB](https://www.themoviedb.org/)
2. Obtenez votre clé API
3. Remplacez la variable `API_KEY` dans `index.js`

## 📱 Responsive Design

L'application s'adapte à tous les écrans :
- **Mobile** : 1 colonne
- **Tablet** : 2 colonnes  
- **Desktop** : 3 colonnes

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
- Signaler des bugs
- Proposer de nouvelles fonctionnalités
- Améliorer le code existant

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 👨‍💻 Auteur

**Codwerk** - *Développement initial*

---

⭐ N'hésitez pas à donner une étoile si ce projet vous a aidé !
