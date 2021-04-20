# Button

The button is used to start an immediate operation.

## When to use

Tags (or encapsulates) an action command that triggers the corresponding business logic in response to a user click.

## Code demo

### button type

:::demo buttons have five types: default buttons, main buttons, link buttons, ghost buttons, and subtle buttons.

```html
<template>
  <dt-button type="default">
    Default
  </dt-button>
  <dt-button type="primary" @click="handleClick">
    Primary
  </dt-button>
  <dt-button type="link">
    Link
  </dt-button>
  <dt-button type="ghost">
    Ghost
  </dt-button>
  <dt-button type="delicate">
    Delicate
  </dt-button>
</template>

<script>
export default {
  methods: {
    handleClick () {
      alert('hello,world')
    }
  }
}
</script>

```

:::

## API

| options  |                               description                                |  type   | default |
| :------: | :----------------------------------------------------------------------: | :-----: | :-----: |
|   type   | Button type, optional value`default`,`primary`,`link`,`ghost`,`delicate` | String  | default |
| disabled |                              Disabled state                              | Boolean |  false  |
