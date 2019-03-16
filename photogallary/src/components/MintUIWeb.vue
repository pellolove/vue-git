<template>
  <div id='mint-ui-web'>
    <h1 @click="appendSuit()"> mint-ui here! </h1>
    <ul>
      <li v-for=" (pl,key,index) in productList">
       name: {{ pl.name }}
       key: {{ pl.key }}
       index: {{ productList.indexOf(pl)}}
       
      </li>
    </ul>
   <mt-tabbar v-model="selected">
      <mt-tab-item id="外卖">
        <img slot="icon" src="../assets/logo.png">
        外卖
      </mt-tab-item>
      <mt-tab-item id="订单">
        <img slot="icon" src="../assets/logo.png">
        订单
      </mt-tab-item>
      <mt-tab-item id="发现">
        <img slot="icon" src="../assets/logo.png">
        发现
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="../assets/logo.png">
        我的
      </mt-tab-item>
  </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: "mint-ui-web",
  // props: ['fmsg'],//直接使用传值
  //直接使用传值 props 指定验证
  props: {
    // fmsg: Number //必须是字串型
    fmsg: String //必须是字串型
  },
  data() {
    return {
      count:0,
      selected: false,
      productList: [{ name: "内裤" ,key:1}, { name: "衬衣",key:2 }, { name: "西装",key:3 }],
      productA:{ name: "衬衣",key:2 },
      selected: true
    };
  },
  methods: {
    appendSuit(){
      this.productList.push({name:`第${this.count++}件衣服`});
    }
  },
  watch: {
    productList: (newdata, olddata) => {
      console.log(newdata, " -----", olddata);
    }
  },
  computed: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
