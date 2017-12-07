<template>
    <div class="content">
      <div class="list-block">
        <span class="icon icon-cart"></span>
        <p></p>
        <p><a href="#" class="button button-fill button-danger ">去购物 </a></p>
      </div>
    </div>
    
</template>
<script type="text/javascript">
  import "./cart.scss";
    export default{
        data(){
            return{
              toolbar:'购物车'
            }
        },
        methods:{
            

        },
        mounted:function(){
            this.$parent.initToolbar(this.toolbar)
        }
    }

</script>
