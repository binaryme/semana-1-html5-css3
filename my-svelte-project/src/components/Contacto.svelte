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
        <form onSubmit="event.preventDefault(); sendMail();" method="post">
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
      </div>
    </div>
  </div>
</section>
