// Healthy Recipes
function showRecipe(recipeName) {
  const recipeModal = document.getElementById('recipe-modal');
  const recipeDetails = document.getElementById('recipe-details');

  // Implement logic to fetch and display the recipe details
  switch (recipeName) {
    case 'overnight-oats':
      recipeDetails.innerHTML = `
        <h3>Protein-Packed Overnight Oats</h3>
        <img src="../images/recipes/overnight-oats.jpg" alt="Overnight Oats">
        <h4>Ingredients:</h4>
        <ul>
          <li>1 cup rolled oats</li>
          <li>1 cup unsweetened almond milk</li>
          <li>1/2 cup Greek yogurt</li>
          <li>2 tablespoons chia seeds</li>
          <li>1 tablespoon honey</li>
          <li>1/2 teaspoon vanilla extract</li>
          <li>Pinch of cinnamon</li>
        </ul>
        <h4>Instructions:</h4>
        <ol>
          <li>In a mason jar or container, combine all the ingredients and stir well.</li>
          <li>Cover and refrigerate overnight (or for at least 4 hours).</li>
          <li>Top with fresh fruit, nuts, or additional toppings as desired.</li>
        </ol>
      `;
      break;
    // Add more recipe cases as needed
  }

  recipeModal.style.display = 'block';
}

// Close Recipe Modal
window.addEventListener('click', (event) => {
  const recipeModal = document.getElementById('recipe-modal');
  if (event.target == recipeModal) {
    recipeModal.style.display = 'none';
  }
});

// Essential Nutrition Tips
function showTipDetails(tipName) {
  const tipModal = document.getElementById('tip-modal');
  const tipDetails = document.getElementById('tip-details');

  // Implement logic to fetch and display the tip details
  switch (tipName) {
    case 'portion-control':
      tipDetails.innerHTML = `
        <h3>Portion Control</h3>
        <p>Proper portion control is essential for weight management and overall health. Here are some tips:</p>
        <ul>
          <li>Use smaller plates and bowls to naturally reduce portion sizes.</li>
          <li>Eat slowly and listen to your body's hunger and fullness cues.</li>
          <li>Measure out servings of high-calorie foods like oils, nuts, and cheese.</li>
          <li>Fill half your plate with vegetables and fruits, a quarter with lean protein, and a quarter with whole grains.</li>
        </ul>
      `;
      break;
    case 'balanced-meals':
      tipDetails.innerHTML = `
        <h3>Balanced Meals</h3>
        <p>Creating balanced meals with the right mix of macronutrients can help you meet your nutritional needs:</p>
        <ul>
          <li>Include a lean protein source like chicken, fish, tofu, or legumes.</li>
          <li>Add complex carbohydrates such as whole grains, starchy vegetables, or quinoa.</li>
          <li>Include healthy fats from avocado, nuts, seeds, or olive oil.</li>
          <li>Round out your meal with plenty of colorful fruits and vegetables.</li>
        </ul>
      `;
      break;
    case 'meal-timing':
      tipDetails.innerHTML = `
        <h3>Meal Timing</h3>
        <p>Optimizing your meal timing can help you maintain energy levels and support your fitness goals:</p>
        <ul>
          <li>Eat a balanced breakfast to fuel your day and boost metabolism.</li>
          <li>Space out your meals every 3-4 hours to keep your blood sugar stable.</li>
          <li>Time your pre- and post-workout meals to support muscle recovery and growth.</li>
          <li>Avoid eating close to bedtime to prevent disrupted sleep.</li>
        </ul>
      `;
      break;
    // Add more tip cases as needed
  }

  tipModal.style.display = 'block';
}

// Healthy Recipes Filter
const filterButtons = document.querySelectorAll('.filter-btn');
const recipeCards = document.querySelectorAll('.recipe-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const selectedCategory = button.getAttribute('data-filter');
    
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    
    recipeCards.forEach(card => {
      if (selectedCategory === 'all' || card.getAttribute('data-category') === selectedCategory) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Close Tip Modal
window.addEventListener('click', (event) => {
  const tipModal = document.getElementById('tip-modal');
  if (event.target == tipModal) {
    tipModal.style.display = 'none';
  }
});