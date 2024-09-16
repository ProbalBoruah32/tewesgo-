document.addEventListener('DOMContentLoaded', function() {
    // Make navigation link active on click
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', function() {
        document.querySelectorAll('.nav-link').forEach(item => item.classList.remove('active'));
        this.classList.add('active');
      });
    });
  
    // Add more interactivity here as needed
  });
  