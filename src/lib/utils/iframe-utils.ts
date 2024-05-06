import type { IFrameQueryParams } from '$lib/models';

/**
 * Get data passed from FormScript.
 * ```javascript
 * // example
 * const iframe = formContext.getControl('IFRAME_test');
 * const salesStage = formContext.getAttribute('new_salesstage');
 * let url = new URL(iframe.getSrc());
 * url.searchParams.append('new_salesstage', salesStage?.getValue());
 * iframe.setSrc(url.toString());
 * ```
 */
export function getQueryStringParameters(): IFrameQueryParams {
    const url = new URL(window.location.href);
    return Object.fromEntries(url.searchParams) as IFrameQueryParams;
}

export function refreshForm() {
    const payload = { callback: 'refreshForm', params: {} };
    window.parent.postMessage(payload, '*');
}

export function refreshWindow() {
    const payload = { callback: 'refreshWindow', params: {} };
    window.parent.postMessage(payload, '*');
}

