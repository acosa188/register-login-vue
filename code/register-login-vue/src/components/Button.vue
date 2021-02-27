<template>
    <button type="submit" class="buttonClass d-flex justify-content-center align-items-center">
        <slot></slot>
    </button>
</template>

<style lang="scss" scoped>
    .buttonClass{
        height: 71px;
        width: 71px;
        border-radius: 50%;
        background-color: #8F4F81;
        border-color: transparent;
    }
</style>