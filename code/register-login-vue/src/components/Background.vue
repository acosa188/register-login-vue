<template>
    <div class="background-vue">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .background-vue{
        height: 100vh;
        width: 100vw;
        background-image: url('../assets/background-mobile.jpg');
        background-size: cover;
        background-position: center;
    }
</style>