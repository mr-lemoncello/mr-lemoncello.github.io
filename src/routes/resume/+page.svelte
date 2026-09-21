<script lang="ts">
    import resume from "$lib/assets/resume.webp";

    import Particles from "$lib/components/Particles.svelte";
    import DayNight from "$lib/components/DayNight.svelte";
    import Clouds from "$lib/components/Clouds.svelte";
    import Navbar from "$lib/components/Navbar.svelte";
    import Links from "$lib/components/Links.svelte";
</script>

<DayNight />

<Particles />

<Clouds />

<Navbar active="resume"/>

<section class="m-2" id="resume">
    <h2 class="heading">Resume</h2>
    <div class="w-250 h-auto">
        <img src={resume} alt="" />
    </div>
    <br /> <br /> <br /> <br />
</section>

<footer class="bg-[rgba(13,16,18,0.75)] border-t border-white/10">
    <div class="max-w-6xl mx-auto py-8 flex justify-center">
        <div class="flex flex-wrap justify-center gap-4">
            <Links fontSize="sm" diameter="12"/>
        </div>
    </div>
</footer>