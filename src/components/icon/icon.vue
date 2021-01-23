<template>
  <i :class="['b-iconfont','b-icon-' + name]" :style="getStyle"></i>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'BIcon',
  props: {
    name: {
      type: String,
      default: '',
    },
    size: [Number, String],
    color: String,
  },
  setup(props) {
    const getStyle = computed(() => {
      let style = {}
      if (props.size) {
        style['font-size'] = `${props.size}px`
      }
      if (props.color) {
        style.color = props.color
      }
      return style
    })
    return { getStyle }
  },
})
</script>

<style scoped>

</style>
