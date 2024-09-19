class FormSubmit {
    constructor(settings) {
        this.settings = settings;
        this.form = document.querySelector(settings.form);
        this.formButton = document.querySelector(settings.button);
        if (this.form) {
            this.url = this.form.getAttribute("action");
        }
        this.sendForm = this.sendForm.bind(this);
    };

    displaySuccess() {
        this.form.innerHTML = this.settings.success;
    }

    displayError() {
        this.form.innerHTML = this.settings.error;
    }

    getFormObject() {
        const formObject = {};
        const fields = this.form.querySelectorAll("[name]");
        fields.forEach((field) => {
            formObject[field.getAttribute("name")] = field.value;
        });
        return formObject;
    }

    onSubmission(event) {
        event.preventDefault();
        event.target.disabled = true;
        event.target.innerText = "Enviando..."
        event.target.classList.add("btnEnviando");
    }

    async sendForm(event) {
        if (!this.form.checkValidity()) {
            return;
        }

        try {
            this.onSubmission(event);
            await fetch(this.url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(this.getFormObject()),
            });
            this.displaySuccess();
        } catch(error) {
            this.displayError();
            this.reEnableButton(event.target);
            throw new Error(error);
        }
    }

    init() {
        if (this.form) this.formButton.addEventListener("click", this.sendForm);
        return this;
    }
};

const formSubmit = new FormSubmit({
    form: "[data-form]",
    button: "[data-button]",
    success: "<h1 class='title enviado'>Mensagem Enviada!</h1> <p>Fico feliz com o seu contato e retornarei em breve.</p>",
    error: "<h1 class='title enviado'>Mensagem NÃO Enviada!</h1> <p>Tente novamente em breve.</p>",
});
formSubmit.init();