<script>
  export let title;
  export let subtitle;
  export let html;
  export let slug;
</script>

<style>
  h2 {
    font-weight: 600;
    font-family: medium-content-sans-serif-font, "Lucida Grande",
      "Lucida Sans Unicode", "Lucida Sans", Geneva, Arial, sans-serif;
    font-size: 20px;
    line-height: 28px;
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
  img {
    object-fit: cover;
    width: 200px;
    height: 153px;
  }
  .go-to-next-page {
    position: absolute;
    width: 100%;
    height: 90%;
    color: transparent !important;
    z-index: 50;
    top: 0;
  }
  .go-to-next-page:hover {
    cursor: pointer;
  }
</style>

<article class="row mt-30">
  <div class="col-lg-8">
    <h2>{title}</h2>
    <h3>{subtitle}</h3>
    <a href="https://educatum.co" rel="author" class="author" target="_blank">
      Israel Ortiz Cortés
    </a>
    <p>
      <time datetime="2008-02-14 20:00">8 noviembre 2019</time>
    </p>
    <a href={`/blog/${slug}`} alt="go to next page" class="go-to-next-page">
      go to next page
    </a>
  </div>
  <div class="col-lg-4 d-flex justify-content-left">
    <img
      src="https://firebasestorage.googleapis.com/v0/b/blog-81f38.appspot.com/o/two-women-looking-at-the-code-at-laptop.jpg?alt=media&token=3e516928-b44e-4ba8-b518-8e081df2bb3b"
      alt="imagen-ilustrativa"
      class="img-fluid" />
  </div>
</article>
