<template>
  <div class="flex justify-center">
    <div class="block">
      <h1 class="mt-8">Nuxt TypeScript</h1>
      <div class="flex mt-8 mb-3">
        <my-button class :greet="greetText" @click="onMyButtonClicked"
          >挨拶する</my-button
        >
        <reset-button v-model="greetText" class="ml-3" initial-value="Hello" />
      </div>
      <p>
        <span class="font-extrabold">Message:</span>
        {{ greetText }}
      </p>
      <p>挨拶した回数: {{ count }} 回</p>
      <p v-if="isRegulars">常連さん！いつもありがとうございます！</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import MyButton from '@/components/MyButton.vue'
import ResetButton from '@/components/ResetButton.vue'

@Component({
  components: {
    MyButton,
    ResetButton
  }
})
export default class Index extends Vue {
  private count: number = 0
  public greetText: string = 'Hello'

  public get isRegulars(): boolean {
    return this.count >= 5
  }

  @Watch('count')
  public countChange() {
    if (this.count === 5) {
      alert('常連になりましたよ！')
    }
  }

  public onMyButtonClicked(count: number) {
    this.count = count
    this.greetText = 'こんにちは！'
  }
}
</script>
