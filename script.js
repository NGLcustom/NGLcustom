const questions = [
    "Care este cea mai mare frică a ta?",
    "Care este cartea ta preferată?",
    "Care este cel mai bun lucru pe care l-ai învățat anul acesta?",
    "Dacă ai putea avea o superputere, care ar fi aceasta?",
    "Ce îți dorești cel mai mult în viață?",
    "Care este cel mai amuzant lucru care ți s-a întâmplat?",
    "Ce te face fericit?",
    "hz ce sa scriu"
];

document.getElementById('email-form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_ucjqplk', 'template_bhaurgt', this)
        .then(function() {
            alert('Mesajul anonim a fost trimis!');
            document.getElementById('messageInput').value = '';
        }, function(error) {
            alert('Nu sa trimis..');
            console.error('Failed to send email. Error:', error); 
        });
});


document.getElementById("themeToggle").addEventListener("click", function() {
    document.body.classList.toggle("instagram-theme");
    this.classList.toggle("active");
});


document.getElementById("randomQuestionButton").addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    const messageInput = document.getElementById("messageInput");
    messageInput.value = questions[randomIndex]; 
});
