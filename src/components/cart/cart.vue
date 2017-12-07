<template>
    <div class="content">
        <h1>购物车</h1>
    </div>
</template>
<script type="text/javascript">
    export default{
        data(){
            return{
              toolbar:'购物车'
            }
        },
        methods:{
            

        },         
        mounted:function(){
            this.$parent.initToolbar(this.toolbar);
        }


    }

</script>