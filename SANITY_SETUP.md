# Configuration Sanity Studio pour Club 306

Ce document explique comment configurer Sanity Studio pour remplacer Prismic dans la section Blog.

## Variables d'environnement requises

Ajoutez les variables suivantes à votre fichier `.env.local` :

```bash
# Sanity Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=votre_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
NEXT_PUBLIC_SANITY_PROJECT_TITLE=Club 306
SANITY_API_READ_TOKEN=votre_read_token (optionnel, pour les previews)
```

## Installation

1. Installez les dépendances :

```bash
pnpm install
```

## Configuration Sanity

1. Créez un projet Sanity sur [sanity.io](https://www.sanity.io)
2. Récupérez votre `projectId` et `dataset` depuis le dashboard Sanity
3. Ajoutez les variables d'environnement dans votre `.env.local`

## Accès au Studio

Une fois configuré, vous pouvez accéder à Sanity Studio à l'adresse :
- Développement : `http://localhost:3000/studio`
- Production : `https://votre-domaine.com/studio`

## Structure des schémas

Les schémas Sanity sont définis dans `/src/schemas/` :
- `article.ts` - Schéma pour les articles de blog
- `tag.ts` - Schéma pour les tags
- `cloudinary.ts` - Schéma pour les images Cloudinary

## Migration depuis Prismic

Les pages suivantes ont été mises à jour pour utiliser Sanity :
- `/blog` - Liste des articles
- `/[uid]` - Affichage d'un article individuel

Les données sont récupérées via les fonctions dans `/src/lib/blog/services.ts` :
- `getAllArticles()` - Récupère tous les articles
- `getArticleBySlug(slug)` - Récupère un article par son slug

## Notes importantes

- Les images peuvent provenir de Sanity ou Cloudinary selon le choix dans le Studio
- Le contenu utilise PortableText pour le rendu du contenu riche
- Les dates sont formatées en français (fr-FR)
