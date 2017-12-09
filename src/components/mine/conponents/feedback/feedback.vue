<template>
    <div class="content">
        
        <textarea placeholder="亲,你在使用中遇到什么问题,或者有什么建议,欢迎您提供给我们"></textarea>
            
        <div class="content-block">
            <p><a href="#" class="button button-fill button-success" >提交</a></p>
            <p><a href="#" class="button button-fill button-warning " @click="mine">返回</a></p>
        </div>
    </div>
</template>

<script type="text/javascript">
    import './feedback.scss';
    export default{
        data(){
            return{
              toolbar:'用户反馈'
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