<script lang="ts">
    import ChevronDown from "$assets/icons/ChevronDown.svelte";

    const key = crypto.randomUUID().substring(0, 5);
</script>

<div>
    <button {...$$restProps} popovertarget="popover-data-{key}">
        <ChevronDown />
    </button>
    <div popover id="popover-data-{key}" class="min-h-[24rem] min-w-[24rem] backdrop:bg-black backdrop:opacity-20">
        <slot />
    </div>
</div>

<style lang="postcss">
</style>
