document.addEventListener('DOMContentLoaded', function () {
    const feedbackForm = document.getElementById('feedbackForm');

    feedbackForm.addEventListener('submit', function (event) {
        event.preventDefault();
        handleFormSubmit();
    });

    function handleFormSubmit() {
        alert('Feedback enviado com sucesso!');
        clearForm();
    }

    function clearForm() {
        feedbackForm.reset();
    }
});