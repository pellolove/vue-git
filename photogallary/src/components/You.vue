<template>
  <div id='you'>
    {{fmsg}} {{ msg }}
    <div>
      <form action="/">
        <input type="text" v-model='msg'>
        <input type="checkbox" id="jack" value="Jack" v-model="cklist">
        <label for="jack">Jack</label>
        <input type="checkbox" id="Tom" value="Tom" v-model="cklist">
        <label for="Tom">Tom</label>
        <input type="checkbox" id="Lucy" value="Lucy" v-model="cklist">
        <label for="Lucy">Lucy</label>
        <input type="checkbox" id="john" value="John" v-model="cklist">
        <label for="john">John</label>
        <label>Checked :{{cklist}}</label>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'you',
    props: ['fmsg'],
    data() {
      return {
        msg: ' 来自 you 的组件！',
        cklist: []
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
