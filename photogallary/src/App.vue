<template>
  <div id="app">
    <el-breadcrumb separator="/" class="no-print"> 
      <el-breadcrumb-item :to="{path:'/'}"> PC端 </el-breadcrumb-item> 
      <el-breadcrumb-item :to="{path:'/mintuiweb'}">手机MintUI</el-breadcrumb-item>
      <el-breadcrumb-item :to="{path:'/profile'}">个人简历</el-breadcrumb-item>
    </el-breadcrumb>
  
    <router-view></router-view>
   
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
   return {
     name:"app"
   } 
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
  margin-top: 60px;
}
@media print {
  .no-print {
    display: none;
  }
}
</style>
