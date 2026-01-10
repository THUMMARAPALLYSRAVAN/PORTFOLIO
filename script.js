// Simple form submission alert (demo only)
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = this.querySelector('[name="name"]').value.trim();
      const email = this.querySelector('[name="email"]').value.trim();
      const message = this.querySelector('[name="message"]').value.trim();

      if (name && email && message) {
        alert('Thank you for your message! (This is a demo)');
        this.reset();
      } else {
        alert('Please fill in all fields.');
      }
    });
  }
});