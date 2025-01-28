// section
const SECTION_HOME = document.getElementById("home-section");
const SECTION_STATS = document.getElementById("statistic-section");
// section quizz
const SECTION_QUIZZ = document.getElementById("quizz-section");
// vue select quizz & question
const VIEW_QUESTION = document.getElementById("view-question");
const VIEW_SELECT_QUIZZ = document.getElementById("view-select-quizz");
// vue pour une question
const QUESTION_TAG = document.getElementById("question");
const DESCRIPT_TAG = document.getElementById("description");
const ANSWER_A = document.getElementById("answer_a");
const ANSWER_B = document.getElementById("answer_b");
const ANSWER_C = document.getElementById("answer_c");
const ANSWER_D = document.getElementById("answer_d");
const ANSWER_E = document.getElementById("answer_e");
const ANSWER_F = document.getElementById("answer_f");
const HINT_TAG = document.getElementById("hint");
// const NEXT_QUESTION = document.getElementById("next-question");
const GOOD_ANS_TAG = document.getElementById("good-answer");
const DISPLAY_GOOD_ANS_TAG = document.getElementById("display-good-answer");
const BAD_ANS_TAG = document.getElementById("bad-answer");

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
// function display_quizz_choice_view() {
//     console.log("fonction quizz choice display working ! ");


//     if ( !VIEW_QUESTION.classList.contains('d-none') ){
//         VIEW_QUESTION.classList.add('d-none');
//     }
//     if (VIEW_SELECT_QUIZZ.classList.contains('d-none')){
//         VIEW_SELECT_QUIZZ.classList.remove('d-none');
//     }
// }

/**
 * Affiche la page des questions
*/
// function display_question_view() {
//     console.log("fonction quizz choice display working ! ");

//     if ( !VIEW_SELECT_QUIZZ.classList.contains('d-none') ){
//         VIEW_SELECT_QUIZZ.classList.add('d-none');
//     }
//     if ( VIEW_QUESTION.classList.contains('d-none') ){
//         VIEW_QUESTION.classList.remove('d-none');
//     }
// }

// function display_hint(){
//     if (HINT_TAG.classList.contains("d-none")){
//         HINT_TAG.classList.remove('d-none');
//     }
// }

/**
 * affiche un question dans la section
 *  
 * @param {object} quest objet question
 */
function display_question(quest){
    // const QUEST = quest.question;
    // const DESCRIPT = quest.description;
    // const EXPLANATION = quest.explanation;
    // const DIFFICULTY = quest.difficulty;
    // const MULTI_ANSWERS = quest.multiple_correct_answers;
    // const HINT = quest.tip;
    // const ANSWERS = quest.answers;
    // const COR_ANSWERS = quest.correct_answers;

    // on affiche la question
    console.log("fonction display question working ! ");

    if ( !VIEW_SELECT_QUIZZ.classList.contains('d-none') ){
        VIEW_SELECT_QUIZZ.classList.add('d-none');
    }
    if ( VIEW_QUESTION.classList.contains('d-none') ){
        VIEW_QUESTION.classList.remove('d-none');
    }
    QUESTION_TAG.innerText = quest.question;
    
    // on affiche la description
    if(quest.description ){
        DESCRIPT_TAG.innerText = quest.description;
    }
    // on parcour les réponse pour trouver l'id de la bonne
    let id_rep = 0;
    let correct_ans = quest.correct_answers
    for (let i = 0; i < correct_ans.length; i++) {
        if(correct_ans[i]){
            id_rep = i;
        }
    }

    // on affiche les réponses possible
    let answers = quest.answers;
    console.log(`${answers.answer_a}<input type="radio" name="`);
    ANSWER_A.innerHTML =`${answers.answer_a}<input type="radio" name="answer" id="rep_a" value="a">`;
    // ANSWER_A.innerText = answers.answer_a ; 
    ANSWER_B.innerHTML =`${answers.answer_b}<input type="radio" name="answer" id="rep_b" value="b">`;
    // ANSWER_B.innerText = answers.answer_b ;
    ANSWER_C.innerHTML =`${answers.answer_c}<input type="radio" name="answer" id="rep_c" value="c">`;
    // ANSWER_C.innerText = answers.answer_c ;
    ANSWER_D.innerHTML =`${answers.answer_d}<input type="radio" name="answer" id="rep_d" value="d">`;
    // ANSWER_D.innerText = answers.answer_d ;
    
    if (ANSWER_E.classList.contains("d-none")){
        if (answers.answer_e != null){
            ANSWER_E.classList.remove('d-none');
            ANSWER_E.innerHTML =`${answers.answer_e}<input type="radio" name="answer" id="rep_e" value="e">`;
            // ANSWER_E.innerText = answers.answer_e ;
        }
    } else {
        ANSWER_E.classList.add('d-none');
    }
    // console.log(answers)
    // console.log(answers.answer_f)
    if (answers.answer_f != null){
        
        if (ANSWER_F.classList.contains("d-none")){
            ANSWER_F.classList.remove('d-none');
            ANSWER_F.innerHTML =`${answers.answer_f}<input type="radio" name="answer" id="rep_f" value="f">`;
            // ANSWER_F.innerText = answers.answer_f ;
        }
    } else {
        ANSWER_F.classList.add('d-none');
    }


// console.log(quest.multiple_correct_answers);
//     if(quest.multiple_correct_answers ){
//         ANSWER_A.setAttribute("type", "checkbox");
//         ANSWER_B.setAttribute("type", "checkbox");
//         ANSWER_C.setAttribute("type", "checkbox");
//         ANSWER_D.setAttribute("type", "checkbox");
//         ANSWER_E.setAttribute("type", "checkbox");
//         ANSWER_F.setAttribute("type", "checkbox");
//     }else{
//         if(ANSWER_A.getAttribute("type") == "checkbox"){

//             ANSWER_A.setAttribute("type", "radio");
//             ANSWER_B.setAttribute("type", "radio");
//             ANSWER_C.setAttribute("type", "radio");
//             ANSWER_D.setAttribute("type", "radio");
//             ANSWER_E.setAttribute("type", "radio");
//             ANSWER_F.setAttribute("type", "radio");
//         }
//     }
    // on affiche le hint s'y'en a un
    if (question.tip){
        HINT_TAG.innerText = question.tip
    }

};