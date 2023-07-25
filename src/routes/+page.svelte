<script lang="ts">
    import { Alert, AlertTitle, AlertDescription } from "$components/ui/alert";
    import { Button} from "$components/ui/button";
    import { RadioGroup, RadioGroupItem } from "$components/ui/radio-group";
    import { Input } from "$components/ui/input";
    import { Label } from "$components/ui/label";
    import { Switch } from "$components/ui/switch";
    import Header from "$components/Header.svelte";

</script>

<div class="flex items-center flex-col gap-8 px-8 pt-8 min-h-screen">
    <!-- github link and dark theme toggle -->


    <!-- Header Text -->
    <Header />
    <!-- Sign in Button -->
    <div class= "flex items-center justify-items-center">
        <Button class="bg-slate-700 text-white flex flex-col items-center gap-2 px-8 py-12 my-32">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg" alt="spotify logo" class="w-36 h-36">
            <div>Login To View Statistics</div>
        </Button>
    </div>
</div>
