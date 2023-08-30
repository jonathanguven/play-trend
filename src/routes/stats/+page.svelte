<script lang="ts">
    import type { PageData } from './$types';
    import Header from "$components/Header.svelte";
    import Footer from "$components/Footer.svelte";
    import Login from "$components/Login.svelte";

    let header = {};
    export let data: PageData;
    const user = data.user;
    const tracks = data.tracks.items;
    header = {
        pfp: user.images[0].url,
        name: user.display_name
    }
</script>

<svelte:head>
    <title>PlayTrend</title>
</svelte:head>
<section>
    <section class="flex items-center flex-col gap-8 px-8 pt-8 mt-20">
        <div>
            <Header {...header}/>
            <p class="border-2 dark text-white flex flex-col items-center gap-2 px-6 pt-2 max-w-full">Logged in as {header.name}</p>
            <div>
                <ul>
                    {#each tracks as { name, artists }, i}
                        <li>
                            {i + 1}: { name } by { artists }
                        </li>
                    {/each}
                </ul>
            </div>
            <p><a href="/" class="border-2 dark text-white flex flex-col items-center gap-2 px-6 py-6">Click here to log out</a></p>
        </div>
        <Footer />
    </section>

</section>



