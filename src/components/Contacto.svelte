<script>
  export const sendMail = () => {
    const email = document.getElementById("email").value;
    const nombre = document.getElementById("nombre").value;
    const mensaje = document.getElementById("mensaje").value;
    const cuerpoemail = `${nombre} con correo ${email} envió un mensaje desde tu página web, ${mensaje}`;
    console.log(email, nombre, mensaje);
    // https://sendgrid.com/docs/API_Reference/Web_API/mail.html
    // api_user = your_sendgrid_username & api_key=your_sendgrid_password & to=destination@example.com& toname=Destination & subject=Example_Subject & text=testingtextbody & from=info@domain.com
    // const data = { api_user: "your_sendgrid_username", api_key: "your_sendgrid_password", to: "mi@email.com", toname: "myname", subject: "mensaje desde tu portafolio", text=cuerpoemail, from=email}
    axios
      .post("https://api.sendgrid.com/api/mail.send.json", data)
      .then(response => {
        const emailSended = response.data;
        console.log(`POST: response data`, emailSended);
      })
      .catch(error => console.error(error));
  };
</script>

<section class="contacto">
  <div class="container ">
    <div class="row d-flex align-items-center height100vh">
      <div class="col">
        <h3>¡Hablemos de código! para eso estoy aquí</h3>
        <img
          src="img/hablemos.jpg"
          alt="hablemos de código"
          class="img-fluid" />
        <a href="https://www.freepik.es/fotos-vectores-gratis/negocios">
          Vector de Negocios creado por pikisuperstar - www.freepik.es
        </a>
      </div>
      <div class="col">
        <form on:submit|preventDefault={sendMail} method="post">
          <div class="form-group">
            <label for="exampleInputEmail1">Correo electrónico</label>
            <input
              type="email"
              class="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Ingresa tu correo" />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Nombre completo</label>
            <input
              type="text"
              class="form-control"
              id="nombre"
              aria-describedby="Nombre"
              placeholder="Ingresa tu nombre completo" />
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Mensaje</label>
            <textarea class="form-control" id="mensaje" rows="3" />
          </div>
          <button type="submit" class="btn btn-primary">
            Envíame un correo electrónico
          </button>
        </form>
        <div
          class="modal fade bd-example-modal-lg"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          id="correoEnviado"
          aria-hidden="true">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">Correo enviado correctamente</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
