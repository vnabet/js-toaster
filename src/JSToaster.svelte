<div class="jstoaster dark">
  <ToastList toasts={$topLeftToasts} position={ToastPosition.topLeft}></ToastList>
  <ToastList toasts={$topRightToasts} position={ToastPosition.topRight}></ToastList>
  <ToastList toasts={$bottomRightToasts} position={ToastPosition.bottomRight}></ToastList>
  <ToastList toasts={$bottomLeftToasts} position={ToastPosition.bottomLeft}></ToastList>
</div>

<script lang="ts">
  import ToastList from './components/ToastList.svelte';
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