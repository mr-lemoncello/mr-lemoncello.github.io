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

  import { onMount } from "svelte";

  let discordUserState: string | null = null;
  onMount(async () => {
    try {
      const response = await fetch(
        `https://api.lanyard.rest/v1/users/1250607214180438016`,
      );
      const data = await response.json();

      discordUserState = data.data.activities[0]?.state;
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  });

  let a1 = 0;
  let a2 = 0;
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
    if (name == "my-button-b1" && b1 == 1) return;
    if (name == "my-button-b2" && b2 == 1) return;
    if (name == "my-button-b3" && b3 == 1) return;
    fn_name.style.backgroundColor = color; //changes HTMLElement background color to desired
  }

  function toggle(id: string, counterid: string, front: boolean) {
    const fn_id = document.getElementById(id);
    const fn_counterid = document.getElementById(counterid);
    if (
      fn_id === null ||
      fn_counterid === null
    )
      return;
    const dfn_id = document.getElementById(fn_id.id + "d");
    const dfn_counterid = document.getElementById(fn_counterid.id + "d");
    if (
      dfn_id === null ||
      dfn_counterid === null
      ) 
      return;
    fn_id.style.filter = "brightness(120%)";
    dfn_id.style.display = "block";
    dfn_counterid.style.display = "none";
    if (front === true) {
      i = 1;
      if (j === 1) {
        fn_counterid.style.filter = "brightness(100%)";
        j = 0;
      }
    }
    else {
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
    const resume = document.getElementById("resume");
    const poetry = document.getElementById("poetry");
    a1 = 1 - a1;
    if (
      mybutton_a1 === null ||
      resume === null ||
      poetry === null ||
      mybutton_a2 === null
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
    }
    if (a1 === 0) {
      resume.style.display = "none";
    }
  }

  function mybutton_a2() {
    //same as above, but toggles poetry books instead of resume
    const mybutton_a2 = document.getElementById("my-button-a2");
    const mybutton_a1 = document.getElementById("my-button-a1");
    const poetry = document.getElementById("poetry");
    const resume = document.getElementById("resume");
    a2 = 1 - a2;
    if (
      mybutton_a2 === null ||
      poetry === null ||
      resume === null ||
      mybutton_a1 === null
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
    }
    if (a2 === 0) {
      poetry.style.display = "none";
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

<h1 class="text-white font-mono font-semibold text-3xl mt-1.5 mb-1.5">
  Vikas Banerjee Murthy
</h1>

<em class="text-gray-400 font-mono text-sm">{discordUserState}</em>
<link rel="image" href={file_480} />
<div
  class="inline-flex flex-row gap-1 justify-between content-stretch w-full h-auto
 border-5 border-aroace-dark-blue rounded-lg
p-1 m-3 bg-aroace-dark-blue"
>
  <div
    class="inline-flex m-2 border-5 border-aroace-yellow rounded-full
    w-35 h-35 transition-[width, height] duration-750 ease-in-out
    shrink-0 overflow-hidden hover:w-65 hover:h-65"
    role="tooltip"
    id="file_480"
  >
    <img class="block object-cover" src={file_480} alt="" />
  </div>
  <div
    class="inline-flex flex-wrap justify-start content-around items-normal
    h-auto w-auto text-aroace-dark-blue font-mono text-xs m-2.5 p-2.5
   border-5 border-aroace-orange rounded-lg
  bg-aroace-light-blue"
  >
    <em>Vikas [also mr_lemoncello and Noa Ellis] - they/them</em>
    <p>
      I like lots of stuff, but I'm too lazy to write it all here. Here's a few
      for your troubles: poetry/writing, filmmaking, music, biking.
    </p>
    <p>English, ein bisschen Deutsch, 一点普通话&nbsp;</p>
    <p>:3</p>
  </div>
</div>
<div
  class="inline-flex flex-row gap-1 justify-between content-stretch w-auto h-auto
 border-5 border-aroace-dark-blue rounded-lg p-1 m-3 bg-aroace-dark-blue"
>
  <my-button
    class="inline-flex justify-center content-center m-6 pl-8 pr-8 pt-2 pb-2
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
    class="inline-flex justify-center content-center m-6 pl-8 pr-8 pt-2 pb-2
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
</div>

<div class="hidden m-2" id="resume">
  <h2 class="text-white font-mono mt-3">Resume</h2>
  <div class="w-50 h-auto">
    <img src={resume} alt="" />
  </div>
  <br />
</div>

<div class="hidden m-2" id="poetry">
  <h2 class="text-white font-mono mt-3">Poetry Books</h2>
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
    border-5 border-aroace-dark-blue rounded-lg p-1 m-3 bg-aroace-dark-blue"
  >
    <div
      class="inline-flex flex-column gap-1 justify-start content-center w-auto h-auto
    border-5 border-aroace-light-blue rounded-lg p-1 m-3 bg-aroace-dark-blue"
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
    border-5 border-aroace-dark-blue rounded-lg p-1 m-3 bg-aroace-dark-blue"
  >
    <div
      class="inline-flex flex-column gap-1 justify-start content-center w-auto h-auto
    border-5 border-aroace-light-blue rounded-lg p-1 m-3 bg-aroace-dark-blue"
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
    border-5 border-aroace-dark-blue rounded-lg p-1 m-3 bg-aroace-dark-blue"
  >
    <div
      class="inline-flex flex-column gap-1 justify-start content-center w-auto h-auto
    border-5 border-aroace-light-blue rounded-lg p-1 m-3 bg-aroace-dark-blue"
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
    border-5 border-aroace-dark-blue rounded-lg p-1 m-3 bg-aroace-dark-blue"
  >
    <div
      class="inline-flex flex-column gap-1 justify-start content-center w-auto h-auto
    border-5 border-aroace-light-blue rounded-lg p-1 m-3 bg-aroace-dark-blue"
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
    border-5 border-aroace-dark-blue rounded-lg p-1 m-3 bg-aroace-dark-blue"
  >
    <div
      class="inline-flex flex-column gap-1 justify-start content-center w-auto h-auto
    border-5 border-aroace-light-blue rounded-lg p-1 m-3 bg-aroace-dark-blue"
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
    border-5 border-aroace-dark-blue rounded-lg p-1 m-3 bg-aroace-dark-blue"
  >
    <div
      class="inline-flex flex-column gap-1 justify-start content-center w-auto h-auto
    border-5 border-aroace-light-blue rounded-lg p-1 m-3 bg-aroace-dark-blue"
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

<h2 class="text-white font-mono mt-3">Creative Endeavors</h2>

<div
  class="inline-flex flex-row gap-1 justify-between content-stretch w-auto h-auto
 border-5 border-aroace-dark-blue rounded-lg
p-1 m-3 bg-aroace-dark-blue"
>
  <my-button
    class="inline-flex justify-center content-center m-6 pl-8 pr-8 pt-2 pb-2
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
    class="inline-flex justify-center content-center m-6 pl-8 pr-8 pt-2 pb-2
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
    class="inline-flex justify-center content-center m-6 pl-8 pr-8 pt-2 pb-2
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
  <h2 class="text-white font-mono mt-3">Editing Projects</h2>
  <p class="text-white font-mono text-xl">
    Ink and Blood: The Lines That Divide Us
  </p>
  <div
    class="inline-flex flex-row gap-1 justify-between w-full h-auto
  border-5 border-aroace-dark-blue rounded-lg p-1 ml-3 mb-3 bg-aroace-dark-blue"
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
      class="inline-flex flex-column flex-wrap justify-start content-around items-normal
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
  border-5 border-aroace-dark-blue rounded-lg p-1 ml-3 mb-3 bg-aroace-dark-blue"
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
      class="inline-flex flex-column flex-wrap justify-start content-around items-normal
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
  border-5 border-aroace-dark-blue rounded-lg p-1 ml-3 mb-3 bg-aroace-dark-blue"
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
      class="inline-flex flex-column flex-wrap justify-start content-around items-normal
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
  border-5 border-aroace-dark-blue rounded-lg p-1 ml-3 mb-3 bg-aroace-dark-blue"
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
      class="inline-flex flex-column flex-wrap justify-start content-around items-normal
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
  <h2 class="text-white font-mono mt-3">Essays</h2>
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
  <details>
    <summary class="text-white font-mono text-xl mb-0">
      &nbsp;Animal Farm and Nineteen Eighty-Four on Authoritarianism - 2 Apr
      2025
    </summary>
    <p class="text-white font-mono text-sm indent-8 mb-0">text</p>
    <hr />
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup>1. text</sup>
    </p>
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
      &nbsp;Emotionally Abusive Parenting and the Societal Structures That
      Sanction It - 11 Nov 2025
    </summary>
    <p class="text-white font-mono text-sm indent-8 mb-0">text</p>
    <hr />
    <p class="text-white font-mono text-sm m-0 pt-0">
      <sup>1. text</sup>
    </p>
  </details>
</div>

<h2 class="text-white font-mono mt-3">Contact</h2>

<div
  class="inline-flex flex-row gap-1 justify-between content-center w-full h-auto
 border-5 border-aroace-dark-blue rounded-lg
p-1 m-3 bg-aroace-dark-blue"
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

<br /> <br /> <br /> <br />
<p class="text-white font-mono text-xs">*cash only</p>
<br /> <br /> <br />

<div
  id="footer"
  class="flex flex-row gap-4 fixed bottom-0 w-auto h-auto
   border-5 border-aroace-dark-blue rounded-lg
  p-4 m-4 bg-aroace-dark-blue transition-[width, height] duration-500 ease-in-out
  hover:scale-110"
  role="tooltip"
  onmouseover={() => change_color("footer", "#396488")}
  onfocus={() => change_color("footer", "#396488")}
  onmouseout={() => change_color("footer", "#1f3554")}
  onblur={() => change_color("footer", "#1f3554")}
>
  <p class="content-normal text-white font-mono text-sm mb-0">
    &copy; 2025 Vikas Banerjee Murthy. All rights reserved. Having trouble with
    the form? Contact me at:&nbsp;
    <a
      class="text-aroace-light-blue hover:underline"
      href="mailto:vikasarino@gmail.com"
    >
      vikasarino@gmail.com</a
    >
  </p>
</div>

<style>
  :global(body) {
    background-color: #1c1c1e;
    margin: 40px;
  }
</style>
