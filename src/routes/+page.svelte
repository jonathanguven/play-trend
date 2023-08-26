<script lang="ts">
    import { page } from "$app/stores";
    import type { PageData } from './$types';
    import Header from "$components/Header.svelte";
    import Footer from "$components/Footer.svelte";
    import Login from "$components/Login.svelte";
    import { onMount } from 'svelte';

    $: accessToken = $page.url.searchParams.get('access_token');

    export let data: PageData;

</script>
<svelte:head>
    <title>PlayTrend</title>
</svelte:head>
<section class="border-2">
    <section class="border-2 flex items-center flex-col gap-8 px-8 pt-8 mt-20">
        <div>
            <Header />
            {#if accessToken === null}
                <Login />
            {:else if accessToken === 'ERR'}
                <p class="dark text-white flex flex-col items-center gap-2 px-6 py-14">Error logging in! Please reload the page and try again.</p>
            {:else if accessToken}

                <div>
                    <p class="border-2 dark text-white flex flex-col items-center gap-2 px-6 pt-6 max-w-full">Logged in as {data.user.id}</p>
                    <p><a href="/" class="dark text-white flex flex-col items-center gap-2 px-6 py-14">Your top tracks!</a></p>
                    <p><a href="/" class="border-2 dark text-white flex flex-col items-center gap-2 px-6 py-6">Click here to go back</a></p>
                </div>

            {/if}
        </div>

        <Footer />
    </section>

</section>



