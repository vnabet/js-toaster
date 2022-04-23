<ul class="toast-list" 
class:top={position === ToastPosition.topLeft || position === ToastPosition.topRight}
class:bottom={position === ToastPosition.bottomLeft || position === ToastPosition.bottomRight}
class:left={position === ToastPosition.bottomLeft || position === ToastPosition.topLeft}
class:right={position === ToastPosition.bottomRight || position === ToastPosition.topRight}
>
  {#each toasts as toast (toast.id)}
  <li class="toast"
    class:danger={toast.type === ToastType.danger}
    class:success={toast.type === ToastType.success}
    class:warning={toast.type === ToastType.warning}
    class:info={toast.type === ToastType.info}
  >
    <div class="header">
      <div class="title">{toast.title || ''}</div>
      <div class="close"></div>
    </div>
    <div class="message">
      {toast.message}
    </div>
  </li>
  {/each}
</ul>

<script lang="ts">
import {Toast, ToastPosition, ToastType} from '../types/toast'

export let toasts:Toast[];
export let position:ToastPosition = ToastPosition.topRight;

</script>

<style>
  .toast-list {
    /* position: absolute; */
    position: relative;
    display: flex;
    row-gap: 10px;
    margin: 10px;
    /* ----- */
    flex-direction: column;
  }

  .toast {
    position: relative;
    list-style: none;
    /* width: 250px; */
    width: 100%;
    min-height: 80px;
    overflow: hidden;
    box-shadow: 0 10px 15px rgba(0, 0, 0, .3);
    display: flex;
    /* align-items: center; */
    background: var(--jstoaster-light);
    /* border: 1px solid #ccc; */
    border-width: 1px 1px 6px 1px;
    border-style: solid;
    border-color: var(--jstoaster-grey);
    /* padding: 20px 5px 5px 5px; */
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 14PX;
    font-weight: 400;
    color: var(--jstoaster-dark);
    /* ----- */
    /* border-radius: 5px 5px 0 0; */
    border-radius: 5px;
    flex-direction: column;
  }

  .header {
    position: relative;
    display: flex;
    /* flex-direction: row-reverse;
    justify-content: flex-end; */
    flex-direction: row;
    justify-content: space-between;
  }

  .title {
    /* width: 100%; */
    /* text-align: left; */
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
    width: 20px;
    height: 20px;
    /* position: absolute; */
    top: 2px;
    cursor: pointer;
    /* ----- */
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

  .dark .toast {
    background: var(--jstoaster-dark);
    color: var(--jstoaster-grey);
    border-top-color: var(--jstoaster-light);
    border-left-color: var(--jstoaster-light);
    border-right-color: var(--jstoaster-light);
  }

  .dark .close::before, .dark .close::after {
    background: var(--jstoaster-grey);
  }


  @media(min-width: 576px) {
    .toast-list {
      position: absolute;
      row-gap: 20px;
    }

    .toast {
      width: 250px;
      border: 1px solid var(--jstoaster-grey);
    }

    .toast.danger, .toast.warning, .toast.success, .toast.info {
      border-bottom-color: var(--jstoaster-grey);
    }

    .dark .toast.danger,.dark .toast.warning,.dark .toast.success,.dark .toast.info {
      border-bottom-color: var(--jstoaster-light);
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

    .left .toast {
      /* border-radius: 0 5px 5px 0; */
      border-right-width: 6px;
      border-right-style: solid;
      justify-content: right;
      text-align: right;
      /* padding: 5px 5px 5px 20px; */
    }

    .left .header {
      flex-direction: row-reverse;
    }

    .left .message {
      justify-content: right;
    }

    .left .toast.success {
      border-right-color: var(--jstoaster-success);
    }

    .left .toast.danger {
      border-right-color: var(--jstoaster-danger);
    }

    .left .toast.warning {
      border-right-color: var(--jstoaster-warning);
    }

    .left .toast.info {
      border-right-color: var(--jstoaster-info);
    }

    .left .close {
      left: 2px;
    }

    .right {
      right: 0;
    }

    .right .toast {
      /* border-radius: 5px 0 0 5px; */
      border-left-width: 6px;
      border-left-style: solid;
      justify-content: left;
      text-align: left;
      /* padding: 5px 20px 5px 5px; */
    }

    .right .toast.success {
      border-left-color: var(--jstoaster-success);
    }

    .right .toast.danger {
      border-left-color: var(--jstoaster-danger);
    }

    .right .toast.warning {
      border-left-color: var(--jstoaster-warning);
    }

    .right .toast.info {
      border-left-color: var(--jstoaster-info);
    }

    .right .close {
      right: 2px;
    }
  }
</style>

