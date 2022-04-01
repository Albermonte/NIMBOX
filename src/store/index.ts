import { persist, indexedDBStorage } from "@macfja/svelte-persistent-store"
import type { PersistentStore } from "@macfja/svelte-persistent-store"
import { writable } from "svelte/store"

export const currencySelected: PersistentStore<CurrencySelected> = persist(
    writable("NIM"),
    indexedDBStorage(),
    "currencySelected",
);