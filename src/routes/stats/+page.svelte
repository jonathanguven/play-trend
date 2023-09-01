<script lang="ts">
    import { goto } from '$app/navigation';
    import { page } from '$app/stores';
    import type { PageData } from './$types';
    import Footer from "$components/Footer.svelte";
    import Header from "$components/Header.svelte";
    import Logout from "$components/Logout.svelte";
    import { Radio } from 'flowbite-svelte'

    export let data: PageData;
    $: time = 'short_term';
    
    const formatDuration = (ms: number) => `${Math.floor(ms / 60000)}:${(Math.floor(ms / 1000) % 60).toString().padStart(2, '0')}`
    let shortTracks = data.short_term.items.map(item => {
        return {
            name: item.name,
            external_url: item.external_urls.spotify,
            artists: item.artists.map(artist => artist.name),
            duration: formatDuration(item.duration_ms)
        };
    });
    let mediumTracks = data.medium_term.items.map(item => {
        return {
            name: item.name,
            external_url: item.external_urls.spotify,
            artists: item.artists.map(artist => artist.name),
            duration: formatDuration(item.duration_ms)
        };
    });
    let longTracks = data.long_term.items.map(item => {
        return {
            name: item.name,
            external_url: item.external_urls.spotify,
            artists: item.artists.map(artist => artist.name),
            duration: formatDuration(item.duration_ms)
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
    const user = data.user;
    

    $: header = { pfp: user.images[0].url, name: user.display_name, user_link: user.external_urls.spotify };

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
            <p class="mb-4 text-white flex flex-col items-center justify-center px-6 max-w-full text-lg">{formattedDate}</p>
            <ul class="flex justify-center items-center w-full rounded-lg border border-gray-200 sm:flex dark:bg-gray-900 dark:border-gray-600 divide-x divide-gray-200 dark:divide-gray-600">
                <li class="w-full"><Radio name="hor-list" class="flex justify-center text-white p-3" bind:group={time} value="short_term">4 weeks</Radio></li>  
                <li class="w-full"><Radio name="hor-list" class="flex justify-center text-white p-3" bind:group={time} value="medium_term">6 months</Radio></li>
                <li class="w-full"><Radio name="hor-list" class="flex justify-center text-white p-3" bind:group={time} value="long_term">All time</Radio></li>
            </ul>

            <div class="text-white">
                <ul class="py-4">
                    {#each tracks as { name, artists }, i}
                        <li class="flex leading-8 text-md">
                            <span class="w-8 mr-1 flex-shrink-0 text-left text-white">{i + 1}: </span>
                            <span> { name } 
                                <span class="text-gray-500"> — 
                                    {#each artists as artist, index (artist)}
                                        {artist}{index < artists.length - 1 ? ', ' : ''}
                                    {/each}
                                </span>
                            </span>
                        </li>
                    {/each}
                </ul>
            </div>

        </div>
        <Logout />
        <Footer />
    </section>
</section>



