// Contact Form JavaScript
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    
    // Show success message
    document.getElementById('successMessage').classList.remove('hidden');
    
    // Reset form
    this.reset();
    
    // Hide success message after 5 seconds
    setTimeout(() => {
        document.getElementById('successMessage').classList.add('hidden');
    }, 5000);
});
