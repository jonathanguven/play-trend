<script lang="ts">
    import { page } from "$app/stores";
    import type { PageData } from './$types';
    import Header from "$components/Header.svelte";
    import Footer from "$components/Footer.svelte";
    import Login from "$components/Login.svelte";
    import { onMount } from 'svelte';

    let header = {};
    export let data: PageData;
    header = {
        pfp: data.user.images[0].url,
        name: data.user.id
    }

</script>

<svelte:head>
    <title>PlayTrend</title>
</svelte:head>
<section>
    <section class="flex items-center flex-col gap-8 px-8 pt-8 mt-20">
        <div>
            <Header {...header}/>
            <div>
                <p class="border-2 dark text-white flex flex-col items-center gap-2 px-6 pt-2 max-w-full">Logged in as {header.name}</p>
                <p><a href="/" class="border-2 dark text-white flex flex-col items-center gap-2 px-6 py-6">Click here to log out</a></p>
            </div>


        </div>

        <Footer />
    </section>

</section>



