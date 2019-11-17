<template>
    <div>
        <p>价格{{info.price}}</p>
        <p>名称{{info.name}}</p>
        <p>id{{info.id}}</p>
        <p><router-link :to="{name:'details',query:{id:info.id}}">详情页面</router-link></p>
        <!--<p>图片{{}}</p>-->
    </div>
</template>
<script>
    export default {
        name: "Product",
        data(){
            return{}
        },
        props: ["info"]
    }

</script>

<style scoped>

</style>