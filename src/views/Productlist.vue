<template>
    <div>
        <Product v-for="(item,index) in showlist" :key="index" :info="item"></Product>
        <Page :total="total" :current="current" :page-size="size" @on-change="change"></Page>
    </div>
</template>
<script>
    import Product from "../components/Product";
    import axios from "axios"
    export default {
        name: "Productlist",
        data(){
            return{
                prod:[],
                size:4,
                current:1,
                showlist:[]
            }
        },
        computed:{
            total(){
                return this.prod.length;
            }
        },
        mounted(){
            axios.post('http://localhost:8080/api/getproductlist').then((res)=>
            {
                this.prod=res.data;
                this.change(1);
            })
        },
        methods:{
          change(val){
              this.showlist=[];
              this.current =val;
              for (var i=0;i<this.size;i++){
                  var index=(val-1)*this.size+i;
                  if (index<this.prod.length){
                      var obj=this.prod[index];
                      this.showlist.push(obj);
                  }
                  else {
                      break;
                  }
              }
          }
        },
        components: {Product}
    }
</script>

<style scoped>

</style>