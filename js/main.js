// Global Variables
let waterGlasses = 0;
let currentTheme = 'light';

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// App Initialization
function initializeApp() {
    setupMobileMenu();
    setupBMICalculator();
    setupWaterTracker();
    setupScrollEffects();
    setupFormValidation();
    loadUserPreferences();
}

// Toggle mobile navigation menu
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

mobileMenuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

function setupMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            this.setAttribute('aria-expanded', 
                this.getAttribute('aria-expanded') === 'false' ? 'true' : 'false'
            );
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.main-nav')) {
                navLinks.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }
}

// Mobile Menu Functionality
function setupMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            this.setAttribute('aria-expanded', 
                this.getAttribute('aria-expanded') === 'false' ? 'true' : 'false'
            );
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.main-nav')) {
                navLinks.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }
}

// BMI Calculator
function setupBMICalculator() {
    const calculateButton = document.querySelector('#calculate-bmi');
    if (calculateButton) {
        calculateButton.addEventListener('click', calculateBMI);
    }
}

function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // convert cm to m
    const resultDiv = document.getElementById('bmi-result');
    
    if (!weight || !height || weight <= 0 || height <= 0) {
        showError('Please enter valid weight and height values');
        return;
    }
    
    const bmi = weight / (height * height);
    let category = '';
    let color = '';
    
    if (bmi < 18.5) {
        category = 'Underweight';
        color = '#FFB74D';
    } else if (bmi < 25) {
        category = 'Normal weight';
        color = '#81C784';
    } else if (bmi < 30) {
        category = 'Overweight';
        color = '#FFB74D';
    } else {
        category = 'Obese';
        color = '#E57373';
    }
    
    if (resultDiv) {
        resultDiv.innerHTML = `
            <div class="bmi-result" style="color: ${color}">
                <h3>Your BMI: ${bmi.toFixed(1)}</h3>
                <p>Category: ${category}</p>
            </div>
        `;
        resultDiv.style.display = 'block';
    }
}

// Water Tracker
function setupWaterTracker() {
    const waterDisplay = document.getElementById('water-glasses');
    if (waterDisplay) {
        waterDisplay.textContent = waterGlasses;
    }
}

function updateWater(change) {
    waterGlasses = Math.max(0, waterGlasses + change);
    const waterDisplay = document.getElementById('water-glasses');
    if (waterDisplay) {
        waterDisplay.textContent = waterGlasses;
        saveUserPreferences();
    }
}

// Scroll Effects
function setupScrollEffects() {
    const elements = document.querySelectorAll('.fade-in, .slide-up');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(element => observer.observe(element));
}

// Form Validation
function setupFormValidation() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            if (!validateForm(this)) {
                event.preventDefault();
            }
        });
    });
}

function validateForm(form) {
    let isValid = true;
    const inputs = form.querySelectorAll('input, select, textarea');
    
    inputs.forEach(input => {
        if (input.hasAttribute('required') && !input.value.trim()) {
            showError(`Please fill out ${input.name || 'all required fields'}`);
            isValid = false;
        }
        
        if (input.type === 'email' && input.value) {
            if (!validateEmail(input.value)) {
                showError('Please enter a valid email address');
                isValid = false;
            }
        }
    });
    
    return isValid;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
}

// Error Handling
function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message fade-in';
    errorDiv.textContent = message;
    
    document.body.appendChild(errorDiv);
    
    setTimeout(() => {
        errorDiv.remove();
    }, 3000);
}

// User Preferences
function saveUserPreferences() {
    const preferences = {
        waterGlasses,
        theme: currentTheme
    };
    
    localStorage.setItem('userPreferences', JSON.stringify(preferences));
}

function loadUserPreferences() {
    try {
        const preferences = JSON.parse(localStorage.getItem('userPreferences'));
        if (preferences) {
            waterGlasses = preferences.waterGlasses || 0;
            currentTheme = preferences.theme || 'light';
            applyTheme(currentTheme);
            setupWaterTracker();
        }
    } catch (error) {
        console.error('Error loading preferences:', error);
    }
}

// Theme Management
function applyTheme(theme) {
    document.body.setAttribute('data-theme', theme);
    currentTheme = theme;
    saveUserPreferences();
}

function toggleTheme() {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(newTheme);
}

// Utility Functions
function debounce(func, wait = 100) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

function formatDate(date) {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Export functions for use in other scripts
window.FitnessTracker = {
    calculateBMI,
    updateWater,
    toggleTheme,
    formatDate
};