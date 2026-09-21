<script lang="ts">
    import { animate, stagger } from "animejs";
    import { onMount } from "svelte";

    let { diameter, fontSize } = $props();

    type Link = {
        name: string;
        href: string;
        icon: string;
        iconStyle: "fa-brands" | "fa-solid";
        hover: string;
        glow: string;
    };

    const links: Link[] = [
        {
            name: "Email",
            href: "mailto:vikasarino@gmail.com",
            icon: "fa-envelope",
            iconStyle: "fa-solid",
            hover: "bg-[#0078D4]",
            glow: "shadow-[0_0_18px_#0078D4aa]",
        },
        {
            name: "YouTube",
            href: "https://www.youtube.com/channel/UC5qwrUuAOktVPydz6VLHW1w",
            icon: "fa-youtube",
            iconStyle: "fa-brands",
            hover: "bg-[#FF0000]",
            glow: "shadow-[0_0_18px_#ff0000aa]",
        },
        {
            name: "GitHub",
            href: "https://github.com/mr-lemoncello",
            icon: "fa-github",
            iconStyle: "fa-brands",
            hover: "bg-[#24292e]",
            glow: "shadow-[0_0_18px_#ffffff66]",
        },
    ];

    const textSizes = ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl", "7xl", "8xl", "9xl"];

    export function textSizePlus4(size: string) {
        const index = textSizes.indexOf(size);
        return textSizes[index + 4];
    }

    const diameterClasses: Record<string, string> = {
        "8": "h-8 w-8",
        "10": "h-10 w-10",
        "12": "h-12 w-12",
        "14": "h-14 w-14",
        "16": "h-16 w-16",
        "20": "h-20 w-20",
    };

    const fontSizeClasses: Record<string, string> = {
        xs: "text-xs",
        sm: "text-sm",
        md: "text-md",
        lg: "text-lg",
        xl: "text-xl",
        "2xl": "text-2xl",
        "3xl": "text-3xl",
        "4xl": "text-4xl",
        "5xl": "text-5xl",
        "6xl": "text-6xl",
        "7xl": "text-7xl",
        "8xl": "text-8xl",
        "9xl": "text-9xl",
    };

    function enter(label: HTMLSpanElement, icon: HTMLElement) {
        animate(label, {
            width: label.scrollWidth,
            opacity: 1,
            marginInline: "0.75rem",
            duration: 400,
            easing: "ease-out-cubic",
        });

        animate(icon, {
            scale: [1, 1.25, 1.1],
            rotate: [0, 10, -8, 0],
            duration: 500,
            easing: "ease-out-back",
        });
    }

    function leave(label: HTMLSpanElement, icon: HTMLElement) {
        animate(label, {
            width: 0,
            opacity: 0,
            marginInline: 0,
            duration: 250,
            easing: "ease-in-cubic",
        });

        animate(icon, {
            scale: 1,
            rotate: 0,
            duration: 200,
        });
    }

    onMount(() => {
        animate(".social-pill", {
            translateY: [20, 0],
            opacity: [0, 1],
            delay: stagger(90),
            duration: 600,
            easing: "ease-out-cubic",
        });
    });
</script>

<svelte:head>
    <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
    />
</svelte:head>

{#each links as link}
    <div
        class="social-pill bg-white/10 backdrop-blur-xl rounded-full border border-white/10 shadow-lg"
    >
        <a
            href={link.href}
            target="_blank"
            rel="noopener"
            class="flex items-center text-white focus:outline-none focus-visible:ring-2 ring-white/70 rounded-full"
            onmouseenter={(e) =>
                enter(
                    e.currentTarget.querySelector("span")!,
                    e.currentTarget.querySelector(".icon")!,
                )}
            onmouseleave={(e) =>
                leave(
                    e.currentTarget.querySelector("span")!,
                    e.currentTarget.querySelector(".icon")!,
                )}
        >
            <div
                class={`icon ${diameterClasses[diameter]} flex items-center justify-center rounded-full ${fontSizeClasses[textSizePlus4(fontSize)]} transition-all duration-300 ${link.hover} ${link.glow}`}
            >
                <i class={`${link.iconStyle} ${link.icon}`}></i>
            </div>

            <span
                class={`${fontSizeClasses[fontSize]} font-semibold tracking-wide overflow-hidden whitespace-nowrap`}
                style="width:0; opacity:0"
            >
                {link.name}
            </span>
        </a>
    </div>
{/each}
