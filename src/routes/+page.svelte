<script lang="ts">
    import Header from "$components/Header.svelte";
    import Footer from "$components/Footer.svelte";
    import Login from "$components/Login.svelte";
    import { onMount } from 'svelte';

    const client_id = import.meta.env.CLIENT_ID;


</script>
<svelte:head>
    <title>PlayTrend</title>
</svelte:head>
<section>
    <section class="flex items-center flex-col gap-8 px-8 pt-8">
        <div>
            <Header />
            <Login />
        </div>

        <Footer />
    </section>

</section>



