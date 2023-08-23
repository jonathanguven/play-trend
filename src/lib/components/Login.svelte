<script>
    import { Button } from "$components/ui/button/";
    import { page } from '$app/stores'

    const id = import.meta.env.VITE_CLIENT_ID;
    const redirect_uri = encodeURIComponent(import.meta.env.VITE_REDIRECT_URI);

    let LOGGED_IN = false;

    const code = $page.url.searchParams.get('code');

    if (code) {
        LOGGED_IN = true;
    }

    function loginClick() {
        console.log(`id: ${id}`);
        console.log(`redirect: ${redirect_uri}`);
        window.location.href = `https://accounts.spotify.com/authorize?client_id=${id}&redirect_uri=${redirect_uri}&scope=user-read-private%20user-read-email%20user-modify-playback-state%20user-read-playback-state%20user-top-read%20user-read-recently-played&response_type=code`;
    }
</script>

<!-- Sign in Button -->
{#if !LOGGED_IN}
    <div class="flex flex-col items-center justify-start pd-4 my-32 md:px-0 min-h-full">
        <Button on:click={loginClick} class="dark text-white flex flex-col items-center gap-2 px-6 py-14">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg" alt="spotify logo" class="w-36 h-36">
            <div class="max-w-[750px] text-lg text-muted-foreground sm:text-md text-center sm:text-left">Login To View Statistics</div>
        </Button>
    </div>
{:else}
    <a href="/">Login successful. Click here to go back</a>
{/if}

