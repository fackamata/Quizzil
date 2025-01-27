/*
Module to store quizz logic
*/

// function display_question_bak(quest){
//     const output = [];
  
//     // for each question...
//     // myQuestions.forEach(
//     //   (currentQuestion, questionNumber) => {
  
//     // variable to store the list of possible answers
//     const answers = [];

//     // and for each available answer...
//     for(letter in currentQuestion.answers){

//         // ...add an HTML radio button
//         answers.push(
//         `<label>
//             <input type="radio" name="question_${quest.id}" value="${letter}">
//             ${letter} :
//             ${currentQuestion.answers[letter]}
//         </label>`
//         );
//     }

//     // add this question and its answers to the output
//     output.push(
//         `<h2 class="question"> ${currentQuestion.question} </h2>
//         <form class="answers"> ${answers.join('')} </form>`
//     );
//     //   }
//     // );
  
//     // finally combine our output list into one string of HTML and put it on the page
//     quizContainer.innerHTML = output.join('');
//   }


async function start_quizz(){
    console.log("start quizz fonctionne  ! ")
    let quests = await get_questions(20);
    let lst_quest = save_question(quests);
    

    for (let i = 0; i < lst_quest.length; i++) {
      let quest_to_show = JSON.parse(localStorage.getItem(lst_quest[i]));
      console.log(quest_to_show);
      display_question(quest_to_show);

      console.log()
    }
  }
  


// class QuizzClass {

//     constructor(nbre_question=20, difficult=null) {
//         // this.good_answer = [];
//         this.questions = [];
//         this.score = 0;
//         this.current_question = 0;
//         // this.current_question = {};
//         this.nb_question = nbre_question;
//     }

//     // methode pour démarrer un quizz
//     start_quizz() {
//         console.log('le quizz est lancé')
//         this.questions = get_questions();
//         console.log(this.questions)
//     }

//     increment_question(){
//         this.current_question += 1;
//         console.log('current question num : ' + this.current_question)
//     }

//     display_question(){
    
//     }

//     displayQuestion() {

//         DISPLAY.innerHTML = `<h3>${data[0]['question']}</h3>`
//         answers = ['a', "b", "c", "d", "e", "f"]

//         DISPLAY.innerHTML += `<h3>${data[0]['question']}</h3>`

//         answers.forEach(el => {
//             data = data[0]['answers']["answer_" + el]
//             console.log(data)
//             if (data) {
//                 DISPLAY.innerHTML += "<p id='answer_" + el + "'>data[0]['answers']['answer_" + el + "']}</p>"
//             }
//         });
//         // store correct answers
//         answers.forEach(el => {
//             data = data[0]['answers']["answer_" + el + "_correct"]
//             console.log(data)
//             if (data) {
//                 console.log("correct answer is : " + el)
//                 DISPLAY.innerHTML += "<p id='answer_" + el + "'>data[0]['answers']['answer_" + el + "']}</p>"
//             }
//         });
//         // check answer


//         cardContainer.innerHTML += cardHtml;
//         cropImg += (100 / 17)
//         cardArray.push(cardContainer)

//         return cardArray
//     }

//     resetEndOfGame() {
//         // re-initialise the game
//         // main.style.display = "none"   
//         if (this.resultat) {
//             // divTime.textContent =  (this.refTemps - this.temps)
//             // divFound.textContent =  this.cardFound 
//             // divTries.textContent = this.tries/2 
//             // levelEnd.textContent =  this.level
//             // result.style.display = 'block'
//         } else {
//             // divFound2.textContent =  (this.cardFound>1) ? this.cardFound +" cartes." : this.cardFound +" carte.";
//             // loose.style.display = "block"
//         }
//     }

//     playQuizz() {
//         this.counter()
//         let globalObj = this;

//         btnRetourLevel.addEventListener("click", function () {
//             // main.style.display = 'none'
//             // divLevel.style.display = 'block'
//             // result.style.display = 'none'
//             // loose.style.display = 'none'
//             globalObj.stopTimer()
//             // btnRetourLevel.style.display = 'none'
//         })
//     }

//     store_good_answer(){
//         console.log('store good answer');
//     }

//     store_bad_answer(){
//         console.log('store bad answer');
//     }
// }