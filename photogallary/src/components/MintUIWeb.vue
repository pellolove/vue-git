<template >
  <div id='mint-ui-web'>
    <h1 @click="appendSuit()"> mint-ui here! </h1>
    <ul>
      <!-- <li v-for=" (pl,key,index) in  sortProductList  " v-bind:class="{active: isActive}"> -->
      <li v-if="pl.key !== 3 " v-for=" (pl,key,index) in  sortProductList  " v-bind:class="[ (pl.key % 2===0) ? 'active' : '','normal'] ">
       name: {{ pl.name }}
       key: {{ pl.key }}
       index: {{ productList.indexOf(pl)}}
       
      </li>
    </ul>
    <div >
      the showType is: {{showType}}
    </div>
    <div v-if="showType === 'A'">
      block A
    </div>

    <div v-else-if="showType === 'B'">
      block B
    </div>

    <div v-else-if="showType === 'C'">
      block C
    </div>

    <div v-else>
      block No of (A,B,C)
    </div>
  <div @click="count++" class="mouse-over" >click me {{count}}</div>
  <mt-tabbar v-if="true" v-model="selected">
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
import Vue from "vue";
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
      showType:"B",
      count: 0,
      selected: false,
      show:true,
      productList: [
        { name: "内裤", key: 2 },
        { name: "衬衣", key: 1 },
        { name: "西装", key: 3 },
        { name: "衬1衣", key: 5 },
        { name: "西装", key: 6 },
        { name: "衬衣", key: 13 },
        { name: "西装", key: 3 },
        { name: "衬1衣", key: 7 },
        { name: "西装", key: 4 }
      ],
      productA: { name: "衬衣", key: 2 },
      selected: true,
      isActive:true
    };
  },
  methods: {
    appendSuit() {
      Vue.set(this.productList, 3, { name: "新衣服", key: 4 });
      //当数组超过或者越过正常的数组比如本来长度为3，在这里设置4的对象为一个值没有问题，但如果是直接跳过到5，可能会生成一个empty对像在4的位置，而造成循环渲染出错。
      //  Vue.set(this.productList,4,{name:"新衣服",key:4})
      //  console.log(this.productList)
    }
  },
  watch: {
    // productList: (newdata, olddata) => {
    //   console.log(newdata, " -----", olddata);
    // }
  },
  computed: {
    /**
     * 排序产品列表
     * @rule  'asc' 按key顺序 'desc' 按key倒序
     */
    sortProductList: function(rule = "asc") {
      
       
        this.productList.sort((prev, next) => { 
          return prev.key - next.key;
        });
       
      return this.productList;
    }
  }
  ,created(){
    console.log('created')
    window.uiweb = this;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul,li{
  list-style: none;
  text-align: left;
}
.active{
  background: green ;
  opacity: .6;
  padding:5px 0;
}
.normal{
  font-size: 18px;
  font-family: 'Pingfang'
}
.mouse-over{
  cursor: pointer;
}
</style>
