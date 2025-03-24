#  Comparaison entre Fetch et Axios pour les Requêtes API

Cet exercice illustre l'utilisation des requêtes API avec **Fetch** et **Axios** en JavaScript. Nous comparons les deux méthodes à travers des opérations CRUD sur une API.

---

## Description

L'objectif de cet exercice est de démontrer comment utiliser **Fetch** et **Axios** pour interagir avec une API REST. Nous effectuons les opérations suivantes :

- **GET** : Récupérer tous les utilisateurs et un utilisateur spécifique.
- **POST** : Ajouter un nouvel utilisateur.
- **PUT** : Modifier un utilisateur existant.
- **DELETE** : Supprimer un utilisateur.
```sh
L'API utilisée est [JSONPlaceholder](https://jsonplaceholder.typicode.com/), une API factice populaire pour tester des requêtes.
```

---

## 🛠️ Technologies utilisées

- **Node.js** (Exécution du code en environnement serveur)
- **Axios** (Librairie HTTP pour les requêtes API)
- **Fetch API** (Fonction native de JavaScript pour les requêtes)

---

## Installation & Exécution

### 1️ Prérequis

Assurez-vous d'avoir **Node.js** installé sur votre machine.

### 2️ Cloner le projet

```sh
git clone https://github.com/1306BENIE/request_javascript.git
cd request_javascript
```

### 3️ Installer les dépendances

npm install

### 4️ Exécuter les fichiers
- **Exécution avec Axios**

node axios-api.js

- **Exécution avec Fetch**

 node fetch-api.js

---
## Comparaison Fetch vs Axios

| Critère              | Fetch                                      | Axios                                   |
|----------------------|-------------------------------------------|-----------------------------------------|
| **Simplicité**      | Natif dans le navigateur                   | Nécessite une installation             |
| **Syntaxe**         | Plus verbeux                               | Plus concis et structuré               |
| **Gestion des erreurs** | Doit vérifier `res.ok` manuellement   | Gère les erreurs automatiquement       |
| **Support JSON**    | Doit utiliser `.json()`                    | Convertit automatiquement              |
| **Annulation requête** | Non pris en charge                     | Supporte `AbortController`             |

---

- **Axios** est plus concis, gère mieux les erreurs et supporte des fonctionnalités avancées comme **les timeouts et l’annulation de requêtes**.  
- **Fetch** est natif dans le navigateur, mais il nécessite plus de code pour gérer les erreurs et convertir les réponses en JSON.

---



## Auteur
- Nom : BENIE SYLVESTRE
- Email : sylvestrebenie7829@gmail.com