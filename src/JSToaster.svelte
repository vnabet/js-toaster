<div class="jstoaster dark">
  <ul class="toast-list left top">
    <li class="toast danger">
      <div class="header">
        <div class="title">Je fais un essai</div>
        <div class="close"></div>
      </div>
      <div class="message">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, et hic facilis explicabo nam sapiente laudantium delectus, enim praesentium eum debitis, recusandae eveniet animi velit sequi cumque error saepe! Debitis.
      </div>
    </li>
    <li class="toast success">
      <div class="header">
        <div class="title">Je fais un essai</div>
        <div class="close"></div>
      </div>
      <div class="message">
        TOP LEFT 2
      </div>
    </li>
  </ul>
  <ul class="toast-list right top">
    <li class="toast warning">
      <div class="header">
        <div class="title">Je fais un essai</div>
        <div class="close"></div>
      </div>
      <div class="message">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, et hic facilis explicabo nam sapiente laudantium delectus, enim praesentium eum debitis, recusandae eveniet animi velit sequi cumque error saepe! Debitis.
      </div>
  </ul>
  <ul class="toast-list right bottom">
    <li class="toast success">
      <div class="header">
        <div class="title"></div>
        <div class="close"></div>
      </div>
      <div class="message">
        RIGHT BOTTOM
      </div>
    </li>
  </ul>
  <ul class="toast-list left bottom">
    <li class="toast warning">
      <div class="header">
        <div class="title"></div>
        <div class="close"></div>
      </div>
      <div class="message">
        LEFT BOTTOM 1
      </div>
    </li>
    <li class="toast info">
      <div class="header">
        <div class="title">COUCOU</div>
        <div class="close"></div>
      </div>
      <div class="message">
        LEFT BOTTOM 2
      </div>
    </li>
  </ul>
</div>


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

  .jstoaster, .jstoaster * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

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
    justify-content: flex-end;
  }

  .title {
    width: 100%;
    text-align: left;
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
    border-color: var(--jstoaster-light);
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

    .left .title {
      text-align: right;
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