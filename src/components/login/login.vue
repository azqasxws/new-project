<template>
    <div>
        <input type="text" v-model = "username" />
        <input type="password" v-model = "password" />
        <input type="button" @click = "login"/>
    </div>
</template>    
<script type="text/javascript">
    export default{
        data: function(){
            return {
                username:"" ,
                password:""
            }
        },
        methods:{
            login:function(){
                console.log(this);
            }
        }
    }
</script>