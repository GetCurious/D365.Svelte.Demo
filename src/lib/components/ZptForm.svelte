<script lang="ts">
    import { CheckBox, FileInput, NumberInput, Select, TextInput } from "$lib/components/index.js";

    let isChecked = true;
    let textValue = "Hello World";
    let numberValue = 10;

    $: console.log(isChecked);
    $: console.log(textValue);
    $: console.log(numberValue);
</script>

<table class="w-full">
    <tr>
        <td class="sticky left-0 z-10 bg-white font-bold">Model</td>
        <td align="center"><CheckBox bind:checked={isChecked} /></td>
        <td align="center"><CheckBox checked /></td>
        <td align="center"><CheckBox disabled /></td>
    </tr>
    <tr class="bg-gray-200">
        <td class="sticky left-0 bg-gray-200 font-bold" />
        <td align="center" class="font-semibold">Agency</td>
        <td align="center" class="font-semibold">In-licensing</td>
        <td align="center" class="font-semibold">CSO</td>
    </tr>
    <tr>
        <td class="sticky left-0 z-10 bg-white font-bold">Product / Scope</td>
        <td><TextInput class="w-full" bind:value={textValue} /></td>
        <td><TextInput class="w-full" placeholder="Please enter" /></td>
        <td><TextInput class="w-full" disabled /></td>
    </tr>
    <tr>
        <td class="sticky left-0 z-10 bg-white font-bold">Channel</td>
        <td><TextInput class="w-full" /></td>
        <td><TextInput class="w-full" /></td>
        <td><TextInput class="w-full" disabled /></td>
    </tr>
    <tr>
        <td class="sticky left-0 z-10 bg-white font-bold">Throughput</td>
        <td><NumberInput class="w-full" bind:value={numberValue} /></td>
        <td><NumberInput class="w-full" placeholder="Please enter" /></td>
        <td><NumberInput class="w-full" disabled /></td>
    </tr>
    <tr>
        <td class="sticky left-0 z-10 bg-white font-bold">
            <span class="underline underline-offset-8">Margin</span>
        </td>
    </tr>
    <tr>
        <td class="sticky left-0 bg-white font-bold">Margin Type</td>
        <td>
            <Select name="marginType1" class="w-full">
                <option>Margin No Tier</option>
            </Select>
        </td>
        <td>
            <Select name="marginType2" class="w-full">
                <option>Margin No Tier</option>
            </Select>
        </td>
        <td>
            <Select name="marginType4" class="w-full" disabled>
                <option value="" />
                <option>Margin No Tier</option>
            </Select>
        </td>
    </tr>
    <tr>
        <td class="sticky left-0 z-10 bg-white font-bold">Blended margin/ margin equivalent (%)</td>
        <td><NumberInput class="w-full" /></td>
        <td><NumberInput class="w-full" /></td>
        <td><NumberInput class="w-full" disabled /></td>
    </tr>
    <tr>
        <td class="sticky left-0 z-10 flex flex-col gap-1 bg-white font-bold">
            <span> Attach Margin Table here </span>
            <p class="text-xs font-normal text-gray-500">
                <span class="text-red-700">*</span>
                Multiple supporting documents are allowed.
            </p>
            <p class="text-xs font-normal text-gray-500">
                <span class="text-red-700">*</span>
                Head file must not exceed 10 MB in size.
            </p>
            <p class="text-xs font-normal text-gray-500">
                <span class="text-red-700">*</span>
                Accepted file formats include jpg, png, jpeg, pdf, doc, and docx.
            </p>
        </td>
        <td><FileInput class="w-full" /></td>
        <td><FileInput class="w-full" /></td>
        <td><FileInput class="w-full" disabled /></td>
    </tr>
    <tr>
        <td class="sticky left-0 z-10 bg-white font-bold" />
        <td><NumberInput class="w-full" /></td>
        <td><NumberInput class="w-full" /></td>
        <td><NumberInput class="w-full" disabled /></td>
    </tr>
</table>

<style lang="postcss">
    td {
        padding: 0.5rem;
    }
</style>
