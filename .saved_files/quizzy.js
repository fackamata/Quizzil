
const DISPLAY = document.getElementById("display");
const API = "https://quizapi.io/api/v1/";
const API_KEY = "?apiKey=x622ubZyhNZIsj9lcaKCLNgvX337L6o6I4bIVxjW";
const QUESTION = document.getElementById("question");
const LETTER = ['a', "b", "c", "d", "e", "f"]

document.getElementById("categories_btn").addEventListener("click", display_categories);
document.getElementById("quizz_btn").addEventListener("click", display_questions);
document.getElementById("tag_btn").addEventListener("click", display_tags);
document.getElementById("check_btn").addEventListener("click", get_categories);


/*
Affiche les questions
*/
async function display_questions() {
  const OPTION = document.getElementById("option");
  OPTION.innerHTML = "";

  // get questions
  let json = await get_questions();
  let questions = JSON.parse(json);  // type objet

  console.log(typeof (questions));

  let questionsArray = [];

  questions.forEach(question => {
    // console.log(question.answers['answer_a'])
    // console.log(question)ry {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

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
      console.log(question["answers"]["answer_" + char])
      questionsArray.push(
        `
              <input type="checkbox" name="${"answer_" + char}"/>
              <label for="${"answer_" + char}">${question["answers"]["answer_" + char]}</label>
        `)
    });
    // answers.forEach((key, value) => {
    // answers.forEach((el) => {
    //   console.log(el);
    //   // console.log(value);
    //   if (key != null) {
    //     questionArray.push(
    //       `
    //             <input type="checkbox" name="${key}"/>
    //             <label for="${key}">${value}</label>
    //       `)
    //   }

    //   questionArray.push(`</div>`)
    // });

    // for (let i = 0; i < answers.length; i++) {
    //   const ans = answers[i];
    //   if (ans != null) {
    //     questionsArray.push(
    //       {
    //         option: `
    //           <div>
    //               <input type="checkbox" name="${ans}"/>
    //               <label for="${ans}">${ans}</label>
    //           </div>
    //         `,
    //       });
    //   } else {
    //     console.log(ans);
    //   }

    // }

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

/*
appelle une api dont l'url est passé en parramètre

params: url (str)   -> nombre de questions retournées
return: résultat du endpoint
*/
// async function fetch_data(url) {
//   try {
//     let res = await fetch('./data/questions.json', {
//       headers: { Accept: 'application/json' },
//     });

//     let json = await res.json();
//     return json
//   } catch (error) {
// console.log(error);
//     return error;
//   }
// }


// let questionsArray = []
// Object.entries(json).forEach(([key, value]) => {
//     questionsArray.push(
//         {
//             html : `<div class="card-skill">
//                         ${value}
//                         <p>${key}</p>
//                     </div>`
//         }
//     )    
// });
// skillsArray.forEach(function(skill){
//     skills.innerHTML += skill.html
// })

// function get_difficulties() {

//   const apiKey = 'x622ubZyhNZIsj9lcaKCLNgvX337L6o6I4bIVxjW';
//   // const apiUrl = "https://quizapi.io/api/v1/questions";
//   const apiUrl = "https://quizapi.io/api/v1/questions?apiKey=x622ubZyhNZIsj9lcaKCLNgvX337L6o6I4bIVxjW";

//   fetch(apiUrl)
//     .then((response) => response.json())
//     .then((data) => {
//       // const joke = data.value;
//       // Display the joke on your website or app
//console.log(DISP)
//       console.log(data[0])
//       DISPLAY.innerHTML = `
//         <h3>${data[0]['question']}</h3>
//         <p>${data[0]['answers']['answer_a']}</p>
//         <p>${data[0]['answers']['answer_b']}</p>
//         <p>${data[0]['answers']['answer_c']}</p>
//         <p>${data[0]['answers']['answer_d']}</p>
//         <p>${data[0]['answers']['answer_e']}</p>
//         <p>${data[0]['answers']['answer_f']}</p>

//         <p>${data[0]['correct_answers']['answer_a_correct']}</p>
//         <p>${data[0]['correct_answers']['answer_b_correct']}</p>
//         <p>${data[0]['correct_answers']['answer_c_correct']}</p>
//         <p>${data[0]['correct_answers']['answer_d_correct']}</p>
//         <p>${data[0]['correct_answers']['answer_e_correct']}</p>
//         <p>${data[0]['correct_answers']['answer_f_correct']}</p>

//         <p>${data[0]['category']}</p>
//         <p>${data[0]['description']}</p>
//         <p>${data[0]['difficulty']}</p>
//         <p>${data[0]['explanation']}</p>
//         <p>${data[0]['multiple_correct_answers']}</p>
//         <p>${data[0]['tags'][0]}</p>
//       `
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//     });

// }

// async function get_random(){

//   const url = 'https://yt-api.p.rapidapi.com/channel/about?id=UCAuUUnT6oDeKwE6v1NGQxug';
//   const options = {
//     method: 'GET',
//     headers: {
//       'x-rapidapi-key': 'a55629b7c3msheae0794fa98cbdcp19743ajsn49beb18c105f',
//       'x-rapidapi-host': 'yt-api.p.rapidapi.com'
//     }
//   };
// }

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

// async function get_data() {
//   console.log(" ! on get data ! ");
//   const url = "https://api.chucknorris.io/jokes/categories";
//   //const url = "https://quizapi.io/api/v1/questions?apiKey=x622ubZyhNZIsj9lcaKCLNgvX337L6o6I4bIVxjW&limit=1";
//   try {
//     const response = await fetch(url);

//     const json = await response.json();
//     console.log(json);
//   } catch (error) {
//     console.error(error.message);
//   }
// }



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

const JSON_QUESTdd = [{
    "id": 6484,
    "question": "What is the primary purpose of using functional components in Vue to improve performance?",
    "description": "Understanding how functional components can contribute to performance improvements.",
    "answers": {
      "answer_a": "Functional components do not have reactive data and have a smaller memory footprint",
      "answer_b": "They re-render more frequently",
      "answer_c": "They are more complex to create",
      "answer_d": "They have their own state",
      "answer_e": null,
      "answer_f": null
    },
    "multiple_correct_answers": "false",
    "correct_answers": {
      "answer_a_correct": "true",
      "answer_b_correct": "false",
      "answer_c_correct": "false",
      "answer_d_correct": "false",
      "answer_e_correct": "false",
      "answer_f_correct": "false"
    },
    "correct_answer": null,
    "explanation": "Functional components are stateless and do not have reactive data, making them lighter and faster to render, which improves performance.",
    "tip": null,
    "tags": [
      {
        "name": "VueJS"
      }
    ],
    "category": "VueJS",
    "difficulty": "Medium"
  },
  {
    "id": 3822,
    "question": "What does 'crypto.createCipheriv()' do in Node.js?",
    "description": "Exploring encryption methods.",
    "answers": {
      "answer_a": "Generates a secure random key",
      "answer_b": "Creates a cipher for encrypting data with a specified algorithm and initialization vector",
      "answer_c": "Decrypts encrypted data",
      "answer_d": "Hashes data using cryptographic algorithms",
      "answer_e": null,
      "answer_f": null
    },
    "multiple_correct_answers": "false",
    "correct_answers": {
      "answer_a_correct": "false",
      "answer_b_correct": "true",
      "answer_c_correct": "false",
      "answer_d_correct": "false",
      "answer_e_correct": "false",
      "answer_f_correct": "false"
    },
    "correct_answer": null,
    "explanation": "'crypto.createCipheriv()' creates a cipher for encrypting data using a specific algorithm and initialization vector (IV).",
    "tip": null,
    "tags": [
      {
        "name": "nodeJS"
      }
    ],
    "category": "NodeJs",
    "difficulty": "Hard"
  },
  {
    "id": 6200,
    "question": "How do you manage input field focus in a multi-step form, ensuring each step's first field is focused when navigating to that step?",
    "description": "Learning how to enhance user navigation between form steps.",
    "answers": {
      "answer_a": "Use 'ref()' to reference each step's first field, and call 'focus()' when the user navigates to that step",
      "answer_b": "Use 'computed()' to determine focus dynamically",
      "answer_c": "Form field focus cannot be controlled programmatically",
      "answer_d": "Wrap fields in 'markRaw()' for focus management",
      "answer_e": null,
      "answer_f": null
    },
    "multiple_correct_answers": "false",
    "correct_answers": {
      "answer_a_correct": "true",
      "answer_b_correct": "false",
      "answer_c_correct": "false",
      "answer_d_correct": "false",
      "answer_e_correct": "false",
      "answer_f_correct": "false"
    },
    "correct_answer": null,
    "explanation": "Using 'ref()' allows you to programmatically focus on the first input of each step when navigating through a multi-step form, improving the user experience.",
    "tip": null,
    "tags": [
      {
        "name": "VueJS"
      }
    ],
    "category": "VueJS",
    "difficulty": "Medium"
  },
  {
    "id": 1380,
    "question": "What configuration must be set in Keycloak to make it an identity provider for OpenShift?",
    "description": "Keycloak needs specific settings to integrate as an identity provider in OpenShift.",
    "answers": {
      "answer_a": "Realm is created with OpenShift as a client",
      "answer_b": "OAuth2 is disabled in Keycloak",
      "answer_c": "LDAP sync is enabled",
      "answer_d": "Keycloak is set to disable SSL",
      "answer_e": null,
      "answer_f": null
    },
    "multiple_correct_answers": "false",
    "correct_answers": {
      "answer_a_correct": "true",
      "answer_b_correct": "false",
      "answer_c_correct": "false",
      "answer_d_correct": "false",
      "answer_e_correct": "false",
      "answer_f_correct": "false"
    },
    "correct_answer": null,
    "explanation": "In Keycloak, a realm is created with OpenShift configured as a client to enable SSO integration.",
    "tip": null,
    "tags": [
      {
        "name": "Openshift"
      }
    ],
    "category": "DevOps",
    "difficulty": "Hard"
  },
  {
    "id": 5435,
    "question": "Which lifecycle hook is used to access the DOM directly after an element has been inserted?",
    "description": "Understanding the correct lifecycle hook for DOM access.",
    "answers": {
      "answer_a": "beforeCreate",
      "answer_b": "beforeUpdate",
      "answer_c": "mounted",
      "answer_d": "destroyed",
      "answer_e": null,
      "answer_f": null
    },
    "multiple_correct_answers": "false",
    "correct_answers": {
      "answer_a_correct": "false",
      "answer_b_correct": "false",
      "answer_c_correct": "true",
      "answer_d_correct": "false",
      "answer_e_correct": "false",
      "answer_f_correct": "false"
    },
    "correct_answer": null,
    "explanation": "The 'mounted' lifecycle hook is used to access the DOM directly after an element has been inserted.",
    "tip": null,
    "tags": [
      {
        "name": "VueJS"
      }
    ],
    "category": "VueJS",
    "difficulty": "Medium"
  }]