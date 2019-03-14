<template>
    <div>
        <p>
            你好 {{ msg }}
    
        </p>
        <p>
            对像迭代: hello，我是组件里的内容，1
            <ul>
                <li v-for="(value,key,index) in dList" v-bind:key= key>
                    <p>key: {{key}}</p>
                    <p>value: {{value}}</p>
                    <p>index: {{index}}</p>
                </li>
            </ul>
        </p>
    
      
       
    </div>
</template>

<script>
    // import Vue from 'vue'
    // Vue.component('hello-cpm', {
    //     template: `<div>say hello，我是组件里的内容，
    //                 <span>{{fmsg}}</span>
    //             </div>`,
    //     props: ['fmsg']
    // });
    import You from './You'
    import MyRow from './MyRow'
    export default {
        name: 'hi',
        data() {
            return {
                msg: '这是我的Hello vue 程序',
                // fmsg: '我是页面里的内容',
                firstName: 'first name',
                lastName: 'last name',
                time: new Date(),
                total: 0,
                dList: {
                    akey: 'A',
                    bkey: 'B',
                    ckey: 'C'
                }
            }
        },
        methods: {
            incrementTotal() {
    
                this.total += 1
            }
        },
        components: {
            You,
            MyRow
        }
    
    }
</script>

<style scoped>
    p {
        font-size: 2em;
        text-algin: center;
    }
    
    li {}
</style>
