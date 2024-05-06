<script lang="ts">
    import { XMark } from "$assets/icons";
    import type { SvelteComponent } from "svelte";
    import Button from "./Button.svelte";

    export let key: string = crypto.randomUUID().substring(0, 5);
    export let header: string;
    export let buttonLabel: string;
    export let showLabel: boolean = false;
    export let btnClass: string;
    export let Symbol: SvelteComponent | any = undefined;

    function openDialog() {
        const dialog: HTMLDialogElement = document.getElementById(key) as HTMLDialogElement;
        dialog?.showModal();
    }
</script>

<!-- Dialog Trigger -->
{#if Symbol !== undefined && showLabel}
    <Button on:click={openDialog} aria-label={buttonLabel ?? "Dialog Button"} class={btnClass} variant="none">
        <svelte:component this={Symbol} />
    </Button>
{:else if Symbol !== undefined}
    <Button on:click={openDialog} class={btnClass} variant="none">
        <svelte:component this={Symbol} />
        {buttonLabel ?? "Dialog Button"}
    </Button>
{:else}
    <Button on:click={openDialog} class={btnClass} variant="none">
        {buttonLabel ?? "Dialog Button"}
    </Button>
{/if}

<!-- Dialog -->
<dialog id={key} class="rounded p-3">
    <form method="dialog" class="min-h-[250px] min-w-[350px]">
        <!-- Dialog Header -->
        <div class="flex justify-between border-b-2 border-b-gray-400 px-1">
            <h6 class="text-start font-semibold">{header ?? "Dialog Header"}</h6>
            <button aria-label="Close Dialog"><XMark class="!h-5 !w-5" /></button>
        </div>

        <!-- Dialog Body/Footer -->
        <div class={$$restProps.class}>
            <slot />
        </div>
    </form>
</dialog>

<style lang="postcss">
</style>
