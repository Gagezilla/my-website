<script>
    import Page from "../comps/Page.svelte";
    import { browser } from '$app/environment';
    import { onDestroy } from 'svelte';

    let socket;
    let src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Solid_white.svg/768px-Solid_white.svg.png";
    let genText = "not generating"
    let prompt;

    if (browser) {
        socket = new WebSocket("wss://ig.gagey.dev:8765");

        socket.addEventListener("open", () => {
            console.log("Connected");
        });

        socket.addEventListener("message", (m) => {
            console.log(m)
            if (m.data !== "in use by another user") {
                src = "data:image/png;base64," + m.data
                genText = "finished generating"
            }
            else {
                genText = m.data
            }
        })
    }

    function generateImage() {
        socket.send("queue~Lykon/DreamShaper~"+prompt+"~bad anatomy~35")
        genText = "generating..."
    }

    onDestroy(() => {
        // if (socket) {
        //     socket.close();
        //     console.log("Closed");
        //
        //     socket.off("open");
        //     socket.off("message");
        // }
    });
</script>

<Page title="IMGEN" content="This is where the magic happends.">
    <div class="flex flex-col items-center text-center font-medium text-3xl mt-20">
        <div class="flex max-w-[512px] gap-4">
            <input bind:value={prompt} class="border-white border-2 rounded-xl px-4 py-2 min-w-0" type="text">
            <button class="border-white border-2 rounded-xl px-4 py-2" on:click={generateImage}>Generate</button>
        </div>
        <p class="my-10">{genText}</p>
        <img {src} class="w-[512px] h-[512px] rounded-xl" alt="generated image">
    </div>
</Page>
