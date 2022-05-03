<ul class="toast-list" 
class:hidden={hidden}
class:top={position === ToastPosition.topLeft || position === ToastPosition.topRight}
class:bottom={position === ToastPosition.bottomLeft || position === ToastPosition.bottomRight}
class:left={position === ToastPosition.bottomLeft || position === ToastPosition.topLeft}
class:right={position === ToastPosition.bottomRight || position === ToastPosition.topRight}
>
  {#each toasts as t (t.id)}
    <ToastComponent toast={t} position={position} on:toast-clicked on:toast-closed={toastCloseHandler} on:toast-closed></ToastComponent>
  {/each}
</ul>

<script lang="ts">
  import {Toast, ToastPosition} from '../types/toast';
  import ToastComponent from './Toast.svelte';

  export let toasts:Toast[];
  export let position:ToastPosition = ToastPosition.topRight;

  let hidden:boolean = true;

  $: {
    if(toasts.length) hidden = false;
  }

  function toastCloseHandler() {
    hidden = toasts.length?false:true;
  }

</script>

<style>
  .toast-list {
    position: relative;
    display: flex;
    row-gap: 10px;
    margin: 5px 10px;
    flex-direction: column;
  }

  .hidden {
    display: none;
  }

  @media(min-width: 576px) {
    .toast-list {
      position: absolute;
      row-gap: 20px;
      margin: 10px;
    }

    .top {
      top: 0;
      flex-direction: column;
    }

    .bottom {
      bottom: 0;
      flex-direction: column-reverse;
    } 

    .left {
      left: 0;
    }

    .right {
      right: 0;
    }
  }
</style>

