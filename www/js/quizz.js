/**
 * fonction pour lancer un quizz
 */
async function begin_quizz(){
    // on récupère la liste des id des questions à afficher
    let lst_ids_question = await get_list_question_from_storage();
    let total_of_question = lst_ids_question.length;
    localStorage.setItem('liste_question_en_cours', [lst_ids_question]);
    localStorage.setItem('nombre_question_en_cours', total_of_question);

    console.log("nombre de question : " + total_of_question);
    // init variable
    let nb_point = 0;
    let current_question_id = 0;
    // let chck_msg = "";
    
    let num_question = 0;
    // for (let i = 1; i < lst_ids_question.length; i++) {
    // on récupère la question dans le local storage
    let question = localStorage.getItem(lst_ids_question[num_question]);
        // on affiche la quesiton
    if(question){
            
        display_question(question, num_question);
    }
            // // let inputs = document.querySelector('input');
            // const VALID_BTN = document.getElementById("validation-question");
            // // on check si on a des réponses pour activer le bouton de validation
            // let inputs = document.getElementsByName('answer');
            // console.log(inputs);
            
            // // on check la réponse avec l'objet des réponses
            // for (let i = 0; i < inputs.length; i++) {
            //     const el = inputs[i];
            //     console.log(el);
            //     console.log(el.checked);
            //     if(el.checked){
            //         VALID_BTN.removeAttribute("disabled");
            //     }
            // }
    // }
    // }

    // on fini le quizz
    // end_quizz();
}

/**
 * fonction qui check si la réponse est juste et renvoie un message
 * 
 * @param {object} one_question question dont on verifie la réponse
 * @param {number} num_q_actual numéro de la question en cours
 * @param {number} nb_questions nombre de question total du quizz
 * @param {number} score score pour le mettre à jour
 * @returns {string} message
 */
function check_answer(one_question, num_q_actual, nb_questions, score){
    // on selectionne tous les inputs checked


    // let answer_checked = document.querySelector('input');

    let answer_checked = document.querySelector('input[name="answer"]:checked');
    // let answer_checked = document.querySelector('input[name="answer"]:cchecked');

    // let continue_quizz = false;
    // init le message de retour
    let message = "no answer";
    // si on a des réponses
    
    if (answer_checked) {
        let good_answers_obj = one_question.correct_answers;
        // let good_answers_lst = [];
        console.log(good_answers_obj);
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
            // continue_quizz = true;
            // showQuestion();
            message = "";
        } else {
            message = "end quizz";
        //   endQuiz();
        }
    }
    
    return [message, score];
}


/**
 * affiche la page de résultat du quizz
 * 
 * @param {number} points nombre de points remporté durant le quizz
 * @param {number} tot_quest nombre de question du quizz
 */
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
 * @param {Number} question_number numéro de la question dans nombre total de quetsion
 * @param {object} quest objet question
 */
function display_question(quest, question_number){
    console.log("function display question working ! ");
    // lst_quest = JSON.parse(localStorage.getItem('liste_question_en_cours'));
    // console.log(lst_quest);
    // quest = JSON.parse( localStorage.getItem(lst_quest[question_number] ));
    quest = JSON.parse(quest);
    console.log(quest);
    // on affiche la section des questions
    if ( !VIEW_SELECT_QUIZZ.classList.contains('d-none') ){
        VIEW_SELECT_QUIZZ.classList.add('d-none');
    }
    if ( !SECTION_HOME.classList.contains('d-none') ){
        SECTION_HOME.classList.add('d-none');
    }
    if ( VIEW_QUESTION.classList.contains('d-none') ){
        VIEW_QUESTION.classList.remove('d-none');
    }
    // console.log(VIEW_QUESTION.classList);
    
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
            <label for="${key}">${quest.answers[key]}</label>
            <input type="radio" name="answer" value="${key}" id="${key}">
          </div>
        `;
      }
    }
    // et le bouton submit
    // FORM_TAG.innerHTML += `
    //     <button id="validation-question" type="submit" 
    //             class="btn btn-outline-success" disabled
    //             >Valider
    //     </button>`;
    FORM_TAG.innerHTML += `
        <button id="validation-question" type="submit" 
                class="btn btn-outline-success" value="${question_number}"
                >Valider
        </button>`;

    // on affiche le hint s'y'en a un
    if (quest.tip){
        document.getElementById("hint").addEventListener("click", () => { alert(question.tip) });
    }

};