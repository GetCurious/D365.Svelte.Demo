<script lang="ts">
    import { TextInput } from "$lib/components";
    const key = crypto.randomUUID().substring(0, 5);
</script>

<TextInput type="list" list="auto-complete-{key}" {...$$restProps} />
<datalist id="auto-complete-{key}">
    <slot />
</datalist>
