<template>
    <tr v-bind:rownumber='rowNumber'>
        <td> {{fatherInfo}}
            <button v-on:click="increment">{{rowNumber}}</button>
            <slot name='top'></slot>
            <slot> from my row-vue</slot>
        </td>
    </tr>
</template>

<script>
    export default {
        name: 'my-row',
        props: ['fatherInfo'], //注意此处的变量使用驼峰式变量传递， 
        //在html调用属性里则使用father-info 比如 <my-row father-info='hello'></my-row>
        data() {
            return {
                rowNumber: 0
            }
        },
        methods: {
            increment() {
                this.rowNumber++;
                this.$emit('increment');
            }
        }
    
    }
</script>

<style>
    
</style>