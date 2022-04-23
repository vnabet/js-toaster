<div class="jstoaster dark">
  <ToastListComponent toasts={$topLeftToasts} position={ToastPosition.topLeft}></ToastListComponent>
  <ToastListComponent toasts={$topRightToasts} position={ToastPosition.topRight}></ToastListComponent>
  <ToastListComponent toasts={$bottomRightToasts} position={ToastPosition.bottomRight}></ToastListComponent>
  <ToastListComponent toasts={$bottomLeftToasts} position={ToastPosition.bottomLeft}></ToastListComponent>
</div>

<script lang="ts">
  import ToastListComponent from './components/ToastList.svelte';
  import {topLeftToasts, topRightToasts, bottomLeftToasts, bottomRightToasts} from './stores/JSToaster.store';
  import { ToastPosition } from './types/toast';
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
    position: absolute;
    width: 100%;
    height: 100%;
    top:0;
    left: 0;
    background-color: transparent;
    z-index: 999999;
  }

  .jstoaster, :global(.jstoaster *) {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
</style>