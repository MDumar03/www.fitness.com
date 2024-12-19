// Calorie Calculator
const calorieForm = document.getElementById('calorie-form');
const calorieResult = document.getElementById('calorie-result');

calorieForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const age = parseInt(document.getElementById('age').value);
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const activity = parseFloat(document.getElementById('activity').value);

    let bmr;
    if (gender === 'male') {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    const dailyCalories = Math.round(bmr * activity);

    calorieResult.innerHTML = `
        <h3>Calorie Calculation Result</h3>
        <p>Your estimated daily calorie needs are:</p>
        <div class="result-value">${dailyCalories} calories/day</div>
        <p>This is based on your age, gender, height, weight, and activity level.</p>
        <p>Remember, this is just an estimate. Consult with a healthcare professional for personalized recommendations.</p>
    `;
});