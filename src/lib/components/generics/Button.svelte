<script lang="ts">
    export let variant = "default";

    let defaultClass = "text-white px-2 py-1 font-semibold rounded bg-gradient-to-tr inline-flex gap-1";
    let theme: { [key: string]: string } = {
        default: "from-slate-500 to-slate-400 hover:from-slate-600 hover:to-slate-500",
        primary: "from-blue-700 to-sky-600 hover:from-blue-800 hover:to-sky-700",
        danger: "from-red-700 to-red-600 hover:from-red-800 hover:to-rose-700",
        none: "",
    };
</script>

<button on:click {...$$restProps} class={$$restProps.class + " " + theme[variant] + " " + defaultClass}>
    <slot />
</button>

<style lang="postcss">
</style>
