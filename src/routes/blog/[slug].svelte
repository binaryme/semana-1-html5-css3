<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`blog/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let post;
</script>

<style>
  /*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{post.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/
  h1 {
    font-weight: 600;
    font-family: medium-content-sans-serif-font, "Lucida Grande",
      "Lucida Sans Unicode", "Lucida Sans", Geneva, Arial, sans-serif;
    font-size: 40px;
    line-height: 44px;
  }
  h3 {
    letter-spacing: 0;
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.54);
    margin-top: 10px;
  }
  a.author {
    color: #292929;
    font-weight: 100;
    font-size: 14px;
    margin-top: 20px;
    display: inline-block;
    z-index: 100;
  }
  a:hover {
    text-decoration: none;
  }
  p {
    font-size: 14px;
    color: #757575;
  }
</style>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<div class="content">
  <div class="container max-width-680">
    <div class="row">
      <div class="col-lg-12">
        <h1 class="mt-44">{post.title}</h1>
        <h3>y 3 reglas para obtener un buen sueldo</h3>
        <a
          href="https://educatum.co"
          rel="author"
          class="author"
          target="_blank">
          Israel Ortiz Cortés
        </a>
        <p>
          <time datetime="2008-02-14 20:00">8 noviembre 2019</time>
        </p>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/blog-81f38.appspot.com/o/two-women-looking-at-the-code-at-laptop.jpg?alt=media&token=3e516928-b44e-4ba8-b518-8e081df2bb3b"
          alt="imagen-ilustrativa"
          class="img-fluid" />
        <article class="mt-44">
          {@html post.html}
        </article>

      </div>
    </div>
  </div>
</div>
