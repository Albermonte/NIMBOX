import type { PersistentStore } from "@macfja/svelte-persistent-store";
import { indexedDBStorage, persist } from "@macfja/svelte-persistent-store";
import { SupportedCurrencies } from "../types";
import { writable } from "svelte/store";

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