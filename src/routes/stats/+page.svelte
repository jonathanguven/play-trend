<script lang="ts">
    // faster branch
    import type { PageData } from './$types';
    import { goto } from '$app/navigation';
    import Footer from "$components/Footer.svelte";
    import { Radio } from 'flowbite-svelte';
    import Header from "$components/Header.svelte";
    import { Button } from "$components/ui/button/";

    export let data: PageData;
    $: time = 'short_term';
    $: content = 'tracks'
    
    let shortTracks = data.short_term.items.map(item => {
        return {
            name: item.name,
            url: item.external_urls.spotify,
            artists: item.artists.map(artist => artist.name),

        };
    });

    let mediumTracks = data.medium_term.items.map(item => {
        return {
            name: item.name,
            url: item.external_urls.spotify,
            artists: item.artists.map(artist => artist.name),

        };
    });
    let longTracks = data.long_term.items.map(item => {
        return {
            name: item.name,
            url: item.external_urls.spotify,
            artists: item.artists.map(artist => artist.name),

        };
    });
    let tracks = shortTracks;
    $: {
        switch(time) {
        case 'short_term':
            tracks = shortTracks;
            break;
        case 'medium_term':
            tracks = mediumTracks;
            break;
        case 'long_term':
            tracks = longTracks;
            break;
        }
    }

    let formattedDate = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }).toUpperCase();
</script>

<svelte:head>
    <title>PlayTrend</title>
</svelte:head>
<section>
    <section class="flex items-center flex-col gap-8 px-8 pt-8 mt-12">
        <div class="max-w-md flex flex-col items-center">
            <Header name = {data.user.display_name} pfp = {data.user.images[0].url} user_link={data.user.external_urls.spotify}/>
            <p class="mb-4 text-white flex flex-col items-center justify-center px-6 max-w-full text-lg">{formattedDate}</p>
            <ul class="flex justify-center items-center w-9/12 rounded-lg border border-gray-200 sm:flex dark:bg-gray-900 dark:border-gray-600 divide-x divide-gray-200 dark:divide-gray-600">
                <li class="w-full"><Radio name="hor-list" class="flex justify-center text-white p-2" bind:group={time} value="short_term">4 weeks</Radio></li>  
                <li class="w-full"><Radio name="hor-list" class="flex justify-center text-white p-2" bind:group={time} value="medium_term">6 months</Radio></li>
                <li class="w-full"><Radio name="hor-list" class="flex justify-center text-white p-2" bind:group={time} value="long_term">All time</Radio></li>
            </ul>

            <div class="text-white flex justify-center">
                <ul class="py-4 w-11/12">
                    {#each tracks as { name, artists, url }, i}
                        <li class="flex leading-8 text-md">
                            <span class="w-max mr-1 flex-shrink-0 text-right mr-3 text-white">{i + 1}: </span>
                            <a href={url} target="_blank">{ name }
                                <span class="text-gray-500"> — 
                                    {#each artists as artist, index (artist)}
                                        {artist}{index < artists.length - 1 ? ', ' : ''}
                                    {/each}
                                </span>
                            </a>
                        </li>
                    {/each}
                </ul>
            </div>

        </div>
        <Button on:click={() => goto('/')} variant="secondary" class="-mt-4">Click here to log out</Button>
        <Footer />
    </section>
</section>



