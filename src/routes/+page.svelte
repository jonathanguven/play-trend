<script lang="ts">
    import { page } from "$app/stores";
    import type { PageData } from './$types';
    import Header from "$components/Header.svelte";
    import Footer from "$components/Footer.svelte";
    import Login from "$components/Login.svelte";
    import { onMount } from 'svelte';

    $: user = $page.url.searchParams.get('user');
    $: tracks = $page.url.searchParams.get('top_tracks');

    let data;


</script>
<svelte:head>
    <title>PlayTrend</title>
</svelte:head>
<section class="border-2">
    <section class="border-2 flex items-center flex-col gap-8 px-8 pt-8 mt-20">
        <div>
            <Header />
            {#if !user}
                <Login />
            {:else if user}
                <p class="border-2 dark text-white flex flex-col items-center gap-2 px-6 pt-6">Logged in as {user}</p>
                <p></p>
                <p><a href="/" class="border-2 dark text-white flex flex-col items-center gap-2 px-6 py-6">Click here to go back</a></p>
            {:else if user === 'ERR'}
                <p class="dark text-white flex flex-col items-center gap-2 px-6 py-14">Error logging in! Please reload the page and try again.</p>
                <p><a href="/" class="dark text-white flex flex-col items-center gap-2 px-6 py-14">Your top tracks!</a></p>
            {/if}
        </div>

        <Footer />
    </section>

</section>



