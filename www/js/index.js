const API = "https://quizapi.io/api/v1/";
const API_KEY = "?apiKey=x622ubZyhNZIsj9lcaKCLNgvX337L6o6I4bIVxjW";


// alert no connection
const ALERT_NO_CONNECTION = document.getElementById("alert-no-connection");
// les 3 boutons dans le footer 
const BTN_QUIZZ = document.getElementById("btn-quizz");
const BTN_HOME = document.getElementById("btn-home");
const BTN_STAT = document.getElementById("btn-statistic");
//
const SELECT_CHECKBOX = document.getElementById("select-tag");
const SELECT_CHECKBOX_H2 = document.getElementById("select-tag-h2");
// bouton de la section quizz
const BTN_CHOICE_ALL_CAT = document.getElementById("choice-all-cat");


/**
 * 
 *              CORDOVA START 
*/

document.addEventListener('deviceready', onDeviceReady, false);

/**
 * fonction qui s'exécute quand cordova est chargé correctement
 */
function onDeviceReady() {
  // document.getElementById("btn_cat").style.display = "inline";
  console.log("on device ready");
  // init localStorage

  // bouton du footer
  BTN_QUIZZ.addEventListener("click", display_quizz_section)
  BTN_STAT.addEventListener("click", display_stats_section)
  BTN_HOME.addEventListener("click", display_home_section)
  // bouton choix du quizz
  // BTN_CHOICE_ALL_CAT.addEventListener("click", start_quizz)
  BTN_CHOICE_ALL_CAT.addEventListener("click", begin_quizz)

  checkConnection();

  document.getElementById("categories_btn").addEventListener("click", get_categories);
  document.getElementById("tag_btn").addEventListener("click", get_tags);
  // document.getElementById("check_btn").addEventListener("click", checkConnection);
  document.getElementById("quizz_btn").addEventListener("click", begin_quizz);
  document.getElementById("random_btn").addEventListener("click", get_random)
  // document.getElementById("check_btn").addEventListener("click", checkConnection);

}


/**
 * enregistre des questions dans le localStorage s'il elle n'y sont pas déjà et on 
 * retourne la liste des id questions enregistré
 * 
 * @returns {Array} last_questions liste des id des questions
 */
async function get_list_question_from_storage() {
  // console.log(" ! in save question!");
  let last_questions = [];
  
  // init localStorage

  if (localStorage.getItem('lst_id_question') == null) {
    localStorage.setItem('lst_id_question', JSON.stringify([0]))
  }

  // list des id des questions déjà dans le localstorage 
  let lst_id_question = JSON.parse(localStorage.getItem('lst_id_question')) ;
  // console.log(lst_id_question);

  try {
    let questions = await get_questions(20);

    // on parcour les questions reçu par l'api et on sauvegarde celle qu'on as pas
    for (let i = 0; i < questions.length; i++) {
      // on ajouter les questions non encore présente dans le localStorage
      // console.log(questions[i]);
      const ID_Q = questions[i].id
      if ( ! lst_id_question.includes(ID_Q) ) {
        // on ajoute la questions avec comme clé son id
        localStorage.setItem(ID_Q, JSON.stringify(questions[i]));
        // on ajoute l'id à notre liste d'id de question
        lst_id_question.push(ID_Q);
      }
      // on enregistre l'id de question dans notre liste d'id en storage
      last_questions.push(ID_Q);
    }
  } catch (error) {
    alert("Vous devez activez les données ou le WIFI");
    console.log('erreur pour récupèrer les questions : ' + error);
  }
  // liste des question retourner
  console.log("last question liste : " + last_questions);
  // enregistrement dans le localStorage de la liste d'id
  localStorage.setItem('lst_id_question', JSON.stringify(lst_id_question));
  localStorage.setItem('liste_question_en_cours', JSON.stringify(last_questions));
  return last_questions;
}

/**
 * fonction qui enregistre une liste dans une clé donné pour un utiliateur
 * 
 * @param {Array} lst_to_save liste à sauvegarder
 * @param {String} type nom de la clé où sauvegarder
 * @param {String} username user pour qui sauvegarder
 */
function save_in_favoris(lst_to_save,  type="tag", username="SAMPLE_USER"){
  console.log('in save in favoris ! ');
  // get user data
  console.log('liste a sauvegarder : ' + lst_to_save);
  let user = localStorage.getItem(username);
  user = JSON.parse(user);
  console.log("user data : " + user);
  console.log("clé user : " + Object.keys(user));

  console.log("truc to save : " + to_save);
  if (type == "tag" ){
    user.tags = lst_to_save;
    console.log("user favoris : " + user.favoris);
    console.log("liste a save : " + lst_to_save);
  }else if (type == "categorie"){

    user.categories = lst_to_save;
  }
  // on enregistre les modif de l'user
  localStorage.setItem(username, JSON.stringify(user));
}

/**
 * fonction qui récupère les tags et les envoies à display_tags
 */
async function get_tags() {
  console.log(" ! on get tags!");

  let param = "tags";
  let url = `${API}${param}${API_KEY}`;
  let tags = await fetch_data(url);
  // init liste of tag selectionné
  
  display_tags(JSON.parse(tags)) // envoie en objet

}

/**
 * fonction qui récupère une question et l'envoie à display_question
 */
async function get_random() {
  console.log(" ! on get random!");

  let random = await get_questions(1);
  console.log(random[0]);
  console.log(typeof(random[0]));
  // VIEW_QUESTION.classList.remove('d-none');

  display_question(JSON.stringify(random[0])); // envoie en objet

}


/**
 * fonction qui récupère les categories et l'envoie à display_categorues
 */
async function get_categories() {

  let param = "categories";
  let url = `${API}${param}${API_KEY}`;

  let categ = await fetch_data(url);
  // let object = JSON.stringify(categ);  // type objet
  let categories = JSON.parse(categ);  // type objet

  display_categories(categories);
}


/**
 * Returns questions, objet json de 20 questions par défaut.
 *
 * @param {Number} lim nombre de question à retourner.
 * @return {Object} questions json de question.
 */
async function get_questions(lim=20) {
  // console.log(" ! on get random !");
  let param = "questions";
  let limit = `&limit=${lim}`;

  let url = `${API}${param}${API_KEY}${limit}`;
  // console.log("url : " + url);
  let question_ret = await fetch_data(url);

  // console.log(typeof(question_ret));
  question_ret = JSON.parse(question_ret);
  // console.log(question_ret);
  // console.log(typeof(question_ret));
  return question_ret;
}

/**
 * fetch des données et les retourne en string ou une erreur
 * @param {string} url url de l'api a fetcher
 * @returns {string} result | error : résultat json en string ou le message erreur
 */
async function fetch_data(url) {
  try {
    let response = await fetch(url);
    let result = await response.text();
    return result;
  } catch (error) {
    console.error(error);
    return error;
  }
  
}

/**
 * Display alert if no connection
 *
 */
function checkConnection() {
  var networkState = navigator.connection.type;

  var states = {};
  states[Connection.UNKNOWN]  = 'Unknown connection';
  states[Connection.ETHERNET] = 'Ethernet connection';
  states[Connection.WIFI]     = 'WiFi connection';
  states[Connection.CELL_2G]  = 'Cell 2G connection';
  states[Connection.CELL_3G]  = 'Cell 3G connection';
  states[Connection.CELL_4G]  = 'Cell 4G connection';
  states[Connection.CELL]     = 'Cell generic connection';
  states[Connection.NONE]     = 'No network connection';

  if (states[networkState] == states[Connection.NONE]) {
    // console.log("ON DOIT METTRE LE WIFI OU LES DONNÉES");
    ALERT_NO_CONNECTION.classList.remove("d-none");
    // TODO désactiver les bontons qui ont besoin d'un accès wifi
  } else  {
    ALERT_NO_CONNECTION.classList.add("d-none");  
  }
}


function onPause() {

  console.log("onPause");

}
