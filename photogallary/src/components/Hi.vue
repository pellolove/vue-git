<template>
    <div>
        <p>
            你好 {{ msg }}
    
        </p>
        <p>
            对像迭代:
            <ul>
                <li v-for="(value,key,index) in dList">
                    key_{{key}}: value_{{value}}--index_{{index}}
                </li>
            </ul>
        </p>
    
        <p>
            <you :fmsg="firstName"></you>
            <you :fmsg="lastName"></you>
    
        </p>
        <p>
            <table>
                <tr is='my-row' father-info='1'></tr>
                <tr is='my-row' father-info='2'></tr>
                <tr is='my-row' father-info='3'></tr>
                <tr is='my-row' father-info='4'></tr>
                <tr is='my-row' father-info='5'></tr>
            </table>
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
        name: 'sayhello',
        data() {
            return {
                msg: '这是我的Hello vue 程序',
                // fmsg: '我是页面里的内容',
                firstName: 'first name',
                lastName: 'last name',
                time: new Date(),
                dList: {
                    akey: 'aValue',
                    bkey: 'bValue',
                    ckey: 'cValue'
                }
    
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
