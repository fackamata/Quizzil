// import Quizz from "quizz";

// const DISPLAY = document.getElementById("display");
const API = "https://quizapi.io/api/v1/";
const API_KEY = "?apiKey=x622ubZyhNZIsj9lcaKCLNgvX337L6o6I4bIVxjW";
const QUESTION = document.getElementById("question");
const LETTER = ['a', "b", "c", "d", "e", "f"];

document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
  // document.getElementById("btn_cat").style.display = "inline";
  console.log("on device ready");

  document.getElementById("categories_btn").addEventListener("click", test);
  document.getElementById("quizz_btn").addEventListener("click", test);
  document.getElementById("tag_btn").addEventListener("click", test);
  document.getElementById("check_btn").addEventListener("click", checkConnection);

  // document.getElementById("categories_btn").addEventListener("click", display_categories);
  // document.getElementById("quizz_btn").addEventListener("click", display_questions);
  // document.getElementById("tag_btn").addEventListener("click", display_tags);
  // document.getElementById("check_btn").addEventListener("click", get_categories);
}

/**
 * 
 */
function test(){
  console.log(' on test function');
}

/*
Affiche les questions
*/
async function display_questions() {
  // const OPTION = document.getElementById("option");
  // OPTION.innerHTML = "";

  // get questions
  let json = await get_questions();
  let questions = JSON.parse(json);  // type objet

  console.log(typeof (questions));

  let questionsArray = [];

  questions.forEach(question => {
    questionsArray.push(
      `
        <div>
          <h2>${question.question}</h2>
        </div>
        <div> 
      `
    );

    let answers = question.answers;
    let ansArray = [];

    // console.log(answers);
    LETTER.forEach(char => {
      console.log(question["answers"]["answer_" + char]);
      questionsArray.push(
        `
              <input type="checkbox" name="${"answer_" + char}"/>
              <label for="${"answer_" + char}">${question["answers"]["answer_" + char]}</label>
        `)
    });

    questionsArray.forEach(function (div) {
      QUESTION.innerHTML += div.html;
    })

  });

  questionsArray.forEach(function (questions) {
    QUESTION.innerHTML += questions.h2;

    ansArray.forEach(function (answer) {
      OPTION.innerHTML += answer;
      console.log(answer);
    });
  });
}

/*
Affiche les tags
*/
async function display_tags() {
  console.log(" ! on display cate!");
  QUESTION.innerHTML = "";

  let json = await get_tags();
  // let object = JSON.stringify(json);  // type objet
  let tags = JSON.parse(json);  // type objet

  console.log(typeof (tags));

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

/*
Récupérer un nombre de question

params: limit (int)   -> nombre de questions retournées
                      -> par défaut 20 
return: liste des questions
*/
function get_questions() {
  // console.log(" ! on get random !");
  let param = "questions";
  let limit = "&limit=20";

  let url = `${API}${param}${API_KEY}${limit}`;
  // let url = "data/tags.json";

  // console.log("url : " + url);
  return fetch_data(url);
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



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



function onResume() {

  console.log("onResume");

}



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



function onBackButton() {

  console.log("onBackButton");

}
