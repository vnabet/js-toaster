<div class="jstoaster dark">
  <ToastList></ToastList>
</div>

<script lang="ts">

  import ToastList from './ToastList.svelte';
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
    /* background-color: #222; */
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