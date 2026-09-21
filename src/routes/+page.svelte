<script lang="ts">
  import image480 from "$lib/assets/file_480.webp";

  import Particles from "$lib/components/Particles.svelte";
  import Typewriter from "$lib/components/Typewriter.svelte";
  import FadeInSection from "$lib/components/FadeInSection.svelte";
  import DayNight from "$lib/components/DayNight.svelte";
  import Clouds from "$lib/components/Clouds.svelte";
  import Links from "$lib/components/Links.svelte";

  import Navbar from "$lib/components/Navbar.svelte";

  let { data } = $props();
</script>

<DayNight />

<Particles />

<Clouds />

<meta
  name="description"
  content="Vikas Banerjee Murthy [Noa Ellis]'s personal website, 
  displaying creative projects and the stuff I get up to."
/>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
  />
</svelte:head>

<Typewriter />

<Navbar active="home" />

<FadeInSection>
  <p class="text-gray-400 font-[VerilySerif] mt-3 text-sm">
    {data.discordUserState}
  </p>
</FadeInSection>

<FadeInSection>
  <div
    class="flex flex-col md:flex-row gap-3 w-full p-1 mx-3 mb-3 flex-background"
  >
    <div class="flex flex-col items-center shrink-0">
      <div
        class="m-2.5 border-5 border-aroace-yellow rounded-full
      w-55 h-55 transition-[width,height] duration-1000 ease-in-out
      overflow-hidden hover:w-90 hover:h-90"
        role="tooltip"
        id="file_480"
        aria-label="Photo of Vikas Banerjee Murthy"
      >
        <img
          class="block w-full h-full object-cover"
          src={image480}
          alt="Portrait of Vikas Banerjee Murthy"
        />
      </div>

      <div class="flex flex-wrap justify-center gap-2 max-w-full">
        <Links fontSize="xs" diameter=10/>
      </div>
    </div>

    <div
      class="flex flex-col justify-around
    min-w-0 flex-1
    text-aroace-dark-blue font-[VerilySerif] text-xs m-2.5 p-2.5
    border-5 border-aroace-orange rounded-lg
    bg-aroace-light-blue"
    >
      <p>
        <strong>
          Vikas Banerjee Murthy [also mr_lemoncello and Noa Ellis] -- they/them
        </strong>
      </p>

      <p>English, 一点普通话, ein bisschen Deutsch. Born Aug 2011.</p>

      <p>
        Award-winning
        <a class="text-hyperlink!" href="/filmmaking">filmmaker</a>,
        <a class="text-hyperlink!" href="/writing">published poet</a>,
        <a class="text-hyperlink!" href="/programming">programmer</a>, and
        <a class="text-hyperlink!" href="/music">composer</a>
        from Portland, OR, with a focus on ordinary people confronting forces larger
        than themselves. I also enjoy biking, speech & debate, and playing
        <em>Celeste</em>.
      </p>
    </div>
  </div>
</FadeInSection>

<br /><br /><br />

<style>
  :global(body)::before {
    content: "";
    position: fixed;
    inset: 0;
    z-index: -2;
    padding: 0px;
    height: 100vh;
    background-color: #1c1c1e;
    object-fit: cover;
    position: center;
  }
  :global(body) {
    margin: 40px;
  }
</style>
