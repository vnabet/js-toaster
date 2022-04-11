<div class="jstoaster">
  <ul class="toast-list left top">
    <li class="toast danger">
      <div class="close"></div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, et hic facilis explicabo nam sapiente laudantium delectus, enim praesentium eum debitis, recusandae eveniet animi velit sequi cumque error saepe! Debitis.
    </li>
    <li class="toast success"><div class="close"></div>LEFT TOP 2</li>
  </ul>
  <ul class="toast-list right top">
    <li class="toast warning">
      <div class="close"></div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus nobis quibusdam impedit neque, necessitatibus possimus nam magnam amet perspiciatis quo blanditiis? Tempore vitae aliquam blanditiis fuga assumenda? Eos, qui cupiditate!</li>
  </ul>
  <ul class="toast-list left bottom">
    <li class="toast warning"><div class="close"></div>LEFT BOTTOM 1</li>
    <li class="toast info"><div class="close"></div>LEFT BOTTOM 2</li>
  </ul>
  <ul class="toast-list right bottom">
    <li class="toast success"><div class="close"></div>RIGHT BOTTOM</li>
  </ul>
</div>


<style>
  :root {
    --danger: #dc3545;
    --success: #198754;
    --warning: #fd7e14;
    --info: #0d6efd;
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

  .jstoaster, .jstoaster * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .toast-list {
    position: absolute;
    display: flex;
    row-gap: 20px;
    margin: 10px;
  }

  .toast {
    position: relative;
    list-style: none;
    width: 250px;
    min-height: 80px;
    overflow: hidden;
    box-shadow: 0 10px 15px rgba(0, 0, 0, .3);
    display: flex;
    align-items: center;
    background: #f6f6f6;
    border: 1px solid #ccc;
    padding: 5px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 14PX;
  }

  .close {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    position: absolute;
    top: 2px;
    cursor: pointer;
  }

  .close::before, .close::after {
    position: absolute;
    content: '';
    width: 3px;
    height: 15px;
    background: #707070;
    border-radius: 2px;
  }

  .close::before {
    transform: rotate(45deg);
  }

  .close::after {
    transform: rotate(-45deg);
  }

  .left {
    left: 0;
  }

  .left .toast {
    border-radius: 0 5px 5px 0;
    border-left-width: 6px;
    border-left-style: solid;
    justify-content: left;
    text-align: left;
    padding-right: 20px;
  }

  .left .toast.success {
    border-left-color: var(--success);
  }

  .left .toast.danger {
    border-left-color: var(--danger);
  }

  .left .toast.warning {
    border-left-color: var(--warning);
  }

  .left .toast.info {
    border-left-color: var(--info);
  }

  .left .close {
    right: 2px;
  }

  .right {
    right: 0;
  }

  .right .toast {
    border-radius: 5px 0 0 5px;
    border-right-width: 6px;
    border-right-style: solid;
    justify-content: right;
    text-align: right;
    padding-left: 20px;
  }

  .right .toast.success {
    border-right-color: var(--success);
  }

  .right .toast.danger {
    border-right-color: var(--danger);
  }

  .right .toast.warning {
    border-right-color: var(--warning);
  }

  .right .toast.info {
    border-right-color: var(--info);
  }

  .right .close {
    left: 2px;
  }

  .top {
    top: 0;
    flex-direction: column;
  }

  .bottom {
    bottom: 0;
    flex-direction: column-reverse;
  }
</style>