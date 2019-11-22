<template>
  <button
    class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
    @click="onClick"
  >
    Reset
  </button>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator'

@Component
export default class ResetButton extends Vue {
  private initialValue!: string

  @Prop()
  public value!: string

  public created() {
    this.initialValue = this.value
  }

  @Emit()
  public input(value: string) {
    console.log('value=>', value)
  }

  public onClick() {
    this.input(this.initialValue)
  }
}
</script>
