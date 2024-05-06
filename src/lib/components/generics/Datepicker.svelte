<script lang="ts">
    export let date: Date = new Date();

    let dateElement: HTMLInputElement;

    function showPicker() {
        dateElement?.showPicker();
    }
</script>

<input
    {...$$restProps}
    type="date"
    bind:this={dateElement}
    bind:value={date}
    class="border-b-2 focus:border-blue-500 focus:outline-none"
/>
