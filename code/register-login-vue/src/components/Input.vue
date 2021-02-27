<template>
    <div class="input-field">
        <input :type="type" :id="`textField${name}`" required @input="handleInput">
        <label :for="`textField${name}`">{{name}}</label>
    </div>
</template>

<script>
    export default {
        props:['name', 'value', 'type'],
        methods:{
            handleInput(e){
                this.$emit('input', e.target.value)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .input-field{
        position: relative;
        width: 100%;
    }

    label{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        color: #f5ede9;
        transition: 0.2s all;
        text-align: left;
        cursor: text;
    }
    
    input{
        width: 100%;
        border: 0;
        outline: 0;
        padding: 0.5rem 0;
        border-bottom: 2px solid rgba(112, 112, 112, 0.25);
        box-shadow: none;
        color: white;
        background-color: transparent;
    }

    input:focus,
    input:valid{
        border-color: #8f4f81;
    }

    input:focus~label,
    input:valid~label {
        font-size: 14px;
        top: -24px;
        color: #8f4f81;
    }
</style>