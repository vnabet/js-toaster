import { writable, Writable } from "svelte/store";

export let toasts:Writable<any[]> = writable([]);