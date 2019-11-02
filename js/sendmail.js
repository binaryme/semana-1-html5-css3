const sendMail = () => {
  const email = document.getElementById("email").value
  const nombre = document.getElementById("nombre").value
  const mensaje = document.getElementById("mensaje").value
  const cuerpoemail = `${nombre} con correo ${email} envió un mensaje desde tu página web, ${mensaje}`
  console.log(email, nombre, mensjae)
  // https://sendgrid.com/docs/API_Reference/Web_API/mail.html
  // api_user = your_sendgrid_username & api_key=your_sendgrid_password & to=destination@example.com& toname=Destination & subject=Example_Subject & text=testingtextbody & from=info@domain.com
  // const data = { api_user: "your_sendgrid_username", api_key: "your_sendgrid_password", to: "mi@email.com", toname: "myname", subject: "mensaje desde tu portafolio", text=cuerpoemail, from=email}
  //   axios
  //     .post("https://api.sendgrid.com/api/mail.send.json", data)
  //     .then((response) => {
  //       const emailSended = response.data
  //       console.log(`POST: response data`, emailSended)
  //     })
  //     .catch((error) => console.error(error))
}
