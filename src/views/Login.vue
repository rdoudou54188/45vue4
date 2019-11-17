<template>
    <div id="login">
        <h2>欢迎登录</h2>
        <Input prefix="ios-contact" placeholder="用户名" v-model="username" style="width: auto" class="text"/><br>
        <Input prefix="ios-contact" placeholder="密码" style="width: auto"  v-model="password"/><br>
        <Button type="success" long @click="doLogin()" class="button1">登录</Button>
        <br><br>
        <Button type="success" long @click="doClick">注册</Button>
    </div>
</template>
<script>
    import axios from 'axios'
    export default {
        name: "Login",
        data () {
            return {
                username:'',
                password:''
            }
        },
        methods:{
            doClick(){
                this.$router.push('/regist');
            },
            doLogin(){
                axios.post('http://localhost:8080/api/login',{username:this.username,password:this.password})
                    .then((res)=>{
                        if (res.data) {
                            if (this.save) {
                                this.$cookies.set('username',this.username,'7d');
                            }
                            this.$store.commit('setLoginUser',this.username);
                            this.$router.push('/productlist');
                        }
                        else{
                            alert('用户名或密码错误，请重新输入');
                            this.username = '';
                            this.password = '';
                        }
                    })
            }

        }
    }
</script>

<style scoped>
    #login{width:400px;height: 100%;text-align: center; border: 1px solid lightpink;
    margin: 0px auto;}
    .text{margin-bottom: 30px;}
    button{ width: 75%; background-color: pink;  margin-bottom: 30px;}
    .button1{margin-top: 30px;}


</style>