<template>
  <div>
    <h2>Hello, {{name}} !</h2>
  </div>
</template>

<script>
export default {
  name:'Hello',
  props:{
    name:{
      type:String,
      default:'admin UI'
    }
  }
}
</script>
