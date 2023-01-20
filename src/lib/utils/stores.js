import { writable } from 'svelte/store';

//TODO: Fix types
// /** @typedef {import('appwrite/types/services/account')} Account */
// /** @type {import('svelte/types/runtime/store').Writable<Account | null>} */
/** @type {import('svelte/types/runtime/store').Writable<any | null>} */
export const user = writable(null);
