/*
Module to store quizz logic
*/

const DISPLAY = document.getElementById("display");

// const BAR_CONTAINER = document.getElementById('barContainer');
// const PROGRESS_BAR = document.getElementById("progressBar");

btnDur.addEventListener("click", function(){
    var objGameDur = new Quizz(20, null, )

    objGameDur.playGame()
})
isMember ? '$2.00' : '$10.00';

class Quizz {

    // initialisation
    constructor(nbre_question, difficult) {
        this.good_answer = [];
        this.questions = [];
        this.score = 0;

        this.difficulty = difficult;
        // this.current_question = {};
        this.nb_question = nbre_question;
    }

    // methode pour démarrer un quizz
    start_quizz() {
        console.log('le quizz est lancé')
        get_questions();
        display_new_question();
        this.questions = get_new_question();
    }

    get_questions(){
    
    }

    displayQuestion() {

        DISPLAY.innerHTML = `<h3>${data[0]['question']}</h3>`
        answers = ['a', "b", "c", "d", "e", "f"]

        DISPLAY.innerHTML += `<h3>${data[0]['question']}</h3>`

        answers.forEach(el => {
            data = data[0]['answers']["answer_" + el]
            console.log(data)
            if (data) {
                DISPLAY.innerHTML += "<p id='answer_" + el + "'>data[0]['answers']['answer_" + el + "']}</p>"
            }
        });
        // store correct answers
        answers.forEach(el => {
            data = data[0]['answers']["answer_" + el + "_correct"]
            console.log(data)
            if (data) {
                console.log("correct answer is : " + el)
                DISPLAY.innerHTML += "<p id='answer_" + el + "'>data[0]['answers']['answer_" + el + "']}</p>"
            }
        });
        // check answer


        cardContainer.innerHTML += cardHtml;
        cropImg += (100 / 17)
        cardArray.push(cardContainer)

        return cardArray
    }

    startTimer() {
        // start timer and display
        let addWidth = (100 / this.temps);
        let width = 0;
        let objetGeneral = this;

        this.Timer = setInterval(function () {
            objetGeneral.temps -= 1;
            width += addWidth;
            progressBar.style.width = `${width}` + "%"
            if (width >= 75) {
                PROGRESS_BAR.style.backgroundColor = "#f03939"
            }
            span.textContent = objetGeneral.temps + "s"
            if (objetGeneral.temps === 0) {
                objetGeneral.resetEndOfGame()
            }
            return objetGeneral.temps
        }, 1000);
    }

    stopTimer() {
        // to stop setInterval()
        clearInterval(this.Timer);
    }

    resetEndOfGame() {
        // re-initialise the game
        // main.style.display = "none"   
        this.stopTimer()
        if (this.resultat) {
            // divTime.textContent =  (this.refTemps - this.temps)
            // divFound.textContent =  this.cardFound 
            // divTries.textContent = this.tries/2 
            // levelEnd.textContent =  this.level
            // result.style.display = 'block'
        } else {
            // divFound2.textContent =  (this.cardFound>1) ? this.cardFound +" cartes." : this.cardFound +" carte.";
            // loose.style.display = "block"
        }
    }

    playQuizz() {
        this.counter()
        let globalObj = this;

        btnRetourLevel.addEventListener("click", function () {
            // main.style.display = 'none'
            // divLevel.style.display = 'block'
            // result.style.display = 'none'
            // loose.style.display = 'none'
            globalObj.stopTimer()
            // btnRetourLevel.style.display = 'none'
        })
    }

    store_good_answer(){
        console.log('store good answer');
    }

    store_bad_answer(){
        console.log('store bad answer');
    }
}