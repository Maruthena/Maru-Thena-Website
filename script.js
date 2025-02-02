// This function will be called when the form is submitted
document.getElementById('reservationForm').addEventListener('submit', submitReservation);

function submitReservation(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const formData = {
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        date: document.getElementById('date').value,
        time: document.getElementById('time').value,
        guests: document.getElementById('guests').value,
        specialRequest: document.getElementById('specialRequest').value
    };

    // Send the data to Google Apps Script using a POST request
    fetch('https://script.google.com/macros/s/AKfycbxqFXSW4s1_QzEwtceXaxc0dgoVrBSYz9p0BqM6r10lf8SqQs3mUCGn3RaTBPyGSvqe/exec', {  // Replace with your script's URL
        method: 'POST',
        body: new URLSearchParams(formData),  // Sends the data as x-www-form-urlencoded
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    .then(response => response.text())
    .then(result => {
        console.log(result); // Log the response from the Apps Script
        alert('Reservation submitted successfully!');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while submitting the reservation.');
    });
}
