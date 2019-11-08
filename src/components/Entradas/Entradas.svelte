<script>
  import Entrada from "./Entrada.svelte";
</script>

<style>
  h2 {
    font-weight: 600;
    font-family: medium-content-sans-serif-font, "Lucida Grande",
      "Lucida Sans Unicode", "Lucida Sans", Geneva, Arial, sans-serif;
    font-size: 24px;
    line-height: 28px;
  }
  h3 {
    letter-spacing: 0;
    font-size: 16px;
    line-height: 20px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.54);
  }
</style>

<section class="entrada">
  <div class="container">
    <div class="row mt-60">
      <!-- Sección de los articulos, tamaño de 8 columnas -->
      <section class="col-lg-9 articles">
        <div class="row">
          <Entrada />
        </div>
      </section>
      <!-- aside de 4 columnas -->
      <aside class="col-lg-3">Mensaje del aside</aside>
    </div>
  </div>
</section>
