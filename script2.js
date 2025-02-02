// Handle form submission
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get email from the form input
    const email = document.querySelector('input[type="email"]').value;

    // Prepare the data (only email for newsletter signup)
    const formData = {
        email: email
    };

    // Send data to Google Apps Script (same endpoint as the reservation form)
    fetch('https://script.google.com/macros/s/AKfycbwWuPVFjaV3NtSc0-1wqCyJAZifzJzN7AeaxpSwUsWr8wvL4gCcDoD2mUz77A9HQemHhw/exec', { // Replace with your script URL
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.text())
    .then(result => {
        alert('Thank you for subscribing! You will receive a confirmation email shortly.');
        document.querySelector('form').reset(); // Clear the form
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
