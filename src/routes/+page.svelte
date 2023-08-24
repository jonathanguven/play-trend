<script lang="ts">
    import Header from "$components/Header.svelte";
    import Footer from "$components/Footer.svelte";
    import Login from "$components/Login.svelte";
    import { onMount } from 'svelte';
    import {page} from "$app/stores";

    $: LOGGED_IN = $page.url.searchParams.get('LOGGED_IN');

</script>
<svelte:head>
    <title>PlayTrend</title>
</svelte:head>
<section>
    <section class="flex items-center flex-col gap-8 px-8 pt-8 mt-20">
        <div>
            <Header />
            {#if !LOGGED_IN}
                <Login />
            {:else if LOGGED_IN === 'TRUE'}
                <p class="dark text-white flex flex-col items-center gap-2 px-6 py-14">Logged in as balls</p>
                <p><a href="/" class="dark text-white flex flex-col items-center gap-2 px-6 py-14">Click here to go back</a></p>
            {:else if LOGGED_IN === 'ERR'}
                <p class="dark text-white flex flex-col items-center gap-2 px-6 py-14">Error logging in! Please reload the page and try again.</p>
                <p><a href="/" class="dark text-white flex flex-col items-center gap-2 px-6 py-14">Click here to go back</a></p>
            {/if}
        </div>

        <Footer />
    </section>

</section>



