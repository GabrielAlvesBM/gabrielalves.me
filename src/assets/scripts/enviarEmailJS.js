function sendMail() {
    let parms = {
        name    : document.getElementById('name').value,
        email   : document.getElementById('email').value,
        message : document.getElementById('message').value,
    };

    emailjs.send("service_76ydzkj", "template_cy66ytr", parms)
    .then(
        (response) => {
            console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
            console.log('FAILED...', error);
        },
    );
}

const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    sendMail();
});