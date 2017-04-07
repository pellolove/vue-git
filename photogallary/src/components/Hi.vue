<template>
    <div>
        <p>
            你好 {{ msg }}
    
        </p>
        <p>
            对像迭代:
            <ul>
                <li v-for="(value,key,index) in dList">
                    (key){{key}}: (value){{value}}[{{index}}]
                </li>
            </ul>
        </p>
    
        <p>
            这里是hellocpm组件:
            <hello-cpm :fmsg='fmsg'></hello-cpm>
        </p>
    
    </div>
</template>

<script>
    import Vue from 'vue'
    Vue.component('hello-cpm', {
        template: `<div>say hello，我是组件里的内容，
                    <span>{{fmsg}}</span>
                </div>`,
        props: ['fmsg']
    });
    
    export default {
        name: 'sayhello',
        data() {
            return {
                msg: '这是我的Hello vue 程序',
                fmsg: '我是页面里的内容',
                time: new Date(),
                dList: {
                    akey: 'aValue',
                    bkey: 'bValue',
                    ckey: 'cValue'
                }
    
            }
        }
    }
</script>

<style scoped>
    p {
        font-size: 2em;
        text-algin: center;
    }
</style>
