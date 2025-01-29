# Quizzil

## required installation

plugins :
```bash
cordova plugin add cordova-plugin-network-information
```

### librairie graphique - Bootstrap

```bash
npm i bootstrap     # installation de bootstrap dans nodes-platforms
npm i bootstrap-icons     # installation de bootstrap-icons dans nodes-platforms
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

#### icons utiliser

house, graph-up, question-lg


#### boostrap-icons usage

Depending on your setup, you can include Bootstrap Icons in a handful of ways.

- Copy-paste SVGs as embedded HTML
- Reference via `<img>` element
- Use the SVG sprite
- Include via CSS


### plugins

#### cordova-plugin-network-information

L'objet connexion (navigator.connection) donne des informations à propos de la connection wifi ou cellulaire

##### installation
pour utiliser le plugin l'installer avec la commande suivante :
```bash
cordova plugin add cordova-plugin-network-information
```

