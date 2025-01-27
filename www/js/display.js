// section
const SECTION_HOME = document.getElementById("home-section");
const SECTION_STATS = document.getElementById("statistic-section");
// section quizz
const SECTION_QUIZZ = document.getElementById("quizz-section");
// vue select quizz & question
const VIEW_QUESTION = document.getElementById("view-question");
const VIEW_SELECT_QUIZZ = document.getElementById("view-select-quizz");

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

/**
 * Affiche la page des boutons de selection de quizz
*/
function display_quizz_choice_view() {
    console.log("fonction quizz choice display working ! ");


    if ( !VIEW_QUESTION.classList.contains('d-none') ){
        VIEW_QUESTION.classList.add('d-none');
    }
    if (VIEW_SELECT_QUIZZ.classList.contains('d-none')){
        VIEW_SELECT_QUIZZ.classList.remove('d-none');
    }
}

/**
 * Affiche la page des questions
*/
function display_question_view() {
    console.log("fonction quizz choice display working ! ");

    if ( !VIEW_SELECT_QUIZZ.classList.contains('d-none') ){
        VIEW_SELECT_QUIZZ.classList.add('d-none');
    }
    if ( VIEW_QUESTION.classList.contains('d-none') ){
        VIEW_QUESTION.classList.remove('d-none');
    }
}

/**
 * Affiche un hint
*/
function display_hint(ev) {
    console.log("fonction display hint working ! ");

    window.alert("Hello world! le event est : " + ev);
}
