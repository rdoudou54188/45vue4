<template>
    <div class="details">
        <p>描述{{prod.desc}}</p>
    </div>
</template>

<script>
    export default {
        name: "details",
        data(){
            return{
                prod:null,
            }
        },
        created() {
            var id=this.$route.query.id;
            this.prod=this.getProdById(id);
        },
        methods:{
            getProdById(id){
                console.log(this.$store.state.prodlist);
                var prod=this.$store.state.prodlist.find((obj)=>{
                    return(obj.id==id);
                });
                return prod;
            }
        }
    }
</script>
<style scoped>

</style>