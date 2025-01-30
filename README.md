# Quizzil

Application de quizz à orientation réseau 

Développé avec cordova

## installation requise

plugins :
```bash
cordova plugin add cordova-plugin-network-information
npm i bootstrap     # installation de bootstrap dans nodes-platforms
npm i bootstrap-icons     # installation de bootstrap-icons dans nodes-platforms
npm install chart.js    # installation de chart.js dans nodes-platforms

```

### librairie graphique - Bootstrap

```bash
cd Quizzil
cp node_modules/booststrap/dist/css/boostrap.min.css www/css/
cp node_modules/booststrap/dist/js/boostrap.min.js www/js/
```

dans le fichier index.html
```html
<link rel="stylesheet" href="css/bootstrap.min.css">
    ...
<script defer src="js/bootstrap.min.js"></script>
```

#### icons bootstrap utiliser

house, graph-up, question-lg


#### boostrap-icons usage

Depending on your setup, you can include Bootstrap Icons in a handful of ways.

- Copy-paste SVGs as embedded HTML
- Reference via `<img>` element
- Use the SVG sprite
- Include via CSS


### plugins chart.js

[doc chart js](https://www.npmjs.com/package/chart.js?activeTab=readme)

#### usage
dans le html utiliser un canvas et inclure le CDN
```html
<div>
  <canvas id="myChart"></canvas>
</div>
...
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

```

fonction asynchrone pour mapper les données

on peux choisir le type de graphique avec le `type`

```js
import Chart from 'chart.js/auto'

(async function() {
  const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];

  new Chart(
    document.getElementById('acquisitions'),
    {
      type: 'bar',
      data: {
        labels: data.map(row => row.year),
        datasets: [
          {
            label: 'Acquisitions by year',
            data: data.map(row => row.count)
          }
        ]
      }
    }
  );
})();
 
```


### plugins cordova

#### cordova-plugin-network-information

L'objet connexion (navigator.connection) donne des informations à propos de la connection wifi ou cellulaire

##### installation
pour utiliser le plugin l'installer avec la commande suivante :
```bash
cordova plugin add cordova-plugin-network-information
```

## logo app

Pour modifier le logo de l'application, placer le fichier image dans www/img/quiz.png et le renseigner dans `config.xml`.
Si le tag icon n'est pas renseigner, cordova utilisera le logo par défaut.
```xml
<icon src="www/img/quiz.png" platform="android" width="57" height="57" density="mdpi" />
```


## format de données

### question

les quiz sont récupèrer sous la forme d'un json de question, chaque question à la structure suivante :

```json
[
  {
    "id": 1,
    "question": "How to delete a directory in Linux?",
    "description": "delete folder",
    "answers": {
      "answer_a": "ls",
      "answer_b": "delete",
      "answer_c": "remove",
      "answer_d": "rmdir",
      "answer_e": null,
      "answer_f": null
    },
    "multiple_correct_answers": "false",
    "correct_answers": {
      "answer_a_correct": "false",
      "answer_b_correct": "false",
      "answer_c_correct": "false",
      "answer_d_correct": "true",
      "answer_e_correct": "false",
      "answer_f_correct": "false"
    },
    "explanation": "rmdir deletes an empty directory",
    "tip": null,
    "tags": [],
    "category": "linux",
    "difficulty": "Easy"
  }
]
```

### user

```js
const SAMPLE_USER = [{
    name: 'bibi',
    score: [12, 19, 3, 5, 19, 3, 5, 2, 3],
    favoris: [],
    resultat : [
      { quiz: 1, percent: 40 },
      { quiz: 2, percent: 85 },
      { quiz: 3, percent: 75 },
      { quiz: 4, percent: 62 },
      { quiz: 5, percent: 39 },
      { quiz: 6, percent: 80 },
      { quiz: 7, percent: 90 },
      { quiz: 8, percent: 60 },
      { quiz: 9, percent: 100 },
      { quiz: 10, percent: 100 }
    ]
  }];
```


## TODO

liste des fonctionalitées non implémenter :

### urgent
- bouton sauvegarder les scores 
- sauvegarder les scores en localStorage
- sauvegarder les tag et les categories en localStorage
- afficher les quizz et fonction des categories favorites
- le quiz tag préférer tag favoris en plus de toute categories

### features
 - charts des statistiques par user