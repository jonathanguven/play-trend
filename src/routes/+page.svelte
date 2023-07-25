<script lang="ts">
    import { Alert, AlertTitle, AlertDescription } from "$components/ui/alert";
    import { Button} from "$components/ui/button";
    import { RadioGroup, RadioGroupItem } from "$components/ui/radio-group";
    import { Input } from "$components/ui/input";
    import { Label } from "$components/ui/label";
    import { Switch } from "$components/ui/switch";
    import Header from "$components/Header.svelte";
    import Footer from "$components/Footer.svelte";
    import Login from "$components/Login.svelte";

</script>
<svelte:head>
    <title>PlayTrend</title>
</svelte:head>
<section class="flex items-center flex-col gap-8 px-8 pt-8">
    <!-- Header Component -->
    <div>
        <Header />
        <Login />
    </div>

</section>
<Footer />



