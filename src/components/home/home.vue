<template>
    <div class="content ">
        <h1>首页</h1>
    </div>
</template>
<script type="text/javascript">
    export default{
        data(){
            return{
              toolbar:'首页'
            }
        },
        methods:{
            
        },
         mounted:function(){
            this.$parent.initToolbar(this.toolbar);
        }


    }

</script>