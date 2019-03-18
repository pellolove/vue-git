<template>
<mu-appbar title="Title">
  <mu-text-field icon="search" class="appbar-search-field"  slot="right" hintText="请输入搜索内容"/>
  <mu-flat-button color="white" label="flat Button" slot="right"/>
</mu-appbar>
</template>

<script>
    //import 'muse-components/styles/base.less' // 加载基础的样式
    
    import Vue from 'vue'
    import appBar from 'muse-components/appBar'
    Vue.component(appBar.name, appBar)
    export default {}
</script>

<style lang="less">
.appbar-search-field{
  color: #FFF;
  margin-bottom: 0;
  &.focus-state {
    color: #FFF;
  }
  .mu-text-field-hint {
    color: fade(#FFF, 54%);
  }
  .mu-text-field-input {
    color: #FFF;
  }
  .mu-text-field-focus-line {
    background-color: #FFF;
  }
}
</style>