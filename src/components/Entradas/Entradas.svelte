<script>
  import Entrada from "./Entrada.svelte";
  import Subscribeform from "./SubscribeForm.svelte";
</script>

<section class="entrada">
  <div class="container">
    <hr class="mt-60" />
    <div class="row">
      <!-- Sección de los articulos, tamaño de 8 columnas -->
      <section class="col-lg-9 articles">
        <Entrada />
        <Entrada />
        <Entrada />
      </section>
      <!-- aside de 4 columnas -->
      <aside class="col-lg-3">
        <Subscribeform />
      </aside>
    </div>
    <hr class="mt-60" />
  </div>
</section>
