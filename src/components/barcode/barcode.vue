<template>

    <div class="content">
        <div class="list-block">
            <ul>
                <li>
                    <div class="item-content">
                        <div class="item-inner">
                            <div class="item-title label">商品条码</div>
                            <div class="item-input">
                              <input type="text" v-model="barcode" id="barcode" @keyup="keyup">
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>  
    </div>
</template>

<script type="text/javascript">

    import axios from 'axios';
    import qs from 'qs';
    import jwt from 'jsonwebtoken';
    
    export default{
        data:function(){
            return {
                toolbar:'扫描',
                backrouter:'/home',
                token:'',
                barcode:''
            }
        },
        methods: {
            login:function(){
                this.$router.push({path:'/login'}) 
            },
            keyup:function(e){
                if(e.keyCode==13){
                    console.log(66)
                }
            }
        },
        mounted:function(){
            this.$parent.initToolbar(this.toolbar,this.backrouter);
        },
        beforeCreate:function(){

            var $this=this
            if($.cookie('token')){

            }else{
               this.$router.push({path:'/login'}); 
            } 
        }
    }
    
</script>


