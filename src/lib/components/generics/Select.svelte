<script lang="ts">
    export let value: string | null | undefined = undefined;
    export let readOnly: boolean = false;

    let defaultClass = "border-2 p-0.5 px-2 rounded focus:border-blue-500 focus:outline-none";
    let disabledStyle = readOnly
        ? "disabled:bg-gray-50 disabled:border-gray-200"
        : "disabled:bg-gray-100 disabled:border-gray-300";
</script>

<select {...$$restProps} bind:value class={$$restProps.class + " " + defaultClass + " " + disabledStyle}>
    <slot />
</select>
