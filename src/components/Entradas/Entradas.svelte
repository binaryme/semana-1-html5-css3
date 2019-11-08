<script context="module">
  //   export function preload({ params, query }) {
  //     return this.fetch(`../../routes/blog/blog.json`)
  //       .then(r => r.json())
  //       .then(posts => {
  //         return { posts };
  //       });
  //   }
  //   console.log('../../routes/blog/blog.json');
</script>

<script>
  import Entrada from "./Entrada.svelte";
  import Subscribeform from "./SubscribeForm.svelte";
  export let posts = [
    {
      title: "Cómo conseguir tu primer trabajo como programador front-end",
      slug: "como-conseguir-tu-primer-trabajo-como-programador-front-end",
      html: `
			<p>First, you have to know what <a href='https://svelte.dev'>Svelte</a> is. Svelte is a UI framework with a bold new idea: rather than providing a library that you write code with (like React or Vue, for example), it's a compiler that turns your components into highly optimized vanilla JavaScript. If you haven't already read the <a href='https://svelte.dev/blog/frameworks-without-the-framework'>introductory blog post</a>, you should!</p>

			<p>Sapper is a Next.js-style framework (<a href='blog/how-is-sapper-different-from-next'>more on that here</a>) built around Svelte. It makes it embarrassingly easy to create extremely high performance web apps. Out of the box, you get:</p>

			<ul>
				<li>Code-splitting, dynamic imports and hot module replacement, powered by webpack</li>
				<li>Server-side rendering (SSR) with client-side hydration</li>
				<li>Service worker for offline support, and all the PWA bells and whistles</li>
				<li>The nicest development experience you've ever had, or your money back</li>
			</ul>

			<p>It's implemented as Express middleware. Everything is set up and waiting for you to get started, but you keep complete control over the server, service worker, webpack config and everything else, so it's as flexible as you need it to be.</p>
		`
    },

    {
      title: "How to use Sapper",
      slug: "how-to-use-sapper",
      html: `
			<h2>Step one</h2>
			<p>Create a new project, using <a href='https://github.com/Rich-Harris/degit'>degit</a>:</p>

			<pre><code>npx degit "sveltejs/sapper-template#rollup" my-app
			cd my-app
			npm install # or yarn!
			npm run dev
			</code></pre>

			<h2>Step two</h2>
			<p>Go to <a href='http://localhost:3000'>localhost:3000</a>. Open <code>my-app</code> in your editor. Edit the files in the <code>src/routes</code> directory or add new ones.</p>

			<h2>Step three</h2>
			<p>...</p>

			<h2>Step four</h2>
			<p>Resist overdone joke formats.</p>
		`
    },
    {
      title: "Why the name?",
      slug: "why-the-name",
      html: `
			<p>In war, the soldiers who build bridges, repair roads, clear minefields and conduct demolitions — all under combat conditions — are known as <em>sappers</em>.</p>

			<p>For web developers, the stakes are generally lower than those for combat engineers. But we face our own hostile environment: underpowered devices, poor network connections, and the complexity inherent in front-end engineering. Sapper, which is short for <strong>S</strong>velte <strong>app</strong> mak<strong>er</strong>, is your courageous and dutiful ally.</p>
		`
    }
  ];
</script>

<section class="entrada">
  <div class="container">
    <hr class="mt-60" />
    <div class="row">
      <!-- Sección de los articulos, tamaño de 8 columnas -->
      <section class="col-lg-9 articles">
        {#each posts as post}
          <Entrada slug={post.slug} title={post.title} html={post.html} />
        {/each}
      </section>
      <!-- aside de 4 columnas -->
      <aside class="col-lg-3">
        <Subscribeform />
      </aside>
    </div>
    <hr class="mt-60" />
  </div>
</section>
