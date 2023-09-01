<script lang="ts">
    import type { PageData } from './$types';
    import Header from "$components/Header.svelte";
    import Footer from "$components/Footer.svelte";
    import Logout from "$components/Logout.svelte";
    export let data: PageData;

    const user = data.user;
    const tracks = data.tracks.items;

    let header = {
        pfp: user.images[0].url,
        name: user.display_name,
        user_link: user.external_urls.spotify
    }

    let currentDate = new Date();

    function formatDate(date: Date) {
        return date.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }).toUpperCase();
    }

    $: formattedDate = formatDate(currentDate);
</script>

<svelte:head>
    <title>PlayTrend</title>
</svelte:head>
<section>
    <section class="flex items-center flex-col gap-8 px-8 pt-8 mt-14">
        <div class="max-w-md">
            <Header {...header}/>
            <p class="dark text-white flex flex-col items-center justify-center px-6 max-w-full text-lg">
                {formattedDate}
            </p>
            
            <div class="text-white">
                <ul class="py-4">
                    {#each tracks as { name, artists }, i}
                        <li class="flex leading-8 text-md">
                            <span class="w-8 mr-1 flex-shrink-0 text-left text-white">{i + 1}: </span>
                            <span> { name } <span class="text-gray-500">— {artists.map(artist => artist.name).join(', ')}</span></span>
                        </li>
                    {/each}
                </ul>
            </div>

            <div class="flex flex-col items-center mt-2">
                <Logout />
            </div>

        </div>
        <Footer />
    </section>

</section>



