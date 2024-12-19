// Generate Meal Plan
function generateMealPlan() {
    const mealPlanContainer = document.getElementById('meal-plan');
    const vegetarian = document.getElementById('vegetarian').checked;
    const vegan = document.getElementById('vegan').checked;
    const glutenFree = document.getElementById('gluten-free').checked;
    const dairyFree = document.getElementById('dairy-free').checked;
  
    // Implement logic to generate a weekly meal plan based on the selected dietary preferences
    mealPlanContainer.innerHTML = `
      <h3>Your Weekly Meal Plan</h3>
      <ul>
        <li>Monday: Grilled Salmon with Roasted Vegetables</li>
        <li>Tuesday: Vegetarian Lentil Stew</li>
        <li>Wednesday: Chicken Stir-Fry with Brown Rice</li>
        <li>Thursday: Quinoa and Avocado Salad</li>
        <li>Friday: Baked Tofu with Steamed Broccoli</li>
        <li>Saturday: Beef and Broccoli Stir-Fry</li>
        <li>Sunday: Whole Wheat Pasta with Tomato Sauce</li>
      </ul>
    `;
  }