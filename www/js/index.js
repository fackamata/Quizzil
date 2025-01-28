// import Quizz from "quizz";

const DISPLAY = document.getElementById("display");
const API = "https://quizapi.io/api/v1/";
const API_KEY = "?apiKey=x622ubZyhNZIsj9lcaKCLNgvX337L6o6I4bIVxjW";
const QUESTION = document.getElementById("question");


// alert no connection
const ALERT_NO_CONNECTION = document.getElementById("alert-no-connection");
// les 3 boutons dans le footer 
const BTN_QUIZZ = document.getElementById("btn-quizz");
const BTN_HOME = document.getElementById("btn-home");
const BTN_STAT = document.getElementById("btn-statistic");
// bouton de la section quizz
const BTN_CHOICE_ALL_CAT = document.getElementById("choice-all-cat");
const NEXT_QUESTION = document.getElementById("next-question");
const VALID_QUESTION = document.getElementById("validation-question");

// const ANSWER_A = document.getElementById("answer_a");
// const ANSWER_B = document.getElementById("answer_b");
// const ANSWER_C = document.getElementById("answer_c");
// const ANSWER_D = document.getElementById("answer_d");
// const ANSWER_E = document.getElementById("answer_e");
// const ANSWER_F = document.getElementById("answer_f");
// const HINT = document.getElementById("hint");

document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
  // document.getElementById("btn_cat").style.display = "inline";
  console.log("on device ready");
  // init localStorage

  // bouton du footer
  BTN_QUIZZ.addEventListener("click", display_quizz_section)
  BTN_STAT.addEventListener("click", display_stats_section)
  BTN_HOME.addEventListener("click", display_home_section)
  // bouton de selection de quizz
  // NEXT_QUESTION.addEventListener("click", increment_id_question)
  // bouton toute categorie
  // var num_quest = 0;
  BTN_CHOICE_ALL_CAT.addEventListener("click", start_quizz)
//   BTN_CHOICE_ALL_CAT.addEventListener("click", async function(){
//     let quests = await get_questions(20);
//     // console.log(quests);
//     // console.log(typeof(quests));
//     let lst_quest = save_question(quests);
    
//     for (let i = 0; i < lst_quest.length; i++) {
//       let quest_to_show = JSON.parse(localStorage.getItem(lst_quest[i]));
//       console.log(quest_to_show);
//       display_question(quest_to_show);
//       console.log()
      
//     }
// })
  
  // bouton de la section quizz
  // HINT.addEventListener("click", display_hint);


  document.getElementById("categories_btn").addEventListener("click", display_categories);
  document.getElementById("tag_btn").addEventListener("click", display_tags);
  document.getElementById("check_btn").addEventListener("click", checkConnection);

}

// checkConnection();

async function start_quizz(){
  console.log("start quizz fonctionne  ! ");

  // on récupère est sauvegarde les questions
  let quests = await get_questions(20);
  // liste des id de questions récupérer dans le localStorage
  let lst_quest = save_question(quests);
  
  // la valeur du bouton next-question
  console.log(NEXT_QUESTION.value)
  console.log(typeof(NEXT_QUESTION.value))
  
  // on récupère l'indice de la question à afficher, 
  // dans notre liste à l'indice de la valeur de next-question button

  let id_q = lst_quest[NEXT_QUESTION.value];
  // while (id_q < lst_quest.length){

    let quest_to_show = JSON.parse(localStorage.getItem(id_q));
    console.log(quest_to_show);
    // console.log(quest_to_show[0]);
    
    // console.log(num_quest);
    console.log("id de la question a montrer : " + id_q);
    
    display_question(quest_to_show);
    VALID_QUESTION.addEventListener("click", ()=>{
      NEXT_QUESTION.classList.remove("d-none");
      VALID_QUESTION.classList.add("d-none");
    })
    
    NEXT_QUESTION.addEventListener("click", (ev) => {
      if(NEXT_QUESTION.value < lst_quest.length){
        NEXT_QUESTION.value += 1;
        console.log("vlaue par le ev : " +ev.value);
        id_q = lst_quest[parseInt(NEXT_QUESTION.value)];
        console.log("id question en storage : " + id_q);
        // id_q = parseInt(NEXT_QUESTION.value);
        console.log("next-question new value : " + typeof(id_q));
        quest_to_show = JSON.parse(localStorage.getItem(id_q));
        console.log(quest_to_show);
        // id_q = parseInt(NEXT_QUESTION.value)
        display_question(quest_to_show)
        NEXT_QUESTION.classList.add("d-none");
        VALID_QUESTION.classList.remove("d-none");

      }
      
    })
  // }

  // for (let i = 0; i < lst_quest.length; i++) {
  //   let quest_to_show = JSON.parse(localStorage.getItem(lst_quest[i]));
  //   console.log(quest_to_show);
  //   display_question(quest_to_show);
  //   console.log()
  // }
}

/*
Affiche les tags
*/
async function display_tags() {
  console.log(" ! on display cate!");
  QUESTION.innerHTML = "";

  let json = await get_tags();
  console.log(json);
  // let object = JSON.stringify(json);  // type objet
  let tags = JSON.parse(json);  // type objet


  let tagsArray = [];

  tags.forEach(tag => {
    // console.log(tags.name)

    tagsArray.push(
      {
        html: `
                <div>
                  <input type="checkbox" name="${tag.name}"/>
                  <label for="${tag.name}">${tag.name}</label>
                </div>
              `,
      }
    );
  });

  tagsArray.forEach(function (tags) {
    QUESTION.innerHTML += tags.html;
  })
}
I
/**
 * enregistre des questions dans le localStorage s'il elle n'y sont pas déjà
 * retourne la liste des id questions envoyé à la fonction
 * 
 * @param {object} questions json de question
 * @returns {Array} last_questions liste des id des questions
 */
function save_question(questions) {
  console.log(" ! in save question!");
  
  let last_questions = [];
  // init localStorage
  if (localStorage.getItem('lst_id_question') == null) {
    localStorage.setItem('lst_id_question', JSON.stringify([]))
  }

  try {
    questions = JSON.parse(questions);  // type objet
  } catch (error) {
    alert("Vous devez activez les données ou le WIFI");
  }
  
  // list des id des questions déjà dans le localstorage 
  let lst_id_question = JSON.parse(localStorage.getItem('lst_id_question')) ;
  // let question_in_storage = JSON.parse(localStorage.getItem('question_api'));
  
  // on parcour les questions reçu par l'api et on sauvegarde celle qu'on as pas
  for (let i = 0; i < questions.length; i++) {
    // on ajouter les questions non encore présente dans le localStorage
    if ( ! lst_id_question.includes(questions[i].id) ) {
      // on ajoute la questions avec comme clé son id
      localStorage.setItem(questions[i].id, JSON.stringify(questions[i]));
      // on enregistre l'id dans notre liste d'id en storage
      lst_id_question.push(questions[i].id);
      console.log(questions[i]);
      
    }
    last_questions.push(questions[i].id);
  }

  // enregistrement dans le localStorage de la liste d'id
  localStorage.setItem('lst_id_question', JSON.stringify(lst_id_question));

  console.log("last question liste : " + last_questions);
  return last_questions;
}


// function get_questions_from_localStorage(id){
//   return localStorage.getItem('question_api');
//   // return 
// }


// function save_in_localstorage(){

// }

/*
Affiche les différentes catégories
*/
async function display_categories() {
  console.log(" ! on display cate!");
  QUESTION.innerHTML = "";

  let json = await get_categories();
  // let object = JSON.stringify(json);  // type objet
  let categories = JSON.parse(json);  // type objet

  console.log(typeof (categories));

  let categoriesArray = [];

  categories.forEach(category => {
    // console.log(categories.name)

    categoriesArray.push(
      {
        html: `
                <div>
                  <input type="checkbox" name="${category.name}"/>
                  <label for="${category.name}">${category.name}</label>
                </div>
              `,
      }
    )
  });

  categoriesArray.forEach(function (categories) {
    QUESTION.innerHTML += categories.html;
  });
}

/*
Récupérer les catégories disponibles

return: liste des catégories
*/
function get_categories() {
  console.log(" ! on get categories !");
  let param = "categories";
  let url = `${API}${param}${API_KEY}`;
  // let url = "data/categories.json";
  // console.log("url : " + url);
  return fetch_data(url);
}

/*
Récupérer les tags disponibles

return: liste des tags
*/
function get_tags() {
  // console.log(" ! on get tags !");
  let param = "tags";
  let url = `${API}${param}${API_KEY}`;
  // let url = "data/tags.json";
  // console.log("url : " + url);
  return fetch_data(url);
}

/**
 * Returns questions, json de 20 questions par défaut.
 *
 * @param {integer} lim nombre de question à retourner.
 * @return {json} questions json de question.
 */
function get_questions(lim=20) {
  // console.log(" ! on get random !");
  let param = "questions";
  let limit = `&limit=${lim}`;

  let url = `${API}${param}${API_KEY}${limit}`;
  // console.log("url : " + url);
  questions = fetch_data(url);

  return questions;
}

/*
appelle une api dont l'url est passé en parramètre

params: url (str)   -> nombre de questions retournées
return: résultat du endpoint
*/
async function fetch_data(url) {
  try {
    let response = await fetch(url);
    let result = await response.text();
    // console.log(result);
    return result;
  } catch (error) {
    console.error(error);
    return error;
  }
}

function onPause() {

  console.log("onPause");

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
    // TODO réactiver les bontons qui ont besoin d'un accès wifi
    // console.log("Connection type : " + states[networkState]);
    // console.log(states[networkState]);
  }
}


function chck_permission(){
  let permissions = cordova.plugins.permissions;
  permissions.hasPermission(permissions.ACCESS.WIFI.STATE, function( status ){
    if ( status.hasPermission ) {
      console.log("Yes :D ");
    }
    else {
      console.warn("No :( ");
    }
  });
}
