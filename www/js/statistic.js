import Chart from 'chart.js/auto'

async function show_statistic(user="SAMPLE_USER") {
//   const resultat = [
//     { quiz: 0, percent: 100 },
//     { quiz: 1, percent: 40 },
//     { quiz: 2, percent: 85 },
//     { quiz: 3, percent: 75 },
//     { quiz: 4, percent: 62 },
//     { quiz: 5, percent: 39 },
//     { quiz: 6, percent: 80 },
//     { quiz: 7, percent: 90 },
//     { quiz: 8, percent: 60 },
//     { quiz: 0, percent: 100 },
//   ];
  const RES = user.resultat

  new Chart(
    document.getElementById('stat-chart'),
    {
      type: 'bar',
      RES: {
        labels: RES.map(row => row.quiz),
        datasets: [
          {
            label: 'Pourcentage de bonne réponse',
            RES: RES.map(row => row.percent)
          }
        ]
      }
    }
  );
}
 