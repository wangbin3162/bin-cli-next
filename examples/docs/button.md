## Button 按钮

常用的操作按钮。

### 基础用法

使用`type`可以设置不同类型的按钮样式，其中，`dashed`也可以单独设置

可以另外给按钮设置不同的按钮效果，如`plain`简约按钮，`round`圆角按钮，`dashed`虚线按钮和`transparent`透明按钮四种不同种类的按钮

::: demo
```html
<template>
  <div class="demo-button">
    <button @click="buttonClick">{{ buttonTextRef }}</button>
  </div>
</template>
<script>
  import { defineComponent, ref } from 'vue'

  export default defineComponent({
    setup() {
      const buttonTextRef = ref('测试按钮')
      const buttonClick = () => {
        alert('点击按钮了')
      }
      return { buttonTextRef, buttonClick }
    }
  })
</script>
```
:::
