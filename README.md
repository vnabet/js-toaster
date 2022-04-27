# js-toaster

Agnostic notifications javascript module

![](./screenshot.jpg)

- [Demonstration on jsfiddle site](https://jsfiddle.net/vnabet/owvh2c84/46/show)

## Installation

```js
npm i js-toaster
```

## Usage

### Imports

With a bundler like webpack:
```js
import 'js-toaster/jsToaster.css'
import { jsToaster } from 'js-toaster';
```

You can import sources too from [unpkg.com](https://unpkg.com/browse/js-toaster/):
```html
<link rel="stylesheet" href="https://unpkg.com/js-toaster@0.6.0/jsToaster.css">
<script type="module">
  import { jsToaster } from 'https://unpkg.com/js-toaster@0.6.0/jsToaster.min.js';

  ...
</script>
```

### Configuration

You can override default toaster configuration
```js
jsToaster.conf = {
  displayTime: 20, //DEFAULT 20 - seconds
  dark: true | false, //DEFAULT false - Toast dark mode
  position: 'topLeft' | 'topRight' | 'bottomRight' | 'bottomLeft', //DEFAULT 'topRight'
  type: 'info' | 'success' | 'warning' | 'danger' //DEFAULT 'info' - Define the color of the toast
};
```
**note**: all properties are optional.

### Send Notification

You can just send a notification with a text (the toast will be sent with the default or override configuration)...
```js
jsToaster.toast('My notification text');
```

...or passing as a parameter a complete toast object
```js
jsToaster.toast({
  message: 'My notification text',
  title: 'My notification title',
  link: 'link, if I click the toast',
  displayTime: 20, //seconds
  dark: true | false, //Toast dark mode
  position: 'topLeft' | 'topRight' | 'bottomRight' | 'bottomLeft',
  type: 'info' | 'success' | 'warning' | 'danger' //Define the color of the toast
});
```
**Important note**: Only the `message` is required. The `title` and `link` can be empty. Other properties are optional and take as value those of the configuration.
