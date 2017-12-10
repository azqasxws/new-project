<template>
    <div class="content">
        
    </div>
</template>
<script type="text/javascript">
    import axios from 'axios';
    import qs from 'qs';
    import jwt from 'jsonwebtoken';
    
    export default{
        data:function(){
            return {toolbar:null,
            token:''}
        },
        methods: {
        login:function(){
              this.$router.push({path:'/login'}) 
        }
        },
        beforeCreate:function(){    
            if($.cookie('token')){
               this.token=$.cookie('token'); console.log(this.token);
               // jwt.verify(this.token,'abc'function(err,decode){
               //  console.log(decode);
               // })
                
                    axios({
                        url: 'http://localhost:777/php/login.php',
                        method: 'post',
                        data: qs.stringify({username: this.token}),
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        }
                    }).then(res => {
                        
                    });
               
            }else{
                this.login();
            }
                
        }

    }
</script>