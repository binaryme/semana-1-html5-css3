<script>
  export let segment;
</script>

<style>
  @media screen and (max-width: 768px) {
    ul.navbar-nav {
      text-align: right;
    }
  }
</style>

<nav
  class="navbar {segment === undefined ? 'bg-transparent mb--56 color-white-a navbar-dark bg-inverse' : ''}
  navbar-expand-md">
  <a class="navbar-brand" href="/">CODEANDLEARN</a>
  <button
    class="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarText"
    aria-controls="navbarText"
    aria-expanded="false"
    aria-label="Toggle navigation">
    <span class="navbar-toggler-icon" />
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="mr-auto" />
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="/">
          <i class="fab fa-linkedin-in" />
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/">
          <i class="fab fa-instagram" />
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/">
          <i class="fab fa-facebook" />
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/">
          <i class="fab fa-youtube" />
        </a>
      </li>
    </ul>
  </div>
</nav>
