class WorkoutPlanner {
    constructor() {
        this.exercises = this.loadExerciseLibrary();
        this.initializePlanner();
        this.bindEvents();
    }

    loadExerciseLibrary() {
        return {
            strength: {
                beginner: [
                    { name: 'Push-ups', sets: 3, reps: '8-12', rest: '60s', equipment: 'none', target: 'chest' },
                    { name: 'Bodyweight Squats', sets: 3, reps: '12-15', rest: '60s', equipment: 'none', target: 'legs' },
                    { name: 'Lunges', sets: 3, reps: '10 each leg', rest: '60s', equipment: 'none', target: 'legs' },
                    { name: 'Plank', sets: 3, reps: '30s hold', rest: '60s', equipment: 'none', target: 'core' },
                    { name: 'Bird Dogs', sets: 3, reps: '10 each side', rest: '60s', equipment: 'none', target: 'core' }
                ],
                intermediate: [
                    { name: 'Dumbbell Bench Press', sets: 4, reps: '8-10', rest: '90s', equipment: 'dumbbells', target: 'chest' },
                    { name: 'Goblet Squats', sets: 4, reps: '8-10', rest: '90s', equipment: 'dumbbells', target: 'legs' },
                    { name: 'Dumbbell Rows', sets: 4, reps: '10-12', rest: '90s', equipment: 'dumbbells', target: 'back' },
                    { name: 'Russian Twists', sets: 3, reps: '20 total', rest: '60s', equipment: 'dumbbells', target: 'core' }
                ],
                advanced: [
                    { name: 'Deadlifts', sets: 5, reps: '5-8', rest: '120s', equipment: 'barbell', target: 'full-body' },
                    { name: 'Military Press', sets: 4, reps: '6-8', rest: '120s', equipment: 'barbell', target: 'shoulders' },
                    { name: 'Pull-ups', sets: 4, reps: '8-12', rest: '90s', equipment: 'pull-up bar', target: 'back' }
                ]
            },
            cardio: {
                beginner: [
                    { name: 'Walking', duration: '30 min', intensity: 'Moderate', equipment: 'none', calories: '150-200' },
                    { name: 'Stationary Bike', duration: '20 min', intensity: 'Light to Moderate', equipment: 'bike', calories: '120-180' },
                    { name: 'Swimming', duration: '20 min', intensity: 'Moderate', equipment: 'pool', calories: '200-250' }
                ],
                intermediate: [
                    { name: 'Jogging', duration: '30 min', intensity: 'Moderate to High', equipment: 'none', calories: '300-400' },
                    { name: 'Jump Rope', duration: '15 min', intensity: 'High', equipment: 'jump rope', calories: '200-300' },
                    { name: 'Cycling', duration: '45 min', intensity: 'Moderate to High', equipment: 'bike', calories: '400-600' }
                ],
                advanced: [
                    { name: 'HIIT Sprint Intervals', duration: '20 min', intensity: 'Very High', equipment: 'none', calories: '300-400' },
                    { name: 'Swimming Laps', duration: '45 min', intensity: 'High', equipment: 'pool', calories: '500-700' },
                    { name: 'Boxing', duration: '30 min', intensity: 'Very High', equipment: 'boxing gear', calories: '400-600' }
                ]
            },
            flexibility: {
                beginner: [
                    { name: 'Basic Stretching Routine', duration: '15 min', intensity: 'Light', equipment: 'yoga mat' },
                    { name: 'Beginner Yoga Flow', duration: '20 min', intensity: 'Light', equipment: 'yoga mat' }
                ],
                intermediate: [
                    { name: 'Dynamic Stretching', duration: '20 min', intensity: 'Moderate', equipment: 'yoga mat' },
                    { name: 'Power Yoga', duration: '30 min', intensity: 'Moderate', equipment: 'yoga mat' }
                ],
                advanced: [
                    { name: 'Advanced Yoga Flow', duration: '45 min', intensity: 'High', equipment: 'yoga mat' },
                    { name: 'Mobility Routine', duration: '30 min', intensity: 'High', equipment: 'various' }
                ]
            }
        };
    }

    initializePlanner() {
        this.generateWorkoutButton = document.querySelector('.generate-workout');
        this.generatedWorkout = document.getElementById('generated-workout');
    }

    bindEvents() {
        if (this.generateWorkoutButton) {
            this.generateWorkoutButton.addEventListener('click', (e) => {
                e.preventDefault();
                this.generateWorkout();
            });
        }

        // Save workout button
        document.getElementById('save-workout')?.addEventListener('click', () => {
            this.saveWorkout();
        });

        // Add event listeners for fitness level buttons
        const levelButtons = document.querySelectorAll('.level-btn');
        levelButtons.forEach(button => {
            button.addEventListener('click', () => {
                const level = button.dataset.level;
                this.showPlans(level);
            });
        });
    }

    generateWorkout() {
        const type = document.getElementById('workout-type').value;
        const duration = parseInt(document.getElementById('duration').value);
        const equipment = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
            .map(cb => cb.value);

        let level = this.determineLevel();
        let workout = this.createWorkoutPlan(type, level, duration, equipment);
        this.displayWorkout(workout);
    }

    determineLevel() {
        // This could be enhanced with actual user progress data
        const workoutHistory = this.getWorkoutHistory();
        if (workoutHistory.length > 20) return 'advanced';
        if (workoutHistory.length > 10) return 'intermediate';
        return 'beginner';
    }

    createWorkoutPlan(type, level, duration, equipment) {
        let availableExercises = this.exercises[type][level].filter(exercise => 
            equipment.length === 0 || equipment.includes(exercise.equipment)
        );

        let workout = {
            warmup: {
                duration: '5-10 minutes',
                activities: ['Light cardio', 'Dynamic stretching', 'Joint mobility']
            },
            main: {
                exercises: this.selectExercises(availableExercises, duration),
                duration: `${duration} minutes`
            },
            cooldown: {
                duration: '5-10 minutes',
                activities: ['Light stretching', 'Deep breathing', 'Relaxation']
            }
        };

        return workout;
    }

    selectExercises(exercises, duration) {
        let selected = [];
        let remainingTime = duration - 15; // Account for warm-up and cool-down

        // Shuffle exercises
        exercises = [...exercises].sort(() => Math.random() - 0.5);

        while (remainingTime > 0 && exercises.length > 0) {
            const exercise = exercises.pop();
            selected.push(exercise);
            remainingTime -= this.calculateExerciseTime(exercise);
        }

        return selected;
    }

    calculateExerciseTime(exercise) {
        if (exercise.duration) {
            return parseInt(exercise.duration);
        }
        // Calculate time for strength exercises (sets * reps * estimated time per rep + rest)
        return (exercise.sets * (typeof exercise.reps === 'string' ? 
            parseInt(exercise.reps) : 12) * 3 + 
            parseInt(exercise.rest)) / 60;
    }

    displayWorkout(workout) {
        if (!this.generatedWorkout) return;

        let html = `
            <div class="workout-plan">
                <div class="workout-section">
                    <h3>Warm-up (${workout.warmup.duration})</h3>
                    <ul>
                        ${workout.warmup.activities.map(activity => 
                            `<li>${activity}</li>`).join('')}
                    </ul>
                </div>

                <div class="workout-section">
                    <h3>Main Workout (${workout.main.duration})</h3>
                    <div class="exercise-list">
                        ${workout.main.exercises.map(exercise => this.createExerciseCard(exercise)).join('')}
                    </div>
                </div>

                <div class="workout-section">
                    <h3>Cool-down (${workout.cooldown.duration})</h3>
                    <ul>
                        ${workout.cooldown.activities.map(activity => 
                            `<li>${activity}</li>`).join('')}
                    </ul>
                </div>

                <button id="save-workout" class="btn primary">Save Workout</button>
            </div>
        `;

        this.generatedWorkout.innerHTML = html;
    }

    createExerciseCard(exercise) {
        return `
            <div class="exercise-card">
                <h4>${exercise.name}</h4>
                ${exercise.sets ? `
                    <p>Sets: ${exercise.sets}</p>
                    <p>Reps: ${exercise.reps}</p>
                    <p>Rest: ${exercise.rest}</p>
                ` : `
                    <p>Duration: ${exercise.duration}</p>
                    <p>Intensity: ${exercise.intensity}</p>
                    ${exercise.calories ? `<p>Est. Calories: ${exercise.calories}</p>` : ''}
                `}
                <p>Equipment: ${exercise.equipment}</p>
                ${exercise.target ? `<p>Target: ${exercise.target}</p>` : ''}
            </div>
        `;
    }

    saveWorkout() {
        const workoutData = {
            date: new Date().toISOString(),
            workout: this.generatedWorkout.innerHTML,
        };

        let workoutHistory = this.getWorkoutHistory();
        workoutHistory.push(workoutData);
        localStorage.setItem('workoutHistory', JSON.stringify(workoutHistory));

        this.showNotification('Workout saved successfully!');
    }

    getWorkoutHistory() {
        try {
            return JSON.parse(localStorage.getItem('workoutHistory')) || [];
        } catch (e) {
            return [];
        }
    }

    showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.remove();
        }, 3000);
    }

    showPlans(level) {
        const planCategories = document.querySelectorAll('.plan-category');
        planCategories.forEach(category => {
            if (category.id === `${level}-plans`) {
                category.style.display = 'block';
            } else {
                category.style.display = 'none';
            }
        });

        const levelButtons = document.querySelectorAll('.level-btn');
        levelButtons.forEach(button => {
            if (button.dataset.level === level) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }
}

// Initialize workout planner when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new WorkoutPlanner();
});