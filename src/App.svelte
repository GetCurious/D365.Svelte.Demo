<script lang="ts">
    import NumberInput from "./lib/components/generics/NumberInput.svelte";
    import TextInput from "./lib/components/generics/TextInput.svelte";
    import type { IFrameQueryParams, ParentQueryParams, Lead } from "$lib/models";
    import { BusinessUnit } from "$lib/models";
    import { onMount } from "svelte";
    import {
        Popover,
        Datepicker,
        Accordion,
        Dialog,
        AutoComplete,
        Select,
        Button,
        DistributionForm,
        ZptForm,
    } from "$lib/components";
    import { iframeContext } from "$lib/utils";
    import type { OptionSet } from "$lib/models/optionset";

    const isDevelopment = import.meta.env.DEV;



    let Xrm: Xrm.XrmStatic;
    let globalContext: Xrm.GlobalContext | undefined;

    // Attributes
    let salesStage: OptionSet | null;
    let businessUnit: OptionSet | null;
    let opportunity = {};

    const getOptionSet = (record: any, logicalName: string): OptionSet | null =>
        record == null || record[logicalName] == null
            ? null
            : {
                  text: record[logicalName + "@OData.Community.Display.V1.FormattedValue"],
                  value: record[logicalName],
              };

    // QueryParams
    let iframeQueryParams: IFrameQueryParams | undefined;
    let parentQueryParams: ParentQueryParams | undefined;

    onMount(async () => {
        // @ts-ignore
        Xrm = isDevelopment ? DEV.initializeDevEnvironment() : window.parent.Xrm;
        globalContext = Xrm?.Utility?.getGlobalContext();
        iframeQueryParams = iframeContext.getQueryStringParameters();
        parentQueryParams = globalContext?.getQueryStringParameters() as any;

        let opportunityId = parentQueryParams?.id ?? iframeQueryParams.id;
        opportunity = await Xrm.WebApi.retrieveRecord("opportunity", opportunityId);
        salesStage = getOptionSet(opportunity, "new_salesstage");
        businessUnit = getOptionSet(opportunity, "new_function");

        console.log("hello world");
    });
</script>

<main class="mx-4 mt-2 rounded-md border bg-white shadow">
    <!-- <section id="debug">
        {#if location.hostname === "localhost"}
            <h1 class="mx-3 text-xl">IFrame Query Params</h1>
            <pre class="m-5 bg-orange-100 px-5 py-3">{JSON.stringify(iframeQueryParams, null, 4)}</pre>

            <h1 class="mx-3 text-xl">Parent Query Params</h1>
            <pre class="m-5 bg-orange-100 px-5 py-3">{JSON.stringify(parentQueryParams, null, 4)}</pre>
        {/if}
    </section> -->

    <section id="opportunity-terms">
        <div class="p-4 text-end">
            <h2 class="font-bold">Sales Stage: {salesStage?.text}</h2>
        </div>

        <div class="m-4 border-2 border-gray-400">
            <div class="flex justify-between border-b-2 border-gray-400 px-5 pt-3">
                <h1 class="font-bold">Terms (Contract Award Approval)</h1>
                <Popover class="px-3 hover:bg-gray-50">
                    <Accordion />
                </Popover>
            </div>

            <div class="m-5 flex flex-wrap">
                <div class="w-full sm:w-1/2">
                    <div class="p-3">
                        <label for="contract-start-date" class="mr-3 font-semibold">Contract Start Date</label>
                        <Datepicker id="contract-start-date"></Datepicker>
                    </div>

                    <div class="p-3">
                        <label for="contract-end-date" class="mr-3 font-semibold">Contract End Date</label>
                        <Datepicker id="contract-end-date"></Datepicker>
                    </div>

                    <div class="p-3">
                        <label for="exclusive-appointment" class="mr-3 font-semibold">Exclusivity appointment</label>
                        <Select id="exclusive-appointment">
                            <option>Yes</option>
                            <option>No</option>
                        </Select>
                    </div>

                    <div class="p-3">
                        <label for="throughput" class="mr-3 font-semibold">Throughput</label>
                        <NumberInput id="throughput" />
                    </div>

                    <div class="p-3">
                        <label for="incumbent" class="mr-3 font-semibold">Incumbent</label>
                        <AutoComplete id="incumbent">
                            <option value="ZP-MY">ZP-MY</option>
                            <option value="ZP-SG">ZP-SG</option>
                        </AutoComplete>
                    </div>
                </div>

                <div class="w-full sm:w-1/2">
                    <div class="p-3">
                        <label for="renewal" class="mr-3 font-semibold">Renewal</label>
                        <Select id="renewal">
                            <option>Yes with condition</option>
                        </Select>
                    </div>

                    <div class="p-3">
                        <label for="auto-renewal-duration" class="mr-3 font-semibold">
                            Autorenewal duration (months)
                        </label>
                        <NumberInput id="auto-renewal-duration" />
                    </div>

                    <div class="p-3">
                        <label for="notice-period" class="mr-3 font-semibold">Notice period (months)</label>
                        <NumberInput id="notice-period" />
                    </div>

                    <div class="p-3">
                        <label for="max-no-of-renewal" class="mr-3 font-semibold">Max no. of auto-renewal</label>
                        <NumberInput id="max-no-of-renewal" />
                    </div>

                    <div class="p-3">
                        <label for="awarded-party" class="mr-3 font-semibold">Awarded Party</label>
                        <AutoComplete id="awarded-party">
                            <option value="ZP-MY">ZP-MY</option>
                            <option value="ZP-SG">ZP-SG</option>
                        </AutoComplete>
                    </div>
                </div>
            </div>

            <section id="opportunity-margin" class="m-5">
                {#if businessUnit?.value === BusinessUnit.Distribution}
                    <DistributionForm />
                {:else if businessUnit?.value === BusinessUnit.ZPT}
                    <ZptForm />
                {/if}
            </section>
        </div>
    </section>

    <section></section>

    <section id="form-actions" class="mx-4 my-8 flex justify-end gap-3">
        <Button on:click={iframeContext.refreshForm}>Refresh</Button>
        <Dialog
            class="flex h-full flex-col bg-red-50"
            btnClass="from-blue-700 to-sky-600 hover:from-blue-800 hover:to-sky-700"
            header="Submit Contract Approval"
            buttonLabel="Submit">
            <p>Are you sure?</p>

            <div class="flex justify-end gap-2">
                <Button class="px-3" on:click={() => console.log("No")} value="0">No</Button>
                <Button class="px-3" on:click={() => console.log("Yes")} variant="primary" value="1">Yes</Button>
            </div>
        </Dialog>
    </section>
</main>

<style lang="postcss">
    :global(html) {
        background-color: theme("colors.gray.50");

        /* debugging */
        /* background-color: #8aa4a8;
        background-size: 70px 70px;
        background-image: linear-gradient(#0008ff 1px, transparent 1px),
        linear-gradient(to right, #0008ff 1px, transparent 1px); */
    }
</style>
