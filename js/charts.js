// Weight Progress Chart
const weightCtx = document.getElementById('weightChart').getContext('2d');
let weightChart;

function loadWeightChart(data) {
  if (weightChart) {
    weightChart.destroy();
  }

  weightChart = new Chart(weightCtx, {
    type: 'line',
    data: {
      labels: data.map(item => item.date),
      datasets: [
        {
          label: 'Weight',
          data: data.map(item => item.weight),
          backgroundColor: 'rgba(52, 152, 219, 0.6)',
          borderColor: 'rgba(52, 152, 219, 1)',
          borderWidth: 2
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      aspectRatio: 2,
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Weight (kg)'
          }
        },
        x: {
          title: {
            display: true,
            text: 'Date'
          }
        }
      }
    }
  });
}

// Body Measurements Chart
const measurementsCtx = document.getElementById('measurementsChart').getContext('2d');
let measurementsChart;

function loadMeasurementsChart(data) {
  if (measurementsChart) {
    measurementsChart.destroy();
  }

  measurementsChart = new Chart(measurementsCtx, {
    type: 'line',
    data: {
      labels: data.map(item => item.date),
      datasets: [
        {
          label: 'Chest',
          data: data.map(item => item.chest),
          backgroundColor: 'rgba(46, 204, 113, 0.6)',
          borderColor: 'rgba(46, 204, 113, 1)',
          borderWidth: 2
        },
        {
          label: 'Waist',
          data: data.map(item => item.waist),
          backgroundColor: 'rgba(231, 76, 60, 0.6)',
          borderColor: 'rgba(231, 76, 60, 1)',
          borderWidth: 2
        },
        {
          label: 'Hips',
          data: data.map(item => item.hips),
          backgroundColor: 'rgba(52, 152, 219, 0.6)',
          borderColor: 'rgba(52, 152, 219, 1)',
          borderWidth: 2
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      aspectRatio: 2,
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Measurements (cm)'
          }
        },
        x: {
          title: {
            display: true,
            text: 'Date'
          }
        }
      }
    }
  });
}

// Dummy weight data
const weightData = [
  { date: '2023-04-01', weight: 82.0 },
  { date: '2023-05-01', weight: 81.5 },
  { date: '2023-06-01', weight: 80.8 },
  { date: '2023-07-01', weight: 80.1 },
  { date: '2023-08-01', weight: 79.7 },
  { date: '2023-09-01', weight: 79.2 }
];

loadWeightChart(weightData);

// Dummy measurements data
const measurementsData = [
  { date: '2023-04-01', chest: 98.5, waist: 82.0, hips: 102.4 },
  { date: '2023-05-01', chest: 97.8, waist: 81.3, hips: 101.8 },
  { date: '2023-06-01', chest: 97.2, waist: 80.6, hips: 101.2 },
  { date: '2023-07-01', chest: 96.7, waist: 80.1, hips: 100.7 },
  { date: '2023-08-01', chest: 96.1, waist: 79.5, hips: 100.2 },
  { date: '2023-09-01', chest: 95.6, waist: 79.0, hips: 99.7 }
];

loadMeasurementsChart(measurementsData);

function updateChartRange(chartType, range) {
  // Update the chart data based on the selected range
  console.log(`Updating ${chartType} chart to ${range} range.`);

  switch (chartType) {
    case 'weight':
      loadWeightChart(getWeightDataForRange(range));
      break;
    case 'measurements':
      loadMeasurementsChart(getMeasurementsDataForRange(range));
      break;
  }
}

function getWeightDataForRange(range) {
  // Implement logic to fetch weight data for the selected range
  console.log(`Fetching weight data for ${range} range.`);
  return weightData;
}

function getMeasurementsDataForRange(range) {
  // Implement logic to fetch measurements data for the selected range
  console.log(`Fetching measurements data for ${range} range.`);
  return measurementsData;
}