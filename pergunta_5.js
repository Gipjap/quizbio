function selectOption(value) {
    document.querySelector(`input[value="${value}"]`).checked = true;
}

function nextQuestion() {
    
    const options = document.getElementsByName('question5');
    let selectedValue;
    for (const option of options) {
        if (option.checked) {
            selectedValue = option.value;
            break;
        }
    }

    localStorage.setItem('question5', selectedValue);

   
    window.location.href = 'pergunta_6.html';
}
