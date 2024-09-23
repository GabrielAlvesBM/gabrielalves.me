const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'gabrielalvesbm.contato@gmail.com',
        pass: 'xlqy bicw ltxu rwyq',
    }
});

transport.sendMail({
    from: 'Email@gmail.com',
    to: 'gabrielalvesbm.contato@gmail.com',
    subject: 'Contato do Portifólio',
    html: '<p><b>Nome:</b> </p> <p><b>Email:</b> </p> <p><b>Mensagem:</b> </p>',
    text: 'Nome: Email: Mensagem: ',
})
.then(() => console.log('Email enviado com sucesso!'))
.catch((err) => console.log('Erro ao enviar Email: ', err));
