import { writable, Writable } from "svelte/store";
import type { Toast } from "src/types/toast";

export let toasts:Writable<Toast[]> = writable([]);