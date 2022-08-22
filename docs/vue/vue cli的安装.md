# vue cli 的安装

通过下面的命令可以安装`vue-cli`。

```bash
npm i -g @vue/cli
```

实例：

::: demo
```HTML
<template>
  <ul>
    <li v-for="(item, index) in list" :key="index">{{item}}</li>
  </ul>
</template>

<script>
  export default {
    data() {
      return {
        list: [
          '测试1',
          '测试2'
        ]
      }
    }
  }
</script>
```
:::