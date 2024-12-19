function showHistory(type) {
    const tabButtons = document.querySelectorAll('.history-tabs .tab-btn');
    const historyContent = document.getElementById('history-content');
  
    // Remove active class from all tab buttons
    tabButtons.forEach(btn => btn.classList.remove('active'));
  
    // Add active class to the clicked tab button
    const clickedButton = document.querySelector(`.history-tabs .tab-btn:nth-child(${type === 'workouts' ? 1 : type === 'measurements' ? 2 : 3})`);
    clickedButton.classList.add('active');
  
    // Load the corresponding history content
    switch (type) {
      case 'workouts':
        historyContent.innerHTML = `
          <h3>Workout History</h3>
          <ul>
            <li>Strength Training - 45 min - 350 kcal - Sep 1</li>
            <li>Cardio (Running) - 30 min - 280 kcal - Aug 29</li>
            <li>HIIT Workout - 25 min - 220 kcal - Aug 25</li>
          </ul>
        `;
        break;
      case 'measurements':
        historyContent.innerHTML = `
          <h3>Measurement History</h3>
          <ul>
            <li>Chest: 96.1 cm, Waist: 79.5 cm, Hips: 100.2 cm - Sep 1</li>
            <li>Chest: 96.7 cm, Waist: 80.1 cm, Hips: 100.7 cm - Aug 1</li>
            <li>Chest: 97.2 cm, Waist: 80.6 cm, Hips: 101.2 cm - Jul 1</li>
          </ul>
        `;
        break;
      case 'achievements':
        historyContent.innerHTML = `
          <h3>Achievements</h3>
          <ul>
            <li>Reached goal weight of 70 kg - Sep 5</li>
            <li>Completed 30-day Strength Training Challenge - Aug 31</li>
            <li>Ran a 5k in under 25 minutes - Aug 15</li>
          </ul>
        `;
        break;
    }
  }