// script.js
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
  
      // You can add form submission logic here, such as sending the data to a server or displaying a success message
      alert('Your message has been sent!');
      form.reset();
    });
  });
  