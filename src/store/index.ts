import type { PersistentStore } from "@macfja/svelte-persistent-store";
import { createIndexedDBStorage, persist } from "@macfja/svelte-persistent-store";
import { SupportedCurrencies } from "../types";
import { derived, writable } from "svelte/store";

import type Nimiq from "@nimiq/core-web/types"
import type { Writable } from "svelte/store";

export const selectedCurrency: PersistentStore<SupportedCurrencies> = persist(
    writable(SupportedCurrencies.NIM),
    createIndexedDBStorage(),
    "selectedCurrency",
);

export const selectedFiat: PersistentStore<SupportedCurrencies> = persist(
    writable(SupportedCurrencies.EUR),
    createIndexedDBStorage(),
    "selectedFiat",
);

export const participationCounter: PersistentStore<number> = persist(
    writable(0),
    createIndexedDBStorage(),
    "participationCounter",
);

export const userCashlink: PersistentStore<string> = persist(
    writable(null),
    createIndexedDBStorage(),
    "userCashlink",
);

export const currentBlock: Writable<number> = writable(0);

export const wallet: Writable<Nimiq.Wallet | null> = writable(null);

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
        navigate: (route: string) => setTimeout(() => window.location.href = "#/" + route, 10)
    }
}

export const url = createUrlStore();