<script lang="ts">
    import { ArrowUpTray, Document, XMark } from "$assets/icons";
    import { Button } from "$lib/components";

    // export let callBack: Function;
    export let files: FileList;
    export let uploadedFiles: FileList;

    let key: string = crypto.randomUUID().substring(0, 5);

    $: if (files) {
        for (const file of files) {
            console.log(`${file.name}: ${file.size} bytes`);
        }
    }
</script>

<div class="flex flex-col gap-2">
    <input {...$$restProps} bind:files id="file-{key}" type="file" class="hidden" />

    <div class="flex gap-2">
        <!-- Display -->
        <label
            for="file-{key}"
            class="w-3/4 items-center rounded border border-gray-300 bg-gray-50 pl-2 hover:bg-gray-100">
            {#if files}
                {#each files as file}
                    <p>{file.name} ({file.size} bytes)</p>
                {/each}
            {/if}
        </label>

        <!-- Buttons -->
        <div class="flex place-items-center">
            <label for="file-{key}" class="inline-flex cursor-pointer gap-1 rounded bg-gray-100 hover:bg-gray-200">
                <span class="rounded-l bg-gray-300 p-1 text-white">
                    <Document />
                </span>
                <span class="py-1 pr-1.5 font-semibold">Browse</span>
            </label>

            <button
                class="ml-2 inline-flex items-center gap-1 rounded bg-gradient-to-tr from-blue-700 to-sky-600 pr-2 font-semibold text-white hover:from-blue-700 hover:to-sky-700">
                <span class="h-full rounded-l bg-blue-900 p-1 text-white">
                    <ArrowUpTray />
                </span>
                Upload
            </button>
        </div>
    </div>

    <!-- Uploaded Items -->
    <div class="flex flex-col gap-2">
        {#if uploadedFiles}
            {#each uploadedFiles as file}
                <div class="flex place-items-center">
                    <span class="w-1/3 rounded border border-gray-300 bg-gray-200 px-2 py-1 font-semibold">
                        {file.name}
                    </span>
                    <button
                        class="ml-2 inline-flex items-center gap-1 rounded bg-gradient-to-tr from-red-600 to-red-500 pr-2 font-semibold text-white hover:from-red-600 hover:to-rose-600">
                        <span class="h-full rounded-l bg-rose-800"><XMark /></span>
                        Remove
                    </button>
                </div>
            {/each}
        {/if}
    </div>

    <!-- Demo: Delete me -->
    <div class="flex place-items-center">
        <span class="w-1/3 rounded border border-gray-300 bg-gray-100 px-2 py-1 font-semibold">Attachment.pdf </span>
        <button
            class="ml-2 inline-flex items-center gap-1 rounded bg-gradient-to-tr from-red-600 to-red-500 pr-2 font-semibold text-white hover:from-red-600 hover:to-rose-600">
            <span class="h-full rounded-l bg-rose-800"><XMark /></span>
            Remove
        </button>
    </div>
</div>
