<script>
export default {
  props: {
    todo: Object
  }
}
</script>

<template>
  <li>{{ todo.desc }}</li>
</template>