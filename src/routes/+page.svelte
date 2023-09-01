<script lang="ts">
    import { page } from "$app/stores";
    import Header from "$components/Header.svelte";
    import Footer from "$components/Footer.svelte";
    import Login from "$components/Login.svelte";

    $: accessToken = $page.url.searchParams.get('access_token');

</script>
<svelte:head>
    <title>PlayTrend</title>
</svelte:head>
<section>
    <section class="flex items-center flex-col gap-8 px-8 pt-8 mt-20">
        <div>
            <Header />
            {#if !accessToken}
                <Login />
            {/if}
        </div>

        <Footer />
    </section>

</section>



