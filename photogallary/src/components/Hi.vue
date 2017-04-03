<template>
    <div> 
        <p>
            你好 {{ msg }}
            <h1> {{ time + '时间'}}</h1>
        </p>
    </div>
</template>

<script>
    export default {
        name: 'sayhello',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
                time: new Date()
    
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
