import type { PersistentStore } from "@macfja/svelte-persistent-store";
import { indexedDBStorage, persist } from "@macfja/svelte-persistent-store";
import { SupportedCurrencies } from "../types";
import { derived, writable } from "svelte/store";

export const selectedCurrency: PersistentStore<SupportedCurrencies> = persist(
    writable(SupportedCurrencies.NIM),
    indexedDBStorage(),
    "selectedCurrency",
);

export const selectedFiat: PersistentStore<SupportedCurrencies> = persist(
    writable(SupportedCurrencies.EUR),
    indexedDBStorage(),
    "selectedFiat",
);

export const participationCounter: PersistentStore<number> = persist(
    writable(0),
    indexedDBStorage(),
    "participationCounter",
);

const createUrlStore = () => {
    const href = writable(window.location.href)

    const originalPushState = history.pushState
    const originalReplaceState = history.replaceState

    const updateHref = () => href.set(window.location.href)

    history.pushState = function () {
        originalPushState.apply(this, arguments)
        updateHref()
    }

    history.replaceState = function () {
        originalReplaceState.apply(this, arguments)
        updateHref()
    }

    window.addEventListener('popstate', updateHref)
    window.addEventListener('hashchange', updateHref)

    return {
        subscribe: derived(href, ($href) => new URL($href)).subscribe,
        navigate: (route: string) => window.location.href = "#/" + route
    }
}

export const url = createUrlStore();