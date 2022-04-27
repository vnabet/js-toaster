<li class="toast" on:click={clickHandler} transition:fly={{x: (toast.position === ToastPosition.topLeft || toast.position === ToastPosition.bottomLeft)?-500:500, duration: 500}}
    style:cursor = {toast.link?'pointer':'default'}

    class:danger={toast.type === ToastType.danger}
    class:success={toast.type === ToastType.success}
    class:warning={toast.type === ToastType.warning}
    class:info={toast.type === ToastType.info}

    class:left={position === ToastPosition.topLeft || position === ToastPosition.bottomLeft}
    class:right={position === ToastPosition.topRight || position === ToastPosition.bottomRight}

    class:dark={toast.dark}
>
  <div class="header">
    <div class="title">{toast.title || ''}</div>
    <div class="close" on:click|capture|stopPropagation={closeHandler}></div>
  </div>
  <div class="message">
    {toast.message}
  </div>
</li>

<script lang="ts">
  import {Toast, ToastPosition, ToastType} from '../types/toast';
  import {jsToasterService} from '../services/JSToaster.service';
  import {fly} from 'svelte/transition';
  export let toast:Toast;
  export let position:ToastPosition = ToastPosition.topRight;

  /**
   * Close the toast
   */
  function closeHandler() {
    if(toast) {
      jsToasterService.closeToast(toast);
    }
  }

  /**
   * Redirection if the toast has a link
   */
  function clickHandler() {
    if(toast && toast.link) document.location.href = toast.link;
  }
</script>

<style>
  .toast {
    position: relative;
    list-style: none;
    width: 100%;
    min-height: 80px;
    overflow: hidden;
    box-shadow: 0 10px 15px rgba(0, 0, 0, .3);
    display: flex;
    background: var(--jstoaster-light);
    border-width: 1px 1px 8px 1px;
    border-style: solid;
    border-color: var(--jstoaster-grey);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 14PX;
    font-weight: 400;
    color: var(--jstoaster-dark);
    border-radius: 5px;
    flex-direction: column;
  }

  .header {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .title {
    padding: 5px;
    font-weight: 600;
    font-size: 15px;
  }

  .message {
    display: flex;
    align-items: center;
    justify-content: left;
    padding: 5px;
  }

  .close {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 20px;
    height: 20px;
    top: 2px;
    cursor: pointer;
    right: 2px;
    opacity: .7;
  }

  .close::before, .close::after {
    position: absolute;
    content: '';
    width: 3px;
    height: 15px;
    background: var(--jstoaster-dark);
    border-radius: 2px;
  }

  .close::before {
    transform: rotate(45deg);
  }

  .close::after {
    transform: rotate(-45deg);
  }

  .toast.success {
    border-bottom-color: var(--jstoaster-success);
  }

  .toast.danger {
    border-bottom-color: var(--jstoaster-danger);
  }

  .toast.warning {
    border-bottom-color: var(--jstoaster-warning);
  }

  .toast.info {
    border-bottom-color: var(--jstoaster-info);
  }

  .dark.toast {
    background: var(--jstoaster-dark);
    color: var(--jstoaster-grey);
    /* border-top-color: var(--jstoaster-light);
    border-left-color: var(--jstoaster-light);
    border-right-color: var(--jstoaster-light); */
  }

  .dark .close::before, .dark .close::after {
    background: var(--jstoaster-grey);
  }

  @media(min-width: 576px) {
    .toast {
      width: 300px;
      border: 1px solid var(--jstoaster-grey);
    }

    .toast.danger, .toast.warning, .toast.success, .toast.info {
      border-bottom-color: var(--jstoaster-grey);
    }

    /* .dark.toast.danger,.dark.toast.warning,.dark.toast.success,.dark.toast.info {
      border-bottom-color: var(--jstoaster-light);
    } */

    .left.toast {
      border-right-width: 8px;
      border-right-style: solid;
      justify-content: right;
      text-align: right;
    }

    .left .header {
      flex-direction: row-reverse;
    }

    .left .message {
      justify-content: right;
    }

    .left.toast.success {
      border-right-color: var(--jstoaster-success);
    }

    .left.toast.danger {
      border-right-color: var(--jstoaster-danger);
    }

    .left.toast.warning {
      border-right-color: var(--jstoaster-warning);
    }

    .left.toast.info {
      border-right-color: var(--jstoaster-info);
    }

    .left .close {
      left: 2px;
    }

    .right.toast {
      border-left-width: 8px;
      border-left-style: solid;
      justify-content: left;
      text-align: left;
    }

    .right.toast.success {
      border-left-color: var(--jstoaster-success);
    }

    .right.toast.danger {
      border-left-color: var(--jstoaster-danger);
    }

    .right.toast.warning {
      border-left-color: var(--jstoaster-warning);
    }

    .right.toast.info {
      border-left-color: var(--jstoaster-info);
    }

    .right .close {
      right: 2px;
    }
  }
</style>