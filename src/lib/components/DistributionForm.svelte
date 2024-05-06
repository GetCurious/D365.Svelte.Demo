<script lang="ts">
    import { CheckBox, FileInput, NumberInput, Select, TextInput, DynamicTable } from "$lib/components";

    let isChecked = true;
    let textValue = "Hello World";
    let numberValue = 10;
    let marginFiles: FileList;
    let marginFilesUploaded: FileList;

    let incentives: { [key: string]: any } = {
        GVDA: "Yes",
        "Sign-On Bonus": 2_000_000,
    };
</script>

<table class="w-full">
    <tr>
        <td class="sticky left-0 z-10 bg-white font-bold">Model</td>
        <td class="text-center"><CheckBox bind:checked={isChecked} /></td>
        <td class="text-center"><CheckBox checked /></td>
        <td class="text-center"><CheckBox disabled /></td>
        <td class="text-center"><CheckBox disabled /></td>
    </tr>
    <tr class="bg-gray-200">
        <td class="sticky left-0 bg-gray-200 font-bold" />
        <td class="text-center font-semibold">FDS-DP</td>
        <td class="text-center font-semibold">FDS-CN</td>
        <td class="text-center font-semibold">FDS-QCN</td>
        <td class="text-center font-semibold">P&P</td>
    </tr>
    <tr>
        <td class="sticky left-0 z-10 bg-white font-bold">Product / Scope</td>
        <td><TextInput class="w-full" bind:value={textValue} /></td>
        <td><TextInput class="w-full" placeholder="Please enter" /></td>
        <td><TextInput class="w-full" disabled /></td>
        <td><TextInput class="w-full" disabled /></td>
    </tr>
    <tr>
        <td class="sticky left-0 z-10 bg-white font-bold">Channel</td>
        <td><TextInput class="w-full" /></td>
        <td><TextInput class="w-full" /></td>
        <td><TextInput class="w-full" disabled /></td>
        <td><TextInput class="w-full" disabled /></td>
    </tr>
    <tr>
        <td class="sticky left-0 z-10 bg-white font-bold">Throughput</td>
        <td><NumberInput class="w-full" bind:value={numberValue} /></td>
        <td><NumberInput class="w-full" placeholder="Please enter" /></td>
        <td><NumberInput class="w-full" disabled /></td>
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
            <Select name="marginType3" class="w-full" disabled>
                <option value="" />
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
        <td><NumberInput class="w-full" disabled /></td>
    </tr>
    <tr>
        <td class="sticky left-0 z-10 flex flex-col gap-1 bg-white font-bold">
            <span> Attach Margin Table here </span>
        </td>
        <td colspan="999">
            <FileInput multiple bind:files={marginFiles} bind:uploadedFiles={marginFilesUploaded} class="w-full" 
                       accept="image/png, image/jpeg, application/pdf, image/gif" />

        </td>
    </tr>
    <tr>
        <td class="sticky left-0 z-10 bg-white font-bold">Minimum Fee</td>
        <td><NumberInput class="w-full" /></td>
        <td><NumberInput class="w-full" /></td>
        <td><NumberInput class="w-full" disabled /></td>
        <td><NumberInput class="w-full" disabled /></td>
    </tr>
</table>

<DynamicTable bind:data={incentives} />

<style lang="postcss">
    td {
        padding-block: 0.5rem;
    }
</style>
