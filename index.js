document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page reload
    document.getElementById('successMessage').classList.remove('hidden');
    this.reset(); // Reset form fields
  });
  