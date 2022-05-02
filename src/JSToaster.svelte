<div class="jstoaster" 
  class:bottom={conf.mobilePosition === ToastMobilePosition.bottom} 
  style="--jstoaster-margin-top: {marginTop}; --jstoaster-margin-bottom: {marginBottom}; --jstoaster-mob-margin-top: {mobileMarginTop}; --jstoaster-mob-margin-bottom: {mobileMarginBottom}">
  <ToastListComponent toasts={$topLeftToasts} position={ToastPosition.topLeft} on:toast-clicked on:toast-closed></ToastListComponent>
  <ToastListComponent toasts={$topRightToasts} position={ToastPosition.topRight} on:toast-clicked on:toast-closed></ToastListComponent>
  <ToastListComponent toasts={$bottomRightToasts} position={ToastPosition.bottomRight} on:toast-clicked on:toast-closed></ToastListComponent>
  <ToastListComponent toasts={$bottomLeftToasts} position={ToastPosition.bottomLeft} on:toast-clicked on:toast-closed></ToastListComponent>
</div>

<script lang="ts">
  import ToastListComponent from './components/ToastList.svelte';
  import {topLeftToasts, topRightToasts, bottomLeftToasts, bottomRightToasts} from './stores/JSToaster.store';
  import { ToasterConf, ToastMobilePosition, ToastPosition } from './types/toast';
  import { defaultToastConf } from './defaultToastConf';

  export let conf:ToasterConf = defaultToastConf;

  let marginTop:string;
  let marginBottom:string;  
  let mobileMarginTop:string;
  let mobileMarginBottom:string;

  $: {
    marginTop = `${conf.marginTop}px`;
    marginBottom = `${conf.marginBottom}px`;
    if(conf.mobilePosition === ToastMobilePosition.top) {
      mobileMarginTop = `${(conf.mobileMargin >= 0)?conf.mobileMargin:conf.marginTop}px`;
      mobileMarginBottom = '0px';
    } else {
      mobileMarginBottom = `${(conf.mobileMargin >= 0)?conf.mobileMargin:conf.marginBottom}px`;
      mobileMarginTop = '0px'
    }
  }
</script>

<style>
  :root {
    --jstoaster-danger: #dc3545;
    --jstoaster-success: #198754;
    --jstoaster-warning: #fd7e14;
    --jstoaster-info: #0d6efd;
    --jstoaster-light: #f6f6f6;
    --jstoaster-dark: #222;
    --jstoaster-grey: #ccc;
  }

  :global(body) {
    min-height: 100vh;
  }
  .jstoaster {
    box-sizing: border-box;
    overflow: hidden;
    position: fixed;
    width: 100%;
    height: calc(100% - var(--jstoaster-mob-margin-top) - var(--jstoaster-mob-margin-bottom));
    top:0;
    left: 0;
    background-color: transparent;
    z-index: 999999;
    margin: var(--jstoaster-mob-margin-top) 0 var(--jstoaster-mob-margin-bottom) 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .jstoaster.bottom {
    justify-content: flex-end;
  }

  :global(.jstoaster *) {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  @media(min-width: 576px) {
    .jstoaster {
      height: calc(100% - var(--jstoaster-margin-top) - var(--jstoaster-margin-bottom));
      margin: var(--jstoaster-margin-top) 0 var(--jstoaster-margin-bottom) 0;
    }
  }
</style>