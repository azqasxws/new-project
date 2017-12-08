<template>
    <div class="content">
        
    </div>
</template>
<script type="text/javascript">

    export default{
        data(){
            return{
              toolbar:'优惠券'
            }
        },
        mounted:function(){
            this.$parent.initToolbar(this.toolbar);
        }
    }

</script>