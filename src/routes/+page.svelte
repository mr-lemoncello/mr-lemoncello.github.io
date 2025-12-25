<svelte:options customElement="my-element" />

<script lang="ts">
  import file_480 from "$lib/assets/file_480.png";
  import poetry1 from "$lib/assets/poetry1.png";
  import poetry1back from "$lib/assets/poetry1back.png";
  import poetry2 from "$lib/assets/poetry2.png";
  import poetry2back from "$lib/assets/poetry2back.png";
  import poetry3 from "$lib/assets/poetry3.png";
  import poetry3back from "$lib/assets/poetry3back.png";
  import poetry4 from "$lib/assets/poetry4.png";
  import poetry4back from "$lib/assets/poetry4back.png";
  import poetry5 from "$lib/assets/poetry5.png";
  import poetry5back from "$lib/assets/poetry5back.png";
  import poetry6 from "$lib/assets/poetry6.png";
  import poetry6back from "$lib/assets/poetry6back.png";
  import resume from "$lib/assets/resume.png";
  import air_pollution from "$lib/assets/air_pollution.png";
  import water_pollution from "$lib/assets/water_pollution.png";
  import blindsided_surveillance from "$lib/assets/blindedsided_surveillance.mp3";
  import crows_at_duskfall from "$lib/assets/Crows at Duskfall.mp3";
  import film_soundtrack from "$lib/assets/Flim Soundtrack.mp3";
  import for_my_own_sake from "$lib/assets/For My Own Sake.mp3";
  import garageband_blues from "$lib/assets/GarageBand Blues.mp3";
  import garageille_o_neal from "$lib/assets/Garageille O_Neal.mp3";
  import garlic_bread_on_venus from "$lib/assets/Garlic Bread on Venus.mp3";
  import i_wash_the_sheets from "$lib/assets/I Wash The Sheets.mp3";
  import lord_of_the_flies_chapter_one from "$lib/assets/lotf chapter 1.mp3";
  import monotony from "$lib/assets/Monotony.mp3";
  import no_vows_no_veins from "$lib/assets/No Vows, No Veins.mp3";
  import pain_shame_memories from "$lib/assets/Pain, Shame, Memories.mp3";
  import roll_credits from "$lib/assets/credits theme.mp3";
  import serenade_of_confession from "$lib/assets/Serenade of Confession.mp3";
  import spirals_and_stars from "$lib/assets/Spirals and Stars.mp3";
  import the_threads from "$lib/assets/The Threads.mp3";
  import tungsten_rain from "$lib/assets/Tungsten Rain.mp3";
  import site_l from "$lib/assets/site_l.png";
  import site_l2 from "$lib/assets/site_l2.png";
  import turbidity from "$lib/assets/turbidity.png";
  import dissolved_oxygen from "$lib/assets/dissolved-oxygen.png";
  import pH from "$lib/assets/pH.png";
  import macro1 from "$lib/assets/macroinvertebrate 1.png";
  import macro2 from "$lib/assets/macroinvertebrate 2.png";
  import macro3 from "$lib/assets/macroinvertebrate 3.png";
  import macro4 from "$lib/assets/macroinvertebrate 4.png";
  import macro5 from "$lib/assets/macroinvertebrate 5.png";
  import macro6 from "$lib/assets/macroinvertebrate 6.png";
  import macro7 from "$lib/assets/macroinvertebrate 7.png";
  import macro8 from "$lib/assets/macroinvertebrate 8.png";
  import temp_graph from "$lib/assets/temp_graph.png";
  import turbid_graph from "$lib/assets/turbid_graph.png";
  import do_graph from "$lib/assets/do_graph.png";
  import ph_graph from "$lib/assets/ph_graph.png";
  import biotic_graph from "$lib/assets/biotic_graph.png";
  import ept_graph from "$lib/assets/ept_graph.png";
  import id_1 from "$lib/assets/id_1.png";
  import id_2 from "$lib/assets/id_2.png";

  import { onMount } from "svelte";

  class Particle {
    x!: number;
    y!: number;
    s!: number;
    spd!: number;
    off!: number;

    constructor() {
      const canvas = document.getElementById(
        "particleCanvas",
      ) as HTMLCanvasElement | null;
      if (canvas === null) return;

      this.x = rnd(canvas.width);
      this.y = rnd(canvas.height);
      this.s = flr(rnd(5)); // Size (0 or 1)
      this.spd = 0.25 + rnd(5); // Speed (between 0.25 and 5.25)
      this.off = rnd(1); // Offset (for sine movement)
    }

    update(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void {
      if (ctx === null || canvas === null) return;

      // Update positions
      this.x += this.spd;
      this.y += sin(this.off);
      this.off += min(0.05, this.spd / 32);

      // Draw the particle
      ctx.fillStyle = "white";
      ctx.fillRect(this.x, this.y, this.s, this.s);

      // Reset if the particle goes off-screen
      if (this.x > canvas.width + 4) {
        this.x = -4;
        this.y = rnd(canvas.height);
      }
    }
  }

  function rnd(max: number): number {
    return Math.random() * max;
  }

  function flr(val: number): number {
    return Math.floor(val);
  }

  function min(a: number, b: number): number {
    return a < b ? a : b;
  }

  function sin(value: number): number {
    return Math.sin(value);
  }

  let discordUserState: string | null = null;
  let song = "none";

  onMount(async () => {
    // Fetch user data from API
    try {
      const response = await fetch(
        `https://api.lanyard.rest/v1/users/1250607214180438016`,
    );
      const data = await response.json();
      discordUserState = data.data.activities[0]?.state;
    } catch (error) {
      console.error("Error fetching user data:", error);
    }

    // Canvas setup
    const canvas = document.getElementById(
      "particleCanvas",
    ) as HTMLCanvasElement | null;

    if (canvas !== null) {
      const ctx = canvas.getContext("2d");
  
      function resizeCanvas() {
        if (canvas !== null) {
          canvas.width = window.innerWidth;
          canvas.height = document.body.scrollHeight;
        }
      }

      resizeCanvas()
    
      let previousScrollHeight = document.body.scrollHeight;

      setInterval(() => {
          if (document.body.scrollHeight !== previousScrollHeight) {
            console.log("scroll height change")  
            resizeCanvas()
            previousScrollHeight = document.body.scrollHeight;
          }
      }, 200);
  
      const particles: Particle[] = [];

      particles.length = 0;
      for (let i = 0; i < Math.floor((canvas.width * canvas.height) / 14400); i++) {
        particles.push(new Particle());
      }

      if (ctx !== null) {
        function animate(): void {
          if (canvas === null || ctx === null) return;
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          for (let p of particles) {
            p.update(ctx, canvas);
          }
          requestAnimationFrame(animate);
        }

        animate();
      }
    }
    const playlist = [
      blindsided_surveillance,
      crows_at_duskfall,
      film_soundtrack,
      for_my_own_sake,
      garageband_blues,
      garageille_o_neal,
      garlic_bread_on_venus,
      i_wash_the_sheets,
      lord_of_the_flies_chapter_one,
      monotony,
      no_vows_no_veins,
      pain_shame_memories,
      roll_credits,
      serenade_of_confession,
      spirals_and_stars,
      the_threads,
      tungsten_rain,
    ];
    let currentTrackIndex = 0;
    const audioPlayer = document.getElementById(
      "myAudioPlayer",
    ) as HTMLAudioElement | null;

    function playCurrentTrack() {
      if (audioPlayer === null) return;
      audioPlayer.src = playlist[currentTrackIndex];
      audioPlayer.addEventListener("play", function () {
        if (currentTrackIndex == 0) {
          song = "Blindsided Surveillance - Vikas Banerjee Murthy";
        }
      });
      const playPromise = audioPlayer.play();
      if (playPromise !== undefined) {
        playPromise;
      }
    }

    function playNext() {
      currentTrackIndex++;
      if (currentTrackIndex >= playlist.length) {
        currentTrackIndex = 0;
      }
      if (currentTrackIndex == 0)
        song = "Blindsided Surveillance - Vikas Banerjee Murthy"
      if (currentTrackIndex == 1)
        song = "Crows at Duskfall - Vikas Banerjee Murthy";
      if (currentTrackIndex == 2)
        song = "Film Soundtrack - Vikas Banerjee Murthy";
      if (currentTrackIndex == 3)
        song = "For My Own Sake - Vikas Banerjee Murthy";
      if (currentTrackIndex == 4)
        song = "GarageBand Blues - Vikas Banerjee Murthy";
      if (currentTrackIndex == 5)
        song = "Garageille O'Neal - Vikas Banerjee Murthy";
      if (currentTrackIndex == 6)
        song = "Garlic Bread on Venus - Vikas Banerjee Murthy";
      if (currentTrackIndex == 7)
        song = "I Wash the Sheets - Vikas Banerjee Murthy";
      if (currentTrackIndex == 8)
        song = "Lord of the Flies: Chapter 1 - Vikas Banerjee Murthy";
      if (currentTrackIndex == 9)
        song = "Monotony - Vikas Banerjee Murthy";
      if (currentTrackIndex == 10)
        song = "No Vows, No Veins - Vikas Banerjee Murthy";
      if (currentTrackIndex == 11)
        song = "Pain, Shame, Memories - Vikas Banerjee Murthy";
      if (currentTrackIndex == 12)
        song = "Roll Credits - Vikas Banerjee Murthy";
      if (currentTrackIndex == 13)
        song = "Serenade of Confession - Vikas Banerjee Murthy";
      if (currentTrackIndex == 14)
        song = "Spirals and Stars - Vikas Banerjee Murthy";
      if (currentTrackIndex == 15)
        song = "The Threads - Vikas Banerjee Murthy";
      if (currentTrackIndex == 16)
        song = "Tungsten Rain - Vikas Banerjee Murthy";

      playCurrentTrack();
    }

    if (audioPlayer !== null) {
      audioPlayer.addEventListener("ended", playNext);
    }

    playCurrentTrack();
  })

  let a1 = 0;
  let a2 = 0;
  let a3 = 0;
  let b1 = 0;
  let b2 = 0;
  let b3 = 0;
  let i = 0;
  let j = 0;
  let name = "";
  let email = "";
  let on1540 = false;
  let isBuyer = false;

  function change_color(name: string, color: string) {
    const fn_name = document.getElementById(name);
    if (fn_name === null) return;
    if (name == "my-button-a1" && a1 == 1) return; //unless element is my-button-a1 and toggled
    if (name == "my-button-a2" && a2 == 1) return;
    if (name == "my-button-a3" && a3 == 1) return;
    if (name == "my-button-b1" && b1 == 1) return;
    if (name == "my-button-b2" && b2 == 1) return;
    if (name == "my-button-b3" && b3 == 1) return;
    fn_name.style.backgroundColor = color; //changes HTMLElement background color to desired
  }

  function toggle(id: string, counterid: string, front: boolean) {
    const fn_id = document.getElementById(id);
    const fn_counterid = document.getElementById(counterid);
    if (fn_id === null || fn_counterid === null) return;
    const dfn_id = document.getElementById(fn_id.id + "d");
    const dfn_counterid = document.getElementById(fn_counterid.id + "d");
    if (dfn_id === null || dfn_counterid === null) return;
    fn_id.style.filter = "brightness(120%)";
    dfn_id.style.display = "block";
    dfn_counterid.style.display = "none";
    if (front === true) {
      i = 1;
      if (j === 1) {
        fn_counterid.style.filter = "brightness(100%)";
        j = 0;
      }
    } else {
      j = 1;
      if (i === 1) {
        fn_counterid.style.filter = "brightness(100%)";
        i = 0;
      }
    }
  }

  function mybutton_a1() {
    //toggles between highlighted, showing the resume and unhilighted, hiding the resume
    const mybutton_a1 = document.getElementById("my-button-a1");
    const mybutton_a2 = document.getElementById("my-button-a2");
    const mybutton_a3 = document.getElementById("my-button-a3");
    const resume = document.getElementById("resume");
    const poetry = document.getElementById("poetry");
    const published = document.getElementById("published");
    a1 = 1 - a1;
    if (
      mybutton_a1 === null ||
      resume === null ||
      poetry === null ||
      mybutton_a2 === null ||
      mybutton_a3 === null ||
      published === null
    )
      return;
    mybutton_a1.style.backgroundColor = "#9fcce7";
    if (a1 === 1) {
      resume.style.display = "block";
      if (a2 === 1) {
        poetry.style.display = "none";
        mybutton_a2.style.backgroundColor = "#5faad7";
        a2 = 1 - a2;
      }
      if (a3 === 1) {
        published.style.display = "none";
        mybutton_a3.style.backgroundColor = "#5faad7";
        a3 = 1 - a3;
      }
    }
    if (a1 === 0) {
      resume.style.display = "none";
    }
  }

  function mybutton_a2() {
    //same as above, but toggles poetry books instead of resume
    const mybutton_a2 = document.getElementById("my-button-a2");
    const mybutton_a1 = document.getElementById("my-button-a1");
    const mybutton_a3 = document.getElementById("my-button-a3");
    const poetry = document.getElementById("poetry");
    const resume = document.getElementById("resume");
    const published = document.getElementById("published");
    a2 = 1 - a2;
    if (
      mybutton_a2 === null ||
      poetry === null ||
      resume === null ||
      mybutton_a1 === null ||
      mybutton_a3 === null ||
      published === null
    )
      return;
    mybutton_a2.style.backgroundColor = "#9fcce7";
    if (a2 === 1) {
      poetry.style.display = "block";
      if (a1 === 1) {
        resume.style.display = "none";
        mybutton_a1.style.backgroundColor = "#5faad7";
        a1 = 1 - a1;
      }
      if (a3 === 1) {
        published.style.display = "none";
        mybutton_a3.style.backgroundColor = "#5faad7";
        a3 = 1 - a3;
      }
    }
    if (a2 === 0) {
      poetry.style.display = "none";
    }
  }

  function mybutton_a3() {
    //same as above, but toggles published work instead of resume
    const mybutton_a3 = document.getElementById("my-button-a3");
    const mybutton_a1 = document.getElementById("my-button-a1");
    const mybutton_a2 = document.getElementById("my-button-a2");
    const poetry = document.getElementById("poetry");
    const resume = document.getElementById("resume");
    const published = document.getElementById("published");
    a3 = 1 - a3;
    if (
      mybutton_a3 === null ||
      poetry === null ||
      resume === null ||
      mybutton_a1 === null ||
      mybutton_a2 === null ||
      published === null
    )
      return;
    mybutton_a3.style.backgroundColor = "#9fcce7";
    if (a3 === 1) {
      published.style.display = "block";
      if (a1 === 1) {
        resume.style.display = "none";
        mybutton_a1.style.backgroundColor = "#5faad7";
        a1 = 1 - a1;
      }
      if (a2 === 1) {
        poetry.style.display = "none";
        mybutton_a2.style.backgroundColor = "#5faad7";
        a2 = 1 - a2;
      }
    }
    if (a3 === 0) {
      published.style.display = "none";
    }
  }

  function mybutton_b1() {
    //same as above, but toggles editing instead of resume
    const mybutton_b1 = document.getElementById("my-button-b1");
    const mybutton_b2 = document.getElementById("my-button-b2");
    const mybutton_b3 = document.getElementById("my-button-b3");
    const editing = document.getElementById("editing");
    const essays = document.getElementById("essays");
    b1 = 1 - b1;
    if (
      mybutton_b1 === null ||
      editing === null ||
      mybutton_b2 === null ||
      mybutton_b3 === null ||
      essays === null
    )
      return;
    mybutton_b1.style.backgroundColor = "#9fcce7";
    if (b1 === 1) {
      editing.style.display = "block";
      if (b3 === 1) {
        mybutton_b3.style.backgroundColor = "#5faad7";
        b3 = 1 - b3;
      }
      if (b2 === 1) {
        essays.style.display = "none";
        mybutton_b2.style.backgroundColor = "#5faad7";
        b2 = 1 - b2;
      }
    }
    if (b1 === 0) {
      editing.style.display = "none";
    }
  }

  function mybutton_b2() {
    //same as above, but toggles essays instead of resume
    const mybutton_b2 = document.getElementById("my-button-b2");
    const mybutton_b1 = document.getElementById("my-button-b1");
    const mybutton_b3 = document.getElementById("my-button-b3");
    const editing = document.getElementById("editing");
    const essays = document.getElementById("essays");
    b2 = 1 - b2;
    if (
      mybutton_b2 === null ||
      editing === null ||
      mybutton_b3 === null ||
      mybutton_b1 === null ||
      essays === null
    )
      return;
    mybutton_b2.style.backgroundColor = "#9fcce7";
    if (b2 === 1) {
      essays.style.display = "block";
      if (b3 === 1) {
        mybutton_b3.style.backgroundColor = "#5faad7";
        b3 = 1 - b3;
      }
      if (b1 === 1) {
        editing.style.display = "none";
        mybutton_b1.style.backgroundColor = "#5faad7";
        b1 = 1 - b1;
      }
    }
    if (b2 === 0) {
      essays.style.display = "none";
    }
  }

  function mybutton_b3() {
    //same as above, but toggles essays instead of resume
    const mybutton_b3 = document.getElementById("my-button-b3");
    const mybutton_b1 = document.getElementById("my-button-b1");
    const mybutton_b2 = document.getElementById("my-button-b2");
    const editing = document.getElementById("editing");
    const essays = document.getElementById("essays");
    b3 = 1 - b3;
    if (
      mybutton_b3 === null ||
      editing === null ||
      mybutton_b2 === null ||
      mybutton_b1 === null ||
      essays === null
    )
      return;
    mybutton_b3.style.backgroundColor = "#9fcce7";
    if (b3 === 1) {
      if (b2 === 1) {
        essays.style.display = "none";
        mybutton_b2.style.backgroundColor = "#5faad7";
        b2 = 1 - b2;
      }
      if (b1 === 1) {
        editing.style.display = "none";
        mybutton_b1.style.backgroundColor = "#5faad7";
        b1 = 1 - b1;
      }
    }
    if (b3 === 0) {
    }
  }

  async function output() {
    //logs form information to console and clears form
    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");
    const input3 = document.getElementById("input3");
    if (input1 === null || input2 === null || input3 === null) return;
    console.log(name);
    console.log(email);
    console.log(on1540);
    console.log(isBuyer);
    name = "";
    email = "";
    on1540 = false;
    isBuyer = false;
    try {
      const response = await fetch("api/notify-owner", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        alert("The website owner has been notified of your interaction.");
      } else {
        alert("There was an error, the owner could not be notified.");
      }
    } catch (error) {
      alert("A network error occurred. Please try again later.");
    }
  }
</script>

<canvas id="particleCanvas" class="absolute top-0 left-0 w-100% -z-1"></canvas>

<div class="px-[10vw] pt-[6vh] pb-[2vh] font-mono text-white">
  <p class="text-base md:text-lg leading-relaxed opacity-70 italic">
    The crow’s caws always deepen,
  </p>

  <p class="mt-2 ml-8 text-base md:text-lg leading-relaxed">
    <span class="font-semibold tracking-wide">Time runs on,</span>
    but still I smile at every line,
  </p>

  <p class="mt-2 ml-16 text-base md:text-lg leading-relaxed">
    They mark the joy I didn’t waste,
  </p>

  <p class="mt-2 text-base md:text-lg leading-relaxed opacity-70 italic">
    The friend who kept my soul in time.
  </p>

  <div class="h-[8vh]"></div>

  <p class="text-base md:text-lg leading-relaxed">
    I’ve never asked for angels much,
  </p>

  <p class="mt-2 ml-8 text-base md:text-lg leading-relaxed opacity-70 italic">
    They rarely land, they always fly.
  </p>

  <div class="h-[4vh]"></div>

  <p class="text-base md:text-lg leading-relaxed">
    So goodbye friend, and may you roam free.
  </p>

  <p
    class="mt-2 ml-16 text-base md:text-lg leading-relaxed font-semibold tracking-wide"
  >
    I no longer need your illuminating sight.
  </p>

  <div class="h-[12vh]"></div>

  <p class="text-base md:text-lg leading-relaxed opacity-70 italic">
    You couldn’t teach me to fly,
  </p>

  <p class="mt-2 ml-8 text-xl md:text-2xl font-semibold leading-relaxed">
    So I learned to fall.
  </p>

  <div class="h-[12vh]"></div>

  <p class="text-2xl md:text-3xl font-semibold leading-relaxed">I love you,</p>

  <p
    class="mt-2 mb-1 ml-8 text-base md:text-lg leading-relaxed opacity-70 italic"
  >
    See you in the next life.
  </p>

  <div class="h-[6vh]"></div>

  <p class="text-sm tracking-widest opacity-60">
    — excerpt from <span class="italic">Feathered Angels in the Dark</span> — Noa
    Ellis
  </p>
</div>

<hr class="bg-white h-px mt-8 border-0.5 border-white opacity-70" />

<span class="text-white font-mono font-semibold text-[clamp(1.6rem,40vw,2rem)] mt-12 mb-1.5">
  Vikas Banerjee Murthy
</span><br/>

<p class="text-gray-400 font-mono text-sm">{discordUserState}</p>
<link rel="image" href={file_480} />
<div
  class="inline-flex flex-row gap-1 justify-between content-stretch w-full h-auto
  border-5 border-aroace-dark-blue rounded-lg p-1 m-3
  bg-[hsl(215.09_46.09%_22.55%)]
  bg-[repeating-linear-gradient(transparent,_transparent_50px,_rgba(0,0,0,.12)_50px,_rgba(0,0,0,.12)_53px,_transparent_53px,_transparent_63px,_rgba(0,0,0,.12)_63px,_rgba(0,0,0,.12)_66px,_transparent_66px,_transparent_116px,_rgba(0,0,0,.15)_116px,_rgba(0,0,0,.15)_166px,_rgba(255,255,255,.05)_166px,_rgba(255,255,255,.05)_169px,_rgba(0,0,0,.15)_169px,_rgba(0,0,0,.15)_179px,_rgba(255,255,255,.05)_179px,_rgba(255,255,255,.05)_182px,_rgba(0,0,0,.15)_182px,_rgba(0,0,0,.15)_232px,_transparent_232px),repeating-linear-gradient(270deg,_transparent,_transparent_50px,_rgba(0,0,0,.12)_50px,_rgba(0,0,0,.12)_53px,_transparent_53px,_transparent_63px,_rgba(0,0,0,.12)_63px,_rgba(0,0,0,.12)_66px,_transparent_66px,_transparent_116px,_rgba(0,0,0,.15)_116px,_rgba(0,0,0,.15)_166px,_rgba(255,255,255,.05)_166px,_rgba(255,255,255,.05)_169px,_rgba(0,0,0,.15)_169px,_rgba(0,0,0,.15)_179px,_rgba(255,255,255,.05)_179px,_rgba(255,255,255,.05)_182px,_rgba(0,0,0,.15)_182px,_rgba(0,0,0,.15)_232px,_transparent_232px),repeating-linear-gradient(125deg,_transparent,_transparent_2px,_rgba(0,0,0,.06)_2px,_rgba(0,0,0,.06)_3px,_transparent_3px,_transparent_5px,_rgba(0,0,0,.06)_5px)]
  "
>
  <div
    class="m-2.5 border-5 border-aroace-yellow rounded-full
    w-55 h-55 transition-[width, height] duration-1000 ease-in-out
    shrink-0 overflow-hidden hover:w-90 hover:h-90"
    role="tooltip"
    id="file_480"
  >
    <img class="block object-cover" src={file_480} alt="" />
  </div>
  <div
    class="inline-flex flex-wrap flex-col justify-around
    h-auto w-auto text-aroace-dark-blue font-mono text-xs m-2.5 p-2.5
    border-5 border-aroace-orange rounded-lg
  bg-aroace-light-blue"
  >
    <p>
      <em>Vikas [also mr_lemoncello and Noa Ellis] - they/them</em>
    </p>
    <p>
      English, ein bisschen Deutsch, 一点普通话.<br />
      I like lots of stuff, but I'm too lazy to write it all here. Here's a few for
      your troubles: poetry/writing, filmmaking, music, biking. Born Aug 2011.
    </p>
    <span class="mb-1">some music :3&nbsp;</span><audio
      controls
      id="myAudioPlayer"
      autoplay
      class="pt-0 mt-0 h-auto w-full shadow-[0px_0px_25px_3px_rgba(255,0,128,0.8)]"
    >
      Your browser does not support the audio element.
    </audio>
  </div>
</div>
<div
  class="inline-flex flex-row flex-wrap gap-1 justify-between content-stretch w-auto h-auto
  border-5 border-aroace-dark-blue rounded-lg p-1 m-3
bg-[hsl(215.09_46.09%_22.55%)]
  bg-[repeating-linear-gradient(transparent,_transparent_50px,_rgba(0,0,0,.12)_50px,_rgba(0,0,0,.12)_53px,_transparent_53px,_transparent_63px,_rgba(0,0,0,.12)_63px,_rgba(0,0,0,.12)_66px,_transparent_66px,_transparent_116px,_rgba(0,0,0,.15)_116px,_rgba(0,0,0,.15)_166px,_rgba(255,255,255,.05)_166px,_rgba(255,255,255,.05)_169px,_rgba(0,0,0,.15)_169px,_rgba(0,0,0,.15)_179px,_rgba(255,255,255,.05)_179px,_rgba(255,255,255,.05)_182px,_rgba(0,0,0,.15)_182px,_rgba(0,0,0,.15)_232px,_transparent_232px),repeating-linear-gradient(270deg,_transparent,_transparent_50px,_rgba(0,0,0,.12)_50px,_rgba(0,0,0,.12)_53px,_transparent_53px,_transparent_63px,_rgba(0,0,0,.12)_63px,_rgba(0,0,0,.12)_66px,_transparent_66px,_transparent_116px,_rgba(0,0,0,.15)_116px,_rgba(0,0,0,.15)_166px,_rgba(255,255,255,.05)_166px,_rgba(255,255,255,.05)_169px,_rgba(0,0,0,.15)_169px,_rgba(0,0,0,.15)_179px,_rgba(255,255,255,.05)_179px,_rgba(255,255,255,.05)_182px,_rgba(0,0,0,.15)_182px,_rgba(0,0,0,.15)_232px,_transparent_232px),repeating-linear-gradient(125deg,_transparent,_transparent_2px,_rgba(0,0,0,.06)_2px,_rgba(0,0,0,.06)_3px,_transparent_3px,_transparent_5px,_rgba(0,0,0,.06)_5px)]
"
>
  <my-button
    class="inline-flex justify-center content-center m-2.5 pl-8 pr-8 pt-2 pb-2
     border-5 border-aroace-yellow rounded-lg bg-aroace-light-blue
    transition-[width, height] duration-500 ease-in-out hover:scale-110"
    role="button"
    id="my-button-a1"
    tabindex="-1"
    onclick={mybutton_a1}
    onkeydown={mybutton_a1}
    onmouseover={() => change_color("my-button-a1", "#9FCCE7")}
    onfocus={() => change_color("my-button-a1", "#9FCCE7")}
    onmouseout={() => change_color("my-button-a1", "#5faad7")}
    onblur={() => change_color("my-button-a1", "#5faad7")}
  >
    <div
      class="inline-flex justify-evenly content-start
    text-aroace-dark-blue font-mono xs text-center"
    >
      Resume
    </div>
  </my-button>
  <my-button
    class="inline-flex justify-center content-center m-2.5 pl-8 pr-8 pt-2 pb-2
    border-5 border-aroace-yellow rounded-lg bg-aroace-light-blue
    transition-[width, height] duration-500 ease-in-out hover:scale-110"
    role="button"
    id="my-button-a2"
    tabindex="-1"
    onclick={mybutton_a2}
    onkeydown={mybutton_a2}
    onmouseover={() => change_color("my-button-a2", "#9FCCE7")}
    onfocus={() => change_color("my-button-a2", "#9FCCE7")}
    onmouseout={() => change_color("my-button-a2", "#5faad7")}
    onblur={() => change_color("my-button-a2", "#5faad7")}
  >
    <div
      class="inline-flex justify-evenly content-start
    text-aroace-dark-blue font-mono xs text-center"
    >
      Poetry Books
    </div>
  </my-button>
  <my-button
    class="inline-flex justify-center content-center m-2.5 pl-8 pr-8 pt-2 pb-2
     border-5 border-aroace-yellow rounded-lg bg-aroace-light-blue
    transition-[width, height] duration-500 ease-in-out hover:scale-110"
    role="button"
    id="my-button-a3"
    tabindex="-1"
    onclick={mybutton_a3}
    onkeydown={mybutton_a3}
    onmouseover={() => change_color("my-button-a3", "#9FCCE7")}
    onfocus={() => change_color("my-button-a3", "#9FCCE7")}
    onmouseout={() => change_color("my-button-a3", "#5faad7")}
    onblur={() => change_color("my-button-a3", "#5faad7")}
  >
    <div
      class="inline-flex justify-evenly content-start
    text-aroace-dark-blue font-mono xs text-center"
    >
      Published Work
    </div>
  </my-button>
</div>

<div class="hidden m-2" id="resume">
  <h2 class="text-white font-mono text-[clamp(1rem,20vw,1.5rem)] mt-3">Resume</h2>
  <div class="w-250 h-auto">
    <img src={resume} alt="" />
  </div>
  <br />
</div>

<div class="hidden m-2" id="poetry">
  <h2 class="text-white font-mono text-[clamp(1rem,20vw,1.5rem)] mt-3">Poetry Books</h2>
  <div class="inline text-red-600 font-mono text-2xl py-3 px-1">
    Bundle Deal:
  </div>
  <div class="inline text-white font-mono text-2xl p-1">
    <sup>$</sup>24<sup>99*</sup>
  </div>
  <br />
  <div class="inline text-white font-mono text-xl p-6">
    List Price:
    <span style="color:red;text-decoration:line-through">
      <span style="color:gray">$29.99</span>
    </span>
  </div>
  <br /><br />

  <p class="text-white font-mono text-xl mb-0">Book 1</p>
  <div
    class="inline-flex flex-row gap-1 justify-start content-center w-auto h-auto
    border-5 border-aroace-dark-blue rounded-lg p-1 m-3
  bg-[hsl(215.09_46.09%_22.55%)]
    bg-[repeating-linear-gradient(transparent,_transparent_50px,_rgba(0,0,0,.12)_50px,_rgba(0,0,0,.12)_53px,_transparent_53px,_transparent_63px,_rgba(0,0,0,.12)_63px,_rgba(0,0,0,.12)_66px,_transparent_66px,_transparent_116px,_rgba(0,0,0,.15)_116px,_rgba(0,0,0,.15)_166px,_rgba(255,255,255,.05)_166px,_rgba(255,255,255,.05)_169px,_rgba(0,0,0,.15)_169px,_rgba(0,0,0,.15)_179px,_rgba(255,255,255,.05)_179px,_rgba(255,255,255,.05)_182px,_rgba(0,0,0,.15)_182px,_rgba(0,0,0,.15)_232px,_transparent_232px),repeating-linear-gradient(270deg,_transparent,_transparent_50px,_rgba(0,0,0,.12)_50px,_rgba(0,0,0,.12)_53px,_transparent_53px,_transparent_63px,_rgba(0,0,0,.12)_63px,_rgba(0,0,0,.12)_66px,_transparent_66px,_transparent_116px,_rgba(0,0,0,.15)_116px,_rgba(0,0,0,.15)_166px,_rgba(255,255,255,.05)_166px,_rgba(255,255,255,.05)_169px,_rgba(0,0,0,.15)_169px,_rgba(0,0,0,.15)_179px,_rgba(255,255,255,.05)_179px,_rgba(255,255,255,.05)_182px,_rgba(0,0,0,.15)_182px,_rgba(0,0,0,.15)_232px,_transparent_232px),repeating-linear-gradient(125deg,_transparent,_transparent_2px,_rgba(0,0,0,.06)_2px,_rgba(0,0,0,.06)_3px,_transparent_3px,_transparent_5px,_rgba(0,0,0,.06)_5px)]
    "
  >
    <div
      class="inline-flex flex-col gap-1 justify-start content-center w-auto h-auto
    border-5 border-aroace-light-blue rounded-lg p-1 m-2.5 bg-aroace-dark-blue"
    >
      <img
        src={poetry1}
        onmouseover={() => toggle("poetry1", "poetry1back", true)}
        onfocus={() => toggle("poetry1", "poetry1back", true)}
        id="poetry1"
        class="brightness-120"
        width="40"
        height="auto"
        alt=""
      />
      <img
        src={poetry1back}
        onmouseover={() => toggle("poetry1back", "poetry1", false)}
        onfocus={() => toggle("poetry1back", "poetry1", false)}
        id="poetry1back"
        width="40"
        height="auto"
        alt=""
      />
    </div>
    <img
      src={poetry1}
      id="poetry1d"
      class="block"
      width="200"
      height="auto"
      alt=""
    />
    <img
      src={poetry1back}
      id="poetry1backd"
      class="hidden"
      width="200"
      height="auto"
      alt=""
    />

    <div class="content-center">
      <div class="inline text-red-600 font-mono text-xl py-3 px-1">
        -50% Insecurity Discount:
      </div>
      <div class="inline text-white font-mono text-xl p-1">
        <sup>$</sup>4<sup>99*</sup>
      </div>
      <br />
      <div class="inline text-white font-mono text-lg p-6">
        List Price:
        <span style="color:red;text-decoration:line-through">
          <span style="color:gray">$9.99</span>
        </span>
      </div>
      <br /><br />
    </div>
  </div>
  <br /><br />
  <p class="text-white font-mono text-xl mb-0">Book 2</p>
  <div
    class="inline-flex flex-row gap-1 justify-start content-center w-auto h-auto
    border-5 border-aroace-dark-blue rounded-lg p-1 m-3
    bg-[hsl(215.09_46.09%_22.55%)]
    bg-[repeating-linear-gradient(transparent,_transparent_50px,_rgba(0,0,0,.12)_50px,_rgba(0,0,0,.12)_53px,_transparent_53px,_transparent_63px,_rgba(0,0,0,.12)_63px,_rgba(0,0,0,.12)_66px,_transparent_66px,_transparent_116px,_rgba(0,0,0,.15)_116px,_rgba(0,0,0,.15)_166px,_rgba(255,255,255,.05)_166px,_rgba(255,255,255,.05)_169px,_rgba(0,0,0,.15)_169px,_rgba(0,0,0,.15)_179px,_rgba(255,255,255,.05)_179px,_rgba(255,255,255,.05)_182px,_rgba(0,0,0,.15)_182px,_rgba(0,0,0,.15)_232px,_transparent_232px),repeating-linear-gradient(270deg,_transparent,_transparent_50px,_rgba(0,0,0,.12)_50px,_rgba(0,0,0,.12)_53px,_transparent_53px,_transparent_63px,_rgba(0,0,0,.12)_63px,_rgba(0,0,0,.12)_66px,_transparent_66px,_transparent_116px,_rgba(0,0,0,.15)_116px,_rgba(0,0,0,.15)_166px,_rgba(255,255,255,.05)_166px,_rgba(255,255,255,.05)_169px,_rgba(0,0,0,.15)_169px,_rgba(0,0,0,.15)_179px,_rgba(255,255,255,.05)_179px,_rgba(255,255,255,.05)_182px,_rgba(0,0,0,.15)_182px,_rgba(0,0,0,.15)_232px,_transparent_232px),repeating-linear-gradient(125deg,_transparent,_transparent_2px,_rgba(0,0,0,.06)_2px,_rgba(0,0,0,.06)_3px,_transparent_3px,_transparent_5px,_rgba(0,0,0,.06)_5px)]
    "
  >
    <div
      class="inline-flex flex-col gap-1 justify-start content-center w-auto h-auto
    border-5 border-aroace-light-blue rounded-lg p-1 m-2.5 bg-aroace-dark-blue"
    >
      <img
        src={poetry2}
        onmouseover={() => toggle("poetry2", "poetry2back", true)}
        onfocus={() => toggle("poetry2", "poetry2back", true)}
        id="poetry2"
        class="brightness-120"
        width="40"
        height="auto"
        alt=""
      />
      <img
        src={poetry2back}
        onmouseover={() => toggle("poetry2back", "poetry2", false)}
        onfocus={() => toggle("poetry2back", "poetry2", false)}
        id="poetry2back"
        width="40"
        height="auto"
        alt=""
      />
    </div>
    <img
      src={poetry2}
      id="poetry2d"
      class="block"
      width="200"
      height="auto"
      alt=""
    />
    <img
      src={poetry2back}
      id="poetry2backd"
      class="hidden"
      width="200"
      height="auto"
      alt=""
    />

    <div class="content-center">
      <div class="inline text-red-600 font-mono text-xl py-3 px-1">
        -50% Insecurity Discount:
      </div>
      <div class="inline text-white font-mono text-xl p-1">
        <sup>$</sup>4<sup>99*</sup>
      </div>
      <br />
      <div class="inline text-white font-mono text-lg p-6">
        List Price:
        <span style="color:red;text-decoration:line-through">
          <span style="color:gray">$9.99</span>
        </span>
      </div>
      <br /><br />
    </div>
  </div>
  <br /><br />
  <p class="text-white font-mono text-xl mb-0">Book 3</p>
  <div
    class="inline-flex flex-row gap-1 justify-start content-center w-auto h-auto
    border-5 border-aroace-dark-blue rounded-lg p-1 m-3
  bg-[hsl(215.09_46.09%_22.55%)]
    bg-[repeating-linear-gradient(transparent,_transparent_50px,_rgba(0,0,0,.12)_50px,_rgba(0,0,0,.12)_53px,_transparent_53px,_transparent_63px,_rgba(0,0,0,.12)_63px,_rgba(0,0,0,.12)_66px,_transparent_66px,_transparent_116px,_rgba(0,0,0,.15)_116px,_rgba(0,0,0,.15)_166px,_rgba(255,255,255,.05)_166px,_rgba(255,255,255,.05)_169px,_rgba(0,0,0,.15)_169px,_rgba(0,0,0,.15)_179px,_rgba(255,255,255,.05)_179px,_rgba(255,255,255,.05)_182px,_rgba(0,0,0,.15)_182px,_rgba(0,0,0,.15)_232px,_transparent_232px),repeating-linear-gradient(270deg,_transparent,_transparent_50px,_rgba(0,0,0,.12)_50px,_rgba(0,0,0,.12)_53px,_transparent_53px,_transparent_63px,_rgba(0,0,0,.12)_63px,_rgba(0,0,0,.12)_66px,_transparent_66px,_transparent_116px,_rgba(0,0,0,.15)_116px,_rgba(0,0,0,.15)_166px,_rgba(255,255,255,.05)_166px,_rgba(255,255,255,.05)_169px,_rgba(0,0,0,.15)_169px,_rgba(0,0,0,.15)_179px,_rgba(255,255,255,.05)_179px,_rgba(255,255,255,.05)_182px,_rgba(0,0,0,.15)_182px,_rgba(0,0,0,.15)_232px,_transparent_232px),repeating-linear-gradient(125deg,_transparent,_transparent_2px,_rgba(0,0,0,.06)_2px,_rgba(0,0,0,.06)_3px,_transparent_3px,_transparent_5px,_rgba(0,0,0,.06)_5px)]
    "
  >
    <div
      class="inline-flex flex-col gap-1 justify-start content-center w-auto h-auto
    border-5 border-aroace-light-blue rounded-lg p-1 m-2.5 bg-aroace-dark-blue"
    >
      <img
        src={poetry3}
        onmouseover={() => toggle("poetry3", "poetry3back", true)}
        onfocus={() => toggle("poetry3", "poetry3back", true)}
        id="poetry3"
        class="brightness-120"
        width="40"
        height="auto"
        alt=""
      />
      <img
        src={poetry3back}
        onmouseover={() => toggle("poetry3back", "poetry3", false)}
        onfocus={() => toggle("poetry3back", "poetry3", false)}
        id="poetry3back"
        width="40"
        height="auto"
        alt=""
      />
    </div>
    <img
      src={poetry3}
      id="poetry3d"
      class="block"
      width="200"
      height="auto"
      alt=""
    />
    <img
      src={poetry3back}
      id="poetry3backd"
      class="hidden"
      width="200"
      height="auto"
      alt=""
    />

    <div class="content-center">
      <div class="inline text-red-600 font-mono text-xl py-3 px-1">
        -50% Insecurity Discount:
      </div>
      <div class="inline text-white font-mono text-xl p-1">
        <sup>$</sup>4<sup>99*</sup>
      </div>
      <br />
      <div class="inline text-white font-mono text-lg p-6">
        List Price:
        <span style="color:red;text-decoration:line-through">
          <span style="color:gray">$9.99</span>
        </span>
      </div>
      <br /><br />
    </div>
  </div>
  <br /><br />
  <p class="text-white font-mono text-xl mb-0">Book 4</p>
  <div
    class="inline-flex flex-row gap-1 justify-start content-center w-auto h-auto
    border-5 border-aroace-dark-blue rounded-lg p-1 m-3
  bg-[hsl(215.09_46.09%_22.55%)]
    bg-[repeating-linear-gradient(transparent,_transparent_50px,_rgba(0,0,0,.12)_50px,_rgba(0,0,0,.12)_53px,_transparent_53px,_transparent_63px,_rgba(0,0,0,.12)_63px,_rgba(0,0,0,.12)_66px,_transparent_66px,_transparent_116px,_rgba(0,0,0,.15)_116px,_rgba(0,0,0,.15)_166px,_rgba(255,255,255,.05)_166px,_rgba(255,255,255,.05)_169px,_rgba(0,0,0,.15)_169px,_rgba(0,0,0,.15)_179px,_rgba(255,255,255,.05)_179px,_rgba(255,255,255,.05)_182px,_rgba(0,0,0,.15)_182px,_rgba(0,0,0,.15)_232px,_transparent_232px),repeating-linear-gradient(270deg,_transparent,_transparent_50px,_rgba(0,0,0,.12)_50px,_rgba(0,0,0,.12)_53px,_transparent_53px,_transparent_63px,_rgba(0,0,0,.12)_63px,_rgba(0,0,0,.12)_66px,_transparent_66px,_transparent_116px,_rgba(0,0,0,.15)_116px,_rgba(0,0,0,.15)_166px,_rgba(255,255,255,.05)_166px,_rgba(255,255,255,.05)_169px,_rgba(0,0,0,.15)_169px,_rgba(0,0,0,.15)_179px,_rgba(255,255,255,.05)_179px,_rgba(255,255,255,.05)_182px,_rgba(0,0,0,.15)_182px,_rgba(0,0,0,.15)_232px,_transparent_232px),repeating-linear-gradient(125deg,_transparent,_transparent_2px,_rgba(0,0,0,.06)_2px,_rgba(0,0,0,.06)_3px,_transparent_3px,_transparent_5px,_rgba(0,0,0,.06)_5px)]
    "
  >
    <div
      class="inline-flex flex-col gap-1 justify-start content-center w-auto h-auto
    border-5 border-aroace-light-blue rounded-lg p-1 m-2.5 bg-aroace-dark-blue"
    >
      <img
        src={poetry4}
        onmouseover={() => toggle("poetry4", "poetry4back", true)}
        onfocus={() => toggle("poetry4", "poetry4back", true)}
        id="poetry4"
        class="brightness-120"
        width="40"
        height="auto"
        alt=""
      />
      <img
        src={poetry4back}
        onmouseover={() => toggle("poetry4back", "poetry4", false)}
        onfocus={() => toggle("poetry4back", "poetry4", false)}
        id="poetry4back"
        width="40"
        height="auto"
        alt=""
      />
    </div>
    <img
      src={poetry4}
      id="poetry4d"
      class="block"
      width="200"
      height="auto"
      alt=""
    />
    <img
      src={poetry4back}
      id="poetry4backd"
      class="hidden"
      width="200"
      height="auto"
      alt=""
    />

    <div class="content-center">
      <div class="inline text-red-600 font-mono text-xl py-3 px-1">
        -50% Insecurity Discount:
      </div>
      <div class="inline text-white font-mono text-xl p-1">
        <sup>$</sup>4<sup>99*</sup>
      </div>
      <br />
      <div class="inline text-white font-mono text-lg p-6">
        List Price:
        <span style="color:red;text-decoration:line-through">
          <span style="color:gray">$9.99</span>
        </span>
      </div>
      <br /><br />
    </div>
  </div>
  <br /><br />
  <p class="text-white font-mono text-xl mb-0">Book 5</p>
  <div
    class="inline-flex flex-row gap-1 justify-start content-center w-auto h-auto
    border-5 border-aroace-dark-blue rounded-lg p-1 m-3
  bg-[hsl(215.09_46.09%_22.55%)]
    bg-[repeating-linear-gradient(transparent,_transparent_50px,_rgba(0,0,0,.12)_50px,_rgba(0,0,0,.12)_53px,_transparent_53px,_transparent_63px,_rgba(0,0,0,.12)_63px,_rgba(0,0,0,.12)_66px,_transparent_66px,_transparent_116px,_rgba(0,0,0,.15)_116px,_rgba(0,0,0,.15)_166px,_rgba(255,255,255,.05)_166px,_rgba(255,255,255,.05)_169px,_rgba(0,0,0,.15)_169px,_rgba(0,0,0,.15)_179px,_rgba(255,255,255,.05)_179px,_rgba(255,255,255,.05)_182px,_rgba(0,0,0,.15)_182px,_rgba(0,0,0,.15)_232px,_transparent_232px),repeating-linear-gradient(270deg,_transparent,_transparent_50px,_rgba(0,0,0,.12)_50px,_rgba(0,0,0,.12)_53px,_transparent_53px,_transparent_63px,_rgba(0,0,0,.12)_63px,_rgba(0,0,0,.12)_66px,_transparent_66px,_transparent_116px,_rgba(0,0,0,.15)_116px,_rgba(0,0,0,.15)_166px,_rgba(255,255,255,.05)_166px,_rgba(255,255,255,.05)_169px,_rgba(0,0,0,.15)_169px,_rgba(0,0,0,.15)_179px,_rgba(255,255,255,.05)_179px,_rgba(255,255,255,.05)_182px,_rgba(0,0,0,.15)_182px,_rgba(0,0,0,.15)_232px,_transparent_232px),repeating-linear-gradient(125deg,_transparent,_transparent_2px,_rgba(0,0,0,.06)_2px,_rgba(0,0,0,.06)_3px,_transparent_3px,_transparent_5px,_rgba(0,0,0,.06)_5px)]
    "
  >
    <div
      class="inline-flex flex-col gap-1 justify-start content-center w-auto h-auto
    border-5 border-aroace-light-blue rounded-lg m-2.5 p-1 bg-aroace-dark-blue"
    >
      <img
        src={poetry5}
        onmouseover={() => toggle("poetry5", "poetry5back", true)}
        onfocus={() => toggle("poetry5", "poetry5back", true)}
        id="poetry5"
        class="brightness-120"
        width="40"
        height="auto"
        alt=""
      />
      <img
        src={poetry5back}
        onmouseover={() => toggle("poetry5back", "poetry5", false)}
        onfocus={() => toggle("poetry5back", "poetry5", false)}
        id="poetry5back"
        width="40"
        height="auto"
        alt=""
      />
    </div>
    <img
      src={poetry5}
      id="poetry5d"
      class="block"
      width="200"
      height="auto"
      alt=""
    />
    <img
      src={poetry5back}
      id="poetry5backd"
      class="hidden"
      width="200"
      height="auto"
      alt=""
    />

    <div class="content-center">
      <div class="inline text-red-600 font-mono text-xl py-3 px-1">
        -50% Insecurity Discount:
      </div>
      <div class="inline text-white font-mono text-xl p-1">
        <sup>$</sup>4<sup>99*</sup>
      </div>
      <br />
      <div class="inline text-white font-mono text-lg p-6">
        List Price:
        <span style="color:red;text-decoration:line-through">
          <span style="color:gray">$9.99</span>
        </span>
      </div>
      <br /><br />
    </div>
  </div>
  <br /><br />
  <p class="text-white font-mono text-xl mb-0">Book 6</p>
  <div
    class="inline-flex flex-row gap-1 justify-start content-center w-auto h-auto
    border-5 border-aroace-dark-blue rounded-lg p-1 m-3
  bg-[hsl(215.09_46.09%_22.55%)]
    bg-[repeating-linear-gradient(transparent,_transparent_50px,_rgba(0,0,0,.12)_50px,_rgba(0,0,0,.12)_53px,_transparent_53px,_transparent_63px,_rgba(0,0,0,.12)_63px,_rgba(0,0,0,.12)_66px,_transparent_66px,_transparent_116px,_rgba(0,0,0,.15)_116px,_rgba(0,0,0,.15)_166px,_rgba(255,255,255,.05)_166px,_rgba(255,255,255,.05)_169px,_rgba(0,0,0,.15)_169px,_rgba(0,0,0,.15)_179px,_rgba(255,255,255,.05)_179px,_rgba(255,255,255,.05)_182px,_rgba(0,0,0,.15)_182px,_rgba(0,0,0,.15)_232px,_transparent_232px),repeating-linear-gradient(270deg,_transparent,_transparent_50px,_rgba(0,0,0,.12)_50px,_rgba(0,0,0,.12)_53px,_transparent_53px,_transparent_63px,_rgba(0,0,0,.12)_63px,_rgba(0,0,0,.12)_66px,_transparent_66px,_transparent_116px,_rgba(0,0,0,.15)_116px,_rgba(0,0,0,.15)_166px,_rgba(255,255,255,.05)_166px,_rgba(255,255,255,.05)_169px,_rgba(0,0,0,.15)_169px,_rgba(0,0,0,.15)_179px,_rgba(255,255,255,.05)_179px,_rgba(255,255,255,.05)_182px,_rgba(0,0,0,.15)_182px,_rgba(0,0,0,.15)_232px,_transparent_232px),repeating-linear-gradient(125deg,_transparent,_transparent_2px,_rgba(0,0,0,.06)_2px,_rgba(0,0,0,.06)_3px,_transparent_3px,_transparent_5px,_rgba(0,0,0,.06)_5px)]
    "
  >
    <div
      class="inline-flex flex-col gap-1 justify-start content-center w-auto h-auto
    border-5 border-aroace-light-blue rounded-lg p-1 m-2.5 bg-aroace-dark-blue"
    >
      <img
        src={poetry6}
        onmouseover={() => toggle("poetry6", "poetry6back", true)}
        onfocus={() => toggle("poetry6", "poetry6back", true)}
        id="poetry6"
        class="brightness-120"
        width="40"
        height="auto"
        alt=""
      />
      <img
        src={poetry6back}
        onmouseover={() => toggle("poetry6back", "poetry6", false)}
        onfocus={() => toggle("poetry6back", "poetry6", false)}
        id="poetry6back"
        width="40"
        height="auto"
        alt=""
      />
    </div>
    <img
      src={poetry6}
      id="poetry6d"
      class="block"
      width="200"
      height="auto"
      alt=""
    />
    <img
      src={poetry6back}
      id="poetry6backd"
      class="hidden"
      width="200"
      height="auto"
      alt=""
    />

    <div class="content-center">
      <div class="inline text-red-600 font-mono text-xl py-3 px-1">
        -50% Insecurity Discount:
      </div>
      <div class="inline text-white font-mono text-xl p-1">
        <sup>$</sup>4<sup>99*</sup>
      </div>
      <br />
      <div class="inline text-white font-mono text-lg p-6">
        List Price:
        <span style="color:red;text-decoration:line-through">
          <span style="color:gray">$9.99</span>
        </span>
      </div>
      <br /><br />
    </div>
  </div>
  <br /><br />
</div>

<div class="hidden m-2" id="published">
  <h2 class="text-white font-mono text-[clamp(1rem,20vw,1.5rem)] mt-3">Published Work</h2>
  <details>
    <summary class="text-white font-mono text-xl mb-0">
      &nbsp;<em>Destination</em> - Published Dec 2025
    </summary>
    <p class="text-white font-mono text-sm">
      Published in <a
        class="text-aroace-light-blue"
        href="https://www.caldera.org/">Caldera</a
      > Newsletter
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      The wind through my hair
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      It lifts me up out of my body
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      And cleanses me of the grime that has accumulated:
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      The crust from beneath my eyes,
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      The sweat from beneath my arms,
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      The dirt from beneath my feet,
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      The weight holding down my soul.
    </p>
    <p class="text-white font-mono text-sm">And now I can become—</p>
    <p class="text-white font-mono text-sm m-0 pt-0">Weightless</p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      As if I’m floating in a void.
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">Just me,</p>
    <p class="text-white font-mono text-sm m-0 pt-0">My thoughts,</p>
    <p class="text-white font-mono text-sm">
      And the world blurring around me.
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">A beautiful world:</p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      A bright blue sky above my head.
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      Light floating down to me from the heavens.
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      Trees, monolithic pillars whose branches rock back and forth like cradles,
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      Their leaves illuminated in a green full of life and love.
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      Quiet homes line each side of the labyrinthine streets,
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      Houses painted in quaint pastels of blue and yellow.
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      Narrow sidewalks sandwich the cracked asphalt of the road.
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      Telephone wires threading above like twisting, turning turnpikes.
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      The perpetual yellow paint partitioning the pavement
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      Like a knife partitions butter.
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      A rhythmic grinding of gears like a great gathering of generators and
      gyroscopes.
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      A chain steadily spinning like the movement of the moon,
    </p>
    <p class="text-white font-mono text-sm">
      Its magnificent motion a matter of manpower and momentum,
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">Momentum.</p>
    <p class="text-white font-mono text-sm m-0 pt-0">My momentum moves me,</p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      Moves me along these roads.
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      These roads run with no regard for reason.
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      Reason and logic can be discarded out here.
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      Here is a special place, a special time.
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      Time is a constant but right here it does not affect me
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      For this is the only time,
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      The only time I feel truly free.
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">No distractions,</p>
    <p class="text-white font-mono text-sm m-0 pt-0">No responsibilities,</p>
    <p class="text-white font-mono text-sm">
      Beholden to no one but myself and my destination.
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">What is a destination?</p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      A destination is a place you want to be.
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      A destination is the purpose behind the movement,
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      The reason you pedal onwards through the ache and the pain,
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      The reason you experience the good and the bad,
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      Struggle through the easy and the hard.
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      But what if you could do that without a destination?
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      Live life not in pursuit of the endpoint,
    </p>
    <p class="text-white font-mono text-sm">Just in service of the journey?</p>
    <p class="text-white font-mono text-sm m-0 pt-0">Impossible.</p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      This is something that has to happen.
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      Because a destination is a promise,
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      A promise that by the time you die
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      You will have accomplished something.
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      A destination is a guarantee
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      That you will contribute something,
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      Contribute something to the world,
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">To your loved ones,</p>
    <p class="text-white font-mono text-sm m-0 pt-0">To yourself.</p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      A destination is an assurance,
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">A deal with the devil,</p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      That you have the fortitude to meticulously plan your journey
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      In the hopes of never straying too far
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      From the optimal path you set for yourself
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      And if you get lost, you have the knowledge and skill
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      To navigate yourself back to your path
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      All for the sake of reaching your final location
    </p>
    <p class="text-white font-mono text-sm">
      Because there is no “lost” without a destination.
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">Stop.</p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      Why do we compete for last place?
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      Acting like defeat is a means to mask hate,
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      Trying to save a seat for the demons and ghasts,
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      Haze surrounds the incomplete like a pitcher of glass.
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      Eh, halfway between a pacifist and a Basilisk in a castle.
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      It’s an asterisk, I’m asking if I’ve mastered this.
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      Haven’t yet, a yes would spark a laughing fit.
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      Gas it, but to mask it is a multifaceted casket
    </p>
    <p class="text-white font-mono text-sm">Basking in rancid acid, vacuous.</p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      I don’t want to die; I just want things to change:
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      Arriving is a return to reality,
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      A return from the navigation,
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">But a welcome one.</p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      For it is the focal point,
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      The one thing that makes the rest of life worth living.
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      The single point in time that makes
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      The hours of pedaling seem like a brief moment,
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      The single point in space that makes
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      The miles of struggling seem like a walk down the block.
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      And I know that if I was offered the opportunity again,
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      The journey, be it 8 miles, or 20, or 100,
    </p>
    <p class="text-white font-mono text-sm">
      I would accept it in a single breath.
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      Because when I look up and see the world blurring around me,
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      I cannot help but feel euphoric
    </p>
    <p class="text-white font-mono text-sm">Just for a second.</p>
    <p class="text-white font-mono text-sm m-0 pt-0">It is the journey:</p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      The journey that changes dream to eventuality,
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      The journey that changes happenstance to circumstance,
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      The journey that changes destination to my location.
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      What is your destination?
    </p>
    <br />
  </details>
  <details>
    <summary class="text-white font-mono text-xl mb-0">
      &nbsp;State of the Creek Report: Hyla Woods 2023 - Published Dec 2023
    </summary>
    <p class="text-white font-mono text-sm">
      Published in <a
        class="text-aroace-light-blue"
        href="https://hylawoods.com/">Hyla Woods</a
      > Annual State of the Creek Report Essay Competition (First Place)
    </p>
    <div class="flex justify-center">
      <img src={site_l} alt="" />
    </div>

    <p class="text-white text-center font-mono text-base">
      <em>Fig. 1.</em> Alexy Heston, Photo of Site L: 12 Oct 2023.<sup>1</sup>
    </p>

    <div class="flex justify-center">
      <img src={site_l2} alt="" />
    </div>

    <p class="text-white text-center font-mono text-base">
      <em>Fig. 2.</em> Alexy Heston, Photo of Site L: 12 Oct 2023.
    </p>

    <p class="text-white font-mono text-sm m-0 pt-0">
      <strong>Introduction</strong>
    </p>
    <p class="text-white font-mono text-sm indent-8">
      “The best way to understand the universe is through a forest wilderness,”
      once said renowned naturalist John Muir. Forests are more than mere
      resources to be sold, destroyed, and profited from. Beautiful living
      ecosystems, forests serve as a metaphor for both the best and worst of
      humanity. On one hand, forests embody the pinnacle of natural beauty and
      harmony. They are a testament to the intricate relations between countless
      species, each playing a role in maintaining the delicate balance of life.
      Just like how humans should coexist with nature, forests demonstrate the
      importance of unity and collaboration. Forests also symbolize resilience
      and adaptability. They have withstood the test of time, surviving through
      various environmental changes and disturbances. In this sense, they
      reflect humanity's ability to overcome challenges and evolve in the face
      of adversity. Forests teach us that even in the harshest conditions, life
      can thrive if we learn to adapt and work together. However, forests also
      highlight some of humanity's darkest tendencies. Throughout history, we
      have witnessed the destruction and exploitation of these precious
      ecosystems for our own selfish gains. Deforestation driven by greed,
      urbanization encroaching upon pristine wilderness, and unsustainable
      logging practices leading to the untimely demise of the forests. This
      quote, in my opinion, encapsulates our journey to Hyla Woods.
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <strong>Narrative</strong>
    </p>
    <p class="text-white font-mono text-sm indent-8 m-0 pt-0">
      On October 12th and 30th, our class had the privilege of visiting Hyla
      Woods, an 160-acre actively logged forest located west of Portland, near
      Forest Grove. This remarkable forest, owned by the Hayes family, serves as
      a proof-of-concept experimental site with the ambitious goal of being
      “ecologically complex, economically viable, and responsibly operated.”<sup
        >2</sup
      >
    </p>
    <p class="text-white font-mono text-sm indent-8 m-0 pt-0">
      Hyla Woods distinguishes itself from conventional logging operations
      through a fundamental difference in approach. In the realm of timber
      production, clear-cutting has emerged as the prevailing and profit-driven
      method, characterized by the harvesting of robust natural forests and
      replacement with artificial, monoculture tree plantations that fail to
      emulate the invaluable ecosystem services of a thriving woodland. On the
      contrary, Peter and Pam Hayes adopt a distinct and conscientious approach
      in the management of Hyla Woods. Their practices involve selective
      cutting, with a focus on smaller trees and an objective to preserve a
      diverse array of tree species. Additionally, they abstain from employing
      poison sprays following a harvest, prioritizing the integrity and health
      of their land and its surrounding environment.
    </p>
    <p class="text-white font-mono text-sm indent-8 m-0 pt-0">
      During our visit, we had the opportunity to collect valuable data from the
      stream, focusing on various variables such as pH levels, dissolved oxygen
      (DO), water and air temperature, turbidity, and benthic
      macroinvertebrates. We collected this data on both visits (with the
      exception of benthic macroinvertebrates) from 12 different field sites
      along the creek, with the objective to assess the overall salubrity of the
      creek and its capacity to support the diverse life found within, with a
      particular emphasis on Coast Coho salmon. These salmon are a threatened
      species that spawn only in small mountain streams, ones similar to
      Lousignont Creek in Hyla Woods.
    </p>
    <p class="text-white font-mono text-sm indent-8">
      Our work at Hyla Woods was driven by four foundational questions: What
      defines a system and how does it function? How do organisms influence one
      another and their surrounding environment? How does energy and matter
      circulate within an ecosystem? And, most importantly, how can we determine
      the health of an ecosystem?
    </p>
    <p class="text-white font-mono text-sm indent-8 m-0 pt-0">
      The recent investigation fostered significant learning outcomes related to
      scientific practices and cross-cutting concepts. As evidenced by the
      alignment with numerous Next Generation Science Standards (NGSS), the work
      meaningfully advanced our understanding of science.
    </p>
    <p class="text-white font-mono text-sm indent-8 m-0 pt-0">
      Specifically, the activities connected to NGSS Practice 1 by seeking
      answers to core questions, especially “How can we determine the health of
      an ecosystem?” Substantial planning and two days of fieldwork at Hyla
      Woods aligned with Practice 3. Practice 4 was engaged through analytical
      evaluation of the collected data to draw conclusions. Practices 5 and 6
      respectively involved applying mathematical analysis to the data
      collection and constructing explanations based on results. Communication
      and evaluation of test outcomes with the landowners for stewardship
      purposes embodied Practice 8.
    </p>
    <p class="text-white font-mono text-sm indent-8 m-0 pt-0">
      Several cross-cutting concepts were also engaged. Repeated water testing
      to identify patterns coincided with Concept 1. The various data collected
      exemplified Concept 3. Investigation of the Hyla Woods system demonstrated
      Concept 4. Aspiring to understand ecosystem stability over time related to
      Concept 7.
    </p>
    <p class="text-white font-mono text-sm indent-8">
      Beyond just the immense ramifications of in-class learning, this work is
      not limited to our science classroom in the slightest. Our research
      contributes to helping the Hayes family continually manage the forest
      sustainably, and to protect the Coast Coho Salmon that spawn in the
      Nehalem watershed. The implications of the research conducted by the
      science classroom extend far beyond the bounds of traditional in-class
      learning. The work performed not only enhances our educational experience,
      but also yields tangible benefits for environmental protection and
      sustainable management in the local community. Through collaborating with
      the Hayes family on analysis of their forest land, we were able to aid
      ongoing stewardship efforts to ensure the responsible and long-term
      utilization of this vital natural resource. Moreover, the watershed
      research focused on the endangered Coast Coho Salmon demonstrates how
      knowledge gained within the classroom walls can directly assist local
      wildlife. By understanding some of the factors influencing the salmon that
      spawn in the Nehalem watershed, we enhance monitoring of the watershed
      conditions and pinpoint any emerging threats, thereby supporting measures
      to safeguard these important fish and the long-term viability of the
      species.
    </p>
    <p class="text-white font-mono text-sm indent-8 m-0 pt-0">
      Wild Salmon Strongholds are a vital component for the health of salmon. As
      discussed in class, these areas allow salmon populations to exist
      unaffected by human impacts and activities, thereby ensuring the long-term
      viability and sustainability of the species. One such stronghold is Hyla
      Woods. As one of the remaining places where salmon can thrive in their
      natural habitat without interference, it is imperative that Hyla Woods
      maintains its favorable conditions. The interconnected relationship
      between forests and streams lies at the core of the region's ecological
      integrity. As we learned, these natural systems are inextricably linked -
      the forests help regulate water flows and quality, while the streams
      transport nutrients into the woods. A disruption to either can gravely
      harm the other.<sup>3</sup>
    </p>
    <p class="text-white font-mono text-sm indent-8">
      For Hyla Woods, the connections between overland and instream environments
      are evident. With its woodlands directly adjacent to salmon-bearing
      waterways, the area provides salmon with optimal spawning grounds, shelter
      from predators and food sources. The forest canopy shades the streams,
      regulating water temperatures needed by salmon. Leaf litter and woody
      debris from the trees fall into the creeks, creating habitat complexity.<sup
        >4</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <strong>Tests and Results</strong>
    </p>

    <p class="text-white font-mono text-sm indent-8 pt-0">
      Water temperature is a measurement of the kinetic energy, or movement of
      molecules, within a body of water. Determining water temperature
      accurately is an important factor when assessing the health of aquatic
      ecosystems. For our analysis, we used a thermometer to gauge the
      temperature in several locations of the creek over the course of two
      minutes. To obtain a representative reading, we took measurements at three
      different spots within the waterway and then calculated the average of
      these results. Temperature recordings are vital for understanding the
      well-being of the creek environment, especially as it pertains to
      sensitive species such as Coast Coho Salmon. As ectothermic animals,
      salmon cannot internally regulate their body heat and rely entirely on
      ambient water temperatures. If temperatures rise too high, it can quickly
      become fatal for these cold-blooded fish. Conversely, temperatures that
      fall too low risk freezing the salmon. Most aquatic flora and fauna thrive
      when water temperatures are within a range of 5 to 25 degrees Celsius.
      After completing two rounds of systematic testing at our field sites, the
      average temperature we observed was 10.9 degrees Celsius.<sup>5</sup>
    </p>

    <div class="flex justify-center">
      <img src={turbidity} alt="" />
    </div>

    <p class="text-white text-center font-mono text-base">
      <em>Fig. 3.</em> Alexy Heston, Conducting Turbidity Test: 12 Oct 2023.
    </p>

    <p class="text-white font-mono text-sm indent-8 pt-0">
      Turbidity is a measure of water cloudiness and an indicator of how much
      light can pass through the water. We assessed turbidity levels by
      collecting creek water samples in a specialized tube containing a
      checkerboard pattern at the bottom, known as a turbidity tube. The sample
      water was slowly released from the tube until the pattern became visible,
      at which point we recorded the depth of water in centimeters. This
      measurement was then converted to Nephelometric Turbidity Units (NTU), a
      standardized scale quantifying the amount of suspended solids in the
      water. Suspended sediment concentrations impact creek health through
      several mechanisms. Highly turbid water reduces sunlight penetration,
      potentially burying aquatic organisms. It can also increase water
      temperatures by limiting sunlight absorption. Reduced dissolved oxygen
      levels may occur due to lower photosynthetic activity. Suspended particles
      risk becoming trapped in fish gills. Organisms may face difficulties
      locating prey and avoiding predators with lower visibility. Elevated
      turbidity can also promote algal growth. For salmonids, an ideal turbidity
      is generally considered to be below 25 NTU. After collecting samples from
      twelve field sites on two occasions, our average turbidity readings were
      less than 5 NTU.<sup>6</sup>
    </p>

    <div class="flex justify-center">
      <img src={dissolved_oxygen} alt="" />
    </div>

    <p class="text-white text-center font-mono text-base">
      <em>Fig. 4.</em> Freya Ellis, Conducting DO Test: 30 Oct 2023.
    </p>

    <p class="text-white font-mono text-sm indent-8 pt-0">
      Dissolved Oxygen (DO) refers to the diatomic oxygen (O<sub>2</sub>)
      molecules that are dissolved in an aqueous solution (H2O). We tested the
      concentration of dissolved oxygen by again taking a water sample from the
      creek and adding several chemicals to it. This test was not performed in
      the field directly, rather the water sample was transported back to our
      classroom science laboratory where the chemical procedures were executed
      after the gaseous oxygen was fixed (trapped) by earlier chemical reactions
      of the three initial reagents. Through a series of chemical reactions,
      this test process isolated the oxygen molecules that had been dissolved in
      the water sample and transformed them into a form that could be quantified
      and measured using analytical instrumentation. We were measuring the
      actual amount of oxygen gas present in molecular solution within the
      water, expressed in units of milligrams per liter (mg/L), also shown in
      parts per million (ppm), which is critically important for various aquatic
      lifeforms. For example, salmon and trout respire by extracting dissolved
      oxygen from the water through their gills, so they require a minimum
      concentration range of approximately 8-12 ppm DO for health and survival.
      Concentrations exceeding this threshold range are also suitable to support
      robust aquatic ecosystems. After systematically conducting tests on water
      samples procured from the twelve distinct locations along the creek, we
      determined that the average dissolved oxygen concentration observed across
      both sites was 9.0 mg/L, which is equal to 9.0 ppm.
    </p>

    <div class="flex justify-center">
      <img src={pH} alt="" />
    </div>

    <p class="text-white text-center font-mono text-base">
      <em>Fig. 5.</em> Alexy Heston, Conducting pH Test: 12 Oct 2023.
    </p>

    <p class="text-white font-mono text-sm indent-8 pt-0">
      pH is the measure of the concentration of hydroxyl ions (OH-) compared to
      hydrogen ions (H+) in an aqueous solution. A solution in which there is a
      higher concentration of hydrogen ions than hydroxyl ions is considered
      acidic, whereas a solution with a higher concentration of hydroxyl ions
      than hydrogen ions is considered basic. We conducted pH testing on a
      sample of creek water to determine its acidity level and suitability for
      salmon habitat. The testing was performed by adding various chemical
      reagents to aliquots of the water sample in order to alter the solution
      concentration and induce a color change reaction. The resultant coloration
      of each test mixture was then compared to a calibrated color scale. This
      colorimetric comparison method allowed us to determine the corresponding
      numerical pH value for the creek water. Most Pacific salmon species have
      been shown to thrive in freshwater with a pH range of 6.0 to 8.0, though a
      pH of around 7.0 is considered optimal for salmon health and productivity.
      With this pH tolerance range in mind, we systematically tested water
      samples collected from two separate locations along the creek on multiple
      occasions. The pH was measured at each site and the average values were
      calculated. After completing pH testing at the field sites, we determined
      that the average pH observed in the creek water was 6.4.
    </p>

    <div class="flex justify-center">
      <img src={macro1} alt="" />
    </div>

    <p class="text-white text-center font-mono text-base">
      <em>Fig. 6.</em> Freya Ellis, Collecting Macroinvertebrates: 30 Oct 2023.
    </p>

    <div class="flex justify-center">
      <img src={macro2} alt="" />
    </div>

    <p class="text-white text-center font-mono text-base">
      <em>Fig. 7.</em> Freya Ellis, Sorting Macroinvertebrates: 30 Oct 2023.
    </p>

    <div class="flex justify-center">
      <img src={macro3} alt="" />
    </div>

    <p class="text-white text-center font-mono text-base">
      <em>Fig. 8.</em> Freya Ellis, Identifying Macroinvertebrates: 30 Oct 2023.
    </p>

    <div class="flex justify-center">
      <img src={macro4} alt="" />
    </div>

    <p class="text-white text-center font-mono text-base">
      <em>Fig. 9.</em> Freya Ellis, Continually Identifying Macroinvertebrates: 30
      Oct 2023.
    </p>

    <div class="flex justify-center">
      <img src={macro5} alt="" />
    </div>

    <p class="text-white text-center font-mono text-base">
      <em>Fig. 10.</em> Freya Ellis, Sorting Macroinvertebrates: 30 Oct 2023.
    </p>

    <div class="flex justify-center">
      <img src={macro6} alt="" />
    </div>

    <p class="text-white text-center font-mono text-base">
      <em>Fig. 11.</em> Freya Ellis, Identifying Macroinvertebrates: 30 Oct 2023.
    </p>

    <div class="flex justify-center">
      <img src={macro7} alt="" />
    </div>

    <p class="text-white text-center font-mono text-base">
      <em>Fig. 12.</em> Freya Ellis, Macroinvertebrates: 30 Oct 2023.
    </p>

    <div class="flex justify-center">
      <img src={macro8} alt="" />
    </div>

    <p class="text-white text-center font-mono text-base">
      <em>Fig. 13.</em> Freya Ellis, Sorted Macroinvertebrates: 30 Oct 2023.
    </p>

    <p class="text-white font-mono text-sm indent-8 pt-0">
      We tested the amount of benthic macroinvertebrates present in the creek
      water. On our initial visit, we placed a leaf pack in the water to allow
      colonization by macroinvertebrates. On the second visit, we removed the
      leaf pack and carefully brushed any macroinvertebrates from the leaves and
      other debris. We then identified and sorted the macroinvertebrates under a
      microscope according to predetermined classification groups. We counted
      the number of individuals in each group. This process allowed us to
      quantify the macroinvertebrate populations present by species.
    </p>
    <p class="text-white font-mono text-sm indent-8 m-0 pt-0">
      We then calculated both the Biotic Index and EPT Score for the site to
      evaluate water quality and ecosystem health. The Biotic Index is a measure
      of the average tolerance value of the macroinvertebrates present. We
      calculated this by first multiplying the count for each species by its
      respective Taxon Tolerance Level. We then summed these weighted counts and
      divided by the total number of individuals sampled. Generally speaking,
      sites with a lower Biotic Index (less than 3.75) indicate higher water
      quality and less organic pollution due to a community composition of more
      sensitive species.
    </p>
    <p class="text-white font-mono text-sm indent-8 m-0 pt-0">
      The EPT Score provides a measure of the relative abundance of certain
      pollution-sensitive macroinvertebrate orders - Ephemeroptera (Mayflies),
      Plecoptera (Stoneflies), and Trichoptera (Caddisflies). These three orders
      are considered to be among the most sensitive to pollution. We calculated
      the EPT Score by summing the counts of individuals from these three orders
      and dividing by the total count of all individuals sampled. This result
      was then multiplied by 100 to express it as a percentage. Higher EPT
      Scores (greater than 50%) are taken to indicate higher water quality.
    </p>
    <p class="text-white font-mono text-sm indent-8">
      We tested macroinvertebrate populations because their composition and
      relative abundances provide insight into the overall health of the aquatic
      ecosystem. The sensitivity and feeding groups represented can offer clues
      about factors like substrate composition, availability of food resources,
      and the ability of the site to support dependent wildlife. For example, a
      sample rich in shredders from a pool area with sandy substrate may suggest
      that area functions well as a retention zone for organic materials. The
      diversity of species sampled can also inform whether the site can sustain
      local amphibian, fish, bird and other populations.<sup>7,8</sup>
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <strong>Analysis and Conclusions</strong>
    </p>
    <p class="text-white font-mono text-sm indent-8 pt-0">
      The average water temperature we observed was 10.9 degrees Celsius. The
      adequate range for salmon health is between 5 to 25 degrees Celsius, with
      lower temperatures (5 to 13 degrees Celsius) generally being more
      beneficial. This data point fits comfortably within this ideal range. This
      indicates that the salmon will be kept at an optimal temperature, allowing
      them to reap the associated benefits, such as higher macroinvertebrate
      populations and avoidance of heat-related mortality. The average water
      temperature over the period from Fall 2016 to Fall 2023 is 9.502594697
      degrees Celsius.<sup>9</sup> This year's data point of 10.9 degrees Celsius
      is significantly higher than the long-term average temperature. However, this
      observation remains well within the ideal range for salmonid health. The water
      temperature has been rising steadily since 2019 based on our measurements.
      While this increasing trend is not currently a major cause of concern, as the
      rise has been slow and temperatures remain far from dangerous levels, it is
      a pattern that merits ongoing monitoring in the coming years. The water temperature
      at Hyla Woods has consistently been at a safe level throughout the duration
      of our testing. It continues to provide a suitable environment for salmon health.
      We should maintain surveillance of temperature readings to confirm this favorable
      condition persists.
    </p>

    <div class="flex justify-center">
      <img src={temp_graph} alt="" />
    </div>

    <p class="text-white text-center font-mono text-base">
      <em>Fig. 14.</em> Temperature Graph
    </p>

    <p class="text-white font-mono text-sm indent-8">
      The average turbidity level we observed at our testing site was 5
      Nephelometric Turbidity Units (NTU). The adequate turbidity range for
      salmon health and survival, as established by fisheries biologists and
      water quality experts, is less than 25 NTU, with lower cloudiness or
      turbidity levels being preferable. This particular data point of 5 NTU
      fits fantastically within the recommended turbidity range for salmon. This
      indicates that the salmon inhabiting the waters near our testing site will
      be experiencing an extremely healthy turbidity environment that avoids all
      of the potential issues and stressors that can arise when turbidity is at
      high levels. The average turbidity reading over the time period from Fall
      2016 to Fall 2023, encompassing the collective multiple testing events
      during that time frame, is 6.375 NTU. This year's data point of 5 NTU, is
      lower than the overall multi-year average turbidity. However, it is
      probable that the higher outliers observed in 2019 and 2020 skewed the
      long-term average upward somewhat. The turbidity level does appear to have
      been falling gradually since 2020 based on our measurements. Nonetheless,
      the downward trend is not necessarily statistically significant, as the
      fluctuations seem to have been primarily driven by those temporarily
      elevated turbidity readings in 2019 and 2020 rather than an underlying
      long-term decrease. Despite some variations from year to year, the
      turbidity levels we have consistently measured at Hyla Woods Creek have
      reliably remained at a safe level that fully supports the health and
      well-being of salmon populations. Our testing confirms that the turbidity
      at this location continues to be well within the optimal range for these
      fish.
    </p>

    <div class="flex justify-center">
      <img src={turbid_graph} alt="" />
    </div>

    <p class="text-white text-center font-mono text-base">
      <em>Fig. 15.</em> Turbidity Graph
    </p>

    <p class="text-white font-mono text-sm indent-8">
      The dissolved oxygen (DO) level observed at Hyla Woods was 9 parts per
      million (ppm). The adequate range for salmon health according to
      scientific research is between 8-12 ppm, with higher DO concentrations
      being preferable. At 9 ppm, the data point collected falls comfortably in
      the middle of this established range. This indicates that the salmon
      present will have sufficient oxygen available to carry out vital metabolic
      processes such as processing food intake for energy and building new
      cells, ensuring their overall health and viability. The average DO level
      measured over the period from Fall 2016 to Fall 2023 was calculated to be
      9.493915719 ppm. The data point of 9 ppm collected this year is slightly
      lower than this long-term mean, though still well within the ideal range
      for maintaining salmonid health and productivity. No discernible trends
      are evident from analyzing the DO data collected annually over the past
      several years, which instead appears to fluctuate within a relatively
      narrow band without any consistent increases or decreases. The DO levels
      observed at Hyla Woods have consistently remained at levels deemed safe to
      support salmon according to scientific consensus. Continued monitoring of
      this parameter is prudent to confirm conditions remain suitable going
      forward. However, given the data point gathered is in the middle of the
      optimal range and no issues have been identified previously, it can be
      reasonably concluded the water quality currently poses no threat to the
      salmon population inhabiting Hyla Woods. Ongoing testing will help verify
      this positive finding into the future.
    </p>

    <div class="flex justify-center">
      <img src={do_graph} alt="" />
    </div>

    <p class="text-white text-center font-mono text-base">
      <em>Fig. 16.</em> Dissolved Oxygen Graph
    </p>

    <p class="text-white font-mono text-sm indent-8">
      Based on our observations, we found that the average pH level recorded was
      6.4. It is important to note that when it comes to the health of salmon, a
      pH range of 6.0 to 8.0 is considered adequate. However, a pH level around
      7.0 is generally regarded as optimal for their well-being. Taking this
      into consideration, it can be concluded that the recorded data point of
      6.4 comfortably falls within the recommended range for salmon health.
      Although slightly acidic, it still remains within an acceptable parameter
      and should not pose any significant concerns for their overall welfare.
      This information suggests that the salmon will be carefully maintained at
      an optimal pH level. By doing so, it ensures that there will be no
      interference with the essential biochemical reactions occurring within the
      aquatic ecosystem. This is crucial as it prevents any potential harm or
      mortality of other aquatic organisms present in the environment.
      Throughout the time period from Fall 2016 to Fall 2023, the average water
      temperature has been calculated to be 6.454569129. It is worth noting that
      this year's data point of 6.4 is slightly lower than the average. However,
      it is important to highlight that this deviation is negligible and does
      not pose any significant concerns for the health and well-being of
      salmonid species. The recorded temperature still falls well within the
      ideal range that supports their optimal growth and overall health. Over
      the course of the eight years that we have been visiting Hyla Woods, an
      interesting observation can be made regarding the pH value. It has
      remained remarkably consistent, hovering around 6.5. While this indicates
      a slightly acidic nature, it is worth mentioning that the pH levels at
      Hyla Woods have consistently remained within a safe range throughout our
      testing period. Maintaining a stable pH level is crucial for the overall
      health and well-being of ecosystems. A slightly acidic pH can be
      attributed to various factors such as soil composition, vegetation types,
      and other environmental factors specific to Hyla Woods. Despite this
      slight acidity, there is no cause for significant concern as it falls
      within acceptable limits. The fact that these levels have remained
      relatively unchanged over an extended period of time showcases the
      stability and resilience of Hyla Woods' ecosystem. This consistency also
      suggests that the natural processes occurring within this environment are
      effectively maintaining a balanced pH level. It is important to continue
      monitoring these pH levels periodically to ensure they do not deviate
      significantly from their current state. By doing so, we can gain further
      insights into how Hyla Woods' ecological system is evolving and respond
      accordingly if any changes are observed in order to maintain its long-term
      sustainability.
    </p>

    <div class="flex justify-center">
      <img src={ph_graph} alt="" />
    </div>

    <p class="text-white text-center font-mono text-base">
      <em>Fig. 17.</em> pH Graph
    </p>

    <p class="text-white font-mono text-sm indent-8">
      Based on our observations, the average Biotic Index that we recorded was
      determined to be 3.76. It is important to note that for optimal salmon
      health, the recommended range for the Biotic Index is below 5. In
      particular, lower Biotic Indices, such as those below 3. 75, are
      considered more favorable in terms of maintaining excellent salmon health.
      Taking this into consideration, it is worth highlighting that the data
      point we analyzed falls comfortably within this recommended range.
      Although it deviates slightly from being classified as an excellent value,
      it remains an extremely close approximation and indicates a very positive
      level of environmental quality for salmon habitat.These findings strongly
      suggest that the creek ecosystem is in a notably robust state, as the
      presence of these creatures indicates an environment that supports their
      survival. This is particularly significant because these organisms are
      highly sensitive to adverse conditions, and their thriving presence
      implies favorable conditions within the creek. It is noteworthy to mention
      that over the span of time from Fall 2016 to Fall 2023, the average Biotic
      Index stands at a commendable 3.934791769. This index serves as an
      important measure of overall ecological health and further confirms the
      positive state of the creek's ecosystem during this period. The data point
      for this year, which stands at 3.76, shows a slight decrease compared to
      the average value. This decrease indicates that the overall tolerance of
      macroinvertebrates has decreased, which can be considered a positive
      outcome in terms of environmental health. It is worth noting that this
      value does not exhibit any discernible trends and appears to fluctuate
      without any specific pattern or reason. The Biotic Index, which is a
      measure of the overall ecological health and diversity of an ecosystem,
      has consistently demonstrated positive results at Hyla Woods. The index
      has maintained a commendable level, indicating a thriving and
      well-balanced environment. Moreover, our ongoing monitoring efforts
      reaffirm that the ecosystem's health remains at an excellent level,
      ensuring the sustainability of its various components. This bodes well for
      the continued success and preservation of Hyla Woods' biodiversity in the
      long term.
    </p>

    <div class="flex justify-center">
      <img src={biotic_graph} alt="" />
    </div>

    <p class="text-white text-center font-mono text-base">
      <em>Fig. 18.</em> Biotic Index Graph
    </p>

    <p class="text-white font-mono text-sm indent-8">
      Based on our observations, the average EPT Score that we have encountered
      is 60. 1. It is important to note that when it comes to assessing the
      health of salmon, an adequate range for their well-being is considered to
      be greater than 50. In this case, a higher EPT Score indicates better
      health for the salmon. Hence, this particular data point aligns well
      within the acceptable range and showcases positive results in terms of
      salmon health assessment. The presence of these three sensitive creatures
      in the creek is a strong indication of its overall health and vitality. It
      suggests that the conditions in the creek are favorable and able to
      support the survival of these creatures, which are known to be highly
      sensitive to changes in their environment. This is an encouraging sign, as
      it indicates that the creek has maintained a relatively stable and healthy
      ecosystem. Furthermore, when examining the average EPT (Ephemeroptera,
      Plecoptera, and Trichoptera) Score over a significant period of time from
      Fall 2016 to Fall 2023, it was found to be 66.42715661. The EPT Score is
      widely used as an indicator of water quality and ecological integrity in
      aquatic ecosystems. This score represents a moderate to good quality
      rating for the creek. By considering both the presence of sensitive
      creatures and the EPT Score, we can conclude that the overall condition of
      this creek is quite healthy. These findings provide valuable insights into
      its ecological well-being and serve as evidence that efforts made towards
      maintaining water quality have been successful thus far. The data point
      recorded this year, which stands at 60.1, is slightly lower than the
      average value. However, it is important to note that this deviation should
      not be a cause for concern as this particular data point falls well within
      the ideal range for maintaining optimal health in salmonid populations. It
      indicates that the overall health and well-being of the salmonid species
      are still being adequately maintained, and there is no immediate need for
      intervention or adjustment in their care or environment. The value dropped
      a fair bit from 2020 to 2022, and appears to be staying this way. This
      indicates that some factor may have influenced the creek during this time
      period, but since all of the other variables stayed constant, this may
      just have been a result of error in the data. The EPT at Hyla Woods has
      been at an excellent level for the time we have tested there, and
      continues to do so.
    </p>

    <div class="flex justify-center">
      <img src={ept_graph} alt="" />
    </div>

    <p class="text-white text-center font-mono text-base">
      <em>Fig. 19.</em> EPT Score Graph
    </p>

    <p class="text-white font-mono text-sm indent-8">
      The consistent positive scores across various measures indicate that the
      steam's health is not only currently in a good state but also has the
      potential to sustain its well-being in the long term. The absence of any
      significant negative trends suggests that the ecosystem within the steam
      is resilient and capable of maintaining its ecological balance. The
      findings from Hyla Woods and this paper provide a comprehensive
      understanding of the steam's health by considering multiple factors such
      as water quality, biodiversity, and overall ecosystem dynamics. The
      excellent scores obtained in these assessments highlight the effectiveness
      of conservation efforts and management practices implemented within the
      steam. Moreover, it is worth noting that stable or slightly fluctuating
      values indicate a certain level of equilibrium within the stream's
      ecosystem. However, it is important to acknowledge that continuous
      monitoring and periodic reassessment are crucial to ensure that any
      potential negative trends are promptly identified and addressed. Overall,
      we can be confident in saying that, for the time being, Hyla Woods and
      Lousignont Creek are healthy and thriving, and will hopefully become great
      homes for the next generation of salmon.
    </p>
    <p class="text-white font-mono text-sm indent-8 m-0">
      In conclusion, Hyla Woods serves as a poignant reminder of the intricate
      web of life and our responsibility to protect and preserve it. The
      mesmerizing ecosystem found within its lush green canopy calls upon us to
      reevaluate our actions and embark on a path of sustainability. As we
      navigate through the delicate balance of nature, we must nurture a deep
      empathy towards the interconnectedness of all living beings. Hyla Woods
      teaches us that every choice we make, no matter how small, can have
      far-reaching consequences for both the environment and future generations.
      By acknowledging this interdependence and cultivating a sense of
      stewardship, we pave the way for a harmonious coexistence with nature. Let
      us heed these lessons from Hyla Woods as we strive to foster an
      ecologically-conscious society that values biodiversity, embraces
      sustainable practices, and cherishes the magnificence of our planet Earth.
    </p>
    <br />
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >1. “Site L Photos.” Google Drive, 16 Oct. 2023,
        drive.google.com/drive/folders/1zE_UNWP4ct23SsqIa5OINjf5FSZn2av9.
        Accessed 9 Nov. 2023.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >2. Hayes, Peter, and Pam Hayes. Hyla Woods. hylawoods.com. Accessed 9
        Nov. 2023.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >3. Salmon Strongholds.” Google Docs, 17 Oct. 2023,
        docs.google.com/document/d/1_B4eDWzsgJ7Q_FcrAaDbOQcOmyyYHQouKnV58t0kC38/edit.
        Accessed 9 Nov. 2023.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >4. “Hyla Woods Reference Table.” Google Docs, 7 Nov. 2023,
        docs.google.com/document/d/1z-R5swp6ADlDye46el8cSfiOp122jWnADTV6NcdY210/edit.
        Accessed 9 Nov. 2023.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >5. Banerjee Murthy, Vikas. “Water Quality Framed Notes.” Google Docs,
        26 Sept. 2023,
        docs.google.com/document/d/1rB3km3YMkqYLlyRKwh3ClVXhAqrGro6BZiGnpuX_PPE/edit.
        Accessed 9 Nov. 2023.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >6. “Water Quality Reading.” Google Drive,
        drive.google.com/file/d/15LKml1gAIuT8vEAUxWsGyK4rM5sz_fXb/view?usp=drivesdk.
        Accessed 9 Nov. 2023.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >7. Banerjee Murthy, Vikas. “River Webs Notes 1.” Google Drive, 22 Nov.
        2023,
        https://drive.google.com/file/d/14mpyq943ba4nJAD4cG6ly8E6YWALhTCv/view?usp=drivesdk.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >8. Banerjee Murthy, Vikas. “River Webs Notes 2.” Google Drive, 22 Nov.
        2023,
        drive.google.com/file/d/1YrLaNy02q95LUjkiymwVmZSSDvqR9SVh/view?usp=drivesdk.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >9. Lowes, Jesse. “Hyla Woods Database.” Google Sheets, season-01 2014,
        docs.google.com/spreadsheets/d/1WRpBgLSrGmeJGv2yurNeXafvWXYXkT-Gfw4m341IYp0/edit.
        Accessed 9 Nov. 2023.</sup
      >
    </p>
  </details>
</div>

<h2 class="text-white font-mono text-[clamp(1rem,20vw,1.5rem)] mt-3">Creative Endeavors</h2>

<div
  class="inline-flex flex-wrap flex-row gap-1 justify-between content-stretch w-auto h-auto
  border-5 border-aroace-dark-blue rounded-lg p-1 m-3
  bg-[hsl(215.09_46.09%_22.55%)]
  bg-[repeating-linear-gradient(transparent,_transparent_50px,_rgba(0,0,0,.12)_50px,_rgba(0,0,0,.12)_53px,_transparent_53px,_transparent_63px,_rgba(0,0,0,.12)_63px,_rgba(0,0,0,.12)_66px,_transparent_66px,_transparent_116px,_rgba(0,0,0,.15)_116px,_rgba(0,0,0,.15)_166px,_rgba(255,255,255,.05)_166px,_rgba(255,255,255,.05)_169px,_rgba(0,0,0,.15)_169px,_rgba(0,0,0,.15)_179px,_rgba(255,255,255,.05)_179px,_rgba(255,255,255,.05)_182px,_rgba(0,0,0,.15)_182px,_rgba(0,0,0,.15)_232px,_transparent_232px),repeating-linear-gradient(270deg,_transparent,_transparent_50px,_rgba(0,0,0,.12)_50px,_rgba(0,0,0,.12)_53px,_transparent_53px,_transparent_63px,_rgba(0,0,0,.12)_63px,_rgba(0,0,0,.12)_66px,_transparent_66px,_transparent_116px,_rgba(0,0,0,.15)_116px,_rgba(0,0,0,.15)_166px,_rgba(255,255,255,.05)_166px,_rgba(255,255,255,.05)_169px,_rgba(0,0,0,.15)_169px,_rgba(0,0,0,.15)_179px,_rgba(255,255,255,.05)_179px,_rgba(255,255,255,.05)_182px,_rgba(0,0,0,.15)_182px,_rgba(0,0,0,.15)_232px,_transparent_232px),repeating-linear-gradient(125deg,_transparent,_transparent_2px,_rgba(0,0,0,.06)_2px,_rgba(0,0,0,.06)_3px,_transparent_3px,_transparent_5px,_rgba(0,0,0,.06)_5px)]
"
>
  <my-button
    class="inline-flex justify-center content-center m-2.5 pl-8 pr-8 pt-2 pb-2
    border-5 border-aroace-yellow rounded-lg bg-aroace-light-blue
    transition-[width, height] duration-500 ease-in-out hover:scale-110"
    role="button"
    id="my-button-b1"
    tabindex="-1"
    onclick={mybutton_b1}
    onkeydown={mybutton_b1}
    onmouseover={() => change_color("my-button-b1", "#9FCCE7")}
    onfocus={() => change_color("my-button-b1", "#9FCCE7")}
    onmouseout={() => change_color("my-button-b1", "#5faad7")}
    onblur={() => change_color("my-button-b1", "#5faad7")}
  >
    <div
      class="inline-flex justify-evenly content-start
    text-aroace-dark-blue font-mono xs text-center"
    >
      Editing Projects
    </div>
  </my-button>
  <my-button
    class="inline-flex justify-center content-center m-2.5 pl-8 pr-8 pt-2 pb-2
    border-5 border-aroace-yellow rounded-lg bg-aroace-light-blue
    transition-[width, height] duration-500 ease-in-out hover:scale-110"
    role="button"
    id="my-button-b2"
    tabindex="-1"
    onclick={mybutton_b2}
    onkeydown={mybutton_b2}
    onmouseover={() => change_color("my-button-b2", "#9FCCE7")}
    onfocus={() => change_color("my-button-b2", "#9FCCE7")}
    onmouseout={() => change_color("my-button-b2", "#5faad7")}
    onblur={() => change_color("my-button-b2", "#5faad7")}
  >
    <div
      class="inline-flex justify-evenly content-start
    text-aroace-dark-blue font-mono xs text-center"
    >
      Essay Samples
    </div>
  </my-button>
  <my-button
    class="inline-flex justify-center content-center m-2.5 pl-8 pr-8 pt-2 pb-2
    border-5 border-aroace-yellow rounded-lg bg-aroace-light-blue
    transition-[width, height] duration-500 ease-in-out hover:scale-110"
    role="button"
    id="my-button-b3"
    tabindex="-1"
    onclick={mybutton_b3}
    onkeydown={mybutton_b3}
    onmouseover={() => change_color("my-button-b3", "#9FCCE7")}
    onfocus={() => change_color("my-button-b3", "#9FCCE7")}
    onmouseout={() => change_color("my-button-b3", "#5faad7")}
    onblur={() => change_color("my-button-b3", "#5faad7")}
  >
    <div
      class="inline-flex justify-evenly content-start
    text-aroace-dark-blue font-mono xs text-center"
    >
      Worldbuilding
    </div>
  </my-button>
</div>
<br />

<div class="hidden m-2" id="editing">
  <h2 class="text-white font-mono text-[clamp(1rem,20vw,1.5rem)] mt-3">Editing Projects</h2>
  <p class="text-white font-mono text-xl">
    Ink and Blood: The Lines That Divide Us
  </p>
  <div
    class="inline-flex flex-row gap-1 justify-between w-full h-auto
    border-5 border-aroace-dark-blue rounded-lg p-1 m-3
  bg-[hsl(215.09_46.09%_22.55%)]
    bg-[repeating-linear-gradient(transparent,_transparent_50px,_rgba(0,0,0,.12)_50px,_rgba(0,0,0,.12)_53px,_transparent_53px,_transparent_63px,_rgba(0,0,0,.12)_63px,_rgba(0,0,0,.12)_66px,_transparent_66px,_transparent_116px,_rgba(0,0,0,.15)_116px,_rgba(0,0,0,.15)_166px,_rgba(255,255,255,.05)_166px,_rgba(255,255,255,.05)_169px,_rgba(0,0,0,.15)_169px,_rgba(0,0,0,.15)_179px,_rgba(255,255,255,.05)_179px,_rgba(255,255,255,.05)_182px,_rgba(0,0,0,.15)_182px,_rgba(0,0,0,.15)_232px,_transparent_232px),repeating-linear-gradient(270deg,_transparent,_transparent_50px,_rgba(0,0,0,.12)_50px,_rgba(0,0,0,.12)_53px,_transparent_53px,_transparent_63px,_rgba(0,0,0,.12)_63px,_rgba(0,0,0,.12)_66px,_transparent_66px,_transparent_116px,_rgba(0,0,0,.15)_116px,_rgba(0,0,0,.15)_166px,_rgba(255,255,255,.05)_166px,_rgba(255,255,255,.05)_169px,_rgba(0,0,0,.15)_169px,_rgba(0,0,0,.15)_179px,_rgba(255,255,255,.05)_179px,_rgba(255,255,255,.05)_182px,_rgba(0,0,0,.15)_182px,_rgba(0,0,0,.15)_232px,_transparent_232px),repeating-linear-gradient(125deg,_transparent,_transparent_2px,_rgba(0,0,0,.06)_2px,_rgba(0,0,0,.06)_3px,_transparent_3px,_transparent_5px,_rgba(0,0,0,.06)_5px)]
"
  >
    <iframe
      title="Ink and Blood, The Lines That Divide Us"
      class="m-2.5 p-1.25 border-solid bg-aroace-yellow rounded-lg"
      width="270"
      height="180"
      src="https://www.youtube.com/embed/S4SFCWFjZcs"
      allow="fullscreen"
    >
    </iframe>

    <div
      class="inline-flex flex-col flex-wrap justify-start content-around items-normal
      h-auto w-auto text-aroace-dark-blue font-mono text-xs m-2.5 p-2.5
    border-5 border-aroace-orange rounded-lg
    bg-aroace-light-blue"
    >
      <strong class="pb-1">Nov 11, 2025</strong>
      <span class="pb-px"
        >Original creative writing piece by Noa Ellis, presented in kinetic
        typography format</span
      >
      <span class="pb-px"
        >Inspired by the prompt: How do the borders drawn by colonial powers
        without the necessary considerations for the long-term impacts, or in
        some cases, intentional sabotage, lead to decades-long instabilities in
        regions that had not previously been unstable?</span
      >
      <span class="pb-px"
        >Music by Whitesand (Martynas Lau) - My Spirit Is Free (2018)</span
      >
    </div>
  </div>

  <p class="text-white font-mono text-xl">1844 FRC 2025 Season Recap</p>
  <div
    class="inline-flex flex-row gap-1 justify-between w-full h-auto
  border-5 border-aroace-dark-blue rounded-lg p-1 m-3
  bg-[hsl(215.09_46.09%_22.55%)]
  bg-[repeating-linear-gradient(transparent,_transparent_50px,_rgba(0,0,0,.12)_50px,_rgba(0,0,0,.12)_53px,_transparent_53px,_transparent_63px,_rgba(0,0,0,.12)_63px,_rgba(0,0,0,.12)_66px,_transparent_66px,_transparent_116px,_rgba(0,0,0,.15)_116px,_rgba(0,0,0,.15)_166px,_rgba(255,255,255,.05)_166px,_rgba(255,255,255,.05)_169px,_rgba(0,0,0,.15)_169px,_rgba(0,0,0,.15)_179px,_rgba(255,255,255,.05)_179px,_rgba(255,255,255,.05)_182px,_rgba(0,0,0,.15)_182px,_rgba(0,0,0,.15)_232px,_transparent_232px),repeating-linear-gradient(270deg,_transparent,_transparent_50px,_rgba(0,0,0,.12)_50px,_rgba(0,0,0,.12)_53px,_transparent_53px,_transparent_63px,_rgba(0,0,0,.12)_63px,_rgba(0,0,0,.12)_66px,_transparent_66px,_transparent_116px,_rgba(0,0,0,.15)_116px,_rgba(0,0,0,.15)_166px,_rgba(255,255,255,.05)_166px,_rgba(255,255,255,.05)_169px,_rgba(0,0,0,.15)_169px,_rgba(0,0,0,.15)_179px,_rgba(255,255,255,.05)_179px,_rgba(255,255,255,.05)_182px,_rgba(0,0,0,.15)_182px,_rgba(0,0,0,.15)_232px,_transparent_232px),repeating-linear-gradient(125deg,_transparent,_transparent_2px,_rgba(0,0,0,.06)_2px,_rgba(0,0,0,.06)_3px,_transparent_3px,_transparent_5px,_rgba(0,0,0,.06)_5px)]
"
  >
    <iframe
      title="1844 FRC 2025 Season Recap"
      class="m-2.5 p-1.25 border-solid bg-aroace-yellow rounded-lg"
      width="270"
      height="180"
      src="https://www.youtube.com/embed/aNfTetDGJ7g"
      allow="fullscreen"
    >
    </iframe>

    <div
      class="inline-flex flex-col flex-wrap justify-start content-around items-normal
      h-auto w-auto text-aroace-dark-blue font-mono text-xs m-2.5 p-2.5
    border-5 border-aroace-orange rounded-lg
    bg-aroace-light-blue"
    >
      <strong class="pb-1">Apr 23, 2025</strong>
      <span class="pb-px"
        >Recap of rookie team FRC1844's 2025 season and their main season-robot
        Private</span
      >
      <span class="pb-px"
        >Following the design, creation, and competitive run of FIRST Robotics
        Competition team 1844: the Eggineers, rookie team of FRC1540: the
        Flaming Chickens</span
      >
      <span class="pb-px">Music by Creo - Unveil (2019)</span>
    </div>
  </div>

  <p class="text-white font-mono text-xl">Meet 1844, The EGGINEERS!</p>
  <div
    class="inline-flex flex-row gap-1 justify-between w-full h-auto
    border-5 border-aroace-dark-blue rounded-lg p-1 m-3
  bg-[hsl(215.09_46.09%_22.55%)]
    bg-[repeating-linear-gradient(transparent,_transparent_50px,_rgba(0,0,0,.12)_50px,_rgba(0,0,0,.12)_53px,_transparent_53px,_transparent_63px,_rgba(0,0,0,.12)_63px,_rgba(0,0,0,.12)_66px,_transparent_66px,_transparent_116px,_rgba(0,0,0,.15)_116px,_rgba(0,0,0,.15)_166px,_rgba(255,255,255,.05)_166px,_rgba(255,255,255,.05)_169px,_rgba(0,0,0,.15)_169px,_rgba(0,0,0,.15)_179px,_rgba(255,255,255,.05)_179px,_rgba(255,255,255,.05)_182px,_rgba(0,0,0,.15)_182px,_rgba(0,0,0,.15)_232px,_transparent_232px),repeating-linear-gradient(270deg,_transparent,_transparent_50px,_rgba(0,0,0,.12)_50px,_rgba(0,0,0,.12)_53px,_transparent_53px,_transparent_63px,_rgba(0,0,0,.12)_63px,_rgba(0,0,0,.12)_66px,_transparent_66px,_transparent_116px,_rgba(0,0,0,.15)_116px,_rgba(0,0,0,.15)_166px,_rgba(255,255,255,.05)_166px,_rgba(255,255,255,.05)_169px,_rgba(0,0,0,.15)_169px,_rgba(0,0,0,.15)_179px,_rgba(255,255,255,.05)_179px,_rgba(255,255,255,.05)_182px,_rgba(0,0,0,.15)_182px,_rgba(0,0,0,.15)_232px,_transparent_232px),repeating-linear-gradient(125deg,_transparent,_transparent_2px,_rgba(0,0,0,.06)_2px,_rgba(0,0,0,.06)_3px,_transparent_3px,_transparent_5px,_rgba(0,0,0,.06)_5px)]
"
  >
    <iframe
      title="Meet 1844, The EGGINEERS!"
      class="m-2.5 p-1.25 border-solid bg-aroace-yellow rounded-lg"
      width="270"
      height="180"
      src="https://www.youtube.com/embed/sk3-40_Vvy0"
      allow="fullscreen"
    >
    </iframe>

    <div
      class="inline-flex flex-col flex-wrap justify-start content-around items-normal
      h-auto w-auto text-aroace-dark-blue font-mono text-xs m-2.5 p-2.5
    border-5 border-aroace-orange rounded-lg
    bg-aroace-light-blue"
    >
      <strong class="pb-1">Feb 6, 2025</strong>
      <span class="pb-px"
        >Introduction to rookie team FRC1844, following their win at FRC1540's
        2025 BunnyBots</span
      >
      <span class="pb-px"
        >An introduction to the FIRST Robotics Competition team 1844: the
        Eggineers, rookie team of FRC1540: the Flaming Chickens; includes
        interviews with prominent FRC1540 members</span
      >
      <span class="pb-px">Music by TheFatRat - Unity (2016)</span>
    </div>
  </div>

  <p class="text-white font-mono text-xl">1844 BunnyBots Recap</p>
  <div
    class="inline-flex flex-row gap-1 justify-between w-full h-auto
    border-5 border-aroace-dark-blue rounded-lg p-1 m-3
    bg-[hsl(215.09_46.09%_22.55%)]
    bg-[repeating-linear-gradient(transparent,_transparent_50px,_rgba(0,0,0,.12)_50px,_rgba(0,0,0,.12)_53px,_transparent_53px,_transparent_63px,_rgba(0,0,0,.12)_63px,_rgba(0,0,0,.12)_66px,_transparent_66px,_transparent_116px,_rgba(0,0,0,.15)_116px,_rgba(0,0,0,.15)_166px,_rgba(255,255,255,.05)_166px,_rgba(255,255,255,.05)_169px,_rgba(0,0,0,.15)_169px,_rgba(0,0,0,.15)_179px,_rgba(255,255,255,.05)_179px,_rgba(255,255,255,.05)_182px,_rgba(0,0,0,.15)_182px,_rgba(0,0,0,.15)_232px,_transparent_232px),repeating-linear-gradient(270deg,_transparent,_transparent_50px,_rgba(0,0,0,.12)_50px,_rgba(0,0,0,.12)_53px,_transparent_53px,_transparent_63px,_rgba(0,0,0,.12)_63px,_rgba(0,0,0,.12)_66px,_transparent_66px,_transparent_116px,_rgba(0,0,0,.15)_116px,_rgba(0,0,0,.15)_166px,_rgba(255,255,255,.05)_166px,_rgba(255,255,255,.05)_169px,_rgba(0,0,0,.15)_169px,_rgba(0,0,0,.15)_179px,_rgba(255,255,255,.05)_179px,_rgba(255,255,255,.05)_182px,_rgba(0,0,0,.15)_182px,_rgba(0,0,0,.15)_232px,_transparent_232px),repeating-linear-gradient(125deg,_transparent,_transparent_2px,_rgba(0,0,0,.06)_2px,_rgba(0,0,0,.06)_3px,_transparent_3px,_transparent_5px,_rgba(0,0,0,.06)_5px)]
    "
  >
    <iframe
      title="1844 BunnyBots Recap"
      class="m-2.5 p-1.25 border-solid bg-aroace-yellow rounded-lg"
      width="270"
      height="180"
      src="https://www.youtube.com/embed/e7vN35rVPeI"
      allow="fullscreen"
    >
    </iframe>

    <div
      class="inline-flex flex-col flex-wrap justify-start content-around items-normal
      h-auto w-auto text-aroace-dark-blue font-mono text-xs m-2.5 p-2.5
    border-5 border-aroace-orange rounded-lg
    bg-aroace-light-blue"
    >
      <strong class="pb-1">Feb 6, 2025</strong>
      <span class="pb-px"
        >Recap of FRC1844's off-season and competition win at FRC1540's
        BunnyBots 2025</span
      >
      <span class="pb-px"
        >Following the off-season design, creation, and competition run of FIRST
        Robotics Competition team 1844: the Eggineers, rookie team of FRC1540
        and their tournament win at BunnyBots 2025, hosted by FRC1540</span
      >
      <span class="pb-px"
        >Music by Thomas Bergersen, Two Steps From Hell - Victory (2017)</span
      >
    </div>
  </div>
</div>

<div class="hidden m-2" id="essays">
  <h2 class="text-white font-mono text-[clamp(1rem,20vw,1.5rem)] mt-3">Essays</h2>
  <details>
    <summary class="text-white font-mono text-xl mb-0">
      &nbsp;Emotionally Abusive Parenting and the Societal Structures That
      Sanction It - 11 Nov 2025
    </summary>
    <p class="text-white font-mono text-sm indent-8 mb-0">
      The maxim: <em
        >“all children deserve parents, but not all parents deserve children”</em
      >
      is not hyperbole. It is a moral warning that exposes a fundamental failure
      embedded in contemporary social norms: a society that grants adults who have
      never cultivated emotional maturity near-automatic legitimacy as parents, while
      offering children with developing minds, vulnerable psyches, and forming identities
      no comparable protection from the emotional incompetence, negligence, or outright
      cruelty of those caregivers. Emotional abuse is not an aberration but a predictable
      outcome of cultural entitlement: the belief and societal pressure that adulthood
      alone qualifies a person for reproduction and parenthood, regardless of psychological
      readiness or interest. Societal institutions, from extended families to religious
      communities to legal systems, expect children to endure whatever emotional
      volatility adults inflict upon them, while offering those same adults unearned
      authority and social immunity. This entitlement, combined with a chronic underestimation
      of the psychological labor required for parenting, creates fertile ground for
      the cycle of emotional harm to persist, not because abuse is invisible, but
      because society refuses to call it what it is.<sup>1</sup>
    </p>
    <p class="text-white font-mono text-sm indent-8 mb-0">
      Emotional abuse in parent-child relationships remains grotesquely
      normalized. Behaviors that would be condemned between adults are dismissed
      when inflicted on children, as though youth transforms cruelty into
      pedagogy. Parents weaponize shame, humiliation, gaslighting, and emotional
      withdrawal, then justify it as discipline or tradition.<sup>2</sup> The child
      is blamed for the parent’s outbursts. The parent’s insecurity becomes the child’s
      burden. Society applauds ‘strictness,’ mistaking control for care. This is
      not merely a ‘difficult upbringing’ or a ‘parenting style’; it is a form of
      psychological violence, yet it is often minimized, dismissed, or reframed,
      and the victims, lacking the language or power to defend themselves, internalize
      the idea that love is conditional, that security is unstable, that their worth
      hinges on appeasing an emotionally unpredictable authority. Children subjected
      to emotional abuse endure constant invalidation and humiliation, often rationalized
      as ‘toughening them up;’ manipulation, gaslighting, and coercion, treated as
      normal parental ‘guidance’; fear-based attachment, in which the caregiver is
      at once the source of sustenance and of psychological harm; and an erasure
      of emotional autonomy, where expressing needs is punished and suppressing them
      is rewarded. These behaviors are abusive, full stop, and the fact that they
      are not universally recognized as such is a testament to society’s collective
      willingness to prioritize parental comfort over children’s psychological safety.
    </p>
    <p class="text-white font-mono text-sm indent-8 mb-0">
      Children living under emotionally abusive parents are often trapped in an
      environment where psychological survival becomes their primary
      developmental task. Childhood for them is not a stage of exploration: it
      is a stage of survival. Their energy is diverted from growth toward
      protection. They learn to modulate their behavior not in service of
      exploring the world, but in service of avoiding parental retaliation. They
      master hypervigilance instead of curiosity. They understand to mute
      themselves instead of expressing themselves. The result is pathological
      hypervigilance as children develop finely tuned instincts to detect shifts
      in parental mood; stunted emotional development caused by the absence of
      safe emotional modeling; identity distortion, where the child internalizes
      the parent’s contempt and comes to believe it is self-generated truth;
      self-erasure, because visibility invites punishment; and attachment wounds
      that sabotage psychological stability and emotional literacy, as children
      oscillate between seeking comfort from and protecting themselves against
      the same adult, all the while learning that their feelings are
      unacceptable or irrelevant.<sup>3</sup> These outcomes are not developmental
      quirks; they are psychological injuries inflicted at an age when children lack
      any means of self-defense.
    </p>
    <p class="text-white font-mono text-sm indent-8 mb-0">
      The long-term psychological consequences of emotional abuse constitute a
      form of delayed devastation, lingering like ghosts. Adults raised in
      emotionally abusive homes often spend years, if not decades attempting to
      untangle themselves from beliefs and behaviors installed by immature or
      malicious caregivers, healing from psychological wounds that did not have
      to exist: enduring depression, anxiety, and complex trauma in the form of
      emotional dysregulation, dissociation, and self-blame,<sup>4</sup>
      extracted directly from parental volatility; chronic self-doubt and self-silencing,
      remnants of being trained to distrust others and one’s own perceptions, an
      especially cruel legacy of gaslighting; maladaptive relational patterns, ranging
      from people-pleasing to avoidance of any loving relationship, shaped by attachment
      wounds inflicted during formative years;<sup>5</sup> and a damaged sense
      of self, because they spent their childhoods being told, implicitly or
      explicitly, that they were not enough.<sup>6,7</sup> They are the
      predictable consequences of entrusting vulnerable children to caregivers
      who lack the capacity or the willingness to act with basic emotional
      responsibility, choosing power over compassion, control over connection.<sup
        >8</sup
      >
    </p>
    <p class="text-white font-mono text-sm indent-8 mb-0">
      A central driver of emotionally abusive parenting is emotional immaturity:
      an adult’s inability to regulate their own emotions, empathize with
      others, or differentiate their personal frustrations from their child’s
      needs.<sup>9</sup> However, emotional immaturity alone does not explain
      the scale of the problem. Emotional abuse persists not only because
      abusive parents exist, but because societal institutions protect them
      through the culturally sanctioned beliefs that: all adults are inherently
      fit to parent, reproduction is a social milestone rather than a personal
      choice, and children exist to fulfill adult desires, expectations, or
      identities.<sup>10</sup> Emotional abuse flourishes because communities protect
      parents at the expense of children: ‘respect your parents no matter what’ (translation:
      accept abuse quietly), ‘all families have problems’ (translation: your pain
      is ordinary and therefore unimportant), ‘parents know best’ (translation: your
      perception of mistreatment is invalid), ‘family matters are private’ (translation:
      stay silent even when you are being abused).
    </p>
    <p class="text-white font-mono text-sm indent-8 mb-0">
      One of society’s most insidious failures is the way it dehumanizes
      children. Children are frequently treated as decorative proof of
      adulthood, emotional trash bins, blank slates on which parents project
      insecurities, or subordinates who must obey without question. Children are
      people, not dolls to dress up for social approval, not emotional sponges
      to absorb a parent’s unresolved trauma, not lesser beings who exist to
      endure ridicule, disrespect, or authoritarian domination. They are people
      with memory, with dignity, with interior lives that are shaped, sometimes
      damaged, by every word, every gesture, every silence. Children remember,
      maybe not every detail, but the emotional reality? They remember all of
      it.<sup>11</sup>
    </p>
    <p class="text-white font-mono text-sm indent-8 mb-0">
      These narratives collectively ensure that abusive parents remain socially
      insulated while children are forced into complicity. They transform abuse
      from an individual failing into systemic negligence. In this framework,
      parenthood becomes a default status conferred by age, biology, or
      marriage, not by competence, willingness, or emotional preparedness.<sup
        >12,13</sup
      >Society offers little scrutiny of adults’ motivations for having
      children; instead, it glorifies parenthood and stigmatizes those who
      choose not to reproduce.<sup>14,15</sup> The irony is striking: adults who
      lack the emotional maturity to question social pressure or examine their
      motivations often become parents for reasons entirely divorced from
      readiness: to conform, to appease others, to fill a void, to live a
      script. Meanwhile, individuals who conscientiously evaluate whether they
      should become parents; those who resist pressure because they understand
      the gravity of raising a human being are often the ones most capable of
      providing care.<sup>16</sup> In this way, the unprepared are systematically
      elevated and the responsible side-eyed.
    </p>
    <p class="text-white font-mono text-sm indent-8 mb-0">
      To illustrate what emotionally competent parenting looks like, secure
      attachment theory provides a clear framework. Secure attachment is defined
      as a deep, emotional bond where the child feels safe, understood, and
      valued. It is focused on creating a strong, responsive, and trusting bond
      with the child, key practices including being physically close, responding
      sensitively to their cues, and maintaining a predictable and loving
      environment. According to attachment theory, children who form secure
      attachments with caregivers develop better emotional regulation, social
      competence, and resilience.<sup>17</sup> Securely attached children show
      lower levels of anxiety and depression. They also perform better
      academically and socially.<sup>18</sup> Incorporating secure attachment into
      parenting involves consistently meeting the child’s needs for comfort and security
      while also providing the freedom to explore their world from a secure base,
      which is done in three ways: responsiveness, consistency in structure, and
      autonomy-supporting.
    </p>
    <p class="text-white font-mono text-sm indent-8 mb-0">
      Responsive parenting means engaging with children in a consistent,
      sensitive, and emotionally warm way. This involves being present and
      empathetic to the child’s feelings and experiences, and responding in a
      timely, appropriate, and sensitive way to build a strong emotional bond.
      It involves observing and interpreting body language and then reacting to
      support their development and emotional well-being.<sup>19</sup> This is
      synonymous with being emotionally attuned as a parent, and helps children
      to learn to understand and manage their own emotions. Psychologist John
      Gottman coined the term “emotion coaching,” where parents validate
      emotions and guide children in managing them, linked to fewer behavioral
      problems and better peer relationships.<sup>20</sup> High emotional
      availability is also linked to secure attachment and resilience. Noticing
      and appropriately reacting to a child's needs is linked to better language
      development, emotional intelligence, and problem-solving skills,<sup
        >21</sup
      >
      and it is found that responsiveness predicts improvements in children’s cognitive
      and social development.<sup>22</sup> Warm communication helps build trust and
      openness. These parents do not seek to dominate. They seek to connect.
    </p>
    <p class="text-white font-mono text-sm indent-8 mb-0">
      Consistency in structure focuses on establishing clear rules,
      expectations, and routines, and following through with predictable and
      fair consequences, which helps children learn to regulate their behavior
      and develop emotional stability. This doesn’t mean being rigid, but rather
      being dependable. Children thrive in environments where they know what is
      expected. Consistency helps reduce anxiety and promotes self-discipline.<sup
        >23</sup
      >
      Baumrind’s research on parenting styles shows that authoritative parenting
      (high warmth, high structure) is linked with the most positive outcomes in
      children.<sup>24</sup> Inconsistent discipline is associated with
      behavioral problems.<sup>25</sup> These parents do not weaponize their authority.
      They use it to cultivate safety.
    </p>
    <p class="text-white font-mono text-sm indent-8 mb-0">
      Autonomy supportive parenting is a style that balances providing support
      with allowing children to develop independence, self-worth, and their own
      decision-making skills within clear boundaries. It values the child’s
      perspective, encourages independence, and allows age-appropriate choices.
      Supporting autonomy leads to higher self-esteem, motivation, and identity
      development.<sup>26,27</sup> Self-Determination Theory emphasizes autonomy
      as a core psychological need.<sup>28</sup> It has been found that
      autonomy-supportive parenting predicts higher academic performance and
      emotional well-being.<sup>29</sup> These parents do not insist on obedience.
      They encourage autonomy grounded in trust.
    </p>
    <p class="text-white font-mono text-sm indent-8 mb-0">
      Emotional abuse in parent-child relationships is not an inevitable
      byproduct of imperfect humanity: it is the outcome of a culture that
      grants adults unconditional authority and children conditional worth.
      Parenthood requires emotional regulation, empathy, introspection, and
      humility, but many parents never develop them, and yet, society treats
      parenthood as an unexamined expectation rather than a profound
      psychological responsibility.<sup>30</sup> The abuse is preventable, but preventing
      it requires dismantling the myth of parental entitlement, rejecting cultural
      norms that trivialize children’s suffering, and insisting that emotional maturity,
      not biology, not tradition, not social pressure, is the baseline requirement
      for raising a child. Until then, the cycle of harm will continue, leaving countless
      individuals to repair the damage inflicted by adults who should never have
      been entrusted with the responsibility of shaping a developing mind. Not all
      parents deserve children, and a society that refuses to acknowledge this truth
      is complicit in the harm that follows.
    </p>
    <hr />
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >1. American Academy of Pediatrics. “Psychological Maltreatment.”
        Pediatrics, vol. 130, no. 2, 2012, pp. 372–378,
        publications.aap.org/pediatrics/article/130/2/372/29936.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >2. Verywell Family. “What Is Emotional Child Abuse?” Verywell Family,
        www.verywellfamily.com/what-is-emotional-child-abuse-4157502.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >3. Verywell Health. “Can You Get PTSD from Emotional Abuse?” Verywell
        Health, www.verywellhealth.com/ptsd-from-emotional-abuse-5210626.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >4. Wright, Margaret O'Dougherty et al. “Childhood emotional
        maltreatment and later psychological distress among college students:
        the mediating role of maladaptive schemas.” Child abuse & neglect vol.
        33,1 (2009): 59-68. doi:10.1016/j.chiabu.2008.12.007</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >5. Șițoiu, A., & Pânișoară, G. (2022). Emotional Regulation in Parental
        Optimism—The Influence of Parenting Style. Sustainability, 14(8), 4509.
        https://doi.org/10.3390/su14084509</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >6. Tarabulsy, George M., et al. “Footprints from Childhood: Intra-
        versus Extra-Familial Childhood Maltreatment and Its Association to
        Adult Attachment Organization.” BMC Psychology, vol. 13, 2025,
        bmcpsychology.biomedcentral.com/articles/10.1186/s40359-025-03001-7.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >7. De Boer, Arianne, et al. “Long-Term Emotional Consequences of
        Parental Alienation Exposure in Children: A Systematic Review.” =, 2021,
        link.springer.com/article/10.1007/s12144-021-02537-2.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >8. WenLi, Zhang et al. “Parenting styles and externalizing problem
        behaviors of preschoolers: mediation through self-control abilities and
        emotional management skills.” Frontiers in psychology vol. 16 1433262. 5
        Feb. 2025, doi:10.3389/fpsyg.2025.1433262</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >9. Kim, Geun Young, et al. “Relationship between Mother’s Emotional
        Intelligence, Negative Parenting Behaviour, and Children’s Attachment
        Instability.” BMC Public Health, vol. 22, 2022,
        bmcpublichealth.biomedcentral.com/articles/10.1186/s12889-022-13171-3.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >10. Cao, Yiwen, and Kathryn Maguire-Jack. “Interactions with Community
        and Institutions: Preventive Pathways for Child Maltreatment.” Child
        Abuse & Neglect, vol. 62, 2016, pp. 111–121. PubMed Central,
        pmc.ncbi.nlm.nih.gov/articles/PMC5472093.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >11. Nanda, Sarannya. “The Impact of Parenting Styles on Emotion
        Regulation in Children.” International Journal for Multidisciplinary
        Research (IJFMR), 2025, www.ijfmr.com/papers/2025/3/49802.pdf.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >12. Frontini, A., et al. “What Do We Need Kids For? Childbearing
        Motivations, Personal Values, and Socio-demographic Differences.”
        Frontiers in Psychology, 2025, doi:10.3389/fpsyg.2025.1612384.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >13. BMC Women’s Health. “Reflections on Timing of Motherhood – a
        Qualitative Online Study with Women of Reproductive Age.” BMC Women’s
        Health, 2024,
        bmcwomenshealth.biomedcentral.com/articles/10.1186/s12905-024-03409-0.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >14. Foti, Federica, et al. “The Importance of Motherhood: Cultural
        Norms, Stigma, and Reproduction in Pronatalist Societies.” Frontiers in
        Public Health, vol. 11, 2023, doi:10.3389/fpubh.2023.1024438.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >15. McKendree University Scholars. “Voluntary Childlessness: Stigma and
        Societal Pressures on Men and Women.” McKendree University, 2019,
        www.mckendree.edu/academics/scholars/reining-issue-29.pdf.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >16. Özgür, Gülşah, and Emine Yesil. “Womanhood Bound to Motherhood:
        Choosing Childlessness in Türkiye.” BMC Psychology, vol. 13, 2025,
        bmcpsychology.biomedcentral.com/articles/10.1186/s40359-025-02661-9.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >17. Bowlby, John. Attachment and Loss, Vol. 1: Attachment. Basic Books,
        1969.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >18. Ainsworth, M. D. S., Blehar, M. C., Waters, E., & Wall, S. N.
        Patterns of Attachment: A Psychological Study of the Strange Situation.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >19. Martínez, Paulina, and Andrea Muñoz. “Empathy and Parental
        Sensitivity in Child Attachment: A Systematic Review.” Children, vol.
        12, no. 4, 2025, www.mdpi.com/2227-9067/12/4/465</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >20. Gottman, J. M., & DeClaire, J. (1997). Raising an Emotionally
        Intelligent Child: The Heart of Parenting. New York: Simon & Schuster.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >21. Ferreira, Carolina, et al. “Emotional Competence, Attachment, and
        Parenting Styles in Children and Parents.” Psicologia: Reflexão e
        Crítica, vol. 35, 2022,
        prc.springeropen.com/articles/10.1186/s41155-022-00208-0.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >22. Ren, Xiaoran, et al. “Parenting Pathways to Friendship: How
        Self-Control and Emotion Management Skills Mediate Preschoolers’ Social
        Lives in China.” BMC Psychology, vol. 13, 2025,
        bmcpsychology.biomedcentral.com/articles/10.1186/s40359-025-02641-z.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >23. Wang, Ruiping. “The Effects of Parent-Child Attachment Style and
        Parenting Style on Children’s Emotional Competence.” Journal of
        Education, Humanities and Social Sciences, vol. 4, 2023,
        drpress.org/ojs/index.php/EHSS/article/view/17828.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >24. Baumrind, D. (1967). Child care practices anteceding three patterns
        of preschool behavior. Genetic Psychology Monographs, 75(1), 43–88.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >25. Ganesan, Prachi. “The Impact of Parenting Styles on a Child’s
        Emotional Quotient (EQ).” International Journal of Indian Psychology,
        vol. 9, no. 4, ijip.in/articles/childs-emotional-quotient-eq. Accessed
        18 Nov. 2025.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >26. Khan, Jamil, et al. “Impact of Parental Styles on Emotional
        Intelligence, Academic Achievement, and Self-Esteem of University
        Students in South Punjab, Pakistan.” Journal of Policy Research, vol.
        10, no. 3, 2025, pp. 77–82,
        jprpk.com/index.php/jpr/article/download/629/867/1747.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >27. Masood, Faiza, and Muhammad Farhan Raza. “Psychological
        Maltreatment and Its Relationship with Self-Esteem and Psychological
        Stress among Adolescents in Tanzania: A Community-Based, Cross-Sectional
        Study.” BMC Psychiatry, vol. 19, 2019,
        bmcpsychiatry.biomedcentral.com/articles/10.1186/s12888-019-2139-y.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >28. Ryan, Richard M., and Edward L. Deci. "Self-Determination Theory
        and the Facilitation of Intrinsic Motivation, Social Development, and
        Well-Being." American Psychologist, vol. 55, no. 1, 2000, pp. 68–78.
      </sup>
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >29. Alexander, Ammu E., and Padmakumari Indu. “Impact of Parental
        Over-Protection on Emotional Intelligence in Young Adults.” Indian
        Journal of Psychological Science, 2023,
        www.napsindia.org/wp-content/uploads/2023/06/9-Impact-Of-Parental-Over-Protection-On-Emotional-Intelligence-In-Young-Ammu-E-Alexander-Dr.Padmakumari-Indu-D-Padavan.pdf.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >30. Morris, Amanda S., et al. “Impact of Parenting on Emotion
        Regulation During Childhood and Adolescence.” Child Development
        Perspectives, vol. 11, no. 4, 2017, pp. 233–238. Oxford Academic,
        doi:10.1111/cdep.12224. (Note: this is a review that discusses how
        parenting behaviors influence children's emotion regulation.)</sup
      >
    </p>
    <br />
  </details>
  <details>
    <summary class="text-white font-mono text-xl mb-0">
      &nbsp;William Golding: Lord of the Lies - 14 Apr 2025
    </summary>
    <p class="text-white font-mono text-sm indent-8 mb-0">
      We often turn to fiction to reflect the truth: to better understand
      ourselves, our nature, and our societies. But what happens when a novel
      disguises personal pessimism as universal insight? Lord of the Flies is
      hailed as an explanation of human nature, a text that reveals our
      ‘inherent savagery’, but this reverence deserves closer scrutiny. Given
      the improbability of a group of people so quickly descending into violence
      and that Golding projects his own flaws onto the boys on the island, it is
      surprising it is thought of as a must-read because it ought not to be.
    </p>
    <p class="text-white font-mono text-sm indent-8 mb-0">
      One major criticism of the novel is the improbability of a group of
      children raised in a society so quickly descending into violence and chaos
      without an imminent, life-threatening danger; such an unraveling
      oversimplifies the complexity of human nature. The closest real-life
      scenario we have to Lord of the Flies’ result was antithetical to it: Mano
      Totao and five Tongan teenagers who, in 1965, set out on a fishing trip
      and were stranded on a deserted island after being caught in a typhoon.<sup
        >1</sup
      >
      This is similar to Golding’s boys, who arrive on the island via plane crash,
      leaving both sets of boys wrecked and left to survive on their own. Golding’s
      boys fully descend into chaos: “The rock struck Piggy a glancing blow from
      chin to knee; the conch exploded into a thousand white fragments and ceased
      to exist” (181). Literally, this marks the destruction of Piggy and the conch,
      but symbolically, it represents the end of civilization and the shift in power
      from morality to barbarity. In contrast, the Tongan boys cooperated to build
      a functional community, surviving for fifteen months. It’s important to note
      that they were friends beforehand, but this does not fully account for their
      success. Golding’s boys had several months on the island to form alliances
      and relationships, and did so. Friendship alone can not explain the Tongan
      boys’ achievements: they didn’t just avoid violence, they created systems:
      tending to each other’s injuries, growing vegetables, raising chickens, building
      rainwater storage, a gym, and a permanent fire, all of which is impossible
      without shared vision and an ethic of care. As Totao put it, “our secret superpower
      is our ability to cooperate.” Both are microcosmic: Golding depicts morality
      crumbling in isolation, but a real scenario under similar conditions suggests
      that humanity persists and thrives. One could even say that living within society
      is worse. At very young ages, humans are altruistic<sup>2</sup> and
      egalitarian, sharing resources,<sup>3</sup>
      whether or not they were obtained in collaboration.
      <sup>4</sup> After many years of society’s training, humans grow
      complacent. In 1961, the Milgram Experiment showed that 64% of
      participants would deliver multiple lethal shocks to an unconscious body
      because a scientist told them to.
      <sup>5</sup> In 1971, a group of college students were placed in a
      simulated prison environment, and the ‘guards’ became so abusive, the
      experiment was cut short.<sup>6</sup> The concept is not limited to
      experiments: the Abu Ghraib prison guards committed physical and sexual
      abuse, rape, and murder against inmates.<sup>7</sup> Their inherent nature
      did not strictly shape these individuals’ behavior, rather, the societal pressures
      of obedience and conformity that undermine innate altruistic tendencies did.
      Golding’s portrayal of human nature is a cautionary tale, but the Tongan castaways
      suggest that cooperation, not chaos, is the more likely outcome of adversity,
      and other examples suggest chaos forms more often within society than not.
    </p>
    <p class="text-white font-mono text-sm indent-8 m-0 pt-0">
      While reality has since indicated the novel is unrealistic, what is more
      interesting is why it takes this stance. The most compelling idea is that
      Golding projects his own flaws onto the boys on the island. Some key
      moments bear resemblance to moments in his life: he had an unhappy
      childhood, was an alcoholic, prone to depression, miserable, angry, and
      misanthropic. He himself said there was a “monstrous” side to his
      character, admitted to being pleased when a schoolfriend died, and said a
      fourteen-year old girl was “depraved by nature… already as sexy as an
      ape,” and then he tried to rape her.
      <sup>8,9</sup> This reflects the novel; in an appalling example of
      behavior, Roger rapes a sow with the other hunters’ full support: “The
      hunters followed, wedded to her in lust… Robert stabilized the thing in a
      phrase which was received uproariously. ‘Right up her ass!’” (135). His
      comments show a disturbing view of acceptable behavior, especially as this
      appears in his own memoir. Jack’s tribe, and especially some of his
      speeches, are close to those of Adolf Hitler. Jack delivers a speech:
      “Listen, all of you. Me and my hunters, we’re living along the beach by a
      flat rock. We hunt and feast and have fun. If you want to join my tribe
      come and see us. Perhaps I’ll let you join. Perhaps not” (140), shockingly
      similar to the early rhetoric of Hitler, specifically Munich, 12 April
      1921, where Hitler called for an Aryan state and the exclusion of those he
      considered outsiders: “There are only two possibilities: either victory of
      the Aryan, or annihilation of the Aryan and the victory of the Jew.”<sup
        >10</sup
      > Consider that Golding thought he could have been a Nazi if he was in Germany:
      “I have always understood the Nazis because I am of that sort by nature”, and
      added that “that sad self-knowledge” inspired his novel. His admission reveals
      that he is not simply telling a story but using the boys on the island as a
      projection. Given these key moments bear such close resemblance to his own
      experiences, it is not a stretch to conclude he is personifying his own warped
      views of society through the tribe.
    </p>
    <p class="text-white font-mono text-sm indent-8 m-0 pt-0">
      The reason for the novel’s perspectives are now clear, but what is more is
      that it is thought of as a must-read, and it ought not to be. It is
      critically acclaimed, one reason why it has stayed relevant for so many
      years. Modern Library ranks it the 41st best novel on the Editor’s List<sup
        >11</sup
      >
      and 25th best on the Reader’s List;<sup>12</sup> additionally, the BBC
      survey, the Big Read ranks it 70th best<sup>13</sup> and Time Magazine
      ranks it 7th best.<sup>14</sup> Portland Public Schools has said, “It is
      nearly impossible to be considered an educated individual, and not have at
      least a rudimentary understanding of this classic work.”<sup>15</sup>
      Renowned institutions. magazines, and education systems alike have hailed this
      as a classic, and yet, the portrayal of human nature is overly simplistic and
      ultimately misleading. While it asserts that savagery is a part of humanity
      seen when removed from society, this is a bleak and narrow interpretation.
      Simon’s chilling revelation, “Maybe there is a beast… maybe it's only us” (106-107),
      is an example of Golding’s belief that violence is an individual trait. However,
      this overlooks the fact that human rights is a relatively new concept. Violence
      is not so much inherent to individuals but a result of what society deems acceptable,<sup
        >16</sup
      > and frequently, it is not individuals, but societal pressures that make those
      choices. Somehow we are inches away from moving into barbarity, the systems
      of society the only thing holding us together; in reality, humans in isolation
      are altruistic and the systems of society dampen that. That is not to say that
      it is not a good read, just that it is not important enough of a read to warrant
      such universal attention.
    </p>
    <p class="text-white font-mono text-sm indent-8 m-0 pt-0">
      While Lord of the Flies has edged its way into the literary canon thus
      far, it deserves more a critical eye than continued reverence. Its
      portrayal of human nature is not just wrong but completely opposite
      reality. Golding’s own life and demons bleed into it, making it less
      universal truth than a projection of his psyche. Its continued prominence
      says more about the institutions that hold it up than its actual merit.
      Rather than accepting this unquestioned classic, perhaps we should
      reevaluate the stories we choose to elevate and why we choose to do so,
      especially when these works make such broad statements about what it means
      to be human.
    </p>
    <hr />
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >1. Bregman, Rutger. Humankind: A Hopeful History. Bloomsbury
        Publishing, 2019.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >2. Darley, John M., et al. “FROM JERUSALEM TO JERICHO: A STUDY OF
        SITUATIONAL AND DISPOSITIONAL VARIABLES IN HELPING BEHAVIOR.” Journal of
        Personality and Social Psychology, vol. 27, no. J, 1973, pp. 100–08.
        sparq.stanford.edu/sites/g/files/sbiybj19021/files/media/file/darley_batson_1973_-_from_jerusalem_to_jericho.pdf.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >3. Warneken, Felix, et al. “Young Children Share the Spoils After
        Collaboration.” Psychological Science, vol. 22, no. 2, Dec. 2010, pp.
        267–73. https://doi.org/10.1177/0956797610395392.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >4. Ulber, Julia, et al. “How 18- and 24-month-old peers divide
        resources among themselves.” Journal of Experimental Child Psychology,
        vol. 140, Dec. 2015, pp. 228–44. ScienceDirect,
        https://doi.org/10.1016/j.jecp.2015.07.009.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >5. Encina, Gregorio Billikopf. “Milgram’s Experiment on Obedience to
        Authority.” nature.berkeley.edu/ucce50/ag-labor/7article/article35.htm.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >6. Leithead, Alastair. “Stanford Prison Experiment Continues to Shock.”
        BBC News, 17 Aug. 2011, www.bbc.com/news/world-us-canada-14564182.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >7. Hersh, Seymour M. “Torture at Abu Ghraib.” The New Yorker, 30 Apr.
        2004, www.newyorker.com/magazine/2004/05/10/torture-at-abu-ghraib.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup>8. Golding, William. Men And Women Now. John Carey, 2009.</sup>
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >9. Carey, John. William Golding: The Man Who Wrote “Lord of the Flies.”
        Faber and Faber, 2009.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >10. Hitler, Adolf. There Are Only Two Possibilities: Victory of the
        Aryan or Victory of the Jew.
        web.viu.ca/davies/H479B.Imperialism.Nationalism/Hitler.speech.April1921.htm.
        München, Bavaria, Germany.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >11. Modern Library Top 100 - Penguin Random House.
        sites.prh.com/modern-library-top-100/#about.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >12. “[MLR] Modern Library 100 Best Novels (the Reader’s List).” Letters
        Republic, 7 Aug. 2012, lettersrepublic.wordpress.com/mlr.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >13. BBC - The Big Read - Top 100 Books.
        www.bbc.co.uk/arts/bigread/top100.shtml.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >14. Time Magazine’s All-Time 100 Novels (100 Books).
        www.goodreads.com/list/show/2681.Time_Magazine_s_All_Time_100_Novels.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >15. Brunak, Gene, and Karen Margolis. Lord of the Flies. Edited by
        Kelly J. Gomes,
        www.pps.net/cms/lib/OR01913224/Centricity/Domain/179/Final_Lord_of_the_Flies_Sept_2010.pdf.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >16. Pinker, Steven. “The Surprising Decline in Violence.” TED Talks,
        www.ted.com/talks/steven_pinker_the_surprising_decline_in_violence?language=en.</sup
      >
    </p>
    <br />
  </details>
  <details>
    <summary class="text-white font-mono text-xl mb-0">
      &nbsp;Animal Farm and Nineteen Eighty-Four on Authoritarianism - 2 Apr
      2025
    </summary>
    <p class="text-white font-mono text-sm indent-8 mb-0">
      George Orwell (born Eric Arthur Blair June 25th, 1903) was an English
      writer whose works include novels, poems, essays, journalism, prose, and
      social criticism. He is best known for the allegorical fable-novella
      Animal Farm (1945) and the dystopian novel Nineteen Eighty-Four (1949).<sup
        >1,2</sup
      >
      In 1984, Nineteen Eighty-Four won the Prometheus Award for its contributions
      to dystopian literature along with Ray Bradbury’s Fahrenheit 451, and in 2011,
      Animal Farm won. In 2003, Nineteen Eighty-Four was listed at number 8 and Animal
      Farm at number 46 on the BBC’s The Big Read poll, and in 2008, The Times ranked
      George Orwell as the second-best British writer since 1945.<sup>3,4</sup> In
      both Animal Farm and Nineteen Eighty-Four, George Orwell critiques authoritarianism’s
      manipulation of truth and disintegration of freedom with a clear warning that
      continues to remain relevant.
    </p>
    <p class="text-white font-mono text-sm indent-8 m-0 pt-0">
      Both pieces are critical of authoritarian regimes and written in response
      to events recent at the time. Animal Farm is critical of communism and
      written in response to the rise of the Soviet Union; Nineteen Eighty-Four
      is critical of totalitarian regimes and written in response to growing
      totalitarian governments in Nazi Germany and Stalin’s Russia.<sup>5</sup>
      In Animal Farm, Orwell satirizes Russian Communism as it developed under Stalin
      through phrases like “In future all questions relating to the working of the
      farm would be settled by a special committee of pigs, presided over by himself.
      These would meet in private and afterwards communicate their decisions to the
      others,” showing how communism both in Animal Farm and in Russia adapted to
      be so different from its stated purpose that it ended up largely similar to
      the very regime it intended to establish,<sup>6</sup> and “four legs good,
      two legs bad,” showing the sheer ignorance and complacency of the public
      for believing in the regime.<sup>7</sup>
      Both Animal Farm and Nineteen Eighty-Four emerged as direct responses to the
      events of his time. Animal Farm was published in 1945, at a time when the Soviet
      Union was emerging as a global superpower, and its portrayal of the corrupting
      influence of power was a pointed critique of the rise of Joseph Stalin. The
      novel symbolizes the Russian Revolution and the eventual betrayal of its ideals.
      Initially, the desire for equality and freedom drives the animals to revolt;
      however, as the pigs, led by Napoleon, seize control, they gradually betray
      the original principles of the revolution. Perhaps the most famous phrase from
      the novella, “There was nothing there now except a single Commandment. It ran:
      ALL ANIMALS ARE EQUAL BUT SOME ANIMALS ARE MORE EQUAL THAN OTHERS,” is a sharp
      critique of how the Revolution became indistinguishable from the oppressive
      systems it sought to overthrow.<sup>8</sup>
    </p>
    <p class="text-white font-mono text-sm indent-8 m-0 pt-0">
      Nineteen Eighty-Four, published four years later in 1949, takes Orwell’s
      critique of authoritarianism to a darker extreme. Nineteen Eighty-Four is
      more about the dangers of totalitarianism on a broader scale, which Orwell
      depicted using the fictional society of Oceania, specifically its extreme
      surveillance and control. The government, known only as the ‘Party’ and
      led by the mysterious and (reportedly) all-knowing figure of Big Brother,
      monitors every aspect of citizens’ lives, who has now become synonymous
      with oppressive surveillance and control in popular culture. The novel
      explores the ways in which totalitarian governments manipulate not just
      the material but the very concept of reality as well. As the protagonist,
      Winston Smith tries to rebel, but he is confronted with the terrifying
      power of the Party, which is able to redefine truth itself. The novel
      discussed the rampant psychological manipulation, propaganda, and
      obliteration of truth characteristic of totalitarian regimes, tactics all
      in service of a regime that controls not just the actions of its citizens
      but also their thoughts. The Party’s slogan is “War is Peace, Freedom is
      Slavery, Ignorance is Strength” and is an ironic and satirical
      illustration of the ideology of a totalitarian regime.<sup>9</sup>
      ‘Thoughtcrime,’ the idea that the most dangerous form of rebellion is not physical
      but mental, is central to the Party’s control. The novel’s plot is based around
      ‘doublethink,’ the ability to hold two contradictory beliefs at the same time,
      essential to survival in Nineteen Eighty-Four; one of the quotes illustrating
      this is “The Ministry of Peace concerns itself with war, the Ministry of Truth
      with lies, the Ministry of Love with torture and the Ministry of Plenty with
      starvation. These contradictions are not accidental, nor do they result from
      ordinary hypocrisy: they are deliberate exercises in doublethink,” and this
      inversion of truth is inherent in the propaganda set forth by many totalitarian
      regimes.<sup>10</sup> In the novel, the inversion manifests through the fabricated
      language of Newspeak, designed to manipulate and limit the scope of thought,
      making dissent impossible. The focus on language and its ability to control
      what people think says a great deal about Orwell’s belief in its power.
    </p>
    <p class="text-white font-mono text-sm indent-8 m-0 pt-0">
      What makes Orwell’s work so enduring is not just the historical context in
      which it was written, but its universality in its themes. Both books speak
      of the dangers of unchecked power, the manipulation of truth, and the
      erosion of individual freedoms: freedom of speech and religion, freedom to
      privacy, and the loss of humanity in general, all concerns that transcend
      any one time or place. With the advent of mass surveillance technologies
      and the rise of state-sponsored censorship, the potential for governments
      to exert total control over their citizens is as present as ever.
      Globally, authoritarianism is on the rise, as evident by a military-led
      coup in Myanmar; parliament dismissed in Tunisia; a cabinet reshuffle
      leading to the second coup in 10 months in Mali; jailing of political
      opponents in Nicaragua, Iran, and Russia; no-contest elections in Syria,
      Kazakhstan, and Uzbekistan; power grabs in Sudan, Chad, and Guinea; and
      the populist and authoritarian tendencies by president of the United
      States, Donald Trump.<sup>11</sup> The Trump administration plans to
      accomplish its goals through three methods of control which are
      illustrated in the writings of Orwell. The first is the decimation of
      freedom of speech, which Trump has gone about in a variety of ways, one of
      the most crucial is control of the media. Before taking office, Trump sued
      ABC and CBS News over coverage he deemed defamatory,<sup>12,13</sup> a
      tactic not used before by any president and a canary in a coalmine for the
      future of press freedom in the United States. Trump barred the Associated
      Press, a pillar of White House coverage for more than a century,<sup
        >14</sup
      >
      from the Oval Office and Air Force One for refusing to use "Gulf of America"
      instead of "Gulf of Mexico" after he made the change by decree. The third-largest
      newspaper by circulation in the United States is the Washington Post,<sup
        >15</sup
      >
      which is outright owned by one of Trump’s biggest allies, Jeff Bezos.<sup
        >16,17</sup
      >
      The Washington Post recently removed their editorials,<sup>18</sup>
      meaning that the writer’s perspectives are no longer represented and the news
      is left only to what is approved by higher-ups in the organization. Also, after
      Trump’s inauguration, they changed their slogan from “Democracy Dies in Darkness”
      to “Riveting Storytelling for All of America,” indicative of their political
      affiliations.<sup>19</sup> But perhaps Trump’s greatest method of
      controlling the media is just him talking: his claims of “fake news” have
      caused large swaths of the public to lose trust in mainstream media, with
      trust among Republicans in national news organizations plummeted from 70%
      in 2016 to just 35% in 2021, correlating with Trump's persistent media
      criticisms,<sup>20</sup>
      only worsening in his second term.<sup>21</sup>
      In Animal Farm, one of the propaganda machines of Napoleon’s regime is Squealer,
      seen in “Squealer spoke so persuasively, and the three dogs who happened to
      be with him growled so threateningly, that they accepted his explanation without
      further questions.”<sup>22</sup> The result of this propaganda is obvious:
      “And yet the animals never gave up hope. Moreover, they never lost, even
      for an instant, their sense of honour and privilege in being members of
      Animal Farm. They were still the only farm in the whole county — in all
      England! — owned and operated by animals….Their hearts swelled with
      imperishable pride”<sup>23</sup>and “‘Ah, that is different!’ said Boxer.
      ‘If Comrade Napoleon says it, it must be right… Napoleon is always
      right.’”<sup>24</sup> In Nineteen Eighty-Four, the Ministry of Truth
      spreads Party-approved ideas and goes so far as to control the very notion
      of truth, including Winston Smith’s job at the Ministry of rewriting
      historical newspapers to align with the Party’s ideals. All three of these
      scenarios are situations where an institution that spreads the news only
      prints news that is approved or aligns with the ideals of the ruling party
      in a way that is able to convince the masses of those ideals in a way they
      believe to be true. Along with his blatant disregard for the truth,<sup
        >25</sup
      >the other way that Trump decimates free speech is by punishing and
      deporting dissenters. On March 8, 2025, Mahmoud Khalil, a student activist
      at Colombia University and lead negotiator for the encampment in the 2024
      Colombia University pro-Palestinian campus occupations, was taken from his
      home by U.S. Immigration and Customs Enforcement (ICE) agents acting on
      orders from the State Department. Though Khalil has a green card, is
      married to a U.S. citizen, and is a lawful permanent resident of the
      United States, Colombia revoked his student visa, ICE revoked his
      permanent resident status, and he was transported to LaSalle Detention
      Center in Jena, Louisiana.<sup>26,27,28</sup>
      The detention was the first publicly known deportation effort related to pro-Palestine
      activism under Trump, who has threatened to punish those he says support Hamas
      or promote antisemitism.<sup>29</sup> On the night of March 8, hours
      before the detainment of Mahmoud Khalil, ICE knocked on Ranjani
      Srinivasan’s door for the second time in two days. The week prior, the
      State Department revoked her student visa for merely attending a
      pro-Palestine protest, which they deemed to be terrorist sympathizing.
      Srinivasan was not home, but shortly thereafter, she packed her belongings
      and fled to Canada.<sup>30</sup> On March 24, a French scientist was
      denied entry to Houston after U.S. customs officers found messages
      criticizing President Donald Trump's cuts to science funding on her phone.<sup
        >31</sup
      >
      In Animal Farm, Snowball is exiled from the farm and in Nineteen Eighty-Four,
      Winston Smith is brutally tortured for months by the Ministry of Love for accepting
      a book that upon completion, would grant him possibility of entry into the
      Brotherhood (the principal enemy of the Party). In all of these scenarios,
      free speech has been denied by making it clear dissent will be prosecuted,
      granting the leader immense power over his subjects. Under the Trump administration,
      not just leading a protest but even participating in one or criticizing him
      in any form is grounds for removal from the U.S. The second method of control
      that Trump uses to further his goals is the decimation of rule of law. He has
      issued a few executive orders that pervert the election process, making it
      easier to vote for him and harder for others through various methods of voter
      disenfranchisement.<sup>32</sup> Additionally, he has exploited one of the
      parts of the carefully crafted system of checks and balances meant to keep
      such a thing from happening (executive orders) to accomplish his goals in
      all manner of illegality.<sup>33</sup> For example, law firms in the U.S.
      have been presented with an ultimatum: either conform to his future policy
      decisions by agreeing not to sue over their unconstitutionality, or lose
      their resources or ability to exist.<sup>18</sup> In Animal Farm,
      Snowball, a political opponent, is exiled and then continually scapegoated
      for months to come, “Our Leader, Comrade Napoleon,” announced Squealer,
      speaking very slowly and firmly, “has stated categorically… that Snowball
      was Jones’s agent from the very beginning… yes, and from long before the
      Rebellion was ever thought of” and the commandments are progressively
      changed to nearly their opposite. In Nineteen Eighty-Four, there was no
      rule of law in the first place, only the Ministry of Love and its ruthless
      torture systems. Again, in all of these scenarios, rule of law has been
      denied such that the only laws that exist (or at least the most powerful
      ones) are the ones put in place by the leader and the leader alone,
      granting him even more power. The final method of control that Trump uses
      to accomplish his goals is control of financials. Trump has many of the
      wealthiest people and organizations in the United States funding him,
      including Timothy Mellon, Richard & Elizabeth A. Uihlien, Sheldon G. &
      Miriam O. Adelson, and Elon Musk, among others, who donated nearly a
      billion dollars to his campaign.<sup>34</sup> Additionally, he, through the
      first method of control, has the money of the American taxpayer behind him,
      and those alone combined make him one of the most powerful people on the planet,
      not to mention he also is the President of the United States of America. Animal
      Farm’s equivalent to currency is the manipulation of resources and privileges.
      Napoleon controls the resources on the farm by selectively distributing them
      to maintain loyalty and power, especially through the manipulation of food
      and supplies to ensure the animals remain subservient. In Nineteen Eighty-Four,
      the Party controls the economy through the Ministry of Plenty, which regulates
      all production and allocation, ensuring that citizens are always in a state
      of need and dependent on the Party for their survival. The Party’s ability
      to control financials and basic goods ensures a constant cycle of poverty and
      subjugation. In all of these scenarios, the leader has managed to gain control
      over financials, granting him an obscene amount of power on its own, not to
      mention the other two methods of control, making him an individual unmatched
      in power. Through these three methods of control, our freedoms are being systematically
      decimated at a breakneck pace just like the freedoms of the masses of Animal
      Farm and Nineteen Eighty-Four. George Orwell’s works are a warning from the
      past. He saw what was happening in his time for what it was and sought to give
      future generations the tools such that it wouldn’t happen again, and by understanding
      the writings, we can extrapolate a solution to combating the methods of control.
      In times where authoritarianism is on the rise, before it can become irreversible,
      we should recognize the tactics used by such regimes and how they can slowly
      creep into everyday life. Orwell’s writing warns us of the ways in which propaganda
      distorts the truth and how critical it is to defend objective facts in the
      face of manipulation. His works emphasize the importance of independent institutions,
      like the press, the judiciary, and civil society, that must remain free from
      the control of any single individual or party. Preserving our democracy requires
      more than just fighting against Trump; additionally, it requires fighting for
      the systems that help to support it, the very ones Trump has been going after.
      The effort demands constant vigilance against the gradual erosion of freedoms.
      Ultimately, Orwell shows us that even in the face of overwhelming power, the
      collective strength of mind and voice, if both committed to truth and justice,
      can resist the tactics to remove freedoms, protect the tenets of democracy,
      and ultimately fight against the spread of authoritarianism. Only through vigilant
      defense of our rights can we prevent history from repeating itself.
    </p>
    <p class="text-white font-mono text-sm indent-8 m-0 pt-0">
      The legacy of George Orwell is one of political insight and moral clarity.
      Through his depiction of communist regimes in Animal Farm and totalitarian
      ones in Nineteen Eighty-Four, Orwell not just explored the nature of power
      and the manipulation of reality but gave a clear warning about the
      consequences of unchecked authority that will continue to persist for the
      foreseeable future. As long as the corrupting influence of power continues
      to develop dictatorship and authoritarianism in the world, Animal Farm and
      Nineteen Eighty-Four will remain relevant in the fight for democracy,
      truth, and freedom. Make Orwell fiction again!
    </p>
    <hr />
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >1. Blair, Eric Arthur (George Orwell). Animal Farm. 1945. 75th An.,
        Penguin Random House, 2020.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup>2. ---. Nineteen Eighty-Four. Secker and Warburg, 1949.</sup>
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >3. Times. “The 50 Greatest British Writers Since 1945.” The Times, 3
        Apr. 2010,
        www.thetimes.com/article/the-50-greatest-british-writers-since-1945-ws3g69xrf90.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >4. BBC - The Big Read - Top 100 Books.
        www.bbc.co.uk/arts/bigread/top100.shtml.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >5. PBS: Think Tank: Transcript for “Orwell’S Century.”
        www.pbs.org/thinktank/transcript990.html.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup>6. Orwell 28 (Animal Farm)</sup>
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup>7. Orwell 17 (Animal Farm)</sup>
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup>8. Orwell 68 (Animal Farm)</sup>
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup>9. Orwell Part One, Chapter 1 (6) (Nineteen Eighty-Four)</sup>
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup>10. Orwell Part Two, Chapter 9 (7) (Nineteen Eighty-Four)</sup>
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >11. Freedom House. “The Global Expansion of Authoritarian Rule.”
        Freedom House,
        freedomhouse.org/report/freedom-world/2022/global-expansion-authoritarian-rule.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >12. “Trump Sues CBS News Over 60 Minutes Interview With Harris; Network
        Says Suit Is ‘Completely Without Merit.’” CBS News, 1 Nov. 2024,
        www.cbsnews.com/news/trump-sues-cbs-news-60-minutes-interview.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >13. Grynbaum, Michael M., and Jim Rutenberg. “Trump Sues ABC and
        Stephanopoulos, Saying They Defamed Him.” The New York Times, 18 Mar.
        2024,
        www.nytimes.com/2024/03/18/us/politics/trump-lawsuit-abc-stephanopoulos.html.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >14. Kellman, Laurie. “What to Know About How the White House Press
        Corps Works | AP News.” AP News, 12 Feb. 2025,
        apnews.com/article/trump-gulf-mexico-america-ap-first-amendment-4304433d73ad496f5308c9666cbe8e11.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >15. Majid, Aisha. “Top 25 US Newspaper Circulations: Largest Print
        Titles Fall 14% in Year to March 2023.” Press Gazette, 30 June 2023,
        pressgazette.co.uk/media-audience-and-business-data/media_metrics/top-25-us-newspaper-circulations-down-march-2023.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >16. Rosenblatt, Lauren. “Once Dubbed a Woke Billionaire, Jeff Bezos
        Changes His Tune on Trump.” The Seattle Times, 17 Jan. 2025,
        www.seattletimes.com/business/amazon/once-dubbed-a-woke-billionaire-jeff-bezos-changes-his-tune-on-trump.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >17. “Amazon Boss Jeff Bezos Buys Washington Post for $250m.” BBC News,
        6 Aug. 2013, www.bbc.com/news/av/business-23582797.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >18. Folkenflik, David. “Bezos’ Changes at ‘Washington Post’ Lead to
        Mass Subscription Cancellations — Again.” NPR, 28 Feb. 2025,
        www.npr.org/2025/02/28/nx-s1-5312819/washington-post-bezos-subscriptions-cancellations.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >19. Mullin, Benjamin. “The Washington Post’s New Mission: Reach ‘All of
        America.’” The New York Times, 16 Jan. 2025,
        www.nytimes.com/2025/01/16/business/media/the-washington-post-new-mission.html.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >20. Cillizza, Chris. “Here’s Donald Trump’s Most Lasting, Damaging
        Legacy.” CNN, 30 Aug. 2021,
        www.cnn.com/2021/08/30/politics/trump-legacy-fake-news/index.html.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >21. Rutgers University. “How Trump Shaped the Media.” Rutgers
        University, 20 Jan. 2021, www.rutgers.edu/news/how-trump-shaped-media.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup>22. Orwell 30 (Animal Farm)</sup>
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup>23. Orwell 65 (Animal Farm)</sup>
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup>24. Orwell 29 (Animal Farm)</sup>
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >25. Kessler, Glenn. “Trump Made 30,573 False or Misleading Claims as
        President: Nearly Half Came in His Final Year.” The Washington Post, 23
        Jan. 2021,
        www.washingtonpost.com/politics/how-fact-checker-tracked-trump-claims/2021/01/23/ad04b69a-5c1d-11eb-a976-bad6431e03e2_story.html.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >26. Offenhartz, Jake. “ICE Arrests Palestinian Activist Mahmoud Khalil
        | AP News.” AP News, 10 Mar. 2025,
        apnews.com/article/columbia-university-mahmoud-khalil-ice-15014bcbb921f21a9f704d5acdcae7a8.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >27. Iqbal, Nomia. Pro-Palestinian Student Protester Detained by US
        Immigration Officials, Says Lawyer. 10 Mar. 2025,
        www.bbc.com/news/articles/c0q1pl1eldno.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >28. Chappell, Bill. “Mahmoud Khalil Case Goes to Court, Spotlighting
        Green Card Holders’ Rights.” NPR, 12 Mar. 2025,
        www.npr.org/2025/03/11/nx-s1-5323147/mahmoud-khalil-green-card-rights.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >29. Shalvey, Kevin, et al. “Trump Admin Updates: White House Asks Court
        to Stay Deportation Flights TRO.” ABC News, 17 Mar. 2025,
        abcnews.go.com/Politics/live-updates/trump-2nd-term-live-updates-trump-defends-tariff?id=119625202&entryId=119642816.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >30. Ferré-Sadurní, Luis, and Hamed Aleaziz. “How a Columbia Student
        Fled to Canada After ICE Came Looking for Her.” The New York Times, 15
        Mar. 2025,
        www.nytimes.com/2025/03/15/nyregion/columbia-student-kristi-noem-video.html.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >31. Mackey, Robert. “French Scientist Denied US Entry After Phone
        Messages Critical of Trump Found.” The Guardian, 27 Mar. 2025,
        www.theguardian.com/us-news/2025/mar/19/trump-musk-french-scientist-detained.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >32. “Tracking the Trump Administration’s Harmful Executive Actions |
        Congressman Steve Cohen.” Congressman Steve Cohen, 28 Mar. 2025,
        cohen.house.gov/TrumpAdminTracker.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >33. "Executive Orders.” Federal Register,
        www.federalregister.gov/presidential-documents/executive-orders/donald-trump/2025</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >34. Kronenberg, Alan. “The Biggest Political Donors of the 2024
        Election.” US News & World Report, 5 Nov. 2024,
        www.usnews.com/news/elections/articles/2024-11-05/the-biggest-political-donors-of-the-2024-election.</sup
      >
    </p>
    <br />
  </details>
  <details>
    <summary class="text-white font-mono text-xl mb-0">
      &nbsp;A Chemical Analysis of Kolkata's Pollution Crisis - 4 Feb 2025
    </summary>
    <p class="text-white font-mono text-sm indent-8 mb-0">
      In 2024, I had the opportunity to visit Kolkata, a city of historical,
      cultural, and personal significance. I was only there for a brief 48
      hours. In those precious hours, I met with relatives for the first time,
      relatives I had not met in nearly a decade, and dying relatives who I will
      likely never meet again. But additionally, I found myself in a rather
      curious position: I was also deeply immersed in the mundane but critical
      task of analyzing the chemistry of pollution.
    </p>
    <p class="text-white font-mono text-sm indent-8 m-0 pt-0">
      Kolkata certainly presents the strange juxtaposition of vibrant streets
      with a past of revolutionaries, poets, and intellectuals and the harsh
      reality of an over-industrialized city facing the long-term consequences
      of rapid urbanization. While exploring, I was surrounded by the signs of a
      city struggling with air and water contamination. While the very reason I
      was taking the trip was the death of my grandfather (and his return to the
      sacred Ganga), I was also tasked with examining the ever-important
      chemicals that cloud the air and poison the waters we depend on.
    </p>
    <p class="text-white font-mono text-sm indent-8">
      This report (which would be more aptly classified as a meta-analysis),
      comes not only from the perspective of a researcher examining pollutants,
      but also from someone deeply cognizant of the city’s past and present, and
      the delicate balance of heritage, progress, and environmental stewardship,
      someone with a ‘stake in the game,’ if you will. With that in mind, let us
      turn to the chemistry of pollution in Kolkata: the chemical nature of
      these pollutants, their sources, and their environmental and health
      impacts.
    </p>
    <p class="text-white font-mono text-sm indent-8 m-0 pt-0">
      Kolkata (formerly Calcutta) is a city of immense historical significance
      in India, having served as the capital of British India until 1911.
      Founded in 1690 by the British East India Company, it became a major
      center for trade and colonial administration. Over the 19th and early 20th
      centuries, Kolkata was at the heart of India’s intellectual and cultural
      renaissance, fostering revolutionary ideas, social reform, and artistic
      movements. Figures like Rabindranath Tagore, Swami Vivekananda, and Ishwar
      Chandra Vidyasagar helped shape a modern Indian identity that blended
      tradition and Western influences.
    </p>
    <p class="text-white font-mono text-sm indent-8 m-0 pt-0">
      The city was also a focal point for political resistance against British
      rule. Kolkata was home to several key revolutionary groups, such as the
      Anushilan Samiti, who launched acts of defiance against the British. The
      iconic Coffee House on College Street became a gathering place for
      intellectuals and left-wing activists, where debates on Marxism,
      nationalism, and politics were held regularly, and essentially the staging
      ground for the entire revolution in the late 19th Century. This café
      culture in Kolkata’s intellectual life was emblematic of the city’s role
      in shaping India’s political consciousness during the struggle for
      independence.
    </p>
    <p class="text-white font-mono text-sm indent-8 m-0 pt-0">
      After independence, Kolkata continued to be a center of political and
      cultural activity. The city became the stronghold of the Indian Communist
      movement and was the site of significant left-wing activism, including the
      Naxalite insurgency of the 1960s. Despite economic challenges in the
      post-colonial period, Kolkata remains a vibrant cultural hub, known for
      its literary heritage, cinema, and festivals like Durga Puja. Today, it
      balances its colonial past with a rich legacy of social reform, political
      engagement, and artistic expression.
    </p>
    <p class="text-white font-mono text-sm indent-8 m-0 pt-0">
      Kolkata is renowned for its cultural heritage, vibrant arts scene, and
      colonial-era architecture. In the early 1900s, textile and jute factories
      led the city through a phase of rapid industrial development which also
      spurred the establishment of supporting infrastructure such as the rail
      transport systems, and communication infrastructure like the telegraph. It
      has since grown rapidly to become the 3rd most populated city in India.
      This rapid urbanization and industrialization in recent decades have led
      to significant environmental challenges, particularly in terms of
      pollution.<sup>1</sup>
    </p>
    <p class="text-white font-mono text-sm indent-8">
      As one of India’s most industrialized cities, Kolkata faces serious issues
      with air and water contamination, which have adverse effects on public
      health and the environment. The primary sources of these pollutants
      include vehicular emissions, industrial discharges, untreated sewage, and
      agricultural runoff. From a chemistry standpoint, pollution in Kolkata is
      driven by a variety of hazardous chemical substances, all of which pose
      significant risks to both human and ecological health.
    </p>
    <div class="flex justify-center">
      <img src={air_pollution} alt="" />
    </div>

    <p class="text-white text-center font-mono text-base">
      <br />
      <em>Fig. 1.</em> Kolkata’s sky<sup>2</sup>
    </p>
    <p class="text-white font-mono text-sm indent-8 m-0 pt-0">
      Air pollution in Kolkata is one incredibly important, yet often overlooked
      public health issue. When in Kolkata, all you have to do is look up to
      notice the many contaminants in the air. The aforementioned
      industrialization and population density, combined with the many vehicles
      on the streets, the many factories and coal power plants, as well as
      frequent biomass/coal burning for cooking, all comes together to cause an
      atmosphere dangerous to everyone who lives there.
    </p>
    <p class="text-white font-mono text-sm indent-8 m-0 pt-0">
      Particulate matter, especially PM<sub>2.5</sub> (particles smaller than
      2.5 micrometers) and PM<sub>10</sub> (particles smaller than 10
      micrometers), constitute a lot of the pollutants in Kolkata’s air. These
      fine particles, also known as aerosols, are dangerous for many reasons. In
      European Union countries, PM<sub>2.5</sub> decreased the average life span
      by 8.6 months and the chance of respiratory mortality increased by 0.58%
      for every 10 µg/m<sup>3</sup> increase of PM<sub>10</sub>. Individuals
      with higher exposure have a 9% greater risk of death from cardiovascular
      causes, and the confidence intervals indicate the risk could range from no
      increase to 18% higher. A 10 μg/m<sup>3</sup> increase in PM<sup>2.5</sup>
      exposure was associated with a 1.11 times higher risk of lung cancer mortality
      and a 1.08 times higher risk of lung cancer incidence with confidence intervals
      that indicate the risk could range from 3% to 18% higher. PM<sub>2.5</sub>
      and PM<sub>10</sub> are primarily released from industrial activities and
      construction. The total amount of PM<sub>2.5</sub> released in 2018 was
      88,250 tons, about 630 times higher than the baseline set by the Oregon
      Department of Environmental Quality (DEQ) of 140 tons annually, and the
      total amount of PM<sub>10</sub> was 134,750 tons, nearly 1500 times higher
      than the PM10 baseline of 90 tons.<sup>1,3,4,5,6,7</sup>
    </p>
    <p class="text-white font-mono text-sm indent-8 m-0 pt-0">
      The chemical makeup of particulate matter in Kolkata is varied. It
      includes sulfates, which are formed from the oxidation of sulfur dioxide
      (SO<sub>2</sub>), mainly emitted from coal combustion and diesel-powered
      vehicles. The total amount of SO<sub>2</sub> released in 2018 was 10,400
      tons, over 26 times higher than the DEQ’s SO<sub>2</sub> baseline of 390
      tons. Similarly, particulate matter also contains nitrates, which result
      from the reaction of nitrogen oxides (NO<sub>x</sub>) with atmospheric
      oxygen and water vapor. NO<sub>x</sub> is produced primarily by motor
      vehicles. The total amount of NO<sub>x</sub> in 2018 was 143,650 tons,
      almost 370 times higher than the DEQ’s NO<sub>x</sub> baseline of 390
      tons. Additionally, it contains Organic Carbon (OC), which is produced by
      the incomplete combustion of fossil fuels, biomass/coal burning, and the
      smoking of tobacco, the total of which in 2018 was 15,400 tons; as well as
      Elemental Carbon (EC), commonly known as black carbon and emitted from
      diesel engines and coal power plants, the total of which in 2018 was
      12,900 tons. The presence of these chemicals in the atmosphere makes
      particulate matter a dangerous component of air pollution, leading to the
      aforementioned medical issues.<sup>4,5,8,9</sup>
    </p>
    <p class="text-white font-mono text-sm indent-8 m-0 pt-0">
      There also exists several toxic gasses in Kolkata's air, with significant
      health implications for its residents, the first of which is the
      aforementioned sulfur dioxide (SO<sub>2</sub>). Sulfur dioxide is produced
      by the combustion of sulfur-containing fuels, such as coal and petroleum.
      Power plants, factories, and vehicle emissions are major sources of SO<sub
      >
        2</sub
      >. SO<sub>2</sub> can irritate the respiratory tract and contribute to the
      formation of acid rain, which harms ecosystems and buildings.<sup>5</sup>
      The chemical formula for the formation of acid rain is 2SO<sub>2</sub> + O<sub
        >2</sub
      >
      + 2H<sub>2</sub>O → 2SO<sub>3</sub> + 2H<sub>2</sub>O → 2H<sub>2</sub
      >SO<sub>4</sub>, where sulfur dioxide, diatomic oxygen, and water react to
      make sulfuric acid (acid rain). The total amount of SO<sub>2</sub>
      released in 2018 was 10,400 tons, over 26 times higher than the DEQ’s SO<sub
        >2
      </sub>
      baseline of 390 tons.<sup>4,5,10</sup>
    </p>
    <p class="text-white font-mono text-sm indent-8 m-0 pt-0">
      Nitrogen oxides, which include nitrogen dioxide (NO<sub>2</sub>) and
      nitric oxide (NO), are primarily emitted by vehicles and power plants.
      These chemicals are not inherently dangerous by themselves, but NO<sub
        >2</sub
      >
      is a product in the formation of ozone, the chemical formula of which is NO<sub
        >x</sub
      >
      + VOCs [see below] + sunlight → O<sub>3</sub>. Ground-level ozone is a
      harmful oxidant, as a 10 ppb increase in ozone leads to a 4% increase in
      respiratory mortality, and ozone also increases risk of asthma by 10%. The
      total amount of NO<sub>x</sub> in 2018 was 143,650 tons, almost 370 times
      higher than the DEQ’s NO<sub>x</sub> baseline of 390 tons.
      <sup>4,5,11,12,13</sup>
    </p>
    <p class="text-white font-mono text-sm indent-8 m-0 pt-0">
      The third and last gas present in Kolkata’s air is carbon monoxide
      produced by the incomplete combustion of fuels, particularly from motor
      vehicles and household stoves. CO interferes with the body's ability to
      transport oxygen, leading to fatigue, headaches, and, in severe cases,
      death, with a 1 mg/m<sup>3</sup> increase in the average CO concentration
      of the previous day being associated with a 0·91% increase in daily total
      mortality. There was a whopping 597,550 tons of CO released in 2018, over
      600 times the DEQ baseline of 990 tons.
      <sup>4,5,14,15</sup>
    </p>
    <p class="text-white font-mono text-sm indent-8 m-0 pt-0">
      Volatile organic compounds (VOCs) are a class of chemicals that can easily
      evaporate into the air, contributing to the formation of ground-level
      ozone and smog. Major sources of VOCs include vehicle emissions, paint,
      solvents, and biomass/coal burning. Examples include benzene (C<sub>6</sub
      >H<sub>6</sub>), toluene (C<sub>6</sub>H<sub>5</sub>CH<sub>3</sub>),
      formaldehyde (CH<sub>2</sub>O), and xylene ((CH<sub>3</sub>)<sub>2</sub
      >C<sub>6</sub>H<sub>4</sub>) are common VOCs found in the air. Long-term
      exposure to VOCs contributed to a lifetime cancer risk affecting between
      0.60 million to 0.85 million individuals globally. The total amount of
      VOCs released into the air in 2018 was 140,850 tons, over 360 times the
      DEQ baseline of 390 tons.
      <sup>4,5,16,17</sup>
    </p>
    <p class="text-white font-mono text-sm indent-8 m-0 pt-0">
      Ammonia is released primarily from agricultural activities, including the
      use of nitrogenous fertilizers. NH<sub>3</sub> is also emitted from
      wastewater treatment plants and the decomposition of organic waste.
      Ammonia in the air can react with sulfuric and nitric acids to form
      particulate the secondary aerosol of ammonium salts, which contribute to
      fine particulate matter in the air and exacerbate air pollution.
      <sup>18,19</sup>
    </p>
    <p class="text-white font-mono text-sm indent-8 m-0 pt-0">
      Lastly, Benzo(a)pyrene (BaP) is a polycyclic aromatic hydrocarbon (PAH)
      and is released into the atmosphere in smoke, from cigarettes, wildfires,
      and other causes, as well as the burning of coal. BaP is a Group I
      carcinogenic agent (matter that the International Agency for Research on
      Cancer (IARC) has classified as carcinogenic to humans, including
      substances like asbestos and tobacco) that is proven to increase the
      probability of lung cancer, skin cancer, and other forms of cancer by 11%.
      According to a study from the Asian Journal of Chemistry, the average BaP
      level in Kolkata’s air between 1999 and 2011 was 29.82 ng/m<sub>3</sub>, a
      bit less than 30 times than the EU’s guideline of 1 ng/m<sub>3</sub> of
      BaP in the atmosphere.<sup>20,21,22,23,24</sup>
    </p>
    <p class="text-white font-mono text-sm indent-8 m-0 pt-0">
      Another thing to consider with air pollution, specifically in Kolkata, is
      temperature. The year-round average for Kolkata in 2023 was 82.6°F, which
      is very, very high. Air pollution levels spike when temperatures rise.
      High temperatures can lead to more frequent droughts and more intense
      wildfires, both of which increase particulate matter (PM<sub>10</sub> and
      PM<sub>2.5</sub>). Fires also release large amounts of EC, NO<sub>x</sub>,
      CO and VOCs. Heat also accelerates biological processes responsible for
      the degradation of organic waste and wastewater, releasing both air
      pollutants and greenhouse gases into the air. Warmer temperatures also
      accelerate the reactions that form ozone.<sup>25,26</sup>
    </p>
    <p class="text-white font-mono text-sm indent-8">
      Air pollution in Kolkata presents a severe and growing public health
      crisis, driven by industrial emissions, vehicular exhaust, biomass
      burning, and other sources. The presence of harmful particulate matter,
      toxic gases, and volatile organic compounds poses significant risks to the
      population, including respiratory and cardiovascular diseases, lung
      cancer, and increased mortality rates. The city's high levels of
      pollutants, far exceeding international environmental guidelines,
      exacerbate the health impacts on residents, with heat and temperature
      fluctuations further compounding the problem. Addressing Kolkata's air
      pollution requires urgent action to reduce emissions and mitigate the
      harmful effects on public health and the environment.
    </p>
    <div class="flex justify-center">
      <img src={water_pollution} alt="" />
    </div>

    <p class="text-white text-center font-mono text-base">
      <br />
      <em>Fig. 2.</em> The Hooghly River<sup>27</sup>
    </p>
    <p class="text-white font-mono text-sm indent-8 m-0 pt-0">
      You can’t talk about water pollution in Kolkata without talking about the
      Ganges. The Ganges River (and its distributaries) is the most sacred river
      in India. Hindus believe that if one consumes water from the Ganga before
      their last breath will allow them to attain Moksha and ascend to Svarga.
      However, despite its holiness, the Ganges River is the most polluted river
      in the entire world. The distributary of the Ganges that runs through
      Calcutta is known as the Hooghly River, about 100 miles north of where the
      Hooghly empties into the Bay via the Mouths of the Ganges, the focus of
      this section.<sup>28,29</sup>
    </p>
    <p class="text-white font-mono text-sm indent-8 m-0 pt-0">
      Heavy metal contamination in the Hooghly River is a serious issue.
      Industrial byproducts, particularly from battery manufacturing, mining,
      and electroplating industries, discharge heavy metals into the water. Lead
      (Pb) is a toxic metal that has caused more than 1.5 million deaths
      globally, primarily due to cardiovascular effects and was estimated to
      account for more than 33 million years lost to disability worldwide in
      2021. Lead levels in the Hooghly were 123.3 ppb (as of 2000, newer data
      could not be found), 8 times higher than the EPA Maximum Guideline of 15
      ppb. Cadmium (Cd) is toxic to aquatic life and bioaccumulates, a threat to
      both animals and humans who consume water or seafood with cadmium as it
      has been associated with a higher likelihood of developing chronic kidney
      disease (CKD), with some studies showing a notable effect at levels as low
      as 0.18 µg/L blood cadmium and 0.27 µg/g creatinine in urine.
      Additionally, cadmium exposure is significantly linked to anemia, with
      studies showing that increased blood cadmium levels are associated with
      higher red cell distribution width (RDW), indicating potential for
      hemolytic anemia, even after adjusting for iron deficiency. Cadmium as of
      2000 were 28.9 ppb, nearly 6 times higher than the EPA Maximum Guideline
      of 5 ppb. Chromium (Cr) is acceptable in small concentrations, but in
      concentrations over 100 ppb (the EPA Maximum Guideline), hexavalent
      chromium (Cr(VI)) is considered a known human carcinogen, with studies
      showing a strong association between exposure to high levels of Cr(VI) and
      increased risk of lung cancer. Chromium levels as of 2000 were 143.3, a
      concentration that is very much not healthy.<sup
        >30,31,32,33,34,35,36,37</sup
      >
    </p>
    <p class="text-white font-mono text-sm indent-8 m-0 pt-0">
      Excessive nutrients, particularly nitrogen (N) and phosphorus (P), are
      commonly found in the Hooghly River. According to the EPA, an acceptable
      level of nitrogen in drinking water (measured as nitrate-nitrogen NO<sub
        >3</sub
      >N) is considered to be around 10 milligrams per liter (mg/L), which
      translates to approximately 161 µM. Mean NO<sub>3</sub>N concentrations in
      the Hooghly were 536.4±125.5 µM, four times the guidelines. The EPA
      recommends that drinking water has a phosphorus level of no more than
      0.3864 μg/m<sub>3</sub>, whereas the levels in the Hooghly were 40 μg/m<sub
        >3</sub
      >, roughly 100 times the acceptable baseline. The primary sources of
      nutrient pollution include untreated sewage, agricultural runoff
      containing fertilizers, and industrial discharges. High concentrations of
      nitrogen and phosphorus promote the rapid growth of algae, a process known
      as eutrophication. This leads to the depletion of oxygen in the water
      (hypoxia), causing the death of fish and other aquatic organisms, the
      chemical explanation of which is Nitrates (NO<sub>3</sub><sup>-</sup>) +
      Phosphates (PO<sub>4</sub><sup>3-</sup>) → Algal Blooms → Hypoxia. This is
      a big issue in Kolkata, both in the Hooghly River and in the East Kolkata
      Wetlands.<sup>38,39,40,41,42</sup>
    </p>
    <p class="text-white font-mono text-sm indent-8 m-0 pt-0">
      Lastly, organic pollutants, including industrial chemicals, pesticides,
      and pharmaceuticals, are prevalent in the Hooghly, specifically the
      pesticide dichlorodiphenyltrichloroethane (DDT) and a class of chemicals
      called PCBs (polychlorinated biphenyls). The WHO sets the baseline for DDT
      at 1 μg/L, whereas DDT in the Hooghly is approximately 8.97 μg/L, nearly
      nine times higher. The WHO also sets the baseline for PCBs at 10 μg/L, but
      the amount present in the Hooghly is an absolutely disappointing 1731
      μg/L. These pollutants can have long-lasting effects on water quality and
      ecosystem health, and are not only toxic but also highly persistent in the
      environment. They accumulate in the food chain, affecting both wildlife
      and humans. Mammals exposed to DDT develop liver tumors and have an
      increased risk of liver tumors and DDT is a “likely human carcinogen”
      according to the IARC. Additionally, DDT can disrupt hormone systems and
      mothers who were exposed to DDT prior to age 14 years showed a 5-fold
      increase in risk of breast cancer. PCBs, once widely used in electrical
      equipment, are now banned but continue to pollute water bodies due to
      their long persistence.
      <sup>43,44,45,46,47</sup>
    </p>
    <p class="text-white font-mono text-sm indent-8">
      The Hooghly River, a vital water source and cultural symbol in Kolkata, is
      severely threatened by multiple forms of pollution, including heavy
      metals, excessive nutrients, and organic contaminants. The levels of lead,
      cadmium, chromium, nitrogen, phosphorus, and persistent chemicals like DDT
      and PCBs far exceed internationally accepted guidelines, posing serious
      health risks to both aquatic life and humans. The river's pollution is
      driven by industrial discharge, untreated sewage, and agricultural runoff,
      which collectively contribute to the degradation of water quality, disrupt
      ecosystems, and endanger public health. Addressing these issues requires
      urgent intervention, comprehensive monitoring, and stricter enforcement of
      environmental regulations to protect both the Hooghly River and the
      communities that depend on it.
    </p>
    <p class="text-white font-mono text-sm indent-8 m-0 pt-0">
      Pollution in Kolkata is a multifaceted issue with significant chemical
      implications for air and water quality, with pollutants far exceeding the
      acceptable baselines set by credible environmental organizations like the
      EPA or the UN. The primary sources of pollutants in the city: industrial
      activities, vehicular emissions, agricultural practices, and untreated
      sewage release a range of harmful chemicals into the environment. The vast
      array of pollutants pose severe health risks, from respiratory and
      cardiovascular diseases to neurological disorders and cancer.
    </p>
    <p class="text-white font-mono text-sm indent-8 m-0 pt-0">
      There are a large amount of potential solutions to the pollution crisis in
      the region: shifting to cleaner fuels like green energy, robust
      implementation of pollution control plans, banning waste burning,
      improving sewage treatment, promoting awareness campaigns, and strictly
      enforcing emission norms for vehicles, all while monitoring air quality
      regularly to identify pollution hotspots. Effective pollution
      interventions include upgrading and expanding mass transit systems,
      reducing sulfur content in fuel, converting coal-fired power plants to
      natural gas, and redesigning urban areas to promote walkable communities.
      There really isn’t a satisfying be-all end-all solution to air or water
      pollution, and the only way these problems will be solved is through a
      multifaceted, systematic effort to improve society as a whole. Only
      through such collective action can Kolkata hope to mitigate the damaging
      effects of pollution and ensure a healthier, more sustainable future for
      its residents and the environment.
    </p>
    <hr />
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >1. “Air Quality Analysis for Kolkata (Calcutta), India -
        UrbanEmissions.Info.” UrbanEmissions.Info, 13 Jan. 2024,
        urbanemissions.info/india-apna/kolkata-india.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >2. Ians. “Kolkata Air Toxic, Warns Study.” Zee News, 30 Jan. 2016,
        zeenews.india.com/news/eco-news/kolkata-air-toxic-warns-study_1850711.html.
      </sup>
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >3. Kong, Liuwei, et al. “Elucidating the Pollution Characteristics of
        Nitrate, Sulfate and Ammonium in
        PM&Amp;Lt;Sub&Amp;Gt;2.5&Lt;/Sub&Amp;Gt; in Chengdu, Southwest China,
        Based on 3-year Measurements.” Atmospheric Chemistry and Physics, vol.
        20, no. 19, Sept. 2020, pp. 11181–99.
        https://doi.org/10.5194/acp-20-11181-2020.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >4. Oregon Department of Environmental Quality. Air Quality Permit
        Updates 2022. 30 Dec. 2021,
        www.oregon.gov/deq/rulemaking/Documents/aqPermits2022m2PSEL.pdf.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >5. Xing, Yu Fei, et al. “The Impact of PM2.5 on the Human Respiratory
        System.” PubMed, vol. 8, no. 1, Jan. 2016, pp. E69-74.
        https://doi.org/10.3978/j.issn.2072-1439.2016.01.19.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >6. Krittanawong, Chayakrit, MD, et al. “PM2.5 and Cardiovascular Health
        Risks.” Current Problems in Cardiology, vol. 48, no. 6, 101670, June
        2023. ScienceDirect,
        www.sciencedirect.com/science/article/abs/pii/S0146280623000877.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >7. Huang, Feifei, et al. “Relationship Between Exposure to PM2.5 and
        Lung Cancer Incidence and Mortality: A Meta-analysis.” Oncotarget, vol.
        8, no. 26, Apr. 2017, pp. 43322–31.
        https://doi.org/10.18632/oncotarget.17313.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >8. Sulfur Dioxide Effects on Health - Air (U.S. National Park Service).
        www.nps.gov/subjects/air/humanhealth-sulfur.htm.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >9. Rauber, Martin, et al. “An Optimised Organic Carbon ∕ Elemental
        Carbon (OC ∕ EC) Fraction Separation Method for Radiocarbon Source
        Apportionment Applied to Low-loaded Arctic Aerosol Filters.” Atmospheric
        Measurement Techniques, vol. 16, no. 3, Feb. 2023, pp. 825–44.
        https://doi.org/10.5194/amt-16-825-2023.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >10. “Effects of Acid Rain | US EPA.” US EPA, 7 May 2024,
        www.epa.gov/acidrain/effects-acid-rain.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >11. NASA Earth Observatory. Chemistry in the Sunlight.
        earthobservatory.nasa.gov/features/ChemistrySunlight/chemistry_sunlight3.php.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >12. Huang, Wanting, et al. “Ozone Exposure and Asthma Attack in
        Children.” Frontiers in Pediatrics, vol. 10, Apr. 2022,
        https://doi.org/10.3389/fped.2022.830897.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >13. Kim, Sun-Young, et al. “Health Effects of Ozone on Respiratory
        Diseases.” Tuberculosis & Respiratory Diseases, vol. 83, no. Supple 1,
        Dec. 2020, pp. S6–11. https://doi.org/10.4046/trd.2020.0154.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >14. “Carbon Monoxide Poisoning - Symptoms and Causes.” Mayo Clinic,
        www.mayoclinic.org/diseases-conditions/carbon-monoxide/symptoms-causes/syc-20370642.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >15. Chen, Kai, PhD, et al. “Ambient Carbon Monoxide and Daily
        Mortality: A Global Time-series Study in 337 Cities.” The Lancet
        Planetary Health, vol. 5, no. 4, 191–199, Apr. 2021, p. 1.
        www.thelancet.com/journals/lanplh/article/PIIS2542-5196%2821%2900026-7/fulltext.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >16. “What Are Volatile Organic Compounds (VOCs) | US EPA.” US EPA, 5
        Mar. 2024,
        www.epa.gov/indoor-air-quality-iaq/what-are-volatile-organic-compounds-vocs.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >17. Xiong, Ying, et al. “One-third of Global Population at Cancer Risk
        Due to Elevated Volatile Organic Compounds Levels.” Npj Climate and
        Atmospheric Science, vol. 7, no. 1, Mar. 2024,
        https://doi.org/10.1038/s41612-024-00598-1.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >18. Ammonia | Air Pollution Information System.
        www.apis.ac.uk/overview/pollutants/overview_nh3.htm.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >19. De Vos, Dirk. Ammonia – From Protein to Air Pollution.
        blog.n2applied.com/blog/ammonia-from-protein-to-air-pollution.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >20. “How Air Pollution Affects Our Health.” European Environment
        Agency’s Home Page, 28 Oct. 2024,
        www.eea.europa.eu/en/topics/in-depth/air-pollution/eow-it-affects-our-health.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >21. U.S. EPA. Benzo(a)Pyrene (BaP) TEACH Chemical Summary. report, 1
        Aug. 2007, pp. 1–3.
        archive.epa.gov/region5/teach/web/pdf/bap_summary.pdf.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >22. Suvarapu, Lakshmi Narayana, et al. “Concentrations of Polycyclic
        Aromatic Hydrocarbons in Indian Atmosphere During 1999-2011.” Asian
        Journal of Chemistry, vol. 24, no. 12, 5463–5465, 2012, pp. 2–3.
        asianpubs.org/index.php/ajchem/article/download/9905/9891/9935.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >23. National Center for Environmental Assessment, et al. “Toxicological
        Review of Benzo[a]Pyrene.” Integrated Risk Information System, report,
        Jan. 2017, iris.epa.gov/static/pdfs/0136_summary.pdf.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >24. Kelly, Jamie M., et al. “Global Cancer Risk From Unregulated
        Polycyclic Aromatic Hydrocarbons.” GeoHealth, vol. 5, no. 9, Sept. 2021,
        https://doi.org/10.1029/2021gh000401.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >25. Cardenas, Beatriz. “What Happens When Extreme Heat and Air
        Pollution Collide.” World Resources Institute,
        www.wri.org/insights/extreme-heat-air-pollution.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >26. “Kolkata (India) Weather.” Met Office, 28 Nov. 2024,
        weather.metoffice.gov.uk/forecast/tunb1zrcn#?date=2024-11-28.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >27. WhatsHot.
        www.whatshot.in/kolkata/west-bengal-rivers-are-in-a-pitiable-state-since-2013--no-ones-talking-about-it-c-25020.
      </sup>
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >28. Lal, Kanchan. “12 Most Polluted Rivers in the World — Sea Smart.”
        Sea Smart, 1 Feb. 2024,
        www.seasmartschool.com/blog/2022/2/17/12-most-polluted-rivers-in-the-world.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >29. Bhatia, Jyoti. Hindu Perspective on Water - Case Study of River
        Ganga.
        standrewscollege.ac.in/wp-content/uploads/2019/11/Cardinal-Paul-Poupard-2011-Hindu-perspective.pdf.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >30. Ghosh, Phanibhusan, et al. “Distribution of Lead, Cadmium and
        Chromium in the Waste Water of Calcutta Canals.” ResearchGate, vol. 4,
        Jan. 2000, pp. 33–36.
        www.researchgate.net/publication/331045404_Distribution_of_Lead_Cadmium_and_chromium_in_the_waste_water_of_Calcutta_canals.
        Accessed 27 Nov. 2024.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >31. Szwabowski, Sam. “Guide to PPB and “Safe” Lead Levels in Water:
        Understanding the Standards.” Forensic Analytical Consulting Services,
        16 Sept. 2024,
        facs.com/blog/guide-to-ppb-and-safe-lead-levels-in-water-understanding-the-standards.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup>32. Cadmium. www.knowyourh2o.com/indoor-6/cadmium.</sup>
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >33. “Chromium in Drinking Water | US EPA.” US EPA, 23 Feb. 2024,
        www.epa.gov/sdwa/chromium-drinking-water.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >34. World Health Organization: WHO. Lead Poisoning. 27 Sept. 2024,
        www.who.int/news-room/fact-sheets/detail/lead-poisoning-and-health.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >35. Ferraro, Pietro Manuel, et al. “Low Level Exposure to Cadmium
        Increases the Risk of Chronic Kidney Disease: Analysis of the NHANES
        1999-2006.” BMC Public Health, vol. 10, no. 1, June 2010,
        https://doi.org/10.1186/1471-2458-10-304.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >36. Lee A., Yangho Kim B., and Byung-Kook. “Iron Deficiency Is
        Associated With Increased Levels of Blood Cadmium in the Korean General
        Population: Analysis of 2008–2009 Korean National Health and Nutrition
        Examination Survey Data Author Links Open Overlay Panel.” ScienceDirect,
        Nov. 2011, p. 1.
        www.sciencedirect.com/science/article/abs/pii/S0013935111002933.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >37. “Hexavalent Chromium.” osha.gov,
        www.osha.gov/hexavalent-chromium/health-effects. Accessed 8 Dec. 2024.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >38. “Sources and Solutions | US EPA.” US EPA, 15 Nov. 2024,
        www.epa.gov/nutrientpollution/sources-and-solutions.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >39. The State of Connecticut Department of Public Health and
        Environmental Health Section, Private Well Program. “Nitrogen
        Contamination in Private Drinking Water Wells.” Publication No. 16, Apr.
        2009,
        portal.ct.gov/-/media/departments-and-agencies/dph/dph/environmental_health/pdf/16nitrogencontaminationinpdwwpdf.pdf.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >40. Biswajit Bera, et al. “East Kolkata Wetlands – Fast Turning Death
        Traps for Aquatic Ecosystems?” India Water Portal, 24 June 2021,
        indiawaterportal.org/water-quality-and-pollution/pollution/east-kolkata-wetland-fast-turning-death-traps-aquatic-ecosystem</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >41. “Phosphates.” watertechonline.com, 30 Nov. 2012,
        www.watertechonline.com/home/article/15540707/phosphates. Accessed 8
        Dec. 2024.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >42. Vaithiyanathan, P., et al. “Phosphorus Distribution in the
        Sediments of the Hooghly (Ganges) Estuary, India.” Estuarine, Coastal
        and Shelf Science, vol. 37, no. 6, Dec. 1993, pp. 603–14. ScienceDirect,
        www.sciencedirect.com/science/article/abs/pii/S0272771483710760.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >43. US Environmental Protection Agency. NPTN General Fact Sheets. 1999,
        npic.orst.edu/factsheets/ddtgen.pdf.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >44. Zanardi-Lamardo, Eliete, et al. “Distribution and Sources of
        Organic Contaminants in Surface Sediments of Hooghly River Estuary and
        Sundarban Mangrove, Eastern Coast of India.” Marine Pollution Bulletin,
        vol. 146, June 2019, pp. 39–49.
        https://doi.org/10.1016/j.marpolbul.2019.05.043.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >45. Toft, P. and World Health Organization. “DDT And Its Derivatives in
        Drinking-water.” Background Document for Development of WHO Guidelines
        for Drinking-water Quality, by J.K. Fawell et al., 2004,
        cdn.who.int/media/docs/default-source/wash-documents/wash-chemicals/ddt.pdf?sfvrsn=1d7f988e_4.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >46. PUBLIC HEALTH DIVISION. Polychlorinated Biphenyls (PCBs) and
        Drinking Water. May 2015,
        www.oregon.gov/oha/PH/HEALTHYENVIRONMENTS/DRINKINGWATER/MONITORING/Documents/health/pcb.pdf.</sup
      >
    </p>
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup
        >47. Cohn, Barbara A., et al. “DDT Exposure in Utero and Breast Cancer.”
        The Journal of Clinical Endocrinology & Metabolism, vol. 100, no. 8,
        June 2015, pp. 2865–72. https://doi.org/10.1210/jc.2015-1841.</sup
      >
    </p>
    <br />
  </details>
</div>

<h2 class="text-white font-mono text-[clamp(1rem,20vw,1.5rem)] mt-3">Contact</h2>

<div
  class="inline-flex flex-row flex-wrap gap-1 justify-between content-center w-full h-auto
  border-5 border-aroace-dark-blue rounded-lg p-1 m-3
  bg-[hsl(215.09_46.09%_22.55%)]
  bg-[repeating-linear-gradient(transparent,_transparent_50px,_rgba(0,0,0,.12)_50px,_rgba(0,0,0,.12)_53px,_transparent_53px,_transparent_63px,_rgba(0,0,0,.12)_63px,_rgba(0,0,0,.12)_66px,_transparent_66px,_transparent_116px,_rgba(0,0,0,.15)_116px,_rgba(0,0,0,.15)_166px,_rgba(255,255,255,.05)_166px,_rgba(255,255,255,.05)_169px,_rgba(0,0,0,.15)_169px,_rgba(0,0,0,.15)_179px,_rgba(255,255,255,.05)_179px,_rgba(255,255,255,.05)_182px,_rgba(0,0,0,.15)_182px,_rgba(0,0,0,.15)_232px,_transparent_232px),repeating-linear-gradient(270deg,_transparent,_transparent_50px,_rgba(0,0,0,.12)_50px,_rgba(0,0,0,.12)_53px,_transparent_53px,_transparent_63px,_rgba(0,0,0,.12)_63px,_rgba(0,0,0,.12)_66px,_transparent_66px,_transparent_116px,_rgba(0,0,0,.15)_116px,_rgba(0,0,0,.15)_166px,_rgba(255,255,255,.05)_166px,_rgba(255,255,255,.05)_169px,_rgba(0,0,0,.15)_169px,_rgba(0,0,0,.15)_179px,_rgba(255,255,255,.05)_179px,_rgba(255,255,255,.05)_182px,_rgba(0,0,0,.15)_182px,_rgba(0,0,0,.15)_232px,_transparent_232px),repeating-linear-gradient(125deg,_transparent,_transparent_2px,_rgba(0,0,0,.06)_2px,_rgba(0,0,0,.06)_3px,_transparent_3px,_transparent_5px,_rgba(0,0,0,.06)_5px)]
"
>
  <span
    class="flex-row content-center text-white font-mono text-xs"
    id="input1"
  >
    Name:
  </span>
  <input type="text" bind:value={name} /><br />
  <span
    class="flex-row content-center text-white font-mono text-xs"
    id="input2"
  >
    Email:
  </span>
  <input type="text" bind:value={email} /><br />
  <span
    class="flex-row content-center text-white font-mono text-xs"
    id="input3"
  >
    On 1540?
  </span>
  <input type="checkbox" id="1540" bind:checked={on1540} /><label for="On 1540?"
  ></label>
  <span
    class="flex-row content-center text-white font-mono text-xs"
    id="input3"
  >
    Interested in buying?
  </span>
  <input type="checkbox" bind:checked={isBuyer} /><label
    for="Interested in buying?"
  ></label>
  <my-button
    class="flex-row content-center text-white font-mono text-sm
    transition-[width, height] duration-750 ease-in-out
    hover:scale-110"
    role="button"
    tabindex="-1"
    id="my-button6"
    onmouseover={() => change_color("my-button6", "#396488")}
    onfocus={() => change_color("my-button6", "#396488")}
    onmouseout={() => change_color("my-button6", "#1f3554")}
    onblur={() => change_color("my-button6", "#1f3554")}
    onclick={output}
    onkeydown={output}>Submit</my-button
  >
</div>

<h2 class="text-white font-mono text-[clamp(1rem,20vw,1.5rem)] mt-4">Certifications</h2>

<div
  class="inline-flex flex-row flex-wrap gap-1 justify-between content-center w-auto h-auto
  border-5 border-aroace-dark-blue rounded-lg p-1 m-3
  bg-[hsl(215.09_46.09%_22.55%)]
  bg-[repeating-linear-gradient(transparent,_transparent_50px,_rgba(0,0,0,.12)_50px,_rgba(0,0,0,.12)_53px,_transparent_53px,_transparent_63px,_rgba(0,0,0,.12)_63px,_rgba(0,0,0,.12)_66px,_transparent_66px,_transparent_116px,_rgba(0,0,0,.15)_116px,_rgba(0,0,0,.15)_166px,_rgba(255,255,255,.05)_166px,_rgba(255,255,255,.05)_169px,_rgba(0,0,0,.15)_169px,_rgba(0,0,0,.15)_179px,_rgba(255,255,255,.05)_179px,_rgba(255,255,255,.05)_182px,_rgba(0,0,0,.15)_182px,_rgba(0,0,0,.15)_232px,_transparent_232px),repeating-linear-gradient(270deg,_transparent,_transparent_50px,_rgba(0,0,0,.12)_50px,_rgba(0,0,0,.12)_53px,_transparent_53px,_transparent_63px,_rgba(0,0,0,.12)_63px,_rgba(0,0,0,.12)_66px,_transparent_66px,_transparent_116px,_rgba(0,0,0,.15)_116px,_rgba(0,0,0,.15)_166px,_rgba(255,255,255,.05)_166px,_rgba(255,255,255,.05)_169px,_rgba(0,0,0,.15)_169px,_rgba(0,0,0,.15)_179px,_rgba(255,255,255,.05)_179px,_rgba(255,255,255,.05)_182px,_rgba(0,0,0,.15)_182px,_rgba(0,0,0,.15)_232px,_transparent_232px),repeating-linear-gradient(125deg,_transparent,_transparent_2px,_rgba(0,0,0,.06)_2px,_rgba(0,0,0,.06)_3px,_transparent_3px,_transparent_5px,_rgba(0,0,0,.06)_5px)]
"
>
  <img src={id_1} alt="" width="200"/>
  <img src={id_2} alt="" width="200"/>

</div>

<br /> <br /> <br /> <br />
<p class="text-white font-mono text-xs">*cash only</p>
<br /> <br /> <br />

<div
  id="footer"
  class="inline-flex flex-col fixed bottom-0 w-auto h-auto
  border-5 border-aroace-dark-blue rounded-lg p-2 m-4
  bg-[hsl(215.09_46.09%_22.55%)]
  bg-[repeating-linear-gradient(transparent,_transparent_50px,_rgba(0,0,0,.12)_50px,_rgba(0,0,0,.12)_53px,_transparent_53px,_transparent_63px,_rgba(0,0,0,.12)_63px,_rgba(0,0,0,.12)_66px,_transparent_66px,_transparent_116px,_rgba(0,0,0,.15)_116px,_rgba(0,0,0,.15)_166px,_rgba(255,255,255,.05)_166px,_rgba(255,255,255,.05)_169px,_rgba(0,0,0,.15)_169px,_rgba(0,0,0,.15)_179px,_rgba(255,255,255,.05)_179px,_rgba(255,255,255,.05)_182px,_rgba(0,0,0,.15)_182px,_rgba(0,0,0,.15)_232px,_transparent_232px),repeating-linear-gradient(270deg,_transparent,_transparent_50px,_rgba(0,0,0,.12)_50px,_rgba(0,0,0,.12)_53px,_transparent_53px,_transparent_63px,_rgba(0,0,0,.12)_63px,_rgba(0,0,0,.12)_66px,_transparent_66px,_transparent_116px,_rgba(0,0,0,.15)_116px,_rgba(0,0,0,.15)_166px,_rgba(255,255,255,.05)_166px,_rgba(255,255,255,.05)_169px,_rgba(0,0,0,.15)_169px,_rgba(0,0,0,.15)_179px,_rgba(255,255,255,.05)_179px,_rgba(255,255,255,.05)_182px,_rgba(0,0,0,.15)_182px,_rgba(0,0,0,.15)_232px,_transparent_232px),repeating-linear-gradient(125deg,_transparent,_transparent_2px,_rgba(0,0,0,.06)_2px,_rgba(0,0,0,.06)_3px,_transparent_3px,_transparent_5px,_rgba(0,0,0,.06)_5px)]
  transition-[width, height] duration-500 ease-in-out
  hover:scale-105"
  role="tooltip"
  onmouseover={() => change_color("footer", "#396488")}
  onfocus={() => change_color("footer", "#396488")}
  onmouseout={() => change_color("footer", "#1f3554")}
  onblur={() => change_color("footer", "#1f3554")}
>
  <p class="content-normal text-white font-mono text-sm mb-0">
    &copy; 2025 Vikas Banerjee Murthy. All rights reserved. Having trouble with
    the form? Contact me at:&nbsp;
    <a class="text-aroace-light-blue" href="mailto:vikasarino@gmail.com">
      vikasarino@gmail.com</a
    >
  </p>
  <p>
    <em class="content-normal text-gray-400 font-mono text-sm mb-0"
      >now playing: {song}</em
    >
  </p>
</div>

<style>
  :global(body)::before {
    content: "";
    position: fixed;
    inset: 0;
    z-index: -2;
    padding: 0px;
    height: 100vh;
    background-image: url("http://localhost:5173/mr-lemoncello.github.io/images/background.jpg");
    background-color: #1c1c1e;
    filter: brightness(30%) contrast(80%) blur(0.8px);
    object-fit: cover;
    position: center;
  }
  :global(body) {
    margin: 40px;
  }
</style>
