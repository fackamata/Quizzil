// section
const SECTION_HOME = document.getElementById("home-section");
const SECTION_STATS = document.getElementById("statistic-section");
const SECTION_CHECKBOX = document.getElementById("select-tag-section");
// section quizz
const SECTION_QUIZZ = document.getElementById("quizz-section");
// vue select quizz & question
const VIEW_QUESTION = document.getElementById("view-question");
const VIEW_SELECT_QUIZZ = document.getElementById("view-select-quizz");
const VIEW_RESULT = document.getElementById("view-result");
// vue pour une question
// const QUESTION_TAG = document.getElementById("question");
// const DESCRIPT_TAG = document.getElementById("description");

// console.log("display js working");

/**
 * Affiche la section quizz
 *
 */
function display_quizz_section() {
    // console.log("fonction quizz display working ! ");
    if ( !SECTION_HOME.classList.contains('d-none') ){
        SECTION_HOME.classList.add('d-none');
    }
    if (!SECTION_STATS.classList.contains('d-none')){
        SECTION_STATS.classList.add('d-none');
    }
    SECTION_QUIZZ.classList.remove('d-none');
}

/**
 * Affiche la section home
 *
 */
function display_home_section() {
    // console.log("fonction home display working ! ");
    if ( !SECTION_QUIZZ.classList.contains('d-none') ){
        SECTION_QUIZZ.classList.add('d-none');
    }
    if (!SECTION_STATS.classList.contains('d-none')){
        SECTION_STATS.classList.add('d-none');
    }
    SECTION_HOME.classList.remove('d-none');
}

/**
 * Affiche la section statistique
 *
 */
function display_stats_section() {
    // console.log("fonction home display working ! ");
    if ( !SECTION_QUIZZ.classList.contains('d-none') ){
        SECTION_QUIZZ.classList.add('d-none');
    }
    if (!SECTION_HOME.classList.contains('d-none')){
        SECTION_HOME.classList.add('d-none');
    }
    SECTION_STATS.classList.remove('d-none');
}


function display_tags(tags){
    if (!SECTION_HOME.classList.contains('d-none')){
        SECTION_HOME.classList.add('d-none');
    }
    if (SECTION_CHECKBOX.classList.contains('d-none')){
        SECTION_CHECKBOX.classList.remove('d-none');
    }
  
    SELECT_CHECKBOX.innerHTML = "";
    // on ajoute chaque tag en checkbox
    tags.forEach(tag => {
      SELECT_CHECKBOX.innerHTML += `
        <div> 
          <input type="checkbox" name="${tag.name}"/>
          <label for="${tag.name}">${tag.name}</label>
        </div>
      `
    });
  
    SELECT_CHECKBOX.innerHTML +=`
        <button id="validation-tag" type="submit" 
                class="btn btn-outline-success" 
                >Valider
        </button>`;
 }

function display_categories(categories){
    if (!SECTION_HOME.classList.contains('d-none')){
        SECTION_HOME.classList.add('d-none');
    }
    if (SECTION_CHECKBOX.classList.contains('d-none')){
        SECTION_CHECKBOX.classList.remove('d-none');
    }
  
    SELECT_CHECKBOX.innerHTML = "";
    // on ajoute chaque tag en checkbox
    categories.forEach(category => {
      SELECT_CHECKBOX.innerHTML += `
        <div> 
          <input type="checkbox" name="${category.name}"/>
          <label for="${category.name}">${category.name}</label>
        </div>
      `
    });
  
    SELECT_CHECKBOX.innerHTML +=`
        <button id="validation-category" type="submit" 
                class="btn btn-outline-success" 
                >Valider
        </button>`;
 }

/**
 * affiche une question 
 *  
 * @param {object} quest objet question
 */
function display_question(quest, num_question){
    // console.log("function display question working ! ");
    
    // on affiche la section des questions
    if ( !VIEW_SELECT_QUIZZ.classList.contains('d-none') ){
        VIEW_SELECT_QUIZZ.classList.add('d-none');
    }
    if ( VIEW_QUESTION.classList.contains('d-none') ){
        VIEW_QUESTION.classList.remove('d-none');
    }
    // on affiche la question
    document.getElementById("question").innerText = quest.question;
    
    // on affiche la description
    if(quest.description ){
        document.getElementById("description").innerText = quest.description;
    }
    
    // récupère le formulaire où insérer les réponses possible
    const FORM_TAG = document.getElementById("question-form");

    // on ajoute les réponses possible au formulaire
    FORM_TAG.innerHTML = "";
    for (let key in quest.answers) {
      if (quest.answers[key] !== null) {
        FORM_TAG.innerHTML += `
          <div>
            <input type="radio" name="answer" value="${key}" id="${key}">
            <label for="${key}">${quest.answers[key]}</label>
          </div>
        `;
      }
    }
    // et le bouton submit
    FORM_TAG.innerHTML += `
        <button id="validation-question" type="submit" 
                class="btn btn-outline-success" value="${num_question}"
                >Valider
        </button>`;

    // on affiche le hint s'y'en a un
    if (question.tip != null){
        document.getElementById("hint").addEventListener("click", () => { alert(question.tip) });
        // HINT_TAG.addEventListener("click", () => { alert(question.tip) });
    }

};