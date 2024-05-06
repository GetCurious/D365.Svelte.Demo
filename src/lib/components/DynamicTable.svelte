<script lang="ts">
    import { PencilSquare, XMark } from "$assets/icons";
    import { Dialog, Button, TextInput } from "$lib/components";
    import NumberInput from "./generics/NumberInput.svelte";

    export let data: { [key: string]: any } = {};

    let keyNew: string | undefined;
    let valueNew: any | undefined;

    function upsertRow() {
        if (!keyNew) return;
        data[keyNew] = valueNew;
        keyNew = undefined;
        valueNew = undefined;
    }

    function removeRow(key: string) {
        delete data[key];
        data = data; // this will trigger rerender
    }
</script>

<div class="mb-2 mr-3 mt-10 text-end">
    <Dialog
        header="Add Incentive"
        buttonLabel="Add"
        btnClass="from-blue-700 to-sky-600 hover:from-blue-800 hover:to-sky-700"
        class="flex flex-col justify-between gap-5">
        <div>
            <TextInput bind:value={keyNew} />
            <TextInput bind:value={valueNew} />
        </div>
        <div>
            <Button on:click={upsertRow} class="px-5">Add</Button>
        </div>
    </Dialog>
</div>

<table class="w-full border-2">
    <thead class="bg-gray-200">
        <th class="pl-3 text-start font-bold sm:pl-10">Client Incentive</th>
        <th class="text-start font-bold">Value</th>
        <th class="pr-3 text-end font-bold sm:pr-10">Action</th>
    </thead>
    <tbody>
        {#each Object.entries(data) as [key, value]}
            <tr class="border-2">
                <td class="pl-3 text-start font-semibold sm:pl-10">{key}</td>
                <td>{value ? value?.toLocaleString() : ""}</td>
                <td class="pl-3 pr-3 text-end sm:pr-10">
                    <Dialog
                        buttonLabel="Edit"
                        header="Edit Incentive"
                        Symbol={PencilSquare}
                        class="flex flex-col gap-5"
                        btnClass="text-blue-700 hover:text-blue-600">
                        <div>
                            <TextInput value={key} disabled />
                            <TextInput
                                {value}
                                on:input={(e) => {
                                    // @ts-ignore
                                    valueNew = e.target?.value;
                                    keyNew = key;
                                }} />
                        </div>
                        <div>
                            <Button on:click={upsertRow} class="px-5">Edit</Button>
                        </div>
                    </Dialog>
                    <Dialog
                        buttonLabel="Remove"
                        header="Remove Incentive?"
                        Symbol={XMark}
                        showLabel={true}
                        class="flex flex-col gap-5"
                        btnClass="ml-3 py-0 px-0 rounded from-red-700 to-red-600 text-white hover:from-red-800 hover:to-rose-700">
                        <p>
                            Remove {key} ?
                        </p>
                        <div>
                            <Button on:click={() => removeRow(key)} class="px-5" variant="danger">Cancel</Button>
                            <Button on:click={() => removeRow(key)} class="px-5">Ok</Button>
                        </div>
                    </Dialog>
                </td>
            </tr>
        {/each}
    </tbody>
</table>

<style lang="postcss">
    td {
        padding-block: 0.5rem;
    }
</style>
