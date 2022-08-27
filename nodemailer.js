//nodemailer
document.getElementById('formTask').addEventListener('submit', enviarmail);
let userEmail = document.getElementById('userEmail').value
let title = document.getElementById('title').value
let description = document.getElementById('description').value

enviarmail = async ()=>{

    const config = {
      host : "smtp.gmail.com",
      port : 587,
      auth : {
        user : "cristianlmcompras@gmail.com",
        pass : "cubzzprwfkuaggnw"
      }
    }
    const mensaje = {
      from: "cristianlmcompras@gmail.com",
      to: userEmail,
      subject : `Has creado la tarea ${title}`,
      text : `${title} = ${description}`
    }
    const transport = nodemailer.createTransport(config);
    const info = transport.sendMail(mensaje)
  
    console.log(info);
  }
