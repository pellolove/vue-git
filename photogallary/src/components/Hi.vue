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
    </div>
</template>

<script>
    export default {
        name: 'sayhello',
        data() {
            return {
                msg: '这是我的Hello vue 程序',
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
