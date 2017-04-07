<template>
  <div id='you'>     
    <h1>sb</h1>
    {{ msg }}
  </div>
</template>

<script>
  export default {
    name: 'you',
    data() {
      return {
        msg: '傻了8鸡的！'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    display: inline-block;
    margin: 0 10px;
  }
  
  a {
    color: #42b983;
  }
</style>
