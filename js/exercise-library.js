// Exercise library data
const exercises = [
    { name: 'Push-ups', category: 'upper', description: 'Classic bodyweight exercise for upper body strength' },
    { name: 'Squats', category: 'lower', description: 'Compound exercise targeting the lower body' },
    { name: 'Plank', category: 'core', description: 'Isometric exercise for core stability' },
    { name: 'Jumping Jacks', category: 'cardio', description: 'Simple cardio exercise to elevate heart rate' },
    { name: 'Bicep Curls', category: 'upper', description: 'Isolation exercise for the biceps' },
    { name: 'Shoulder Press', category: 'upper', description: 'Compound exercise targeting the shoulders' },
    { name: 'Deadlifts', category: 'lower', description: 'Compound exercise for the posterior chain' },
    { name: 'Squats', category: 'lower', description: 'Compound exercise targeting the quadriceps and glutes' },
    { name: 'Planks', category: 'core', description: 'Isometric exercise for core stability' },
    { name: 'Russian Twists', category: 'core', description: 'Oblique-targeting exercise for the core' },
    { name: 'Jumping Jacks', category: 'cardio', description: 'Simple cardio exercise to elevate heart rate' },
    { name: 'Burpees', category: 'cardio', description: 'Full-body cardio and strength exercise' }
];

// Render exercise cards
function renderExerciseCards(filteredExercises) {
    const exerciseGrid = document.querySelector('.exercise-grid');
    exerciseGrid.innerHTML = '';

    filteredExercises.forEach(exercise => {
        const card = document.createElement('div');
        card.classList.add('exercise-card');
        card.dataset.target = exercise.category;
        card.innerHTML = `
            <h3>${exercise.name}</h3>
            <p>${exercise.description}</p>
            <button class="btn secondary" onclick="showExerciseDetails('${exercise.name.toLowerCase().replace(/\s/g, '-')}')">View Details</button>
        `;
        exerciseGrid.appendChild(card);
    });
}

// Filter exercises based on category
function filterExercises(category) {
    if (category === 'all') {
        renderExerciseCards(exercises);
    } else {
        const filteredExercises = exercises.filter(exercise => exercise.category === category);
        renderExerciseCards(filteredExercises);
    }

    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        if (button.dataset.filter === category) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

// Initial render of all exercises
renderExerciseCards(exercises);

// Show exercise details in a modal
function showExerciseDetails(exerciseName) {
    const exerciseModal = document.getElementById('exercise-modal');
    const exerciseDetails = document.getElementById('exercise-details');

    // Fetch exercise details from the exercise library
    const exercise = exercises.find(ex => ex.name.toLowerCase().replace(/\s/g, '-') === exerciseName);

    if (exercise) {
        exerciseDetails.innerHTML = `
            <h3>${exercise.name}</h3>
            <p>Category: ${exercise.category}</p>
            <p>Equipment: ${exercise.equipment || 'None'}</p>
            <p>Description:</p>
            <p>${exercise.description}</p>
            <p>Instructions:</p>
            <ol>
                <li>${exercise.instructions.join('</li><li>')}</li>
            </ol>
        `;

        exerciseModal.style.display = 'block';
    } else {
        console.error(`Exercise '${exerciseName}' not found in the library.`);
    }
}

// Close the exercise modal
window.addEventListener('click', (event) => {
    const exerciseModal = document.getElementById('exercise-modal');
    if (event.target === exerciseModal) {
        exerciseModal.style.display = 'none';
    }
});