<template>
    <div class="content">
        
    </div>
</template>

<script type="text/javascript">

    export default{
        data(){
            return{
              toolbar:'关于我们'
            }
        },
        mounted:function(){
            this.$parent.initToolbar(this.toolbar);
        }
    }

</script>