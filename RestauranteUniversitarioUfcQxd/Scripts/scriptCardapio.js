function showReservationAlert(day) {
    alert(`Refeição reservada para ${day}`);
    setTimeout(addFeedbackButton, 0);
}
function addFeedbackButton() {
    // Adiciona uma quebra de linha
    const lineBreak = document.createElement('br');
    document.body.appendChild(lineBreak);

    // Cria um botão de feedback
    const feedbackButton = document.createElement('button');
    feedbackButton.innerHTML = 'Realizar Feedback';
    feedbackButton.className = 'feedback-button';
    feedbackButton.onclick = function () {
        window.location.href = 'feedback.html'; // Redireciona para a página de feedback
    };

    // Adiciona o botão ao corpo do documento
    document.body.appendChild(feedbackButton);
}