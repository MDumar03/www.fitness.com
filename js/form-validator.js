// Form Validation
function validateForm(event) {
    event.preventDefault();
  
    let isValid = true;
  
    // Validate Name
    const nameInput = document.getElementById('name');
    const nameError = document.getElementById('name-error');
    if (nameInput.value.trim() === '') {
      nameError.textContent = 'Please enter your name.';
      isValid = false;
    } else {
      nameError.textContent = '';
    }
  
    // Validate Email
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(emailInput.value)) {
      emailError.textContent = 'Please enter a valid email address.';
      isValid = false;
    } else {
      emailError.textContent = '';
    }
  
    // Validate Subject
    const subjectInput = document.getElementById('subject');
    const subjectError = document.getElementById('subject-error');
    if (subjectInput.value === '') {
      subjectError.textContent = 'Please select a subject.';
      isValid = false;
    } else {
      subjectError.textContent = '';
    }
  
    // Validate Message
    const messageInput = document.getElementById('message');
    const messageError = document.getElementById('message-error');
    if (messageInput.value.trim() === '') {
      messageError.textContent = 'Please enter a message.';
      isValid = false;
    } else {
      messageError.textContent = '';
    }
  
    if (isValid) {
      // Submit the form
      document.getElementById('contactForm').submit();
    }
  }
  
  // FAQ Toggle
  function toggleFAQ(button) {
    const answer = button.nextElementSibling;
    const icon = button.querySelector('i');
  
    answer.style.maxHeight = answer.style.maxHeight ? null : answer.scrollHeight + "px";
    button.classList.toggle('active');
    icon.classList.toggle('fa-chevron-up');
    icon.classList.toggle('fa-chevron-down');
  }