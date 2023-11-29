function submitComplaint() {
    const mealType = document.getElementById('meal-type').value;
    const complaintLocation = document.getElementById('complaint-location').value;
    const complaintText = document.getElementById('complaint-text').value;

    console.log(`Refeição: ${mealType}`);
    console.log(`Local da reclamação: ${complaintLocation}`);
    console.log(`Descrição: ${complaintText}`);

    

    // Limpar o formulário após o envio
    document.getElementById('complaint-form').reset();

    // Alerta informando que o formulário foi enviado
  alert('Reclamação enviado com sucesso!');
}