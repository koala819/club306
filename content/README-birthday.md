# Vœux d'anniversaire — configuration

Tout se règle dans **`content/birthday.json`**. Aucun code à modifier.

---

## Les trois interrupteurs

### `enabled`

- `true` → la tâche tourne
- `false` → elle ne fait **rien du tout** (aucun mail, aucun log de candidat)

### `dryRun` — mode simulation

**C'est le plus important à comprendre.**

| Valeur | Comportement |
|---|---|
| `true` | **Simulation.** La tâche détecte les anniversaires, les liste dans la réponse et les logs, mais **n'envoie aucun mail**. |
| `false` | **Envoi réel.** Les mails partent pour de vrai. |


### `audience` — qui reçoit

Trois valeurs possibles :

| Valeur | Destinataires |
|---|---|
| `"paid"` | Membres **à jour de cotisation** (`cotisation = true`) — *recommandé* |
| `"unpaid"` | Membres **qui n'ont pas payé** — utile pour une relance, pas pour un anniversaire |
| `"all"` | **Tout le monde**, cotisation payée ou non |

Un membre dont la cotisation est inconnue (`null`) est traité comme **non payé**.

---

## `subject` vs `title`

| Champ | Où ça apparaît |
|---|---|
| **`subject`** | L'**objet** du mail : ce que tu vois dans la liste de ta boîte de réception, avant d'ouvrir le message. |
| **`title`** | Le **grand titre** à l'intérieur du mail, en haut du corps du message, au-dessus du texte. |

Exemple concret, avec la config actuelle :

```
Boîte mail :  Joyeux anniversaire Xavier          ← ceci est "subject"
                    ↓ (on ouvre le mail)
┌─────────────────────────────────┐
│           [logo Club 306]        │
│   Joyeux anniversaire Xavier !   │  ← ceci est "title"
│                                  │
│   Salut Xavier,                  │  ← ceci est "greeting"
│   Aujourd'hui c'est ton ...      │  ← ceci est "body"
└─────────────────────────────────┘
```

---

## Les jetons remplaçables

Dans **n'importe quel champ texte** (`subject`, `title`, `greeting`, `body`, `signature`) :

| Jeton | Remplacé par |
|---|---|
| `{{firstName}}` | Le prénom du membre (ex. `Xavier`) |
| `{{lastName}}` | Le nom (ex. `GENOLHAC`) |
| `{{email}}` | L'adresse e-mail |

**Attention** : si le prénom est vide en base, le jeton est remplacé par du vide (`Salut ,`).

---

## Le texte du mail

| Champ | Rôle |
|---|---|
| `greeting` | Ligne de salutation, en gras, juste avant le texte |
| `body` | **Tableau** : une entrée = un paragraphe |
| `signature` | Signé en bas du message |

Pour ajouter un paragraphe, ajoute une ligne dans `body` :

```json
"body": [
  "Premier paragraphe.",
  "Deuxième paragraphe.",
  "Troisième paragraphe."
],
```

**N'utilise pas de HTML** dans ces champs : le texte est échappé automatiquement, les balises s'afficheraient telles quelles.

---

## Le champ `_aide`

La clé `_aide` en haut du fichier est **pure documentation**. Elle est ignorée par le code, mais elle te rappelle à quoi sert chaque champ quand tu ouvres le fichier. Tu peux la supprimer sans rien casser.

---

## `CRON_SECRET` — comment appeler la route à la main

Si la variable d'environnement `CRON_SECRET` est définie sur Vercel, la route
refuse tout appel sans le bon en-tête.

### Comment tester toi-même

**PowerShell (Windows)** :

```powershell
Invoke-RestMethod -Uri "https://www.club306.fr/api/cron/birthday?date=2026-11-09" -Headers @{ Authorization = "Bearer TA_VALEUR_CRON_SECRET" }
```

**Invite de commandes (cmd)** :

```cmd
curl.exe -H "Authorization: Bearer TA_VALEUR_CRON_SECRET" "https://www.club306.fr/api/cron/birthday?date=2026-11-09"
```

### Où définir le secret

1. Génère une valeur : `openssl rand -hex 32`
2. Vercel → ton projet → **Settings** → **Environment Variables**
3. Name : `CRON_SECRET` — Value : la chaîne générée
4. Environments : Production

Si `CRON_SECRET` n'est **pas** défini, la route reste ouverte (aucun contrôle).

---

## Quand est-ce envoyé ?

Tous les jours à **8h** (heure serveur), via la tâche planifiée définie dans `vercel.json`.
Sur le plan gratuit Vercel (Hobby), l'exécution se fait entre 8h00 et 8h59.

---

## Pas de double envoi

Une table `birthday_log` garde la trace des envois. Si la tâche tourne deux fois le même jour, un membre ne reçoit qu'un seul mail.

**Prérequis** : exécuter `sql/birthday-log.sql` dans Supabase.
Sans cette table, les mails partent quand même (mais sans protection anti-doublon).
