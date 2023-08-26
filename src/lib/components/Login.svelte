<script lang="ts">
    import { Button } from "$components/ui/button/";

    const id = import.meta.env.VITE_CLIENT_ID;
    const redirect = import.meta.env.VITE_REDIRECT_URI;

    function loginClick() {
        let scope = 'user-read-private user-read-email user-top-read user-read-recently-played';
        let args = new URLSearchParams({
            response_type: 'code',
            client_id: id,
            scope: scope,
            redirect_uri: redirect,
            show_dialog: true
        });
        window.location.href = `https://accounts.spotify.com/authorize?` + args;
    }
</script>

<div class="border-2 flex flex-col items-center justify-start pd-4 md:px-0 min-h-full">
    <Button on:click={loginClick} class="dark text-white flex flex-col items-center gap-2 px-6 py-14 mt-24">
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg" alt="spotify logo" class="w-36 h-36">
        <div class="max-w-[750px] text-lg text-muted-foreground sm:text-md text-center sm:text-left">Login To View Statistics</div>
    </Button>
</div>


