<template>
  <div id="app">
    <el-menu> 
      <el-menu-item index=""><router-link tag="a" to="/">PC端</router-link></el-menu-item> 
      <el-menu-item index=""> <router-link tag="a" to="/mintuiweb">手机端</router-link></el-menu-item> 
    </el-menu>
  
    <router-view></router-view>
   
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
