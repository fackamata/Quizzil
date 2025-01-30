const SAMPLE_USER = [{
    name: 'bibi',
    score: [12, 19, 3, 5, 19, 3, 5, 2, 3],
    favoris: [],
    resultat : [
      { quiz: 1, percent: 40 },
      { quiz: 2, percent: 85 },
      { quiz: 3, percent: 75 },
      { quiz: 4, percent: 62 },
      { quiz: 5, percent: 39 },
      { quiz: 6, percent: 80 },
      { quiz: 7, percent: 90 },
      { quiz: 8, percent: 60 },
      { quiz: 9, percent: 100 },
      { quiz: 10, percent: 100 }
    ]
  }];


const SAMPLE_QUEST = [
  {
    "id": 0,
    "question": "How to delete a directory in Linux?",
    "description": "delete folder",
    "answers": {
      "answer_a": "ls",
      "answer_b": "delete",
      "answer_c": "remove",
      "answer_d": "rmdir",
      "answer_e": null,
      "answer_f": null
    },
    "multiple_correct_answers": "false",
    "correct_answers": {
      "answer_a_correct": "false",
      "answer_b_correct": "false",
      "answer_c_correct": "false",
      "answer_d_correct": "true",
      "answer_e_correct": "false",
      "answer_f_correct": "false"
    },
    "explanation": "rmdir deletes an empty directory",
    "tip": null,
    "tags": [],
    "category": "linux",
    "difficulty": "Easy"
  }
]
  // Storing a user object
  localStorage.setItem('user', JSON.stringify(SAMPLE_USER));
  // décommenter pour avoir la question sample dans le localStorage
  // localStorage.setItem(0, JSON.stringify(SAMPLE_QUEST));