// Quick Stats Dashboard
function updateQuickStats() {
    // Update current weight, goal weight, calories burned, and workout count
    document.getElementById('current-weight').textContent = '80.5 kg';
    document.getElementById('goal-weight').textContent = '70 kg';
    document.getElementById('weight-remaining').textContent = '10.5 kg to go';
    document.getElementById('calories-burned').textContent = '2,450 kcal';
    document.getElementById('workout-count').textContent = '4';
  
    // Update weight trend
    const weightTrend = document.getElementById('weight-trend');
    weightTrend.textContent = '↑ 0.5 kg this week';
    weightTrend.classList.remove('negative');
    weightTrend.classList.add('positive');
  }
  
  // Weight Entry Form
  document.getElementById('weight-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const weightDate = document.getElementById('weight-date').value;
    const weightValue = parseFloat(document.getElementById('weight-value').value);
  
    // Logic to save weight data
    console.log(`Weight logged: ${weightValue} kg on ${weightDate}`);
  
    // Reset the form
    event.target.reset();
  });
  
  // Measurements Entry Form
  document.getElementById('measurements-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const measurementDate = document.getElementById('measurement-date').value;
    const chest = parseFloat(document.getElementById('chest').value);
    const waist = parseFloat(document.getElementById('waist').value);
    const hips = parseFloat(document.getElementById('hips').value);
    const thighs = parseFloat(document.getElementById('thighs').value);
    const biceps = parseFloat(document.getElementById('biceps').value);
  
    // Logic to save measurement data
    console.log(`Measurements logged on ${measurementDate}:
      Chest: ${chest} cm
      Waist: ${waist} cm
      Hips: ${hips} cm
      Thighs: ${thighs} cm
      Biceps: ${biceps} cm
    `);
  
    // Reset the form
    event.target.reset();
  });
  
  // Workout Entry Form
  document.getElementById('workout-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const workoutDate = document.getElementById('workout-date').value;
    const workoutType = document.getElementById('workout-type').value;
    const duration = parseInt(document.getElementById('duration').value);
    const calories = parseInt(document.getElementById('calories').value);
    const notes = document.getElementById('notes').value;
  
    // Logic to save workout data
    console.log(`Workout logged on ${workoutDate}:
      Type: ${workoutType}
      Duration: ${duration} minutes
      Calories: ${calories} kcal
      Notes: ${notes}
    `);
  
    // Reset the form
    event.target.reset();
  });
  
  // Initialize quick stats
  updateQuickStats();