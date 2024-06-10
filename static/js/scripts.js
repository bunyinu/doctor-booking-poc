document.addEventListener('DOMContentLoaded', function() {
    // Form validation and AJAX submission for booking appointment
    const bookingForm = document.querySelector('#bookingForm');
    const uploadForm = document.querySelector('#uploadForm');
    const paymentForm = document.querySelector('#paymentForm');

    if (bookingForm) {
        bookingForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(bookingForm);
            fetch('/book-appointment', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    showMessage('Appointment booked successfully!', 'success');
                    bookingForm.reset();
                } else {
                    showMessage(data.message, 'error');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                showMessage('An error occurred. Please try again.', 'error');
            });
        });
    }

    // Form validation and AJAX submission for uploading documents
    if (uploadForm) {
        uploadForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(uploadForm);
            fetch('/upload-document', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    showMessage('Document uploaded successfully!', 'success');
                    uploadForm.reset();
                } else {
                    showMessage(data.message, 'error');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                showMessage('An error occurred. Please try again.', 'error');
            });
        });
    }

    // Form validation and AJAX submission for processing payments
    if (paymentForm) {
        paymentForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(paymentForm);
            fetch('/process-payment', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    showMessage('Payment processed successfully!', 'success');
                    paymentForm.reset();
                } else {
                    showMessage(data.message, 'error');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                showMessage('An error occurred. Please try again.', 'error');
            });
        });
    }

    // Function to display success or error messages
    function showMessage(message, type) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}`;
        messageDiv.textContent = message;
        document.body.prepend(messageDiv);
        setTimeout(() => {
            messageDiv.remove();
        }, 5000);
    }
});
