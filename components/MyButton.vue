<template>
  <div>
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      @click="onClick"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator'

@Component
export default class MyButton extends Vue {
  private count: number = 0

  @Prop()
  public greet?: string

  @Emit()
  public click(count: number) {
    console.log('count=>', count)
  }

  public onClick() {
    alert(this.greet)
    this.count++
    this.click(this.count)
  }
}
</script>

<style>
button:focus {
  outline: none;
}
</style>
