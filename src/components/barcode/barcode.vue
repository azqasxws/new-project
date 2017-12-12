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
        <spinner v-show="spShow"></spinner>  
    </div>
</template>

<script type="text/javascript">
    import spinner from '../spinner/spinner.vue'
    import axios from 'axios';
    import qs from 'qs';
    import jwt from 'jsonwebtoken';
    
    export default{
        data:function(){
            return {
                toolbar:'扫描',
                backrouter:'/home',
                token:'',
                barcode:'',
                spShow:false
            }
        },
        methods: {
            login:function(){
                this.$router.push({path:'/login'}) 
            },
            keyup:function(e){
                
                if(e.keyCode==13){
                var $this=this
                this.spShow=true
                axios({
                    url: 'http://localhost:777/php/searchgood.php',
                    method: 'post',
                    data: qs.stringify({barcode:this.barcode}),
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }).then(res => {             
                    if(res.data!="fail"){ 
                        this.token=$.cookie('token'); 
                        jwt.verify(this.token,'abc',function(error,result){
                            var username=result.username;
                            axios({
                                url: 'http://localhost:777/php/searchorder.php',
                                method: 'post',
                                data: qs.stringify({username:username}),
                                headers: {
                                'Content-Type': 'application/x-www-form-urlencoded'
                                }
                            }).then(res => {
                                $this.spShow=false;
                                var data = res.data;
                                console.log(data)
                            });                
                         });
                    }else{
                        $this.spShow=false;
                    }
                });                   
                }
            }
        },
        mounted:function(){
            this.$parent.initToolbar(this.toolbar,this.backrouter);
        },
        beforeCreate:function(){

            var $this=this
            if($.cookie('token')){
                $(document).ready(function(){$("#barcode").focus();});
            }else{
               this.$router.push({path:'/login'}); 
            } 
        },
        components: {
            spinner: spinner
        }
    }
    
</script>


