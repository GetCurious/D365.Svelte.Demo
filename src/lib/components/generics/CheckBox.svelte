<script lang="ts">
    export let checked: boolean | null | undefined = undefined;
</script>

<input type="checkbox" bind:checked {...$$props} />
