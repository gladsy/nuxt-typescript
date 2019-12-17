<template>
  <div></div>
</template>

<script lang="ts">
// import { Component } from 'vue-property-decorator'

// @Component
export default class TodoComponent extends Vue {
  @TodoModule.State('todos')
  privete todos!:Todo[]
}
</script>
