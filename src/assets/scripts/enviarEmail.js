const form = document.querySelector("form");
const submitBtn = document.querySelector(".btn");

function onSubmission(event) {
    event.disabled = true;
    event.innerText = "Enviando..."
    event.classList.add("btnEnviando");
};

function displaySuccess(event) {
    event.innerHTML = "<h1 class='title enviado'>Mensagem Enviada!</h1> <p>Fico feliz com o seu contato e retornarei em breve.</p>";
};

function displayError(event) {
    event.innerHTML = "<h1 class='title enviado'>Mensagem NÃO Enviada!</h1> <p>Tente novamente em breve.</p>";
};

function sendMail() {
    let parms = {
        name    : document.getElementById('name').value,
        email   : document.getElementById('email').value,
        message : document.getElementById('message').value,
    };

    emailjs.send("service_76ydzkj", "template_cy66ytr", parms)
    .then(
        (response) => {
            displaySuccess(form);
            console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
            displayError(form)
            console.log('FAILED...', error);
        },
    );
};

form.addEventListener("submit", function(event) {
    event.preventDefault();
    onSubmission(submitBtn);
    sendMail();
});