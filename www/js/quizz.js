
/**
 * fonction pour lancer toute la logique du quizz
 */
function begin_quizz(){
    // on récupère la liste des id des questions à afficher
    let lst_ids_question = get_list_question_from_storage();

    // // // on récupère les questions
    // let questions = get_questions_from_storage(lst_ids_question);
    // init du numéro de question
    let total_of_question = lst_ids_question.length;
    let num_question = 0;
    // init variable
    let still_playing = true;
    let nb_point = 0;
    let chck_msg = "";


    // console.log(num_question);
    while (still_playing) {
        // on récupère la question dans le local storage

        let question = localStorage.getItem[lst_ids_question[num_question]]
        console.log
        // on affiche la quesiton
        if(question){

            display_question(question, num_question);
            // display_question(questions[num_question], num_question);
            // on check la réponse avec l'objet des réponses
            const RES_CHECK = check_answer(question, num_question,total_of_question, nb_point);
            chck_msg = RES_CHECK[0];
            nb_point = RES_CHECK[1];
            
            if (chck_msg === "no answer"){
                alert('pas de réponse sélectionné');
            }else if (chck_msg === "end quizz") {
                still_playing = false;
            }else{
                // on passe à la question suivante
                num_question += 1;
            }
        }
    }

    // on fini le quizz
    display_result_quizz(nb_point, num_question + 1);
    // end_quizz();
}

function check_answer(one_question, num_q_actual, nb_questions, score){
    // on selectionne tous les inputs checked
    let answer_checked = document.querySelector('input[name="answer"]:checked');
    let continue_quizz = false;
    // init le message de retour
    let message = "no answer";
    // si on a des réponses
    if (answer_checked) {
        let good_answers_obj = one_question.correct_answers;
        // let good_answers_lst = [];
        let good_answer = "";

        for (const key of good_answers_obj) {
            if (good_answers_obj[key] == "true"){
                // good_answers_lst.push(key);
                good_answer = key;
                console.log("quizz 60: good answer clé :" + good_answer)
            }
        }
        console.log("quizz 34 : clé good answer :" + good_answer);

        // Vérifier si la réponse sélectionnée est correcte
        if (answer_checked.value == good_answer) {
            score += 1;
            console.log("quizz 43 : score :" + score);
        }
    
        // Mettre à jour le score affiché
        document.getElementById("questionscore").innerText = `Score: ${score}`;
    
        // est-ce qu'on contine le quizz
        if (num_q_actual < nb_questions) {
            continue_quizz = true;
            // showQuestion();
            message = "";
        } else {
            message = "end quizz";
        //   endQuiz();
        }
    }
    
    return [message, score];
}

// function end_quizz(){
//     // afficher la page de résultat
//     display_result_quizz();

// }

function display_result_quizz(points, tot_quest){
    if ( !VIEW_QUESTION.classList.contains('d-none') ){
        VIEW_QUESTION.classList.add('d-none');
    }
    if ( VIEW_RESULT.classList.contains('d-none') ){
        VIEW_RESULT.classList.remove('d-none');
    }

    // VIEW_RESULT.innerHTML= "";
    VIEW_RESULT.innerHTML = `
        <h2 class="h2 m-3" >Résultat du quizz</h2>
        <p class="m-3" >${points} réponses correctes sur ${tot_quest} questions.</p>
        <button id="save-result" type="submit" 
                class="btn btn-outline-success" 
                >Sauvegarder le score
        </button>
        <button id="retour-quizz" type="submit" 
                class="btn btn-outline-success" 
                >Retour quizz
        </button>
        `;
}

/**
 * affiche une question 
 *  
 * @param {object} quest objet question
 */
function display_question(quest, question_number){
    // console.log("function display question working ! ");
    
    // on affiche la section des questions
    if ( !VIEW_SELECT_QUIZZ.classList.contains('d-none') ){
        VIEW_SELECT_QUIZZ.classList.add('d-none');
    }
    if ( VIEW_QUESTION.classList.contains('d-none') ){
        VIEW_QUESTION.classList.remove('d-none');
    }
    console.log(quest);
    // on affiche la question
    document.getElementById("question-display").innerText = quest.question;
    
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
                class="btn btn-outline-success" 
                >Valider
        </button>`;
    // FORM_TAG.innerHTML += `
    //     <button id="validation-question" type="submit" 
    //             class="btn btn-outline-success" value="${question_number}"
    //             >Valider
    //     </button>`;

    // on affiche le hint s'y'en a un
    if (question.tip){
        document.getElementById("hint").addEventListener("click", () => { alert(question.tip) });
        // HINT_TAG.addEventListener("click", () => { alert(question.tip) });
    }

};