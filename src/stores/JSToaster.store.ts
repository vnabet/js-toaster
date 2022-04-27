import { writable, Writable, derived, Readable } from "svelte/store";
import { Toast, ToastPosition } from "../types/toast";

/**
 * Stores
 * * One principal store named `toasts`
 * * Four derived stores from the precedent one for each position
 */

export let toasts:Writable<Toast[]> = writable([]);

export let topLeftToasts:Readable<Toast[]> = derived(toasts, ($toasts) => {
  return $toasts.filter((t:Toast) => t.position === ToastPosition.topLeft)
})

export let topRightToasts:Readable<Toast[]> = derived(toasts, ($toasts) => {
  return $toasts.filter((t:Toast) => t.position === ToastPosition.topRight)
})

export let bottomLeftToasts:Readable<Toast[]> = derived(toasts, ($toasts) => {
  return $toasts.filter((t:Toast) => t.position === ToastPosition.bottomLeft)
})

export let bottomRightToasts:Readable<Toast[]> = derived(toasts, ($toasts) => {
  return $toasts.filter((t:Toast) => t.position === ToastPosition.bottomRight)
})