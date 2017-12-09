<template>
    <div class="content">
        <div class="content-block">
            <p><a href="#" class="button button-fill button-warning " @click="mine">返回</a></p>
        </div>
    </div>
</template>
<script type="text/javascript">

    export default{
        data(){
            return{
              toolbar:'优惠券'
            }
        },
        methods:{
            mine : function(){
                  this.$router.push({path:'/mine'}) 
            }
        },
        mounted:function(){
            this.$parent.initToolbar(this.toolbar);
        }
    }

</script>