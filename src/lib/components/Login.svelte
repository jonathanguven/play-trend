<script lang="ts">
    import { Button } from "$components/ui/button/";
    import { goto } from "$app/navigation";

    function routeToLogin() {
        goto('api/login');
    }
</script>

<div class="flex flex-col items-center justify-start pd-4 md:px-0 min-h-full mb-72">
    <Button on:click={routeToLogin} class="dark text-white flex flex-col items-center gap-2 px-6 py-14 mt-24">
        <img src='src\lib\images\Spotify_Logo_RGB_Green.png' alt="spotify logo" class="w-36 h-36">
        <div class="max-w-[750px] text-lg text-muted-foreground sm:text-md text-center sm:text-left">Login To View Statistics</div>
    </Button>
</div>



