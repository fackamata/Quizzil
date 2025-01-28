# Quizzil

- récupèrer réponse
- valider réponse ou montrer la bonne
- mettre en place des stats
- sauvegarder les favoris de l'user

## TODO


- api externe : quizz.io
- persistence des données : localStorage
- librairie graphique externe : Bootstrap
- commenter le code : OK
- documentation technique : Readme
- min 1 plugin asynchrone :
- librairie externe (Leaflet, chart.js)


mettre un message sur le bouton d'affichage du quizz pour vérifier la connexion internet sinon mode hors-ligne

/**
 * Returns x raised to the n-th power.
 *
 * @param {number} x The number to raise.
 * @param {number} n The power, must be a natural number.
 * @return {number} x raised to the n-th power.
 */
 
résumé des doc

expliquer les partie complex

commentaire dans le code

qu'est ce qu'on aurai aimer avoir comme doc nous même



## installation

```bash
npm i boostrap
# npm i bootstrap-icons
```

### plugings
Liste des plugings à installer pour l'app

#### Android Permission Cordova Plugin
Support pour Android mécanisme d'ajout de permission.
##### installation
```bash
cordova plugin add cordova-plugin-android-permissions
```
##### Usage
```js
var permissions = cordova.plugins.permissions;
permissions.checkPermission(permission, successCallback, errorCallback);
permissions.requestPermission(permission, successCallback, errorCallback);
permissions.requestPermissions(permissions, successCallback, errorCallback);
```
Permission name :
```js
// Example
permissions.ACCESS_COARSE_LOCATION
permissions.CAMERA
permissions.GET_ACCOUNTS
permissions.READ_CONTACTS
permissions.READ_CALENDAR
...
```
#### exemple
Examples

var permissions = cordova.plugins.permissions;

Quick check

```
permissions.hasPermission(permissions.CAMERA, function( status ){
  if ( status.hasPermission ) {
    console.log("Yes :D ");
  }
  else {
console.warn("No :( ");
  }
});
```

Quick request

permissions.requestPermission(permissions.CAMERA, success, error);

```js
function error() {
  console.warn('Camera permission is not turned on');
}

function success( status ) {
  if( !status.hasPermission ) error();
}
```

##### Example multiple permissions

```js
var list = [
  permissions.CAMERA,
  permissions.GET_ACCOUNTS
];

permissions.hasPermission(list, callback, null);

function error() {
  console.warn('Camera or Accounts permission is not turned on');
}

function success( status ) {
  if( !status.hasPermission ) {
  
    permissions.requestPermissions(
      list,
      function(status) {
        if( !status.hasPermission ) error();
      },
      error);
  }
}
```

#### cordova-plugin-network-information

L'objet connection, exposé via `navigator.connection`, 

The connection object, exposed via navigator.connection, provides information about the device's cellular and wifi connection.

##### installation
pour utiliser le plugin l'installer avec la commande suivante :
```bash
cordova plugin add cordova-plugin-network-information
```

#### diagnostic

Utilisé pour manager les settings du téléphone comme : Location, Bluetooth, Notification, Calendar, Reminder jet Wifi.

##### installation
pour utiliser le plugin l'installer avec la commande suivante :
```bash
$ cordova plugin add cordova.plugins.diagnostic
```

<!-- #### dialogs
Donne accès au élément dialog UI au travers du global `navigator.notification object`.

Bine que l'objet sois attaché au scope global du navigateur, mais il n'est disponible qu'à travers l'event `deviceready`

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log(navigator.notification);
}
##### installation
pour utiliser le plugin l'installer avec la commande suivante :
```bash
cordova plugin add cordova-plugin-dialogs
``` -->

## require

pour utiliser l'appli, lancer internet pour appeler l'api


pluging diagnostic -> pour dire à l'user de mettre la connexion internet
pluging network -> pour vérifier que le network fonctionne


### voir les logs

```bash
adb shell logcat | grep "Chromium: \["
```


## debug

### cordova run 

dans le cas d'un cordova run android qui n'en fini pas, il faut désinstaller l'app et la transférer sur le tel avec la commande `adb`
```
adb install -r /Myapp.apk
```

l'option -r pour remplacer l'application



## TODO

mettre tous les getElementById en constante