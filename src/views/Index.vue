<template>
    <div id="index">
        <h1>欢迎来到Vue4的世界</h1>
        <router-link to="/login">登录 | </router-link>
        <router-link to="/regist">注册</router-link>
    </div>
</template>
<script>
    export default {
        name: "Index",
        mounted() {
            if (this.$cookies.isKey('username')) {
                let loginuser=this.$cookies.get('username')
                this.$store.commit('setLoginUser',loginuser);
                this.$router.push('/productlist');
            }
        }
    }
</script>
<style scoped>
    *{font-size: 24px}
    #index{width: 100%;height: auto;text-align: center;}
</style>