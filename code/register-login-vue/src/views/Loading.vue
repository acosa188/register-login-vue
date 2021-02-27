<template>

    <div class="loading-class d-flex justify-content-center align-items-center">
        <b-spinner style="width: 5rem; height: 5rem; color:#f5ede9;"></b-spinner>
    </div>

</template>

<script>
import { BSpinner } from "bootstrap-vue"
    export default {
        components:{
            BSpinner
        }
    }
</script>

<style lang="scss" scoped>
.loading-class{
    height: 100vh;
    width: 100%;
}
</style>